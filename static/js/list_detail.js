$(function () {
    var name = location.href.split('/')[5]
    var url = location.href.replace(/cinema/, 'video').split('/').slice(0, 5).join('/').replace('_details','')
    var s = location.href.split('/')[4].replace('list_details','')
    $.getJSON(url, {name: name}, function (data) {
        $('#tp').attr('src', data.info[s + 'img']);
        $('#mz').text(data.info[s + 'name']);
        $('#zy a').text(data.info['staring']);
        $('#lx').text(data.info[s + 'type']);
        $('#dq').text(data.info['area']);
        $('#nf').text(data.info['release_time']);
        $('#dy a').text(data.info['director']);
        $('#jqjj').text(data.info['summary']);
        $('#dz').attr('href', data.info['play_url']);
        for (var i = 0; i < data.results.length; i += 1) {
            $('#dz').append($('<li>').text(data.results[i].num).append($('<a>').attr({href: data.results[i].play_url,
                title: data.results[i].num, target: '_self', class: 'd_btn'}).text('在线播放')))
        }
    });
    $.getJSON('/video/' + s.replace('_', 's') + '/', {page: 6, size: 3}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let ss = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/' + s + 'list_details/' + data.results[i][s + 'name'] + '/"><img onerror="this.src = \'/static/img/load_error.jpg\' src="' + data.results[i][s + 'img'] + '" title="' +
                data.results[i].movie_name + '"></a></div>\n' +
                '                    <a href="/cinema/' + s + 'list_details/' + data.results[i][s + 'name'] + '/"> <h2>' + data.results[i][s + 'name'].slice(0, 8) + '</h2></a>';
            $('.clearfix:last').append($('<li>').append(ss));
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