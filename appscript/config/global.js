// requirejs 檔案與依賴設定
var shimdeps = function (obj){
    var oo      = {}
    oo.paths    = {}
    oo.shim     = {}
    for  (var mname in obj) {
        var script_path = obj[mname][0];
        var deps_ary    = obj[mname][1];
        oo.paths[mname] = script_path;
        if (deps_ary) {
            oo.shim[mname]  = {deps: deps_ary};
        }
    }     

    return oo; 
}

// 檔案與依賴
var setting = shimdeps({
    'jquery': ['bower_components/jquery/dist/jquery.min', 
        false
    ],
    'vmodel': ['bower_components/vmodel/src/jquery.vmodel.min', [
        'jquery'
    ]],
    'transit': ['bower_components/jquery.transit/jquery.transit', [
        'jquery'
    ]],
    'mousewheel': ['bower_components/jquery-mousewheel/jquery.mousewheel.min', [
        'jquery'
    ]],
    'diff_screen': ['appscript/controller/global/md/diff_screen', [
        'vmodel'
    ]],
    'frame': ['appscript/controller/global/md/frame', [
        'diff_screen'
    ]],
    'mobile': ['appscript/controller/global/md/when_mobile', [
        'vmodel'
    ]],
    'pad': ['appscript/controller/global/md/when_pad', [
        'vmodel'
    ]],
    'desktop': ['appscript/controller/global/md/when_desktop', [
        'vmodel'
    ]],
});

// 避免緩存
setting.urlArgs = "bust=" +  (new Date()).getTime()

//進行設定
requirejs.config(setting);