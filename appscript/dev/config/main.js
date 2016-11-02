// 檔案與依賴
var setting_page = {
    'welcome': [path_appscript + 'controller/main/md/welcome', [
        'vmodel'
    ]]
};



//進行設定
var setting     = shimdeps(Object.assign(setting_global, setting_page));
setting.urlArgs = urlArgs;
setting.map     = map;
requirejs.config(setting);