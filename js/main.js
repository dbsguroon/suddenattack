$(document).ready(function(){
    /* 메뉴 내려오는부분 */

    $('.nav_list>li>a').click(function(e){
        
        e.preventDefault()
        
        if($('.nav_list>li>.sub_menu').hasClass('on')){
            $('.nav_list>li>.sub_menu').removeClass('on')
            $('.nav .nav_menu').css({
                    'background-color':'transparent',
                    height:100,
            })
        }else{
            $('.nav_list>li>.sub_menu').addClass('on')
            $('.nav .nav_menu').css({
                'background-color':'#000',
                position:'relative',
                zIndex:9,
                height:398
            })
        }
    
        $('.nav_list>li>.sub_menu').css({
               position:'absolute'
        }).toggle()
        
        $('.nav .nav_list li ul li a').css({
            width:110
        })
        
    })
    
     /* 상단바고정 */
    
    $(window).scroll(function(){
        
        var num = $(this).scrollTop()
        
        
        if(num>78){
            $('.nav').css({
                position:'fixed',
                zIndex:10,
                top:0,
            })
        }else if(num<78){
            $('.nav').css({
                position:'inherit',
                zIndex:0,
                top:'auto',
            })
        }
        
        
    })
    
    
    
    /* pc방 on off 버튼 */
    $('.header_top .member li:first a').click(function(){
        if( $('.header_top .member li a span').hasClass('.on')  ){
            
            $('.header_top .member li a span').removeClass('.on').css('color','red').text('ON')
            
        }else{
            $('.header_top .member li a span').addClass('.on').css('color','#a9a69f').text('OFF')
        }
        
     
    })
    
    /* 슬릭 슬라이더 */
    $('.slider').slick({
 
    });
    
    /* gnb메뉴버튼 */
    function scrollDisable(){
        $('html,body').addClass('no_scroll')
    }
    
    function scrollAble(){
        $('html,body').removeClass('no_scroll')
    }
    
    $('.header_menu').click(function(){
        $('.gnb_menu').fadeIn()
        scrollDisable();
    })
    
    $('.gmenu>button').click(function(){
        $('.gnb_menu').fadeOut()
        scrollAble()
    })
    
    
    
    /* 마켓 */
   $('.market .sum_nail ul li a').click(function(e){
       e.preventDefault()
       var img = $(this).children('img').attr('src')
       
       var img_alt = $(this).children('img').attr('alt')
       
       var img_data_count_top = $(this).children('img').attr('data-count-top')
       
       var img_data_count_bottom = $(this).children('img').attr('data-count-bottom')
       
       $('.product>.photo>img').attr('src',img)
       $('.pinfo b').text(img_alt)
       $('.shop .text:eq(0) .count').text(img_data_count_top)
       $('.shop .text:eq(1) .count').text(img_data_count_bottom)
   })
    
  
    /* tab menu */ 
    
    /* 뉴스탭메뉴 */
    function news_list(e){
      e.preventDefault()
      var news = $(this)
    news.css({backgroundColor:'white',color:'#000'}).next().show().parents('li').addClass('active').siblings('li').removeClass('active').find('ul').hide().prev('a').css({backgroundColor:'#f9f7f6',color:'#959392'})
      
    }
  
    $('.news_list li a').on({'click focus':news_list})
    
    /* 커뮤니티 탭메뉴 */
    
    function community_list(e){
        e.preventDefault()
        var community = $(this)
        
    community.css({backgroundColor:'white',color:'#000'}).next().show().parents('li').addClass('active').siblings('li').removeClass('active').find('ul').hide().prev('a').css({backgroundColor:'#f9f7f6',color:'#959392'})
    }
    
    
    $('.community_group li a').on({'click focus':community_list})
    
    /* 서든랭킹  탭메뉴*/
    
    function ranking_list(e){
        e.preventDefault()
        var ranking = $(this)
        
    ranking.css({backgroundColor:'white',color:'#000'}).next().show().parents('li').addClass('active').siblings('li').removeClass('active').find('ul').hide().prev('a').css({backgroundColor:'#f9f7f6',color:'#959392'})
    }
    
    $('.ranking_group li a').on({'click focus':ranking_list})
    
    /* 서든어택 미디어 탭부분*/
    
    $('.vod>li:eq(1)>a').click(function(e){
        e.preventDefault()
        $(this).next().removeClass('hide')
        $('.vod>li:eq(0)>a').next().addClass('hide')
    })
    
    $('.vod>li:eq(0)>a').click(function(e){
        e.preventDefault()
        $(this).next().removeClass('hide')
        $('.vod>li:eq(1)>a').next().addClass('hide')
    })
    
    
    /* 서든어택 미디어 슬라이드 부분 */
    var count = 0;
    
    if($('.slider_container>ul').is(':animated')){
        return false;
    }
    
    $('.play .left').click(function(){
        
        if(count>=0 && count<=1){
            count++
            if(count == 2){           
                count=0
            }
        }
        
        console.log(count)
        
        if(count>=0){
            $('.vod .slider_container>ul').animate({
                    left:-1400 * count       
           })
        }
    })

    
    $('.play .right').click(function(){
        
        if(count>=0 && count<=1){
            count--
            if(count == -1){
                count=1
            }
        }
        
       console.log(count)
        
        if(count>=0){
            $('.vod .slider_container>ul').animate({
                left:-1400 * count
            })
        }
    })
    
    /* 오늘의 people */
    
    $('.people>a').eq(0).click(function(e){
        e.preventDefault()
        $('.p_rank').eq(0).addClass('open')
        $('.p_rank').eq(1).removeClass('open')
        
        $(this).toggleClass('change')
        $('.people>a').eq(1).removeClass('change')
        
        var death = $(this).children('img').attr('data-death')
        var damage = $(this).children('img').attr('data-damage')
        
        
        $('.today p span').eq(0).find('em').text(death)
        $('.today p span').eq(1).find('em').text(damage)
        
    })
    
    $('.people>a').eq(1).click(function(e){
        e.preventDefault()
        $('.p_rank').eq(0).removeClass('open')
        $('.p_rank').eq(1).addClass('open')    
        
        $(this).toggleClass('change')
        $('.people>a').eq(0).removeClass('change')
        
        var death = $(this).children('img').attr('data-death')
        var damage = $(this).children('img').attr('data-damage')
        
        
        $('.today p span').eq(0).find('em').text(death)
        $('.today p span').eq(1).find('em').text(damage)
        
    })
    
    
    /*  클랜홍보 */
    $('.clan .btn button').eq(0).mouseenter(function(){
        $('.clan_box').eq(0).addClass('open')
        $('.clan_box').eq(1).removeClass('open')
        $(this).css({
            backgroundColor:'orange'
        })
        $(this).next().css({
            backgroundColor:'transparent'
        })
        
        $('.clan h3').eq(0).addClass('open')
        $('.clan h3').eq(1).removeClass('open')
        $('.clan p').eq(0).addClass('open')
        $('.clan p').eq(1).removeClass('open')
    })
    
    
    $('.clan .btn button').eq(1).mouseenter(function(){
        $('.clan_box').eq(1).addClass('open')
        $('.clan_box').eq(0).removeClass('open')
        $(this).css({
            backgroundColor:'orange'
        })
        $(this).prev().css({
            backgroundColor:'transparent'
        })
        $('.clan h3').eq(0).removeClass('open')
        $('.clan h3').eq(1).addClass('open')
        $('.clan p').eq(0).removeClass('open')
        $('.clan p').eq(1).addClass('open')
    })
    

    
 })
    