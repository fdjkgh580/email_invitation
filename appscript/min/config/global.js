/*! my-web-project 2016-11-02 */
var environment="min",path_appscript="appscript/"+environment+"/",path_plugin="bower_components/",shimdeps_global={jquery:[path_plugin+"jquery/dist/jquery.min",!1],"jquery-ui":[path_plugin+"jquery-ui/jquery-ui.min",["jquery","css!bower_components/jquery-ui/themes/base/jquery-ui.min"]],vmodel:[path_plugin+"vmodel.js/src/jquery.vmodel.min",["jquery"]],vpage:[path_plugin+"vpage.js/src/jquery.vpage.min",["jquery"]],transit:[path_plugin+"jquery.transit/jquery.transit",["jquery"]],mousewheel:[path_plugin+"jquery-mousewheel/jquery.mousewheel.min",["jquery"]],diff_screen:[path_appscript+"controller/global/md/diff_screen",["vmodel"]],frame:[path_appscript+"controller/global/md/frame",["diff_screen"]],mobile:[path_appscript+"controller/global/md/when_mobile",["vmodel"]],pad:[path_appscript+"controller/global/md/when_pad",["vmodel"]],desktop:[path_appscript+"controller/global/md/when_desktop",["vmodel"]]},urlArgs="bust="+(new Date).getTime(),map={"*":{css:path_plugin+"require-css/css.js"}};