function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

let currentBckgCoverAnim = null;

$(document).on("scroll", function(){
    console.log("Scroll event.")
    if (isElementInViewport(document.getElementById("TitleCardImg"))){
        $("#BckgCover").clearQueue()
        $("#BckgCover").animate({opacity: "25%"}, 600);
    }
    else {
        $("#BckgCover").clearQueue()
        $("#BckgCover").animate({opacity: "70%"}, 600)
    }
})

