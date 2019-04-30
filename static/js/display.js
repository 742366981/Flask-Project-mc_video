$(function () {
    if (/movie/.test(location.href)) {
        $.getJSON('/video/movies/', {size: 30}, function (data) {
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

});
