(function($) {
    $.fn.navSidebar = function(){
        $("body").attr({
            "data-spy": "scroll",
            "data-target": ".scrollspy"
        });

        return this.each(function(){

        });
    }
})(jQuery)