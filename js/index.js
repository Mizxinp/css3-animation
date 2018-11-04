$(function () {
    //初始化fullpage组件
    // 设置每一个屏幕的颜色
    $('#dowebok').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        //导航指示器
        navigation:true,
        afterLoad:function (link,index) {

            $('.section').eq(index-1).addClass('now');
        },

        onLeave:function (index,nextIndex,direction) {
            if(index == 2 && nextIndex == 3){

                $('.section').eq(index-1).addClass('leave');
            }else if(index == 3 && nextIndex == 4){

                $('.section').eq(index-1).addClass('leave');
            }else if(index == 5 && nextIndex == 6){

                $('.section').eq(index-1).addClass('leave');
                $('.screen06 .box').addClass('show');
            }else if(index == 6 && nextIndex == 7){

                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function(i,item){
           
                    $(this).css('transition-delay',i*0.5+'s')
                })
            }
        },
        afterRender:function (){
            $('.see-more').on('click',function(){
                $.fn.fullpage.moveSectionDown();
            })

      
            $('.screen08').on('mousemove',function(e){
                // console.log(e)
                $(this).find('.hand').css({
                    left:e.clientX -230,
                    top:e.clientY - 60
                })
            }).find('.again').on('click',function(){
                $('.now,.leave,.show').removeClass('now').removeClass('leave');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            })
        },
        
        scrollingSpeed:1000
    });
    

})
