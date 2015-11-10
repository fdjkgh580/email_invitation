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
    'diff_screen': ['appscript-min/controller/global/md/diff_screen', [
        'vmodel'
    ]],
    'frame': ['appscript-min/controller/global/md/frame', [
        'diff_screen'
    ]],
    'mobile': ['appscript-min/controller/global/md/when_mobile', [
        'vmodel'
    ]],
    'pad': ['appscript-min/controller/global/md/when_pad', [
        'vmodel'
    ]],
    'desktop': ['appscript-min/controller/global/md/when_desktop', [
        'vmodel'
    ]],
});

// 避免緩存
setting.urlArgs = "bust=" +  (new Date()).getTime()

//進行設定
requirejs.config(setting);