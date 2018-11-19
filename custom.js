jQuery(".pointer").hover(
    function(){
        var thisdiv = jQuery(this).attr("#Landscape")
        jQuery(thisdiv).collapse("show");
    },
    function(){
        var thisdiv = jQuery(this).attr("#Landscape")
        jQuery(thisdiv).collapse("hide");
    }
);
