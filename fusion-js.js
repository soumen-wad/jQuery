# jquery


let urlmapping = [{
        "USA": ["/location-usa"]
    },
    {
        "Canada": ["/location-canada"]
    },
    {
        "India": ["/location-india"]
    },
    {
        "Philippines": ["/location-philippines"]
    },
    {
        "El Salvador": ["/location-el-salvador"]
    },
    {
        "Jamaica": ["/location-jamaica"]
    },
    {
        "Albania": ["/location-albania"]
    },
    {
        "Morocco": ["/location-morocco"]
    },
    {
        "UK": ["/location-uk"]
    }
];



let countrymapping = [{
        "USA": ["Florida", "Ohio", "North Carolina", "Georgia"]
    },
    {
        "Canada": ["Quebec"]
    },
    {
        "India": ["Kolkata", "Howrah", "Bengaluru", "Noida", "Chennai"]
    },
    {
        "Philippines": ["Cebu", "Manila"]
    },
    {
        "El Salvador": ["San Salvador"]
    },
    {
        "Jamaica": ["Kingston"]
    },
    {
        "Albania": ["Tirana"]
    },
    {
        "Morocco": ["Casablanca"]
    },
    {
        "UK": ["UK"]
    }
];


let emailMappings = [{
        "USA": "jobs@ameridial.com"
    },
    {
        "Canada": "recruitment@fusionbposervices.com"
    },
    {
        "India": "recruitment.fusion@fusionbposervices.com"
    },
    {
        "Philippines": "hr.cebu@fusionbposervices.com"
    },
    {
        "El Salvador": "hr.esal@fusionbposervices.com"
    },
    {
        "Jamaica": "jamrecruitment@fusionbposervices.com"
    },
    {
        "Albania": "recruitment.albania@fusionbposervices.com"
    },
    {
        "Morocco": "rh.morocco@fusionbposervices.com"
    },
    {
        "UK": "recruitment.fusion@fusionbposervices.com"
    }
];



let emailMappingsCity = [{
        "Cebu": "hr.cebu@fusionbposervices.com"
    },
    {
        "Manila": "hr.manila@fusionbposervices.com"
    }
]



// Validate URL 
function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
}



function clickArrowsSlide(dir) {
    if (dir == "left") {
        jQuery('.tabs-wrapper.location-tabs-wrapper.t25p.tabs-overflow .panel-grid-cell .widget_siteorigin-panels-builder .panel-grid-cell').animate({
            scrollLeft: '-=' + 400
        }, 500);
    }

    if (dir == "right") {
        jQuery('.tabs-wrapper.location-tabs-wrapper.t25p.tabs-overflow .panel-grid-cell .widget_siteorigin-panels-builder .panel-grid-cell').animate({
            scrollLeft: '+=' + 400
        }, 500);
    }
}


function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}



function isOnScreen(elem) {
    // if the element doesn't exist, abort
    if (elem.length == 0) {
        return;
    }
    var $window = jQuery(window)
    var viewport_top = $window.scrollTop()
    var viewport_height = $window.height()
    var viewport_bottom = viewport_top + viewport_height
    var $elem = jQuery(elem)
    var top = $elem.offset().top
    var height = $elem.height()
    var bottom = top + height

    return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

function _sliderScroll(directon) {
    if (directon == 'left') {
        jQuery('.widget-cards-fusion .panel-grid-cell').animate({
            scrollLeft: '-=' + 500
        }, 500);
    }
    if (directon == 'right') {
        jQuery('.widget-cards-fusion .panel-grid-cell').animate({
            scrollLeft: '+=' + 500
        }, 500);
    }

    setTimeout(function() {
        panelScrolled()
    }, 1000);
}

function panelScrolled() {
    let completewidth = 0;
    jQuery('.widget-cards-fusion .panel-grid-cell > .so-panel.widget').each(function(index, dis) {
        completewidth += jQuery(dis).width();
    });
    completewidth = completewidth - 700;
    var x = jQuery('.widget-cards-fusion .panel-grid-cell').scrollLeft();
    if (x !== 0) {
        jQuery(".left-arrow-slider").removeClass("d-none");
    } else {
        jQuery(".left-arrow-slider").addClass("d-none");
    }

    if (completewidth < x) {
        jQuery(".right-arrow-slider").addClass("d-none");
    } else {
        jQuery(".right-arrow-slider").removeClass("d-none");
    }
}


if (jQuery(window).width() > 991) {
    jQuery(".menu-item.menu-item-gtranslate")
        .detach()
        .insertBefore(jQuery("#menu-menu-1 li.menu-item-type-custom:last-child"));
} else {
    jQuery(".menu-item.menu-item-gtranslate")
        .detach()
        .insertBefore(jQuery(".l-subheader-cell.at_right"));
}


jQuery.fn.inView = function() {
    //Window Object
    var win = jQuery(window);
    //Object to Check
    obj = jQuery(this);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = (obj.offset().top + obj.outerHeight());
    return (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
};


// Testimonials
function panelScrolledTesti() {
    let completewidth = 0;
    let completeBlog = 0;
    jQuery('.widgets-fusion-testimonial-card .so-panel.widget').each(function(index, dis) {
        completewidth += jQuery(dis).width();
    });

    jQuery('.widgets-fusion-testimonial-card.from-the-blog .so-panel.widget').each(function(index, dis) {
        completeBlog += jQuery(dis).width();
    });

    completewidth = completewidth / 3 - 700;
    completeBlog = completeBlog / 4 - 800;
    var x = jQuery('.widgets-fusion-testimonial-card>.panel-layout').scrollLeft();
    if (x !== 0) {} else {
        jQuery(".left-scroll-testimonial").addClass("d-none");
    }

    if (completewidth < x) {
        jQuery(".right-scroll-testimonial").addClass("d-none");
    } else {
        jQuery(".right-scroll-testimonial").removeClass("d-none");
    }
    if (completeBlog < x && jQuery('.widgets-fusion-testimonial-card.from-the-blog').length > 0) {
        jQuery(".right-scroll-testimonial").addClass("d-none");
    } else {
        jQuery(".right-scroll-testimonial").removeClass("d-none");
    }
}



function modalProfile(dis) {
    let id = jQuery(dis).attr('profileid');
    jQuery('#' + id).modal();
}


function changeTab(whichTab, dis) {
    jQuery('.customer-engagement-tabs ul li').removeClass('active');
    jQuery(dis).parent('li').addClass('active');
    jQuery('.section-customer-engagement-tab-content').removeClass('active');
    jQuery('.section-' + whichTab).addClass('active');
}



// Location slider
function panelScrolledLocation(id) {
    let completewidth = 0;
    jQuery('.slider_' + id + ' .slider-content').each(function(index, dis) {
        completewidth += jQuery(dis).width();
    });

    completewidth = completewidth - 1000;

    var x = jQuery('.slider_' + id + '>.panel-layout').scrollLeft();
    if (x !== 0) {
        jQuery(".left-slider-arrow_" + id).removeClass("d-none");
    } else {
        jQuery(".left-slider-arrow_" + id).addClass("d-none");
    }

    if (completewidth <= x) {
        jQuery(".right-slider-arrow_" + id).addClass("d-none");
    } else {
        jQuery(".right-slider-arrow_" + id).removeClass("d-none");
    }


}









function _sliderScrollTestimonial(directon, dataid) {
    if (dataid !== undefined && dataid != "") {
        if (directon == 'left') {
            jQuery('.widgets-fusion-testimonial-card.slider_' + dataid + '>.panel-layout').animate({
                scrollLeft: '-=' + 500
            }, 500);
        }
        if (directon == 'right') {
            jQuery('.widgets-fusion-testimonial-card.slider_' + dataid + '>.panel-layout').animate({
                scrollLeft: '+=' + 500
            }, 500);
        }

        setTimeout(function() {
            panelScrolledLocation(dataid);
        }, 1000);

    } else {
        if (directon == 'left') {
            jQuery('.widgets-fusion-testimonial-card>.panel-layout').animate({
                scrollLeft: '-=' + 500
            }, 500);
        }
        if (directon == 'right') {
            jQuery('.widgets-fusion-testimonial-card>.panel-layout').animate({
                scrollLeft: '+=' + 500
            }, 500);
        }

        setTimeout(function() {
            panelScrolledTesti()
        }, 1000);

    }
}

function fileNameFromUrl(url) {
    var matches = url.match(/\/([^\/?#]+)[^\/]*$/);
    if (matches.length > 1) {
        return matches[1];
    }
    return null;
}

let pdflink = "";

function pdfdownload(formid) {
    var req = new XMLHttpRequest();
    req.open("GET", "/wp-json/api/download?file=" + pdflink, true);
    req.responseType = "blob";
    req.onload = function(event) {
        var blob = req.response;
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileNameFromUrl(pdflink) + ".pdf";
        link.click();
    };

    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // submit form
            jQuery('[id*=wpcf7-f' + formid + ']').find("form").submit();
        }
    };

    req.send();
}

function changeCountryCode(dis) {
    let countrycode = "+" + jQuery(dis).val();
    let countryname = jQuery(dis).find("option:selected").html();
    countryname = countryname.replace("(", "");
    countryname = countryname.replace(")", "");
    countryname = countryname.replace(countrycode, "");

    jQuery(".fusion-country").val(countryname);
    jQuery(".countrycodefusion").val(countrycode);
}

jQuery(document).ready(function() {
    jQuery(".fusion-carousel__navigation-button").on("click", function() {
        var href = jQuery(this).attr('hash');
        jQuery("#" + href).focus();
    });


    jQuery.each(jQuery(".sow-accordion-panel-content"), function(index, value) {
        jQuery.each(jQuery(value).find('a'), function(index2, value2) {
            jQuery(value2).on("click", function() {
                let url = jQuery(this).attr("href");
                if (url != "#") {
                    if (jQuery(this).attr('target') == "_blank") {
                        window.open(url, '_blank');
                    } else {
                        location.href = url;
                    }
                    return false;
                }

            })
        });
    });

    jQuery.each(jQuery(".textwidget"), function(index, value) {
        jQuery.each(jQuery(value).find('a'), function(index2, value2) {
            jQuery(value2).on("click", function() {
                let url = jQuery(this).attr("href");
                if (url != "#") {
                    if (jQuery(this).attr('target') == "_blank") {
                        window.open(url, '_blank');
                    } else {
                        location.href = url;
                    }
                    return false;
                }
            })
        });
    });



    jQuery(".countrycodefusion").attr("readonly", "readonly");

    let dialcode = jQuery(".wpcf7-phonetext").val();
    jQuery(".countrycodefusion").val(dialcode);


    setTimeout(function() {
        let dialcode = jQuery(".wpcf7-phonetext").val();
        jQuery(".countrycodefusion").val(dialcode);
    }, 500);

    jQuery(".wpcf7-phonetext").on("change", function() {
        dialcode = jQuery(this).val();
        jQuery(".countrycodefusion").val(dialcode);
    });

    jQuery(".wpcf7-phonetext").each(function(index) {
        jQuery(this).attr("placeholder", "Contact No.")
    });
    // delete cookies 



    jQuery("#countryemail").on("change", function() {
        let valueofcountry = jQuery("#countryemail").val();
        jQuery.each(emailMappings, function(index, value) {
            if (valueofcountry == Object.keys(value)[0]) {
                jQuery("#locationemail").val(value[valueofcountry]);
                jQuery("#locationemail").attr("value", value[valueofcountry])
            }
        });
    });


    jQuery.each(jQuery(".wpcf7-response-output"), function(index, value) {
        if (jQuery(value).text() !== "" && jQuery.trim(jQuery(value).text()) != "" && isURL(jQuery.trim(jQuery(value).text()))) {
            window.location.href = jQuery.trim(jQuery(value).text());
        }
    });

    setTimeout(function() {
        deleteCookie("formsubmission");
        setCookie("formsubmission", "", 1);
    }, 1000);


    // set ip Address and URL for mails. 
    let ipaddress = jQuery("#ipaddress").val();
    jQuery("input.ipaddress").val(ipaddress);
    jQuery("input.ipaddress").attr("value", ipaddress);
    jQuery("input.currenturl").val(window.location.href);
    jQuery("input.currenturl").attr("value", window.location.href);



    // stylish file input
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = jQuery(input).parent().parent().find("label");
        var labelVal = jQuery(label).html();

        input.addEventListener('change', function(e) {
            var fileName = e.target.files[0].name || "";

            if (fileName) {
                jQuery(label).find("span").html("You have selected: " + fileName);
            } else {
                jQuery(label).find("span").html(labelVal);
            }


        });

        // Firefox bug fix
        input.addEventListener('focus', function() { input.classList.add('has-focus'); });
        input.addEventListener('blur', function() { input.classList.remove('has-focus'); });
    });
    // stylish file input ends



    jQuery(".refernowform-js").on("click", function() {
        jQuery("#referform").modal();
    });


    // homepage scoller
    jQuery('.widget-cards-fusion .panel-grid-cell').on("scroll", function() {
        panelScrolled();
    });

    // homepage testimonials
    jQuery('.widgets-fusion-testimonial-card>.panel-layout').on("scroll", function() {
        panelScrolledTesti();
    });

    jQuery('.slider_1>.panel-layout').on("scroll", function() {
        panelScrolledLocation(1);
    });

    jQuery('.slider_2>.panel-layout').on("scroll", function() {
        panelScrolledLocation(2);
    });



    jQuery.each(jQuery(".from-the-blog.widgets-fusion-testimonial-card").find(".so-panel.widget.widget_siteorigin-panels-builder"), function(index, value) {
        if (index < 4) {
            jQuery(".right-scroll-testimonial").addClass("d-none");
        }

        if (index >= 4) {
            jQuery(".right-scroll-testimonial").removeClass("d-none");
        }
    });


    jQuery.each(jQuery(".restrictdownload"), function(index, value) {
        pdflink = jQuery(value).find("a").attr("href");
        jQuery(value).find("a").attr("pdflink", pdflink);
        jQuery(value).find("a").attr("href", "javascript:void(0)");
    });


    jQuery(".restrictdownload").find("a").on("click", function() {
        pdflink = jQuery(this).attr("pdflink");
        jQuery("#casestudyforms").modal();
        return false;
    });

    jQuery("select[name='iaminterestedin']").on("change", function() {
        jQuery('.contact-form-js').addClass("d-none");
        jQuery('.' + jQuery(this).val()).removeClass("d-none");
    });



    function setlocations() {
        jQuery("#select-location").empty();

        let valueofcountry = jQuery("#country-select").val();


        jQuery.each(countrymapping, function(index, value) {
            if (valueofcountry == Object.keys(value)[0]) {
                jQuery.each(value[valueofcountry], function(index2, value2) {
                    jQuery("#select-location").append("<option value='" + value2 + "'>" + value2 + "</option>");
                });
            }
        });


        jQuery.each(urlmapping, function(index, value) {
            if (valueofcountry == Object.keys(value)[0]) {
                jQuery(".change-content-js").find("h2").text("Know more about our centres in " + valueofcountry);
                jQuery(".change-content-js").find("a").attr("href", value[valueofcountry][0]);
            }
        });




        setEmails();

        return false;
    }



    jQuery("#select-location").on("change", function() {
        setEmailsCity()
    })


    function setEmails() {
        let valueofcountry = jQuery("#country-select").val();
        jQuery.each(emailMappings, function(index, value) {
            if (valueofcountry == Object.keys(value)[0]) {
                jQuery("#email-to-email").val(value[valueofcountry]);
                jQuery("#email-to-email").attr("value", value[valueofcountry])
            }
        });
    }

    function setEmailsCity() {
        let valueofcity = jQuery("#select-location").val();
        jQuery.each(emailMappingsCity, function(index, value) {
            if (valueofcity == Object.keys(value)[0]) {
                jQuery("#email-to-email").val(value[valueofcity]);
                jQuery("#email-to-email").attr("value", value[valueofcity])
            }
        });
    }



    setTimeout(function() {
        setlocations();
    }, 1000);

    setTimeout(function() {
        setEmails();
    }, 1000);

    jQuery("#country-select").on("change", function() {
        setTimeout(function() {
            setlocations();
        }, 1000);
    });




    jQuery.each(jQuery(".wpmm-item-title"), function(index, value) {
        if (jQuery(value).text().trim() == "") {
            jQuery(value).remove();
        }
    });

    jQuery('.location-search-wrapper .input-group .input-group-text').on('click', function() {
        const dis = jQuery(this);
        const searchValue = dis.parents('.input-group').find('input').val().trim().toLowerCase();
        const wrappers = dis.parents('.tabs-wrapper').find('.tab-content .address-content-wrap');
        if (searchValue.length > 0) {
            for (let i = 0; i < wrappers.length; i++) {
                const address = jQuery(wrappers[i]).find('.address-wrapper .textwidget  p');
                for (let ii = 0; ii < address.length; ii++) {
                    const addressValue = jQuery(address[ii]).text().trim().toLowerCase();
                    if (addressValue.includes(searchValue))
                        jQuery(address[ii]).parents('.widget_text').removeClass('d-none');
                    else
                        jQuery(address[ii]).parents('.widget_text').addClass('d-none');
                }
                if (jQuery(wrappers[i]).find('.address-wrapper .widget_text.d-none').length === jQuery(wrappers[i]).find('.address-wrapper .widget_text').length)
                    jQuery(wrappers[i]).addClass('d-none');
                else
                    jQuery(wrappers[i]).removeClass('d-none');
            }
        } else {
            dis.parents('.tabs-wrapper').find('.tab-content .address-content-wrap').removeClass('d-none');
            dis.parents('.tabs-wrapper').find('.address-wrapper .widget_text').removeClass('d-none');
        }
    });
    jQuery('.location-search-wrapper .input-group input').on('focusout', function() {
        const dis = jQuery(this);
        const searchValue = dis.val().trim().toLowerCase();
        if (!searchValue.length > 0) {
            dis.parents('.tabs-wrapper').find('.tab-content .address-content-wrap').removeClass('d-none');
            dis.parents('.tabs-wrapper').find('.address-wrapper .widget_text').removeClass('d-none');
        }
    });


    function alphabetizeList(listField) {
        var sel = jQuery(listField);
        var selected = sel.val(); // cache selected value, before reordering
        var opts_list = sel.find('option');
        opts_list.sort(function(a, b) {
            return jQuery(a).text() > jQuery(b).text() ? 1 : -1;
        });
        sel.html('').append(opts_list);
        sel.val(selected); // set cached selected value
    }




    jQuery(".panel-title-show-hide-new").on("click", function() {
        jQuery(".panel-title-show-hide-new").removeClass("active");
        jQuery(this).addClass("active");
        return false;
    });

    jQuery('.fusion-click-js').on("click", function() {
        const tabID = jQuery(this).attr('id');
        jQuery('.fusion-click-js').removeClass("active");
        jQuery(this).addClass("active");
        jQuery('.tabs-wrapper .tab-content').removeClass('active');
        jQuery('.' + tabID).addClass('active');

        // New verions of tabs. 
        jQuery('html, body').animate({
            scrollTop: jQuery(this).offset().top - 100
        }, 1000);


    });

    jQuery(".tabs-wrapper .tabs-section-right .span-icon-wrapper span").on("click", function() {
        const dis = jQuery(this);
        const allTabs = jQuery('.all-tabs .fusion-click-js');
        const currentActiveTab = dis.parents('.tab-content');
        const childrenTabs = currentActiveTab.parent().parent().children();
        const len = childrenTabs.length - 1;
        if (dis.is(':first-child')) {
            const newActiveTab = currentActiveTab.parent().prev().find('.tab-content');
            currentActiveTab.removeClass('active');
            allTabs.parent('div[data-index="' + currentActiveTab.parent().data('index') + '"]').find('.fusion-click-js').removeClass('active');
            if (parseInt(currentActiveTab.parent().data('index')) > 0) {
                newActiveTab.addClass('active');
                allTabs.parent('div[data-index="' + newActiveTab.parent().data('index') + '"]').find('.fusion-click-js').addClass('active');
            } else {
                jQuery(childrenTabs[len]).find('.tab-content').addClass('active');
                allTabs.parent('div[data-index="' + len + '"]').find('.fusion-click-js').addClass('active');
            }
        } else {
            const newActiveTab = currentActiveTab.parent().next().find('.tab-content');
            currentActiveTab.removeClass('active');
            allTabs.parent('div[data-index="' + currentActiveTab.parent().data('index') + '"]').find('.fusion-click-js').removeClass('active');
            if (parseInt(currentActiveTab.parent().data('index')) < len) {
                newActiveTab.addClass('active');
                allTabs.parent('div[data-index="' + newActiveTab.parent().data('index') + '"]').find('.fusion-click-js').addClass('active');
            } else {
                jQuery(childrenTabs[0]).find('.tab-content').addClass('active');
                allTabs.parent('div[data-index="0"]').find('.fusion-click-js').addClass('active');
            }
        }
    });

    jQuery("#customized-bootstrap-carousel > .panel-grid-cell").addClass("carousel-inner");
    jQuery("#customized-bootstrap-carousel > .panel-grid-cell > .so-panel").addClass("carousel-item");
    jQuery("#customized-bootstrap-carousel > .panel-grid-cell > .so-panel:first-child").addClass("active");
    jQuery("#customized-bootstrap-carousel > .carousel-inner").after('<a class="carousel-control-prev d-none" href="#customized-bootstrap-carousel" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next d-none" href="#customized-bootstrap-carousel" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>');

    jQuery('#customized-bootstrap-carousel').carousel({
        interval: false
    });

    jQuery('.customized-bootstrap-carousel-right').on("click", function() {
        jQuery('.carousel-control-next').trigger('click');
    });
    jQuery('.customized-bootstrap-carousel-left').on("click", function() {
        jQuery('.carousel-control-prev').trigger('click');
    });
    const sliderLength = jQuery('#customized-bootstrap-carousel .carousel-inner .carousel-item').length.toString().padStart(2, '0');
    jQuery('#customized-bootstrap-carousel .carousel-inner').append('<div class="slider-counter"><span class="slide-number">01</span>/<span class="slider-length">' + sliderLength + '</span></div>');
    jQuery('#customized-bootstrap-carousel').on('slid.bs.carousel', function() {
        let sliderIndex = 1;
        if (jQuery('#customized-bootstrap-carousel').hasClass('slide2')) {
            sliderIndex = jQuery('.carousel-item.active').data('index') + 1;
        } else {
            sliderIndex = jQuery('.carousel-item.active').data('index');
        }


        jQuery(this).find('.slider-counter .slide-number').text(sliderIndex.toString().padStart(2, '0'));
    });

    jQuery("#trp-floater-ls").insertBefore(".wp-megamenu>li:last-child").wrap('<li class="menu-item menu-item-type-custom menu-item-object-custom wp-megamenu-item-37  wpmm_mega_menu  wpmm-none wpmm-item-fixed-width wpmm-strees-default wpmm-submenu-right"></li>');

    jQuery('.left-to-right-fly-1').addClass("active");
    jQuery('.left-to-right-fly-2').addClass("active");
    jQuery('.left-to-right-fly-3').addClass("active");


    let incrementDone = false;
    let industriesDone = false;
    let servicesDone = false;
    let clientsDone = false;
    let testimonialsDone = false;
    let bluecertificationsDone = false;

    jQuery('.slide-from-left-js').addClass('slideInLeft');
    jQuery('.slide-from-bottom-js').addClass('slideInUp');

    window.addEventListener('scroll', function(e) {
        // animate numbers in second section
        if (isOnScreen(jQuery('#fusion-numbers')) && incrementDone === false) {
            jQuery('.blue-widget-numbers').find("h2").find("strong").each(function() {
                jQuery(this).prop('Counter', 0).animate({
                    Counter: jQuery(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        jQuery(this).text(Math.ceil(now));
                    }
                });
            });
            jQuery('.slide-from-right-js').find('h2').addClass('slideInRight');
            jQuery('.slide-from-right-js').find('p').addClass('slideInUp');
            incrementDone = true;
        }

        // industries section animation
        if (isOnScreen(jQuery('.industries-anim-js')) && industriesDone === false) {
            jQuery('.animate-from-left-js').addClass('slideInLeft');

            jQuery('.right-design-element').addClass('active');
            jQuery('.right-design-element-2').addClass('active');

            industriesDone = true;
        }

        // Services section animation
        if (isOnScreen(jQuery('.services-anim-js')) && servicesDone === false) {
            jQuery('.animate-h2-js').find('h2').addClass('slideInLeft');
            jQuery('.pull-upside-row-anim-js').addClass('slideInUp');

            jQuery(".services-animate-arrow").addClass('active');

            servicesDone = true;
        }

        // Clients animatsion
        if (isOnScreen(jQuery('.clients-anim-js')) && clientsDone === false) {
            jQuery('.animte-from-bottom-clients-js').addClass('slideInUp');

            jQuery(".clients-animate-strip-1").addClass("active");
            jQuery(".clients-animate-strip-2").addClass("active");
            jQuery(".clients-animate-strip-3").addClass("active");

            clientsDone = true;
        }

        // testimonials animations
        if (isOnScreen(jQuery('.testimonials-anim-js')) && testimonialsDone === false) {
            jQuery('.slide-from-left-test-js').addClass('slideInLeft');
            testimonialsDone = true;
        }


        // blue-certifications
        if (isOnScreen(jQuery('.blue-certifications')) && bluecertificationsDone === false) {
            jQuery('.animate-certi-1').addClass('active');
            jQuery('.animate-certi-2').addClass('active');
            bluecertificationsDone = true;
        }
    });


    alphabetizeList("#country-select");

    setTimeout(function() {
        jQuery("#country-select").val("Albania");
        setlocations();
    }, 1000);


    if (jQuery(window).width() < 768) {
        jQuery.each(jQuery('.fusion-tabs'), function(index, value) {
            var id = jQuery(value).attr("id");
            jQuery("." + id).detach().insertAfter("#" + id);
        });
    }


});


document.addEventListener('wpcf7submit', function(event) {
    if ('9989' == event.detail.contactFormId) {
        pdfdownload();
    }
}, false);


// set cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Get cookie by name
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Delete cookie
function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

function openMobileMenu(dis) {
    if (jQuery(dis).hasClass("active")) {
        jQuery(dis).removeClass("active");
        jQuery("#mobile-menu-open").removeClass("active");
    } else {
        jQuery(dis).addClass("active")
        jQuery("#mobile-menu-open").addClass("active");
    }
}




function openParentMenu(level, key, dis) {
    if (jQuery("._openmenu_level_" + key + "_" + level).hasClass("showdropdown")) {
        jQuery("._openmenu_level_" + key + "_" + level).removeClass("showdropdown");
        jQuery(dis).removeClass("active");
    } else {
        jQuery("._openmenu_level_" + key + "_" + level).addClass("showdropdown");
        jQuery(dis).addClass("active");
    }

}


function is_mobile_valid($mobile) {
    $mobile = jQuery.trim($mobile);
    if ($mobile.length === 10) {
        return /^\d+$/.test($mobile);
    } else {
        return false;
    }
}



function contactForm7(e, acc, download) {
    var formsubmit = true;
    jQuery.each(jQuery(".jsvalidations_" + e).find(".wpcf7-form-control"), function(index, value) {

        if (jQuery(value).hasClass("wpcf7-validates-as-required") && jQuery(value).val() == "") {

            if (jQuery(value).attr('placeholder') != undefined && jQuery(value).attr('placeholder') != "") {
                alert('Please provide ' + jQuery(value).attr('placeholder'));
                formsubmit = false;
                return false;
            } else if (jQuery(value).attr("name").indexOf("phonetext") == -1) {
                alert('Please select ' + jQuery(value).find("option:first-child").text());
                formsubmit = false;
            }
        }
    });


    if (jQuery(".jsvalidations_" + e + " .countrycodeselect").length > 0 && jQuery(".jsvalidations_" + e + " .countrycodeselect").val() == "") {
        alert("Please select country");
        formsubmit = false;
        return false;
    }

    if (jQuery(".jsvalidations_" + e + " input.mobilenumber").length > 0 && !is_mobile_valid(jQuery(".jsvalidations_" + e + " input.mobilenumber").val())) {
        alert("Please provide valid 10 digit contact number");
        formsubmit = false;
        return false;
    }




    // 	if( jQuery(".jsvalidations_"+e+" .countrycodeselect").val() == "" ){
    // 		alert("Please select country");
    // 		formsubmit = false;
    // 		return false;
    // 	}

    // 	if(  !is_mobile_valid(jQuery(".jsvalidations_"+e+" input.mobilenumber").val())){
    // 		formsubmit = false;
    // 		alert("Please provide valid 10 digit contact number");
    // 		return false;
    // 	}


    if (jQuery(".inputfile").length > 0 && jQuery(".inputfile").val() == "" && !(jQuery("body").hasClass("modal-open"))) {
        alert("Please attach resume");
        formsubmit = false;
        return false;
    }


    if (jQuery('input[name=acceptance-' + acc + ']').length > 0 && jQuery('input[name=acceptance-' + acc + ']:checked').val() != "1" && formsubmit) {
        alert("Please accept policy");
        formsubmit = false;
        return false;
    }




    if (formsubmit) {
        setCookie("formsubmission", "formsubmission", 1);
        if (download == "download") {
            pdfdownload(e);
        } else {
            jQuery('[id*=wpcf7-f' + e + ']').find("form").submit();
        }
    }
}
