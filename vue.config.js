// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    publicPath: process.env.publicPath, //process.env.NODE_ENV === 'production' ? '/bachelor/' : '/',
    outputDir: process.env.outputDir, //"bachelor",
    productionSourceMap: false,
    transpileDependencies: true,
    //configureWebpack: {
    // plugins: [
    //     new BundleAnalyzerPlugin(),
    //   ]
    // }
})
