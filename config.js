
var route = require('./mvc/route');

route.map({
    method:'get',
    url: /^\/$/i,
    controller: 'main',
    action: 'index'
});

route.map({
    method:'get',
    url: /^\/echo\/?$/i,
    controller: 'main',
    action: 'echo'
});

route.map({
    method:'get',
    url: /^\/sub\/?$/i,
    controller: 'main',
    action: 'sub'
});

exports.staticFileDir = 'static';
