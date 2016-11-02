$(function (){

    $.vmodel.create({
        selector: window,
        model: '--global/frame',
        isautoload: true,
        method: function (){
            var vs = this;
            this.autoload = ['doevent', 'screen_do'];
            
            // 依照不同尺寸螢幕
            this.screen_do = function (){
                $(window).resize(function (){
                    vs.doevent();
                });
            }

            this.doevent = function(){
                $.vmodel.get("global/diff_screen").event({
                    
                    //手機
                    mobile: function (){require(
                    [
                        'mobile'
                    ])},

                    //平板
                    pad: function (){require(
                    [
                        'pad'
                    ])},
                    
                    //桌電
                    desktop: function (){require(
                    [
                        'desktop',
                    ])}
                });
            }
        }
    });
    
    
})