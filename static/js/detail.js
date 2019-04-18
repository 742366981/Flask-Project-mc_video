$(function () {
    var url = location.href.replace(/cinema/, 'video')
    var s = location.href.split('/')[4].replace('details','')
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
    })
});