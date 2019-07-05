module.exports = {
    devServer:{
        open:true,
        disableHostCheck:true,
        hotOnly:true,
        // proxy:'http://47.89.25.90:8080'
        proxy:{
            '/api':{
                target:'http://47.89.25.90:8080',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}