$(function () {
    let t;
    let data;
    data = {size: 30, keywords: location.search.split('&')[0].slice(10), page: location.search.split('&')[1].slice(5)};
    t = decodeURI(location.search.split('&')[0].slice(10));
    $('.mian_title h2').text('与"' + t + '"相关搜索结果');
    $.getJSON('/video/search/', data, function (data) {
        let currentPage = location.search.split('&')[1].slice(5);
        $('#current').text(currentPage);
        $('#total').text(data.pages);
        if (currentPage == '1') {
            $('#previous').hide();
        }
        if (currentPage == data.pages) {
            $('#next').hide();
        }
        $('.pg a').eq(0).text(currentPage).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + currentPage);
        $('.pg a').eq(1).text((Number(currentPage) + 1)).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (Number(currentPage) + 1));
        $('.pg a').eq(2).text((Number(currentPage) + 2)).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (Number(currentPage) + 2));
        $('.pg a').eq(3).text((Number(currentPage) + 3)).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (Number(currentPage) + 3));
        $('.pg a').eq(4).text((Number(currentPage) + 4)).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (Number(currentPage) + 4));
        $('#previous a').attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (Number(currentPage) - 1));
        $('#next a').attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (Number(currentPage) + 1));
        if (location.search.slice(6) > data.pages - 4) {
            $('.pg a').eq(0).text(data.pages - 4).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (data.pages - 4));
            $('.pg a').eq(1).text(data.pages - 3).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (data.pages - 3));
            $('.pg a').eq(2).text(data.pages - 2).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (data.pages - 2));
            $('.pg a').eq(3).text(data.pages - 1).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + (data.pages - 1));
            $('.pg a').eq(4).text(data.pages).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + data.pages);
        }
        if (data.pages <= 5) {
            $('.pg a').remove();
            for (let i = 1; i < data.pages + 1; i += 1) {
                $($('<li>').addClass('pg').append($('<a>').text(i).attr('href', location.href.split('?')[0] + '?keywords=' + t + '&page=' + i))).insertBefore('#next');
            }
        }
        for (let i = 0; i < data.results.length; i += 1) {
            if (data.results[i].movie_name) {
                let s = '<div class="v_pic">\n' +
                    '                    <div class="v_title"></div>\n' +
                    '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"><img src="' + data.results[i].movie_img + '" title="' +
                    data.results[i].movie_name + '"></a></div>\n' +
                    '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"> <h2>' + data.results[i].movie_name.slice(0, 9) + '</h2></a>';
                $('#s1 .clearfix').append($('<li>').append(s));
            } else if (data.results[i].tv_name) {
                let s = '<div class="v_pic">\n' +
                    '                    <div class="v_title"></div>\n' +
                    '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"><img src="' + data.results[i].tv_img + '" title="' +
                    data.results[i].tv_name + '"></a></div>\n' +
                    '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"> <h2>' + data.results[i].tv_name.slice(0, 9) + '</h2></a>';
                $('#s1 .clearfix').append($('<li>').append(s));
            } else if (data.results[i].show_name) {
                let s = '<div class="v_pic">\n' +
                    '                    <div class="v_title"></div>\n' +
                    '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"><img src="' + data.results[i].show_img + '" title="' +
                    data.results[i].show_name + '"></a></div>\n' +
                    '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"> <h2>' + data.results[i].show_name.slice(0, 9) + '</h2></a>';
                $('#s1 .clearfix').append($('<li>').append(s));
            } else if (data.results[i].animation_name) {
                let s = '<div class="v_pic">\n' +
                    '                    <div class="v_title"></div>\n' +
                    '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"><img src="' + data.results[i].animation_img + '" title="' +
                    data.results[i].animation_name + '"></a></div>\n' +
                    '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"> <h2>' + data.results[i].animation_name.slice(0, 9) + '</h2></a>';
                $('#s1 .clearfix').append($('<li>').append(s));
            } else if (data.results[i].fuli_name) {
                let s = '<div class="v_pic">\n' +
                    '                    <div class="v_title"></div>\n' +
                    '                    <a href="/cinema/fuli_list_details/' + data.results[i].id + '/"><img src="' + data.results[i].fuli_img + '" title="' +
                    data.results[i].fuli_name + '"></a></div>\n' +
                    '                    <a href="/cinema/fuli_list_details/' + data.results[i].id + '/"> <h2>' + data.results[i].fuli_name.slice(0, 9) + '</h2></a>';
                $('#s1 .clearfix').append($('<li>').append(s));
            }
        }
    });
    //搜索按钮
    $('#btn').on('click', function() {
        if ($('#keywords').val()) {
            location.href = location.protocol + '//' + document.domain + ':' + location.port + '/cinema/search/?keywords=' + $('#keywords').val() + '&page=1'
        } else {
            return false;
        }
    });
});
