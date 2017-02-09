var webpack=require("webpack");
var glob = require('glob');

var srcDirName = './public/src/*.js'; //入口文件夹路径
var entryNames = {};

glob.sync(srcDirName).forEach(function (name) {
    //n 获取文件名字
    var n = name.slice(name.lastIndexOf('/'), name.length - 3).split("/")[1];
    entryNames[n] = name;
});

module.exports =
{
    entry: entryNames,  //动态打包入口
    output: {
        path: __dirname+'/public/pages',  //输出文件夹
        //publicPath: '/build/',
        filename:'[name].js'   //最终打包生成的文件名(只是文件名，不带路径的哦)
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: ['.vue', '.js', '.jsx', '.json']
    },
    // 此处的意义是找到node_modules/vue/dist/vue.js
    externals: {

    },
    performance: {
        hints: false
    },
    module:{
        loaders:[
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.less$/, loader: 'style!css!less'},
            {test:/\.js$/, loader:"babel-loader", query:{compact:true}},
            {
                test:/\.vue$/, 
                loader:"vue-loader",
                options: {
                    loaders: {
                        'less': 'style!css!less'
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]?[hash]'
                }
              }
            //这里肯定要加入n个loader 譬如vue-loader、babel-loader、css-loader等等
        ]
    }
}