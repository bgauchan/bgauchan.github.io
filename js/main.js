
jQuery(document).ready(function($) {
    animate("recent_work_1");
    animate("recent_work_2");
    animate("recent_work_3");
    animate("recent_work_4");
});


function animate(element_name) {
    var element = document.getElementById(element_name);
        element.addEventListener("mousemove", function( event ) {
        var halfW = ( this.clientWidth / 2 );
        var halfH = ( this.clientHeight / 2 );
        var coorX = ( halfW - ( event.pageX - this.offsetLeft ) );
        var coorY = ( halfH - ( event.pageY - this.offsetTop ) );
        var degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
        var degY  = ( ( coorX / halfW ) * -10 ) + 'deg'; // max. degree = 10

        element.style.transform = 'perspective( 600px ) translate3d( 0, -2px, 0 ) scale(1.1) rotateX('+ degX +') rotateY('+ degY +')';
    }, false);

    element.addEventListener("mouseout", function( event ) {
        element.removeAttribute("style");
    }, false);
}