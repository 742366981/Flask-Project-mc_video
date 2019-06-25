$(function () {
    let url = location.href.replace(/cinema/, 'video');
    let s = location.href.split('/')[4].replace('details', '');
    $.getJSON(url, function (data) {
        $('#tp').attr('src', data[s + 'img']);
        $('#mz').text(data[s + 'name']);
        $('#zy a').text(data['staring']);
        $('#lx').text(data[s + 'type']);
        $('#dq').text(data['area']);
        $('#nf').text(data['release_time']);
        $('#dy a').text(data['director']);
        $('#jqjj').text(data['summary']);
        $('#dz').attr('href', data['play_url']);
        $('#dz')[0].nextSibling.textContent = data[s + 'name'];
    });
    $.getJSON('/video/' + s.replace('_', 's') + '/', {page: 6, size: 3}, function (data) {
        for (let i = 0; i < data.results.length; i += 1) {
            let ss = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="/cinema/' + s + 'details/' + data.results[i].id + '/"><img onerror="this.src = \'/static/img/load_error.jpg\'" src="' + data.results[i][s + 'img'] + '" title="' +
                data.results[i].movie_name + '"></a></div>\n' +
                '                    <a href="/cinema/' + s + 'details/' + data.results[i].id + '/"> <h2>' + data.results[i][s + 'name'].slice(0, 7) + '</h2></a>';
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