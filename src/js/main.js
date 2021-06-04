$(document).ready(function(){
    $("#team").owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        center: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
    let leads =  $("#leads")
    leads.owlCarousel({
        items: 2,
        loop: true,
        center: true,
        margin: 70,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        navContainerClass: 'leadsNav'
    })
    $('.nextBtn').click(function() {
        leads.trigger('next.owl.carousel');
    })
    $('.prevBtn').click(function() {
        leads.trigger('prev.owl.carousel', [300]);
    })
});