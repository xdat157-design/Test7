$(document).ready(function() {
    // Ẩn / Hiện nội dung
    $('#toggleBtn').click(function() {
        if ($('#box').is(':visible')) {
            $('#box').slideUp(400);
            $(this).html('Xem thêm');
        } else {
            $('#box').slideDown(400);
            $(this).html('Ẩn bớt');
        }
    });

    // Menu trượt dọc
    $('.menu-title').click(function() {
        $(this).next('.submenu').slideToggle();
    });

    // Active nav link
    $('nav ul li a').click(function(e) {
        if (!$(this).siblings('.dropdown').length) {
            $('nav ul li a').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Lightbox - Click vào hình để phóng to
    $('.image-item').click(function() {
        const imgSrc = $(this).find('img').attr('src');
        const caption = $(this).data('caption');
        
        $('#lightbox-img').attr('src', imgSrc);
        $('#lightbox-caption').text(caption);
        $('#lightbox').addClass('active').fadeIn(300);
    });

    // Đóng lightbox khi click vào nút X
    $('#closeBtn').click(function() {
        $('#lightbox').removeClass('active').fadeOut(300);
    });

    // Đóng lightbox khi click vào vùng tối
    $('#lightbox').click(function(e) {
        if (e.target === this) {
            $(this).removeClass('active').fadeOut(300);
        }
    });

    // Đóng lightbox khi nhấn phím ESC
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('#lightbox').removeClass('active').fadeOut(300);
        }
    });
});