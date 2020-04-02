
const { name } = require('./package.json')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
     //publicPath: process.env.NODE_ENV === 'production' ? `/fpi_dev/vue-project/vue-mutil-page/vue-pages/dist/` : '/',
    publicPath: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
    chainWebpack: config => {
        config.resolve.alias
            .set('@lib', resolve('src/lib'))
            .set('@assets', resolve('src/assets'))
            .set('@mixins', resolve('src/mixins'))
            .set('@components', resolve('src/components'))
            .set('@config', resolve('src/config'))
            .set('@layouts', resolve('src/layouts'))
            .set('@pages', resolve('src/pages'))
            .set('@service', resolve('src/service'))
            .set('@utils', resolve('src/utils')) //alias config
  },
  productionSourceMap: false,
  configureWebpack: {
    // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并

  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/pages/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    page1: {
      entry: 'src/pages/page1/main.js',
      template: 'public/page1.html',
      filename: 'page1.html',
    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'public/page2.html',
      filename: 'page2.html',
    }
  }
}

