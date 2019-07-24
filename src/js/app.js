$(document).ready(function(){
    $(document).on("click", "#home [data-image]", function(e){
        e.preventDefault();
        $("#home .bubble-list[data-image].active").removeClass("active");
        $(this).addClass("active");
        let image = $(this).data("image");

        
        $(".experience-image").replaceWith(`
            <img class="experience-image" src="images/img/${image}.jpg" data-src="images/img/${image}@3x.jpg">
        `);

        setTimeout(function(){
            $(".experience-image").visibility({
                type       : 'image',
                transition : 'fade in',
                duration   : 250
            });
        }, 250);
        
    })
});