/**
 * Created by wxq on 2016/2/29.
 */

$(function () {

    function resize() {
        var windowWidth = $(window).width();
        var IsSmall = windowWidth < 768;
        $("#main_ad >.carousel-inner>.item").each(function (i, item) {
            var $item = $(item)
            var ImgSrc = $(item).data(IsSmall ? 'image-sm' : 'image-lg');
            $item.css("backgroundImage", "url('" + ImgSrc + "')");
            if (IsSmall) {
                $item.html("<img src='" + ImgSrc + "' alt=''/>")
            } else {
                $item.empty();
            }
        })


        //标签页显示滚动条
        var $ulContainer=$('.nav-tabs');
        var ulwrapper_width=30;
        //console.log($ulContainer.children())
        $ulContainer.children().each(function (index,element) {
            ulwrapper_width+=element.clientWidth;
            if(ulwrapper_width>$(window).width()){
                $ulContainer.css('width',ulwrapper_width).parent().css("overflow-x","scroll");
            }

        })
    }

    $(window).on("resize", resize).trigger('resize');
    //初始化tooltips
    $('[data-toggle="tooltip"]').tooltip();

    //标签页显示滚动条
    var $ulContainer=$('.nav-tabs');
    var ulwrapper_width=30;
    //console.log($ulContainer.children())
    $ulContainer.children().each(function (index,element) {
        ulwrapper_width+=element.clientWidth;
        if(ulwrapper_width>$(window).width()){
            $ulContainer.css('width',ulwrapper_width).parent().css("overflow-x","scroll");
        }

    })

    //新闻标题切换
$('#news .nav-pills a').on('click mouseenter', function () {
    $('#news .news-title').text($(this).data("tittle"))
})

    $('#news .nav-pills a').on('mouseleave', function () {
        //console.log($(this));
        console.log($('#news .nav-pills  .active a'));
        $('#news .news-title').text($('#news .nav-pills .active a').data("tittle"))
    })

    //判断手指在元素上滑动的方向
    var $carousel=$('.carousel')
    var startx,endx;

    $carousel.on('touchstart', function (e) {
        //console.log (e.originalEvent.touches[0].clientX);
       console.log(11)
        startx=e.originalEvent.touches[0].clientX;
    })
    $carousel.on('touchmove', function (e) {
        console.log(e.originalEvent.touches[0].clientX);
        endx= e.originalEvent.touches[0].clientX;
    })
    $carousel.on('touchend', function (e) {

        var touch_length=Math.abs(startx-endx);
        if(touch_length>50){
            $(this).carousel(startx>endx?'next':'prev');
        }
    })
});