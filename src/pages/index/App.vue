<template lang="pug">
#root-view
    #root-header( :class="{absolute: /^\\/map/.test($route.path)}")
        header.fz-18(style="display:-webkit-box;display:-ms-flexbox;display:flex;align-items:center;justify-content: space-between;")
            .logoBox
                router-link.blue.fz-0(to="/")
                    img.logoText(src="'@assets/header/'+logo")
            el-menu(:default-active="$route.path" mode="horizontal" :router="true" class="first-menu")
                template(v-for="menu in menusApp" v-if="!menu.hidden")
                    el-submenu(v-if="menu.hideSubs!==true && menu.subs" :index="context + menu.key" :class="{'has-group': menu.hasGroup === true}")
                        template(slot="title")
                            i.zmdi.menuIcon(:class="'zmdi-' + menu.icon")
                            | {{menu.label}}
                        template(v-for="sub in menu.subs")
                            template(v-if="!sub.hidden")
                                el-menu-item-group(v-if="sub.subs")
                                    template(slot="title") {{sub.label}}
                                    el-menu-item(v-for="s in sub.subs" :index="context + menu.key + '/' + sub.key + '/' + s.key" :key="menu.key + '-' + sub.key + '-' + s.key" v-if="s.hidden !== true") {{s.label}}
                                el-menu-item(v-else :index="context + menu.key + '/' + sub.key")
                                    span(:class="getActiveClass(menu.key + '/' + sub.key)") {{sub.label}}
                    el-menu-item(v-else :index="context + menu.key")
                        template(slot="title")
                            i.zmdi.menuIcon(:class="'zmdi-' + menu.icon")
                            | {{menu.label}}
            .up-right &nbsp;
    router-view#root-main
</template>
<script>
//import IMenu from '@/components/common/IMenu'
export default {
    name: 'root',

    components: {
      
    },
    mixins:[],
    data() {
        return {
            menusApp: [{
              key: 'about',
              label: 'about',
              icon: 'view-list-alt'
            }, {
              key: 'home',
              label: 'home',
              icon: 'puzzle-piece',
            }, {
              key: 'page1',
              label: 'page1',
              icon: 'puzzle-piece',
              beforeEnter() {
                self.location.href = "/page1.html"
              }
            }, {
              key: 'page2',
              label: 'page2',
              icon: 'puzzle-piece',
              beforeEnter() {
                self.location.href = "/page2.html"
              }
            },
            {
              key: '*',
              vue: 'NotFound',
              hidden: true
            }
            ],// 所有菜单
        }
    },
    methods: {
        userAction(key) {
            switch (key) {
                case 'logout':
                    window.location.href = ''
                break
                default:
                break
            }
        },
        // 回到主页
        toHome(){
            this.$router.push({path:'/advance/projectCenter'})
            this.$store.dispatch('menusUrl', "/advance/projectCenter")
        },
        
        // 登出
        async loginOut(){
            //let response = await this.$http.loginOut({},false,{baseURL:onfig.casURL + '/logout',loading:false})
            localStorage.removeItem('token')
        }
    },
    computed: {
        context() {
                return '/'
            },
    },
    created() {
      
    },
    mounted() {
      
    }

}
</script>
<style lang="stylus">
@import "./styles/app.styl"
@import "./styles/fpi.styl"
#root-view
    overflow: hidden;
    .el-menu--horizontal
        .el-menu.el-menu--popup.el-menu--popup-bottom-start
            box-shadow 0 2px 4px 0 rgba(0,0,0,0.12), 0 0 6px 0 rgba(0,0,0,0.04)
            border 1px solid #D3DCE6
    .el-menu--horizontal .has-group.el-submenu.el-resetuiroot-submenu
        .el-menu
            display inline-block
            .el-reset-menu-inner
                display flex
    #root-header
        .is-opened
            .el-icon-caret-bottom
                transform rotate(180deg)
</style>
