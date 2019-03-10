
    $(function(){
        $('.reco span').click(function () {
            let target = $(this).attr('id');
            $('.info'+target).addClass('active').siblings().removeClass('active');
        })
        
        $(window).resize(function(){
            change();
        })
        
        $(document).ready(function(){
            change();
        })
    
        function change(){
            let winHeight = $(window).height();
            $('.moredrop').css('height',winHeight);
        }
    
    })


