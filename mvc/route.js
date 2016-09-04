var parseURL = require('url').parse;
var querystring = require('querystring');

var routes = {get:[], post:[], head:[], put:[], delete:[]};

/**
 * route.map({
 *     method:'post',
 *     url: /\/main\/?$/i,
 *     controller: 'main',
 *     action: 'index'
 * })
 */
exports.map = function(dict){
    if(dict && dict.url && dict.controller){
        var method = dict.method ? dict.method.toLowerCase() : 'get';
        routes[method].push({
            u: dict.url, //url匹配正则
            c: dict.controller,
            a: dict.action || 'index'
        });
    }
};

exports.getActionInfo = function(url, method){
    var r = {controller:null, action:null, args:null},
        method = method ? method.toLowerCase() : 'get',
        // url: /blog/index?page=1 ,则pathname为: /blog/index
        parsed_url = parseURL(url);
    var pathname = parsed_url.pathname;
    var m_routes = routes[method];
    for(var i in m_routes){
        //正则匹配
        if(m_routes[i].u.exec(pathname)){
            r.controller = m_routes[i].c;
            r.action = m_routes[i].a;
            r.args = querystring.parse(parsed_url.query);
            break;
        }
    }
    // {controller:'main', action:'index', args:{name:'Tom'}}
    return r;
};