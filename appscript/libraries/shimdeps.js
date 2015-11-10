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