$.ajax({
    type: 'get',
    url: '/categories',
    success: function(res) {
        console.log(res);
        var navTpl = `
            {{each data}}
                <li>
                    <a href="list.html?categoryId={{$value._id}}"><i class="fa {{$value.className}}"></i>{{$value.title}}</a>
                </li>
            {{/each}}
        `;
        var html = template.render(navTpl, { data: res });
        $('#itemNav').html(html);
        $('#topNav').html(html);
    }
});

$('.search form').on('submit', function() {
    var keys = $(this).find('.keys').val();
    location.href = '/search.html?key=' + keys;
    return false;
})