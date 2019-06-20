$(function () {
    //首页电影获取
    $.getJSON('/video/movies/', {size: 9}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"><img src="' + data.results[i].movie_img + '" title="' +
                data.results[i].movie_name + '"></a></div>\n' +
                '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"> <h2>' + data.results[i].movie_name.slice(0, 9) + '</h2></a>';
            $('#s1 .clearfix').append($('<li>').append(s));
            if (i == 0) {
                $('#focus .pic:eq(1)').add('#focus .pic:eq(5)').attr('href', '/cinema/movie_details/' + data.results[i].id + '/').children().attr('src', data.results[i].movie_img).css({'width': '375x', 'height': '125px'});
                $('#focus .tit:eq(1)').add('#focus .tit:eq(5)').attr('href', '/cinema/movie_details/' + data.results[i].id + '/').text(data.results[i].summary)
            }
        }
    });
    //首页电视剧获取
    $.getJSON('/video/tvs/', {size: 9}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"><img src="' + data.results[i].tv_img + '" title="' +
                data.results[i].tv_name + '"></a></div>\n' +
                '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"> <h2>' + data.results[i].tv_name.slice(0, 9) + '</h2></a>';
            $('#s2 .clearfix').append($('<li>').append(s));
            if (i == 0) {
                $('#focus .pic:eq(2)').attr('href', '/cinema/tv_list_details/' + data.results[i].tv_name + '/').children().attr('src', data.results[i].tv_img).css({'width': '375x', 'height': '125px'});
                $('#focus .tit:eq(2)').attr('href', '/cinema/tv_list_details/' + data.results[i].tv_name + '/').text(data.results[i].summary)
            }
        }
    });
    //首页综艺获取
    $.getJSON('/video/shows/', {size: 9}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"><img src="' + data.results[i].show_img + '" title="' +
                data.results[i].show_name + '"></a></div>\n' +
                '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"> <h2>' + data.results[i].show_name.slice(0, 9) + '</h2></a>';
            $('#s3 .clearfix').append($('<li>').append(s));
            if (i == 0) {
                $('#focus .pic:eq(3)').attr('href', '/cinema/show_list_details/' + data.results[i].id + '/').children().attr('src', data.results[i].show_img).css({'width': '375x', 'height': '125px'});
                $('#focus .tit:eq(3)').attr('href', '/cinema/show_details/' + data.results[i].show_name + '/').text(data.results[i].summary)
            }
        }
    });
    //首页动漫获取
    $.getJSON('/video/animations/', {size: 9}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"><img src="' + data.results[i].animation_img + '" title="' +
                data.results[i].animation_name + '"></a></div>\n' +
                '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"> <h2>' + data.results[i].animation_name.slice(0, 9) + '</h2></a>';
            $('#s4 .clearfix').append($('<li>').append(s));
            if (i == 0) {
                $('#focus .pic:eq(4)').add('#focus .pic:eq(0)').attr('href', '/cinema/animation_list_details/' + data.results[i].id + '/').children().attr('src', data.results[i].animation_img).css({'width': '375x', 'height': '125px'});
                $('#focus .tit:eq(4)').add('#focus .tit:eq(0)').attr('href', '/cinema/animation_LIST_details/' + data.results[i].animation_name + '/').text(data.results[i].summary)
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
