//屏幕判別後做什麼事情...
var screen_do = new function (){

    /**
     * 屏幕判別
     * @return  "mobile" | "pad" | "desktop"
     */
    this.current = function (){
        var scr = $(".current_screen").find("li:visible").attr("class");
        if (scr == "mobile") return scr;
        else if (scr == "pad") return scr;
        else if (scr == "desktop") return scr;
        else console.log("找不到偵測標籤 .current_screen");
    }

    this.resize = function (param){
        if (this.current() == "mobile") {
            if (param.mobile) param.mobile();
        }
        else if (this.current() == "pad") {
            if (param.pad) param.pad();
        }
        else if (this.current() == "desktop") {
            if (param.desktop) param.desktop();
        }
    }
}