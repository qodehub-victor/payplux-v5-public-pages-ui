$(document).ready(function(){
    $(document).on("click", "#home [data-image]", function(e){
        e.preventDefault();
        $("#home .bubble-list[data-image].active").removeClass("active");
        $(this).addClass("active");
        let image = $(this).data("image");
        $(".experience-image").attr("src", `images/img/${image}.png`);
    })
});