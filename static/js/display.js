$(function () {
    //电影
    if (/movie/.test(location.href)) {
        if (location.href.split('/')[5] == 'all') {
            var data = {size: 30};
            var t = '全部';
        } else {
            var data = {size: 30, kind: location.href.split('/')[5]};
            var t = decodeURI(location.href.split('/')[5]).slice(0,2);
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        $('.mian_title h2').text('电影');
        $.getJSON('/video/movies/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            for (var i = 0; i < data.results.length; i += 1) {
                    var s = '<div class="v_pic">\n' +
                        '                    <div class="v_title"></div>\n' +
                        '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"><img src="' + data.results[i].movie_img + '" title="' +
                        data.results[i].movie_name + '"></a></div>\n' +
                        '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"> <h2>' + data.results[i].movie_name.slice(0, 9) + '</h2></a>';
                    $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
    //电视剧
    else if (/tv/.test(location.href)) {
        if (location.href.split('/')[5] == 'all') {
            var data = {size: 30};
            var t = '全部';
        } else {
            var data = {size: 30, kind: location.href.split('/')[5]};
            var t = decodeURI(location.href.split('/')[5]).slice(0,2);
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        $('.mian_title h2').text('电视剧');
        $.getJSON('/video/tvs/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            for (var i = 0; i < data.results.length; i += 1) {
                    var s = '<div class="v_pic">\n' +
                        '                    <div class="v_title"></div>\n' +
                        '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"><img src="' + data.results[i].tv_img + '" title="' +
                        data.results[i].tv_name + '"></a></div>\n' +
                        '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"> <h2>' + data.results[i].tv_name.slice(0, 9) + '</h2></a>';
                    $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
     //综艺
    else if (/show/.test(location.href)) {
        if (location.href.split('/')[5] == 'all') {
            var data = {size: 30};
            var t = '全部';
        } else {
            var data = {size: 30, kind: location.href.split('/')[5]};
            var t = decodeURI(location.href.split('/')[5]).slice(0,2);
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        $('.mian_title h2').text('综艺');
        $.getJSON('/video/shows/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            for (var i = 0; i < data.results.length; i += 1) {
                    var s = '<div class="v_pic">\n' +
                        '                    <div class="v_title"></div>\n' +
                        '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"><img src="' + data.results[i].show_img + '" title="' +
                        data.results[i].show_name + '"></a></div>\n' +
                        '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"> <h2>' + data.results[i].show_name.slice(0, 9) + '</h2></a>';
                    $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
     //动漫
    else if (/animation/.test(location.href)) {
        if (location.href.split('/')[5] == 'all') {
            var data = {size: 30};
            var t = '全部';
        } else {
            var data = {size: 30, kind: location.href.split('/')[5]}
            var t = decodeURI(location.href.split('/')[5]).slice(0,2);
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        $('.mian_title h2').text('动漫');
        $.getJSON('/video/animations/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            for (var i = 0; i < data.results.length; i += 1) {
                    var s = '<div class="v_pic">\n' +
                        '                    <div class="v_title"></div>\n' +
                        '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"><img src="' + data.results[i].animation_img + '" title="' +
                        data.results[i].animation_name + '"></a></div>\n' +
                        '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"> <h2>' + data.results[i].animation_name.slice(0, 9) + '</h2></a>';
                    $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
    //福利
    else if (/fuli/.test(location.href)) {
        if (location.href.split('/')[5] == 'all') {
            var data = {size: 30};
            var t = '全部';
        } else {
            var data = {size: 30, kind: location.href.split('/')[5]}
            var t = decodeURI(location.href.split('/')[5]).slice(0, 2);
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        $('.mian_title h2').text('福利');
        $.getJSON('/video/fulis/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            for (var i = 0; i < data.results.length; i += 1) {
                    var s = '<div class="v_pic">\n' +
                        '                    <div class="v_title"></div>\n' +
                        '                    <a href="/cinema/fuli_details/' + data.results[i].id + '/"><img src="' + data.results[i].fuli_img + '" title="' +
                        data.results[i].fuli_name + '"></a></div>\n' +
                        '                    <a href="/cinema/fuli_details/' + data.results[i].id + '/"> <h2>' + data.results[i].fuli_name.slice(0, 9) + '</h2></a>';
                    $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
});
