const path = require("path");

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    // 添加新的svg-sprite-loader处理svgIcon
    config.module
      .rule("svgIcon")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader") // 一定要添加use
      .loader("svg-sprite-loader")
      .tap(options => {
        options = {
          symbolId: "icon-[name]"
        };
        return options;
      });

    // 原有的svg图像处理loader添加exclude
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();

    // config.resolve.alias
    //   .set("@", resolve("src"))
    //   .set("_c", resolve("src/components"));

    // const oneOfsMap = config.module.rule("scss").oneOfs.store;
    // oneOfsMap.forEach(item => {
    //   item
    //     .use("sass-resources-loader")
    //     .loader("sass-resources-loader")
    //     .options({
    //       // Provide path to the file with resources（这里是你.scss文件所在路径）
    //       resources: "../src/styles/mixin.scss"
    //       // resources: ["../src/styles/mixin.scss"]
    //     })
    //     .end();
    // });
  },

  // 打包不生成 .map 文件
  productionSourceMap: false,

  devServer: {
    // proxy: 'http://192.168.1.107:8080/'
  },

  publicPath: "./",
  outputDir: "datacenter",
  assetsDir: "static",
  runtimeCompiler: undefined,
  parallel: undefined,
  // css: undefined
  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用css分离插件
    extract: false,
    // 开启 CSS source maps，一般不建议开启
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      sass: {
        //设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
        data: `
  			$baseUrl: "/";
  			@import '@/styles/mixin.scss';
  			`
        //data: `
        //$baseUrl: "/";
        //`
      }
    }
  }
};
