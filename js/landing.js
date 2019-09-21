
$(document).ready(function(){
    $(".collapse").on('shown.bs.collapse', function () {
        var panel = $(this);
        $('html, body').animate({
                scrollTop: panel.offset().top
        }, 500);

        $(".down-arrow img").toggleClass('up-arrow');
            });

    $(".collapse").on('hidden.bs.collapse', function () {
        $(".down-arrow img").toggleClass('up-arrow');
    });

    $(document).on('scroll',function(){
        if( document.querySelector(".consensus-section")){
            if(document.scrollingElement.scrollTop > document.querySelector(".consensus-section").offsetTop){
                $(".request-demo-bottom").addClass('sticky');
                if(document.scrollingElement.scrollTop >= document.querySelector(".source-section").offsetTop  - $(window).height()){
                    $(".request-demo-bottom").addClass('absolute');
                }
                else{
                    $(".request-demo-bottom").removeClass('absolute');
                }
            }
            else{
                $(".request-demo-bottom").removeClass('sticky');
            }
        }
    })
    // document.querySelector("#redirect-input").value = "http://" +  window.location.host + "/thank-you.html";
    if(document.querySelector("#redirect-input")){
        document.querySelector("#redirect-input").value = "http://" +  window.location.host + "/thank-you.html";
    }

});
