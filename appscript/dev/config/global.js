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
    'diff_screen': ['appscript/controller/global/md/diff_screen.min', [
        'vmodel'
    ]],
    'frame': ['appscript/controller/global/md/frame.min', [
        'diff_screen'
    ]],
    'mobile': ['appscript/controller/global/md/when_mobile.min', [
        'vmodel'
    ]],
    'pad': ['appscript/controller/global/md/when_pad.min', [
        'vmodel'
    ]],
    'desktop': ['appscript/controller/global/md/when_desktop.min', [
        'vmodel'
    ]],
});

// 避免緩存
setting.urlArgs = "bust=" +  (new Date()).getTime()

//進行設定
requirejs.config(setting);