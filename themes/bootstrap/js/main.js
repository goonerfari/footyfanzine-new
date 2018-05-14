(function ($) {
    $('#old-school-container').hide();
    $('.pager li.next a span, button.slick-next.slick-arrow').html('<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>');
    $('.pager li.previous a span, button.slick-previous.slick-arrow').html('<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>');

    $(window).scroll(function() {
        // var height = $('section.col-sm-7.col-md-8.col-lg-8').height();
        if ($(this).scrollTop() > 450) {
            $('article.article .addtoany_list').addClass('social-fixed');
        }
        else {
            $('article.article .addtoany_list').removeClass('social-fixed');
        }
    });
    if(window.location.href === "/") {
        $('#old-school-container').show();
    }
    if(window.location.pathname === "/old-school") {
        $('a[href*="/old-school"]').addClass('is_active');
    }
    $(window).scroll(function(){
        var height = $('section.col-sm-7.col-md-8.col-lg-8').height();
        if ($(this).scrollTop() > 200 && $(this).scrollTop() <  ( height * .6)) {
            $("#block-trending-news, #block-related-posts").addClass("side-affix");
            $("#block-archive-block, #block-trending-topics").addClass("archive-affix");
            $("#block-pundits-block, #block-team-info").addClass("pundits-affix");
            $("#block-pundit-archive").addClass("archive-pundits");
        }
        else {
            $("#block-trending-news, #block-related-posts").removeClass("side-affix");
            $("#block-archive-block, #block-trending-topics").removeClass("archive-affix");
            $("#block-pundits-block, #block-team-info").removeClass("pundits-affix");
            $("#block-pundit-archive").removeClass("archive-pundits");
        }
    });

    if(window.location.pathname === "/") {
        $('#old-school-container').show();
    }
    if(window.location.pathname === "/news") {
        $('.view-news').hide();
    }
    if(window.location.href.indexOf("videos") >= 0) {
        $('a[href*="/videos"]').addClass('is_active');
        $('#top-navigation, #navbar-wrapper .navbar .icon-bar').css('background-color', '#2dc54e');
        $('#navbar-wrapper .navbar .navbar-toggle').css('border-color', '#2dc54e');
        $('.page-header, a.logo').css('color', 'rgb(18, 184, 86)');
    }

    

}(jQuery));

(function ($) {
    /* Button */
    $("#block-nav-search button, #block-search-page-header button").each(function() {
        $(this).html('<i class="glyphicon glyphicon-search" aria-hidden="true"></i>');
    });
    $("#block-footer-suscribe button.btn.btn-default").each(function() {
        $(this).html('<i class="fa fa-newspaper-o" aria-hidden="true"></i>');
    });
    $("li.statistics-counter p").html('<i class="fa fa-eye" aria-hidden="true"></i>Views');

    if(window.location.href.indexOf("blog") >= 0) {
        $('a[href*="/blog"]').addClass('is_active');
        $('#top-navigation').css('background-color', '#ff6e08');
        $('a.logo, .author a').css('color', '#ff6e08');
        $('#navbar-wrapper .navbar .navbar-toggle').css('border-color', '#ff6e08');
        $('#navbar-wrapper .navbar .icon-bar').css('background-color', '#ff6e08');
        $('blockquote')
            .css({'border-color': '#ff6e08', 'background-color': 'rgba(255,78,8,0.05)'});
    }
    if(window.location.href.indexOf("old-school") >= 0) {
        $('#old-school-container').show();
        $('a[href*="/old-school"]').addClass('is_active');
        /* Vintage Ball */
        var oldSrc = '/sites/default/files/footylogo.png';
        var newSrc = '/sites/default/files/vintageball.png';
        $('#top-navigation a:hover').css('color', 'rgba(252,239,222, .97)');

        $('#top-navigation ul.menu.nav.navbar-nav.navbar-right a, a.navbar-brand').mouseenter(function() {
          $(this).css({'background-color': '#292F33', 'color': 'rgba(246,235,215,0.98'});
        });
        $('#top-navigation ul.menu.nav.navbar-nav.navbar-right a, a.navbar-brand').mouseleave(function() {
          $(this).css('color', 'white');
        });

        $('#top-navigation .logo img, #navbar .logo img').hide();
        $('#top-navigation .logo img[src="' + oldSrc + '"]').attr('src', newSrc);
        $('#navbar .logo img[src="' + oldSrc + '"]').attr('src', newSrc);
        $('#top-navigation .logo img, #navbar .logo img').show();

        $('section, section h2 a, section h2 a:hover, section .page-header, article, article .author, article .author a, article .field--name-field-tags a')
            .css('color', 'rgba(252,239,222, .97)');
        $('#main-wrapper')
            .addClass('old-school');
        $('article, article footer .author')
            .css({'padding': '0px 15px', 'color': 'rgba(252,239,222, .97)'});
        $('article footer .author')
            .css({'padding-left': '6px', 'margin-bottom': '5px'});
        $('article .addtoany_list')
        .css('background-color', 'transparent');
        $('article p, article .field--type-image')
            .css({'padding': '0px', 'margin-top': '10px'});
        $('article .field--item')
            .css({'margin-right': '0px', 'color': 'white', 'padding': '0px'});
        $('article .field--name-field-image-caption')
            .css('margin', '5px 3px');
        $('#highlighted-wrapper .highlighted .region-highlighted')
            .css('background-color', 'rgba(252,239,222, .97)');
        $('section, article, article .author, article .author a, article .field--name-field-tags a, #top-navigation, #top-navigation a')
            .css('background-color', '#292F33');
        $('article .field.field--name-field-image img')
            .css({
                'border-width': '15px',
                'border-style': 'solid',
                'border-image': 'url(/sites/default/files/frame.png) 60 round',
                'margin-bottom': '0px !important',
                'margin-top': '15px !important'
            });
        $('blockquote')
            .css({'border-color': 'wheat', 'background-color': 'rgba(252,239,222, .1)'});            
        // $('section.col-xs-12.col-sm-7.col-md-8.col-lg-8, section.col-xs-12.col-sm-7.col-md-8.col-lg-8 img')
        //     .css({'padding': '0px', 'margin': '0px'});
        $('section.col-xs-12.col-sm-7.col-md-8.col-lg-8 .page-header')
            .css({'padding': '41px 19px 4px 15px', 'text-align': 'left'});
        $('article .field--name-field-tags a').css({
            'border-color': 'rgba(252,239,222, .97)'
        });
        $('article .field--name-field-tags a').hover(function(){
            $(this).css({"background-color": "rgba(252, 239, 222, 0.97)", "border-color": 'rgba(252, 239, 222, 0.97)', 'color': 'black'});
            }, function(){
            $(this).css({"background-color": "#292f33", "border-color": 'rgba(252, 239, 222, 0.97)', 'color': 'rgba(252, 239, 222, 0.97)'});
        });
    }
    else {

    }
    $('#block-front-footyblog-newsletters input').attr('placeholder','Enter your email');
    $('#block-footer-suscribe input').attr('placeholder','Subscribe');
    $('article li.statistics-counter').prepend('<i class="fa fa-eye" style="padding-right: 7px;"></i>');
    $('h1.timeline-Header-title.u-inlineBlock').css('font-family', 'Ubuntu');
}(jQuery));
