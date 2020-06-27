$(window).on('scroll', function(){
    if( $(document).scrollTop() > 100){
        $('.navbar').removeClass('iddle')
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled')
        $('.navbar').addClass('iddle');
    }
})