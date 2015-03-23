//監控屏幕，判別當前解析度後做什麼事情...
var screen_do = new function (){

    //判別的選擇器
    this.selector_screen = ".current_screen";

    /**
     * 屏幕判別
     * @return  "mobile" | "pad" | "desktop"
     */
    this.current = function (){
        var scr = $(this.selector_screen).find("li:visible").attr("class");
        if (scr == "mobile") return scr;
        else if (scr == "pad") return scr;
        else if (scr == "desktop") return scr;
        else return false;
    }

    this.init = function (){
        var num = $(this.selector_screen).length;

        if (num == 0) {
            console.log("識別偵測版面的元素不存在，請先建立。");
        }
    }


    /**
     * 監控當視窗發生改變時，會執行什麼事情
     * @param   function param.mobile   手機   
     * @param   function param.pad      平板
     * @param   function param.desktop  桌電 
     */
    this.resize = function (param){

        this.init();

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