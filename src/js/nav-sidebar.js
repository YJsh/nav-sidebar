(function($) {
    $.fn.navSidebar = function(data){
        $("body").attr({
            "data-spy": "scroll",
            "data-target": ".scrollspy"
        });
        console.log(this);
        this.empty();
        this.append("<ul class='nav affix' data-spy='affix'></ul>");
        u = this.children("ul");
        $.each(data, function(index){
            subData = data[index]
            u.append("<li><a href='#" + subData["id"] + "'>" + subData["text"] + "</a></li>")
        });
        u.children("li:first").attr("class", "active");
        return this
    }
})(jQuery)