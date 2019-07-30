module.exports = {
    // 选项...
    devServer: {
        host: '0.0.0.0',
        open: true,
        // compress: true,
        port: 9000,
        proxy: 'http://20q12h9711.iok.la',
        public: 'dev.iok.la:9000'
    },
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}