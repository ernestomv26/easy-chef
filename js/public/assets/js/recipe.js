$(document).ready(function() {
    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    lbd.checkSidebarImage();

});

// activate collapse right menu when the windows is resized
$(window).resize(function() {
    if ($(window).width() <= 991) {
        lbd.initRightMenu();
    }
});

lbd = {
    checkSidebarImage: function() {
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');

        if (image_src !== undefined) {
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>'
            $sidebar.append(sidebar_container);
        } else if (mobile_menu_initialized == true) {
            // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
            $sidebar_wrapper.find('.navbar-form').remove();
            $sidebar_wrapper.find('.nav-mobile-menu').remove();
        }
    },
}

