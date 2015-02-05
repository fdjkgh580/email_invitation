var index_main = new function ()
{

    var root = this;

    /**
     * 主程序
     */
    this.main = function ()
    {
        
        //添加初始化要載入的程式碼
        require
        ([
            'plugin/JS/jquery-1.11.1.min',
            'plugin/JS/jquery.transit.min',
            'plugin/JS/jquery.mousewheel.min',
            'appscript/libraries/screen_do'
        ], 
        
        //載入完畢後要執行的流程
        function ()
        {
            root.diff_screen_require();
            root.when_resize();
        });
    }

    /**
     * 添加依照螢幕像素載入不同的頁面程式碼
     */
    this.diff_screen_require = function() 
    {
        screen_do.resize
        ({
            
            //手機
            mobile: function (){require(
            [
                'appscript/controller/global/when_mobile'
            ])},

            //平板
            pad: function (){require(
            [
                'appscript/controller/global/when_pad'
            ])},
            
            //桌電
            desktop: function (){require(
            [
                'appscript/controller/global/when_desktop',
                'appscript/controller/index/welcome'
            ])}
        })
    }

    /**
     * 當改變視窗，可以依據當前適合的解析度套用所需的程式碼
     */
    this.when_resize = function() 
    {
        $(window).resize(function(event) 
        {
            root.diff_screen_require();
        });
    }
}
index_main.main();