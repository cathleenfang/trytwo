'use strict';

var path = require('path');

function getPath(jsPath) {
    return path.join(__dirname, jsPath);
}

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        'layout/layout': [
                getPath('dev/js/lib/jquery/jquery.js'),
            ],
        'index/index' : getPath('dev/js/index/index')
    },
    //入口文件输出配置
    output: {
        path: getPath('dist/js/'),
        filename: '[name].js'
    }
};