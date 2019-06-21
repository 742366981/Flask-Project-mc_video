$(function () {
    if (localStorage.dy_name) {
        $('#focus .pic:eq(1)').add('#focus .pic:eq(5)').attr('href', localStorage.dy_url).children().attr('src', localStorage.dy_img).css({'width': '375x', 'height': '125px'});
        $('#focus .tit:eq(1)').add('#focus .tit:eq(5)').attr('href', localStorage.dy_url).text(localStorage.dy_summary)
    } else {
        $.getJSON('/video/movies/?size=1', function(data) {
            $('#focus .pic:eq(1)').add('#focus .pic:eq(5)').attr('href', '/cinema/movie_details/' + data.results[0].id + '/').children().attr('src', data.results[0].movie_img).css({'width': '375x', 'height': '125px'});
            $('#focus .tit:eq(1)').add('#focus .tit:eq(5)').attr('href', '/cinema/movie_details/' + data.results[0].id + '/').text(data.results[0].summary);
            localStorage.dy_name = data.results[0].movie_name;
            localStorage.dy_url = '/cinema/movie_details/' + data.results[0].id + '/';
            localStorage.dy_img = data.results[0].movie_img;
            localStorage.dy_summary = data.results[0].summary;
        });
    }
    if (localStorage.dsj_name) {
        $('#focus .pic:eq(2)').attr('href', localStorage.dsj_url).children().attr('src', localStorage.dsj_img).css({'width': '375x', 'height': '125px'});
        $('#focus .tit:eq(2)').attr('href', localStorage.dsj_url).text(localStorage.dsj_summary)
    } else {
        $.getJSON('/video/tvs/?size=1', function(data) {
            $('#focus .pic:eq(2)').attr('href', '/cinema/tv_list_details/' + data.results[0].tv_name + '/').children().attr('src', data.results[0].tv_img).css({'width': '375x', 'height': '125px'});
            $('#focus .tit:eq(2)').attr('href', '/cinema/tv_list_details/' + data.results[0].tv_name + '/').text(data.results[0].summary);
            localStorage.dsj_name = data.results[0].tv_name;
            localStorage.dsj_url = '/cinema/tv_list_details/' + data.results[0].tv_name + '/';
            localStorage.dsj_img = data.results[0].tv_img;
            localStorage.dsj_summary = data.results[0].summary;
        });
    }
    if (localStorage.zy_name) {
        $('#focus .pic:eq(3)').attr('href', localStorage.zy_url).children().attr('src', localStorage.zy_img).css({'width': '375x', 'height': '125px'});
        $('#focus .tit:eq(3)').attr('href', localStorage.zy_url).text(localStorage.zy_summary)
    } else {
        $.getJSON('/video/shows/?size=1', function(data) {
            $('#focus .pic:eq(3)').attr('href', '/cinema/show_list_details/' + data.results[0].show_name + '/').children().attr('src', data.results[0].show_img).css({'width': '375x', 'height': '125px'});
            $('#focus .tit:eq(3)').attr('href', '/cinema/show_list_details/' + data.results[0].show_name + '/').text(data.results[0].summary);
            localStorage.zy_name = data.results[0].show_name;
            localStorage.zy_url = '/cinema/show_list_details/' + data.results[0].show_name + '/';
            localStorage.zy_img = data.results[0].show_img;
            localStorage.zy_summary = data.results[0].summary;
        });
    }
    if (localStorage.dm_name) {
        $('#focus .pic:eq(4)').add('#focus .pic:eq(0)').attr('href', localStorage.dm_url).children().attr('src', localStorage.dm_img).css({'width': '375x', 'height': '125px'});
        $('#focus .tit:eq(4)').add('#focus .tit:eq(0)').attr('href', localStorage.dm_url).text(localStorage.dm_summary)
    } else {
        $.getJSON('/video/animations/?size=1', function(data) {
            $('#focus .pic:eq(4)').add('#focus .pic:eq(0)').attr('href', '/cinema/animation_list_details/' + data.results[0].animation_name + '/').children().attr('src', data.results[0].animation_img).css({'width': '375x', 'height': '125px'});
            $('#focus .tit:eq(4)').add('#focus .tit:eq(0)').attr('href', '/cinema/animation_list_details/' + data.results[0].animation_name + '/').text(data.results[0].summary);
            localStorage.dm_name = data.results[0].animation_name;
            localStorage.dm_url = '/cinema/animation_list_details/' + data.results[0].animation_name + '/';
            localStorage.dm_img = data.results[0].animation_img;
            localStorage.dm_summary = data.results[0].summary;
        });
    }
    //首页电影获取
    $.getJSON('/video/movies/', {size: 9}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i].movie_img + '" title="' +
                data.results[i].movie_name + '"></a></div>\n' +
                '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"> <h2>' + data.results[i].movie_name.slice(0, 9) + '</h2></a>';
            $('#s1 .clearfix').append($('<li>').append(s));
        }
    });
    //首页电视剧获取
    $.getJSON('/video/tvs/', {size: 9}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i].tv_img + '" title="' +
                data.results[i].tv_name + '"></a></div>\n' +
                '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"> <h2>' + data.results[i].tv_name.slice(0, 9) + '</h2></a>';
            $('#s2 .clearfix').append($('<li>').append(s));
        }
    });
    //首页综艺获取
    $.getJSON('/video/shows/', {size: 9}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i].show_img + '" title="' +
                data.results[i].show_name + '"></a></div>\n' +
                '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"> <h2>' + data.results[i].show_name.slice(0, 9) + '</h2></a>';
            $('#s3 .clearfix').append($('<li>').append(s));
        }
    });
    //首页动漫获取
    $.getJSON('/video/animations/', {size: 9}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i].animation_img + '" title="' +
                data.results[i].animation_name + '"></a></div>\n' +
                '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"> <h2>' + data.results[i].animation_name.slice(0, 9) + '</h2></a>';
            $('#s4 .clearfix').append($('<li>').append(s));
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
