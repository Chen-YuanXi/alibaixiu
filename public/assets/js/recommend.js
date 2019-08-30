//热门推荐
$.ajax({
    type: 'get',
    url: '/posts/recommend',
    success: function(res) {
        console.log(res);
        var str = `
            {{each data}}
                <li>
                    <a href="detail.html?id={{$value._id}}">
                        <img src="{{$value.thumbnail}}" alt="">
                        <span>{{$value.title}}</span>
                    </a>
                </li>
            {{/each}}
        `
        var html = template.render(str, { data: res });
        $('#recommendForm').html(html);
    }
})

//随机推荐
$.ajax({
    type: 'get',
    url: '/posts/random',
    success: function(res) {
        console.log(res);
        var str = `
        {{each data}}
        <li>
            <a href="detail.html?id={{$value._id}}">
                <p class="title">{{$value.title}}</p>
                <p class="reading">阅读({{$value.meta.views}})</p>
                <div class="pic">
                    <img src="{{$value.thumbnail}}" alt="">
                </div>
            </a>
        </li>
        {{/each}}
        `
        var html = template.render(str, {
            data: res
        });
        $('#randomForm').html(html)
    }
})