// 檔案與依賴
var setting = shimdeps({
    'jquery': ['bower_components/jquery/dist/jquery.min', 
        false
    ],
    'jquery-ui': ['bower_components/jquery-ui/jquery-ui.min', [
        'jquery', 'css!bower_components/jquery-ui/themes/base/jquery-ui.min'
    ]],
    'vmodel': ['bower_components/vmodel.js/src/jquery.vmodel.min', [
        'jquery'
    ]],
    'vpage': ['bower_components/vpage.js/src/jquery.vpage.min', [
        'jquery'
    ]],
    'transit': ['bower_components/jquery.transit/jquery.transit', [
        'jquery'
    ]],
    'mousewheel': ['bower_components/jquery-mousewheel/jquery.mousewheel.min', [
        'jquery'
    ]],
    'diff_screen': ['appscript/min/controller/global/md/diff_screen', [
        'vmodel'
    ]],
    'frame': ['appscript/min/controller/global/md/frame', [
        'diff_screen'
    ]],
    'mobile': ['appscript/min/controller/global/md/when_mobile', [
        'vmodel'
    ]],
    'pad': ['appscript/min/controller/global/md/when_pad', [
        'vmodel'
    ]],
    'desktop': ['appscript/min/controller/global/md/when_desktop', [
        'vmodel'
    ]],
});

// 避免緩存
setting.urlArgs = "bust=" +  (new Date()).getTime()

// CSS 載入
setting.map = {
    '*': {
        'css': 'bower_components/require-css/css.js' 
    }
}
console.log(setting);

//進行設定
requirejs.config(setting);