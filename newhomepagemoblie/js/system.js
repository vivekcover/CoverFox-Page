$(function(){
    $(document).on('click', '.btn-signup', function(){
        $('.signup-overlay-wrapper').addClass('reveal');
    });

    $(document).on('click', '.signup-overlay-wrapper .btn-close', function(){
        $('.signup-overlay-wrapper').removeClass('reveal');
    });
    $(document).on('click','.signup-tab .button', function(){
        var id = $(this).attr('id');
        $('.signup-tab .button').removeClass('active');
        $('.tab-content').removeClass('active');
        $('.' + id).addClass('active');
        $(this).addClass('active');
    });
    $(document).on('click','.menu-items > li',function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $('.menu-items > li').removeClass('active');
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.new-to-cfox', function(){
        $('.new-to-coverfox').addClass('reveal');
    });

    $(document).on('click', '.new-to-coverfox .btn-close', function(){
        $('.new-to-coverfox').removeClass('reveal');
    });
});