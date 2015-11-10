// 檔案與依賴
var setting = shimdeps({
    'welcome': ['appscript/controller/main/md/welcome', [
        'vmodel'
    ]]
});

// 避免緩存
setting.urlArgs = "bust=" +  (new Date()).getTime()

//進行設定
requirejs.config(setting);