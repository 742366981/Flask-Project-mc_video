$.getJSON('/video/movies/', function (data) {
    for (var i = 0; i < data.results.length; i += 1) {
            $('#s1 .clearfix').append($('<li>').append($('<div>').addClass('v_pic').append($('<div>').addClass('v_title').
            text(data.results[i].movie_name).append($('<a>').append($('<img>').attr('src', data.results[i].movie_img))))).
            append())
    }
});