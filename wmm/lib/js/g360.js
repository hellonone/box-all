var rule = {
    //你看你妈呢？
    title: '360影视[官]',
    host: 'https://www.360kan.com',
    homeUrl: 'https://api.web.360kan.com/v1/rank?cat=2&size=9',
    detailUrl: 'https://api.web.360kan.com/v1/detail?cat=fyclass&id=fyid',
    searchUrl: 'https://api.so.360kan.com/index?force_v=1&kw=**&from=&pageno=fypage&v_ap=1&tab=all',
    url: 'https://api.web.360kan.com/v1/fyfilter&size=35&pageno=fypage&callback=',
    filterable: 1,
    filter_url: 'filter/list?catid=fyclass&rank={{fl.排序}}&cat={{fl.类型}}&year={{fl.年代}}&area={{fl.地区}}',
    filter: "H4sIAAAAAAAAA+2YzU4bVxTH38VrFjNAkzS7PkE3VTZVVLFAahVKqpRWiiIkg21imw8DwQbHxkDBNiEYbKDUjGP8MnPvjN+iY5+v66oazYKStmLn3zn345yZO+d/rt/E7NjTb9/EXky/jj2Nea2OqizHxmKzUz9Om/zr1Mwv08OBs4FZpY77ieOBOYDY/BhaC2WVqaMVgXxeuqUTKfQh8Lzssdst0zwA8umFdR0voA+B16xvqJsOrQnAa2bqsh8Cz8uee90TmgfA86pvZU0EjiW94zoZigWAfYunXmGDfABGft5WR/IbAM8rvPUzDs0D4DidE9XNU5wA5HM/7ftnTfQh8JqNFT9doTUBOJbckX/IzwWAfWtLKndBPgBeM5HVi+9pTQCJpeatL3EsQ+A1U9duh94fwvzzgRcOnCo31YojB4450oFbSgXjafGjer8oG7vthip1+7Wibp/jCITRESrX1De3/ECGwElfNoMRlDQAv5zbNfEhkK+/90F8CLzmdlWXT2lNANkvb+6XN+f5yy3xIfBzuP1DfAjsW20qp0Y+gMgv5+bK7RwaL4c4yssZt8a/QNvwp2GfFPukaZ8Q+4RpHxf7uGm3xW6bdkvslmG3v2R78NOwPxH7E9P+WOyPTfsjsT8y7ZKvbeZrS762ma8t+dpmvrbka5v52pKXbeZlSV6WmZcleVlmXpbkZUleunSltz+gZ2buu9fTU69GToNe21ROTk4D8+hp0OW439vwEg29s4+rvZqaffH9yznZajjEbWdHh8xMzU3/PDJK5bZVteufJ41RP738YXZuENjzsdj4XUmXfxwXuUCIIiWhpS9EDsPkop/oqvYiVQ8AXnPhWiVytCZApNK+VHKdZfIBcO6NmlohOUSIIgkq21K9bZa1IXB1rFb8812qjgC8X3M1EE/aD4Bz393UO1XKfQjmY1Nn18pp0JZDGHGHNRKJlC6SEiCIYNbcWzqJCJGajPsTN4D7ErcwkQoTtzBRDBMwXWiq7L7aPeBGiPhBjh7k6D8jRxN3JkfJlsodevU4fS7M/KWV91zHkRHCHO96xTtliQHgbziekakIUtQ+qlVuGAE4rrOe30xTUABmgU3uGQU2AI52a09fcREF4HnF9+4nvlkASK25dG/WudYMgWNZWFFlujkhGHWof0ixIEhtu1ZN3g+Afe22TpO8IvBzaW6oZI+eCwBX2+47f5FkEsG8xZ3RbQzBEBedL4q4DEA+gAvjZggQ5YbnX/3mdSgHBJ7X6vpdercI7Nts6CxJL8L/4xYXduM6rQfHg3wAn6XIDOvH5F3VjyAS/4BLA0CUhmYg2cHJrl4aEg7MX2RjS2Yj8OxOTqXaNBUgSrMY9mWppc1+kWQAIUqF02vH0pgjsG9h2Uu3yAfAvouOTlKFQ+BYbjo6QY8GgeftH6gSdaYIRlvqZTgHADkWjjTDCHy0nQvVoOqHwGsme8F3T2sCcAXorQe7UAUAiHLx0PETiROBfSH/fXmlrC5SpUIIaehl3seqcUkAEF9FZ/kEA0Rp872jW1ETBLkgLRsXOYC/6GmGXr2waNjvqtsyRjDTiK+ffSVuBPJ980xc8Nvofb38ych/hCMmufuseJ13o/8lmqZ7qcdhtfRvm/+H9v1f275LvraZ7z/b1gcg+Vpmvpbka5n5WpKvJfmOXA8QPpdwz/8JctvhlUQZAAA=",
    filter_def: {},
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    class_name: '电视剧&电影&综艺&动漫',
    class_url: '2&1&3&4',
    limit: 5,
    multi: 1,
    searchable: 2,
    play_parse: true,
    lazy: 'js:input=input.split("?")[0];log(input);',
    // 疑似t4专用的
    // lazy:'js:input={parse: 1, playUrl: "", jx: 1, url: input.split("?")[0]}',
    // 手动调用解析请求json的url,此lazy不方便
    // lazy:'js:input="https://cache.json.icu/home/api?type=ys&uid=292796&key=fnoryABDEFJNPQV269&url="+input.split("?")[0];log(input);let html=JSON.parse(request(input));log(html);input=html.url||input',
    推荐: 'json:data;title;cover;comment;cat+ent_id;description',
    一级: 'json:data.movies;title;cover;pubdate;id;description',
    二级: '',
    二级: $js.toString(() => {
        let html = JSON.parse(fetch(input, fetch_params));
        let data = html.data;
        let tilte = data.title;
        let img = data.cdncover;
        let vod_type = data.moviecategory.join(",");
        let area = data.area.join(",");
        let director = data.director.join(",");
        let actor = data.actor.join(",");
        let content = data.description;
        let base_vod = {
            vod_id: input,
            vod_name: tilte,
            type_name: vod_type,
            vod_actor: actor,
            vod_director: director,
            vod_content: content,
            vod_remarks: area,
            vod_pic: urljoin2(input, img)
        };
        let delta = 50;
        let vod_play = {};
        let sites = data.playlink_sites;
        sites.forEach(function (site) {
            let playList = "";
            let vodItems = [];
            print(data)
            if (data.allupinfo) {
                let total = parseInt(data.allupinfo[site]);
                print(total)
                for (let j = 1; j < total; j += delta) {
                    let end = Math.min(total, j + delta - 1);
                    print(end)
                    let url2 = buildUrl(input, { start: j, end: end, site: site });
                    let vod_data = JSON.parse(fetch(url2), fetch_params).data;
                    if (vod_data != null) {
                        if (vod_data.allepidetail) {
                            vod_data = vod_data.allepidetail[site];
                            vod_data.forEach(function (item, index) {
                                vodItems.push((item.playlink_num || "") + "$" + urlDeal(item.url || ""))
                            })
                        } else {
                            vod_data = vod_data.defaultepisode;
                            vod_data.forEach(function (item, index) {
                                vodItems.push((item.period || "") + (item.name || "") + "$" + urlDeal(item.url) || "")
                            })
                        }
                    }
                }
            } else {
                let item = data.playlinksdetail[site];
                vodItems.push((item.sort || "") + "$" + urlDeal(item.default_url || ""))
            } if (vodItems.length > 0) {
                playList = vodItems.join("#")
            } if (playList.length < 1) {
                return
            } vod_play[site] = playList
        });
        let tabs = Object.keys(vod_play);
        let playUrls = []; for (let id in tabs) {
            print("id:" + id); playUrls.push(vod_play[tabs[id]])
        } if (tabs.length > 0) {
            let vod_play_from = tabs.join("$$$"); let vod_play_url = playUrls.join("$$$");
            base_vod.vod_play_from = vod_play_from;
            base_vod.vod_play_url = vod_play_url
        }
        VOD = base_vod;
    }),
    搜索: 'json:data.longData.rows;titleTxt||titlealias;cover;cat_name;cat_id+en_id;description',
}