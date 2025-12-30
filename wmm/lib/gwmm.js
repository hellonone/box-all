var rule = {
    title: '王某某影视',
    host: 'http://59.153.164.125:6325',
    homeTid: '',
    homeUrl: '/api.php/provide/vod/?ac=detail&t={{rule.homeTid}}',
    detailUrl: '/api.php/provide/vod/?ac=detail&ids=fyid',
    searchUrl: '/api.php/provide/vod/?wd=**&ac=detail',
    url: '/api.php/provide/vod/?ac=detail&pg=fypage&t=fyclass',
    
    headers: {
        'User-Agent': 'wmmswd',
    },
    
    class_parse: 'json:class;type_name;type_id',
    timeout: 5000,
    filterable: 1,
    limit: 20,
    multi: 1,
    searchable: 2,
    play_parse: true,
    tab_order: ['bfzym3u8', 'qq', 'mgtv', 'bilibili', 'qiyi', 'youku', 'dyttm3u8','1080zyk', 'ffm3u8'],

    lazy: $js.toString(() => {
        input = {
            parse: 1,
            url: input,
            jx: 1,
        };
    }),

    推荐: 'json:list;vod_name;vod_pic;vod_remarks;vod_id',

    一级: $js.toString(() => {
        let res = request(input);
        let jo = JSON.parse(res);
        let list = jo.list || [];
        let videos = list.map(it => {
            let pic = it.vod_pic || '';
            if (pic && !pic.startsWith('http')) { pic = rule.host + pic; }
            return {
                url: it.vod_id,
                title: it.vod_name,
                img: pic,
                desc: it.vod_remarks,
            };
        });
        setResult(videos);
    }),

    二级: $js.toString(() => {
        let res = request(input);
        let it = JSON.parse(res).list[0];
        VOD = {
            vod_name: it.vod_name,
            vod_pic: it.vod_pic,
            type_name: it.type_name,
            vod_year: it.vod_year,
            vod_area: it.vod_area,
            vod_remarks: it.vod_remarks,
            vod_actor: it.vod_actor,
            vod_director: it.vod_director,
            vod_content: it.vod_content,
            vod_play_from: it.vod_play_from,
            vod_play_url: it.vod_play_url
        };
    }),

    搜索: $js.toString(() => {
        let kwMatch = input.match(/wd=([^&]+)/);
        let curInput = input;
        
        if (kwMatch) {
            let originalKw = decodeURIComponent(kwMatch[1]);
            let cleanMatch = originalKw.match(/^[\u4e00-\u9fa5a-zA-Z0-9]+/);
            
            if (cleanMatch) {
                let kw = cleanMatch[0];
                curInput = input.replace(/wd=[^&]+/, 'wd=' + encodeURIComponent(kw));
            }
        }

        let res = request(curInput);
        let list = JSON.parse(res).list || [];
        let videos = list.map(it => {
            let pic = it.vod_pic || '';
            if (pic && !pic.startsWith('http')) { pic = rule.host + pic; }
            return {
                url: it.vod_id,
                title: it.vod_name,
                img: pic,
                desc: it.vod_remarks
            };
        });
        setResult(videos);
    }),
};
