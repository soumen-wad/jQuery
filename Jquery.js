
//Header menu onclick add active class with page load
$(function(){
    var url = window.location;
    // Will only work if string in href matches with location
    $('.navbar-nav li.nav-item a[href="'+ url +'"]').parent().addClass('active');

    // Will also work for relative and absolute hrefs
    $('.navbar-nav li.nav-item a').filter(function() {
        return this.href == url;
    }).parent().addClass('active');        
});


//html element on click add class
jQuery(document).ready(function(){
    jQuery("#basicsAccordion .box").on("click", function() {

        jQuery("#basicsAccordion .box").removeClass("active");
        jQuery(this).addClass("active");
       
      });
});
