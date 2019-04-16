$.getJSON('/video/movies/', {size: 9}, function (data) {
    for (var i = 0; i < data.results.length; i += 1) {
            var s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="article.htm"><img src="' + data.results[i].movie_img + '" title="' +
                data.results[i].movie_name + '"></a></div>\n' +
                '                    <a href="article.htm"> <h2>' + data.results[i].movie_name.slice(0,9) + '</h2></a>';
            $('#s1 .clearfix').append($('<li>').append(s));
    }
});
$.getJSON('/video/tvs/', function (data) {
    for (var i = 0; i < data.results.length; i += 1) {
            var s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="article.htm"><img src="' + data.results[i].tv_img + '" title="' +
                data.results[i].tv_name + '"></a></div>\n' +
                '                    <a href="article.htm"> <h2>' + data.results[i].tv_name.slice(0,9) + '</h2></a>';
            $('#s2 .clearfix').append($('<li>').append(s));
    }
});
$.getJSON('/video/shows/', function (data) {
    for (var i = 0; i < data.results.length; i += 1) {
            var s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="article.htm"><img src="' + data.results[i].show_img + '" title="' +
                data.results[i].show_name + '"></a></div>\n' +
                '                    <a href="article.htm"> <h2>' + data.results[i].show_name.slice(0,9) + '</h2></a>';
            $('#s3 .clearfix').append($('<li>').append(s));
    }
});
$.getJSON('/video/animations/', function (data) {
    for (var i = 0; i < data.results.length; i += 1) {
            var s = '<div class="v_pic">\n' +
                '                    <div class="v_title"></div>\n' +
                '                    <a href="article.htm"><img src="' + data.results[i].animation_img + '" title="' +
                data.results[i].animation_name + '"></a></div>\n' +
                '                    <a href="article.htm"> <h2>' + data.results[i].animation_name.slice(0,9) + '</h2></a>';
            $('#s4 .clearfix').append($('<li>').append(s));
    }
});