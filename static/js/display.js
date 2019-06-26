$(function () {
    if (localStorage.dy_name) {
        $('#focus .pic:eq(1)').add('#focus .pic:eq(5)').attr('href', localStorage.dy_url).children().attr('src', localStorage.dy_img).css({'width': '375x', 'height': '125px'});
        $('#focus .tit:eq(1)').add('#focus .tit:eq(5)').attr('href', localStorage.dy_url).text(localStorage.dy_summary)
    } else {
        $.getJSON('/video/movies/?size=10', function(data) {
            $('#focus .pic:eq(1)').add('#focus .pic:eq(5)').attr('href', '/cinema/movie_details/' + data.results[9].id + '/').children().attr('src', data.results[9].movie_img).css({'width': '375x', 'height': '125px'});
            $('#focus .tit:eq(1)').add('#focus .tit:eq(5)').attr('href', '/cinema/movie_details/' + data.results[9].id + '/').text(data.results[9].summary);
            localStorage.dy_name = data.results[9].movie_name;
            localStorage.dy_url = '/cinema/movie_details/' + data.results[9].id + '/';
            localStorage.dy_img = data.results[9].movie_img;
            localStorage.dy_summary = data.results[9].summary;
        });
    }
    if (localStorage.dsj_name) {
        $('#focus .pic:eq(2)').attr('href', localStorage.dsj_url).children().attr('src', localStorage.dsj_img).css({'width': '375x', 'height': '125px'});
        $('#focus .tit:eq(2)').attr('href', localStorage.dsj_url).text(localStorage.dsj_summary)
    } else {
        $.getJSON('/video/tvs/?size=10', function(data) {
            $('#focus .pic:eq(2)').attr('href', '/cinema/tv_list_details/' + data.results[9].tv_name + '/').children().attr('src', data.results[9].tv_img).css({'width': '375x', 'height': '125px'});
            $('#focus .tit:eq(2)').attr('href', '/cinema/tv_list_details/' + data.results[9].tv_name + '/').text(data.results[9].summary);
            localStorage.dsj_name = data.results[9].tv_name;
            localStorage.dsj_url = '/cinema/tv_list_details/' + data.results[9].tv_name + '/';
            localStorage.dsj_img = data.results[9].tv_img;
            localStorage.dsj_summary = data.results[9].summary;
        });
    }
    if (localStorage.zy_name) {
        $('#focus .pic:eq(3)').attr('href', localStorage.zy_url).children().attr('src', localStorage.zy_img).css({'width': '375x', 'height': '125px'});
        $('#focus .tit:eq(3)').attr('href', localStorage.zy_url).text(localStorage.zy_summary)
    } else {
        $.getJSON('/video/shows/?size=10', function(data) {
            $('#focus .pic:eq(3)').attr('href', '/cinema/show_list_details/' + data.results[9].show_name + '/').children().attr('src', data.results[9].show_img).css({'width': '375x', 'height': '125px'});
            $('#focus .tit:eq(3)').attr('href', '/cinema/show_list_details/' + data.results[9].show_name + '/').text(data.results[9].summary);
            localStorage.zy_name = data.results[9].show_name;
            localStorage.zy_url = '/cinema/show_list_details/' + data.results[9].show_name + '/';
            localStorage.zy_img = data.results[9].show_img;
            localStorage.zy_summary = data.results[9].summary;
        });
    }
    if (localStorage.dm_name) {
        $('#focus .pic:eq(4)').add('#focus .pic:eq(0)').attr('href', localStorage.dm_url).children().attr('src', localStorage.dm_img).css({'width': '375x', 'height': '125px'});
        $('#focus .tit:eq(4)').add('#focus .tit:eq(0)').attr('href', localStorage.dm_url).text(localStorage.dm_summary)
    } else {
        $.getJSON('/video/animations/?size=10', function(data) {
            $('#focus .pic:eq(4)').add('#focus .pic:eq(0)').attr('href', '/cinema/animation_list_details/' + data.results[9].animation_name + '/').children().attr('src', data.results[9].animation_img).css({'width': '375x', 'height': '125px'});
            $('#focus .tit:eq(4)').add('#focus .tit:eq(0)').attr('href', '/cinema/animation_list_details/' + data.results[9].animation_name + '/').text(data.results[9].summary);
            localStorage.dm_name = data.results[9].animation_name;
            localStorage.dm_url = '/cinema/animation_list_details/' + data.results[9].animation_name + '/';
            localStorage.dm_img = data.results[9].animation_img;
            localStorage.dm_summary = data.results[9].summary;
        });
    }
    let t;
    let data;
    //电影
    if (/movie/.test(location.href)) {
        if (location.href.split('/')[5] === 'all') {
            data = {size: 30};
            t = '全部';
        } else {
            data = {size: 30, kind: location.href.split('/')[5]};
            t = decodeURI(location.href.split('/')[5]).slice(0,2);
            if (decodeURI(data.kind) == '纪录片') {
                t = '纪录片';
            } else if (decodeURI(data.kind) == '微电影') {
                t = '微电影';
            }
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        if (localStorage.ll) {
            data.ll = true
        }
        $('.mian_title h2').text('电影');
        $.getJSON('/video/movies/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            let currentPage = location.search ? location.search.slice(6) : 1;
            $('#current').text(currentPage);
            $('#total').text(data.pages);
            if (currentPage == '1') {
                $('#previous').hide();
            }
            if (currentPage == data.pages) {
                $('#next').hide();
            }
            $('.pg a').eq(0).text(currentPage).attr('href', location.href.split('?')[0] + '?page=' + currentPage);
            $('.pg a').eq(1).text((Number(currentPage) + 1)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            $('.pg a').eq(2).text((Number(currentPage) + 2)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 2));
            $('.pg a').eq(3).text((Number(currentPage) + 3)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 3));
            $('.pg a').eq(4).text((Number(currentPage) + 4)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 4));
            $('#previous a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) - 1));
            $('#next a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            if (location.search.slice(6) > data.pages - 4) {
                $('.pg a').eq(0).text(data.pages - 4).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 4));
                $('.pg a').eq(1).text(data.pages - 3).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 3));
                $('.pg a').eq(2).text(data.pages - 2).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 2));
                $('.pg a').eq(3).text(data.pages - 1).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 1));
                $('.pg a').eq(4).text(data.pages).attr('href', location.href.split('?')[0] + '?page=' + data.pages);
            }
            if (data.pages <= 5) {
                $('.pg a').remove();
                for (let i = 1; i < data.pages + 1; i += 1) {
                    $($('<li>').addClass('pg').append($('<a>').text(i).attr('href', location.href.split('?')[0] + '?page=' + i))).insertBefore('#next');
                }
            }
            for (let i = 0; i < data.results.length; i += 1) {
                let s = '<div class="v_pic">\n' +
                    '                    <div class="v_title"></div>\n' +
                    '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i].movie_img + '" title="' +
                    data.results[i].movie_name + '"></a></div>\n' +
                    '                    <a href="/cinema/movie_details/' + data.results[i].id + '/"> <h2>' + data.results[i].movie_name.slice(0, 8) + '</h2></a>';
                $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
    //电视剧
    else if (/tv/.test(location.href)) {
        if (location.href.split('/')[5] == 'all') {
            data = {size: 30};
            t = '全部';
        } else {
            data = {size: 30, kind: location.href.split('/')[5]};
            t = decodeURI(location.href.split('/')[5]).slice(0,2);
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        $('.mian_title h2').text('电视剧');
        $.getJSON('/video/tvs/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            let currentPage = location.search ? location.search.slice(6) : 1;
            $('#current').text(currentPage);
            $('#total').text(data.pages);
            if (currentPage == '1') {
                $('#previous').hide();
            }
            if (currentPage == data.pages) {
                $('#next').hide();
            }
            $('.pg a').eq(0).text(currentPage).attr('href', location.href.split('?')[0] + '?page=' + currentPage);
            $('.pg a').eq(1).text((Number(currentPage) + 1)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            $('.pg a').eq(2).text((Number(currentPage) + 2)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 2));
            $('.pg a').eq(3).text((Number(currentPage) + 3)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 3));
            $('.pg a').eq(4).text((Number(currentPage) + 4)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 4));
            $('#previous a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) - 1));
            $('#next a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            if (location.search.slice(6) > data.pages - 4) {
                $('.pg a').eq(0).text(data.pages - 4).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 4));
                $('.pg a').eq(1).text(data.pages - 3).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 3));
                $('.pg a').eq(2).text(data.pages - 2).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 2));
                $('.pg a').eq(3).text(data.pages - 1).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 1));
                $('.pg a').eq(4).text(data.pages).attr('href', location.href.split('?')[0] + '?page=' + data.pages);
            }
            if (data.pages <= 5) {
                $('.pg a').remove();
                for (let i = 1; i < data.pages + 1; i += 1) {
                    $($('<li>').addClass('pg').append($('<a>').text(i).attr('href', location.href.split('?')[0] + '?page=' + i))).insertBefore('#next');
                }
            }
            for (let i = 0; i < data.results.length; i += 1) {
                    let s = '<div class="v_pic">\n' +
                        '                    <div class="v_title"></div>\n' +
                        '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i].tv_img + '" title="' +
                        data.results[i].tv_name + '"></a></div>\n' +
                        '                    <a href="/cinema/tv_list_details/' + data.results[i].tv_name + '/"> <h2>' + data.results[i].tv_name.slice(0, 8) + '</h2></a>';
                    $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
     //综艺
    else if (/show/.test(location.href)) {
        if (location.href.split('/')[5] == 'all') {
            data = {size: 30};
            t = '全部';
        } else {
            data = {size: 30, kind: location.href.split('/')[5]};
            t = decodeURI(location.href.split('/')[5]).slice(0,2);
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        $('.mian_title h2').text('综艺');
        $.getJSON('/video/shows/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            let currentPage = location.search ? location.search.slice(6) : 1;
            $('#current').text(currentPage);
            $('#total').text(data.pages);
            if (currentPage == '1') {
                $('#previous').hide();
            }
            if (currentPage == data.pages) {
                $('#next').hide();
            }
            $('.pg a').eq(0).text(currentPage).attr('href', location.href.split('?')[0] + '?page=' + currentPage);
            $('.pg a').eq(1).text((Number(currentPage) + 1)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            $('.pg a').eq(2).text((Number(currentPage) + 2)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 2));
            $('.pg a').eq(3).text((Number(currentPage) + 3)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 3));
            $('.pg a').eq(4).text((Number(currentPage) + 4)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 4));
            $('#previous a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) - 1));
            $('#next a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            if (location.search.slice(6) > data.pages - 4) {
                $('.pg a').eq(0).text(data.pages - 4).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 4));
                $('.pg a').eq(1).text(data.pages - 3).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 3));
                $('.pg a').eq(2).text(data.pages - 2).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 2));
                $('.pg a').eq(3).text(data.pages - 1).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 1));
                $('.pg a').eq(4).text(data.pages).attr('href', location.href.split('?')[0] + '?page=' + data.pages);
            }
            if (data.pages <= 5) {
                $('.pg a').remove();
                for (let i = 1; i < data.pages + 1; i += 1) {
                    $($('<li>').addClass('pg').append($('<a>').text(i).attr('href', location.href.split('?')[0] + '?page=' + i))).insertBefore('#next');
                }
            }
            for (let i = 0; i < data.results.length; i += 1) {
                let s = '<div class="v_pic">\n' +
                    '                    <div class="v_title"></div>\n' +
                    '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i].show_img + '" title="' +
                    data.results[i].show_name + '"></a></div>\n' +
                    '                    <a href="/cinema/show_list_details/' + data.results[i].show_name + '/"> <h2>' + data.results[i].show_name.slice(0, 8) + '</h2></a>';
                $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
     //动漫
    else if (/animation/.test(location.href)) {
        if (location.href.split('/')[5] == 'all') {
            data = {size: 30};
            t = '全部';
        } else {
            data = {size: 30, kind: location.href.split('/')[5]};
            t = decodeURI(location.href.split('/')[5]).slice(0,2);
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        $('.mian_title h2').text('动漫');
        $.getJSON('/video/animations/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            let currentPage = location.search ? location.search.slice(6) : 1;
            $('#current').text(currentPage);
            $('#total').text(data.pages);
            if (currentPage == '1') {
                $('#previous').hide();
            }
            if (currentPage == data.pages) {
                $('#next').hide();
            }
            $('.pg a').eq(0).text(currentPage).attr('href', location.href.split('?')[0] + '?page=' + currentPage);
            $('.pg a').eq(1).text((Number(currentPage) + 1)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            $('.pg a').eq(2).text((Number(currentPage) + 2)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 2));
            $('.pg a').eq(3).text((Number(currentPage) + 3)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 3));
            $('.pg a').eq(4).text((Number(currentPage) + 4)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 4));
            $('#previous a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) - 1));
            $('#next a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            if (location.search.slice(6) > data.pages - 4) {
                $('.pg a').eq(0).text(data.pages - 4).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 4));
                $('.pg a').eq(1).text(data.pages - 3).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 3));
                $('.pg a').eq(2).text(data.pages - 2).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 2));
                $('.pg a').eq(3).text(data.pages - 1).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 1));
                $('.pg a').eq(4).text(data.pages).attr('href', location.href.split('?')[0] + '?page=' + data.pages);
            }
            if (data.pages <= 5) {
                $('.pg a').remove();
                for (let i = 1; i < data.pages + 1; i += 1) {
                    $($('<li>').addClass('pg').append($('<a>').text(i).attr('href', location.href.split('?')[0] + '?page=' + i))).insertBefore('#next');
                }
            }
            for (let i = 0; i < data.results.length; i += 1) {
                let s = '<div class="v_pic">\n' +
                    '                    <div class="v_title"></div>\n' +
                    '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i].animation_img + '" title="' +
                    data.results[i].animation_name + '"></a></div>\n' +
                    '                    <a href="/cinema/animation_list_details/' + data.results[i].animation_name + '/"> <h2>' + data.results[i].animation_name.slice(0, 8) + '</h2></a>';
                $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
    //福利
    else if (/fuli/.test(location.href)) {
        if (location.href.split('/')[5] == 'all') {
            data = {size: 30};
            t = '全部';
        } else {
            data = {size: 30, kind: location.href.split('/')[5]};
            t = decodeURI(location.href.split('/')[5]).slice(0, 2);
        }
        if (location.search) {
            data.page = location.search.slice(6);
        }
        $('.mian_title h2').text('福利');
        $.getJSON('/video/fulis/', data, function (data) {
            $('.mian_title ul li a:eq(0)').text(t);
            let currentPage = location.search ? location.search.slice(6) : 1;
            $('#current').text(currentPage);
            $('#total').text(data.pages);
            if (currentPage == '1') {
                $('#previous').hide();
            }
            if (currentPage == data.pages) {
                $('#next').hide();
            }
            $('.pg a').eq(0).text(currentPage).attr('href', location.href.split('?')[0] + '?page=' + currentPage);
            $('.pg a').eq(1).text((Number(currentPage) + 1)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            $('.pg a').eq(2).text((Number(currentPage) + 2)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 2));
            $('.pg a').eq(3).text((Number(currentPage) + 3)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 3));
            $('.pg a').eq(4).text((Number(currentPage) + 4)).attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 4));
            $('#previous a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) - 1));
            $('#next a').attr('href', location.href.split('?')[0] + '?page=' + (Number(currentPage) + 1));
            if (location.search.slice(6) > data.pages - 4) {
                $('.pg a').eq(0).text(data.pages - 4).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 4));
                $('.pg a').eq(1).text(data.pages - 3).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 3));
                $('.pg a').eq(2).text(data.pages - 2).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 2));
                $('.pg a').eq(3).text(data.pages - 1).attr('href', location.href.split('?')[0] + '?page=' + (data.pages - 1));
                $('.pg a').eq(4).text(data.pages).attr('href', location.href.split('?')[0] + '?page=' + data.pages);
            }
            if (data.pages <= 5) {
                $('.pg a').remove();
                for (let i = 1; i < data.pages + 1; i += 1) {
                    $($('<li>').addClass('pg').append($('<a>').text(i).attr('href', location.href.split('?')[0] + '?page=' + i))).insertBefore('#next');
                }
            }
            for (let i = 0; i < data.results.length; i += 1) {
                let s = '<div class="v_pic">\n' +
                    '                    <div class="v_title"></div>\n' +
                    '                    <a href="/cinema/fuli_details/' + data.results[i].id + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i].fuli_img + '" title="' +
                    data.results[i].fuli_name + '"></a></div>\n' +
                    '                    <a href="/cinema/fuli_details/' + data.results[i].id + '/"> <h2>' + data.results[i].fuli_name.slice(0, 8) + '</h2></a>';
                $('#s1 .clearfix').append($('<li>').append(s));
            }
        });
    }
    //搜索按钮
    $('#btn').on('click', function() {
        if ($('#keywords').val()) {
            location.href = location.protocol + '//' + document.domain + ':' + location.port + '/cinema/search/?keywords=' + $('#keywords').val() + '&page=1'
        } else {
            return false;
        }
    });
});
