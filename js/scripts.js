$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},100);
        return false;
    });


    // Parallax
    
    $('#home-area').parallax({imageSrc: 'img/fundo-Home5.png'});

    // scroll para as seções

    let navBtn = $('.nav-item');
    let programmingBtn = $('#programacao-menu');

    let terapySection = $('#terapy-area');
    let applicationSection = $('#application-area');
    let crisprSection = $('#crispr-area');
    let historySection = $('#history-area');
    let operationSection = $('#operation-area');
    let applicabilitySection = $('#applicability-area');
    let conflictSection = $('#conflict-area');
   

    $(navBtn).click(function() {

        let scrollTo = '';

        let btnId = $(this).attr('id');

        switch(btnId){
            case 'terapy-menu':
                scrollTo = terapySection;
                break;
            case 'continuar':
                scrollTo = terapySection;
                break;
            case 'application-menu': 
                scrollTo = applicationSection;
                break;
            case 'crispr-menu': 
                scrollTo = crisprSection;
                break;
            case 'history-menu': 
                scrollTo = historySection;
                break;
            case 'operation-menu': 
                scrollTo = operationSection;
                break;
            case 'applicability-menu': 
                scrollTo = applicabilitySection;
                break;
            case 'conflict-menu': 
                scrollTo = conflictSection;
                break;   
        }

        $(".tela2").css("display", "none");
        $(".tela1").css("display", "block");

        $(".navbar-collapse").collapse('hide');
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 78
        }, 500);
    });

    $(".site").click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    $(programmingBtn).click(function() {
        $(".navbar-collapse").collapse('hide');
        $(".tela1").css("display", "none");
        $(".tela2").css("display", "block");
    });
});