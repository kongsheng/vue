(function(t){function n(n){for(var s,o,r=n[0],c=n[1],u=n[2],f=0,d=[];f<r.length;f++)o=r[f],i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],s=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(s=!1)}s&&(a.splice(n--,1),t=o(o.s=e[0]))}return t}var s={},i={1:0},a=[];function o(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)o.d(e,s,function(n){return t[n]}.bind(null,s));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var l=c;a.push([29,0]),e()})({"++QB":function(t,n,e){"use strict";var s=e("MijT"),i=e.n(s);i.a},"1Akf":function(t,n,e){"use strict";var s=e("4Tnz"),i=e.n(s);i.a},"1ApQ":function(t,n,e){},29:function(t,n,e){t.exports=e("Vtdi")},"3Ln1":function(t,n,e){},"3xKS":function(t,n,e){},"4Tnz":function(t,n,e){},"4oXU":function(t,n,e){},"6Z17":function(t,n,e){},"7SWe":function(t,n,e){},8300:function(t,n,e){},"8rw3":function(t,n,e){},Bokx:function(t,n,e){"use strict";var s=e("vWwe"),i=e.n(s);i.a},FvDA:function(t,n,e){},G0Ty:function(t,n,e){"use strict";var s=e("Pfv6"),i=e.n(s);i.a},HVZV:function(t,n,e){},"IKq/":function(t,n,e){"use strict";var s=e("8rw3"),i=e.n(s);i.a},MhW3:function(t,n,e){},MijT:function(t,n,e){},Mxf6:function(t,n,e){"use strict";var s=e("ZRFL"),i=e.n(s);i.a},OHcH:function(t,n,e){"use strict";var s=e("vFDm"),i=e.n(s);i.a},OhDf:function(t,n,e){},Pfv6:function(t,n,e){},Q5c9:function(t,n,e){},QaOA:function(t,n,e){"use strict";var s=e("zSfX"),i=e.n(s);i.a},RWm3:function(t,n,e){},TLFy:function(t,n,e){"use strict";var s=e("Q5c9"),i=e.n(s);i.a},TuJu:function(t,n,e){},Vtdi:function(t,n,e){"use strict";e.r(n);e("VRzm");var s=e("Kw5r"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"app",staticClass:"app",attrs:{id:"app"}},[e("PubHeader",{staticClass:"app__header"}),e("router-view",{staticClass:"app__cont",attrs:{navs:t.navs}}),t.music?e("Player",{staticClass:"app__player"}):t._e()],1)},a=[],o=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("header",{staticClass:"header"},[s("button",{staticClass:"header__back arrow arrow--left",on:{click:t.goBack}}),s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:" header__logo",attrs:{src:e("nWR2")}})]),s("router-link",{staticClass:"header__search_btn",attrs:{to:"/search/index"}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-search"}})])])],1)},r=[],c={name:"PubHeader",methods:{goBack:function(){history.go(-1)}}},u=c,l=(e("Bokx"),e("KHd+")),f=Object(l["a"])(u,o,r,!1,null,"b374038e",null),d=f.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"nav"},t._l(t.navs,function(n,s){return e("router-link",{key:s,staticClass:"nav__link",attrs:{to:n.link,"exact-active-class":"nav__link--active"}},[t._v(t._s(n.text))])}))},m=[],p={name:"PubNav",props:["navs"]},h=p,_=(e("jCXZ"),Object(l["a"])(h,g,m,!1,null,"552aab76",null)),v=_.exports,y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{class:t.isPlayerMin?"player_box player_box--min":"player_box player_box--max"},[e("audio",{ref:"audioEl",staticClass:"hidden",attrs:{src:t.song.url},on:{canplay:t.play}}),t.isPlayerMin?e("PlayerMin",{staticClass:"player_box__player",attrs:{"song-name":t.songName,"singer-name":t.singerName,"singer-img":t.singerImg,"is-playing":t.isPlaying}}):e("PlayerMax",{staticClass:"player_box__player"})],1)},b=[],C=(e("KKXr"),e("yT7P")),w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"player"},[e("img",{staticClass:"player__singer_img",attrs:{src:t.singerImg,alt:""}}),e("div",{staticClass:"player__song_info"},[e("div",{staticClass:"player__song_name"},[t._v(t._s(t.songName))]),e("div",{staticClass:"player__singer_name"},[t._v(t._s(t.singerName))])]),e("div",{staticClass:"player__buttons"},[e("PrevButton",{staticClass:"player__btn_prev"}),e("PlayButton",{staticClass:"player__btn_status"}),e("NextButton",{staticClass:"play__btn_next"})],1)])},x=[],k=e("L2JU"),I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"play",on:{touchstart:t.togglePlay}},[e("svg",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"icon play__pause",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-pause"}})]),e("svg",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"icon play__play",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-play"}})])])},S=[],P={name:"PlayButton",computed:{isPlaying:function(){return this.$store.state.isPlaying}},methods:{togglePlay:function(){this.$store.commit("togglePlay")}}},L=P,M=(e("il4g"),Object(l["a"])(L,I,S,!1,null,"4cec0d43",null)),j=M.exports,O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"next_button",on:{touchstart:t.next}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-next"}})])])},R=[],E={name:"nextButton",methods:{next:function(){this.$store.commit("next")}}},D=E,A=(e("dvoZ"),Object(l["a"])(D,O,R,!1,null,"15bd8545",null)),H=A.exports,U=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"player__btn_prev",on:{touchstart:t.prev}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-previous"}})])])},z=[],N={name:"PrevButton",methods:{prev:function(){this.$store.commit("prev")}}},T=N,Z=(e("oqVw"),Object(l["a"])(T,U,z,!1,null,"c597d45c",null)),B=Z.exports,q={name:"PlayerMin",props:["songName","singerName","singerImg"],components:{PlayButton:j,NextButton:H,PrevButton:B}},V=q,K=(e("TLFy"),Object(l["a"])(V,w,x,!1,null,"0d789289",null)),G=K.exports,X=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"player--max"})},Q=[],W={name:"PlayerMax"},F=W,Y=(e("xh4Y"),Object(l["a"])(F,X,Q,!1,null,"5e867840",null)),J=Y.exports,$=(e("rGqo"),e("pIFo"),{replaceImgUrlSize:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.imgSize;return t.replace(/\{\s*size\s*\}/,n)}}),tt={data:function(){return{imgSize:400,isLoaded:!1}},methods:Object(C["a"])({},$,{loadImgLazy:function(){var t=this,n=this.$refs.lazyImages.filter(function(t){return!t.dataset.isLoaded});n.forEach(function(n){var e=n.getBoundingClientRect().top;e<t.$store.state.device.vh&&(n.src=n.dataset.src,n.dataset.isLoaded=!0)})}})},nt=tt,et={name:"Player",mixins:[nt],components:{PlayerMin:G,PlayerMax:J},data:function(){return{isPlayerMin:!0}},computed:Object(C["a"])({singerName:function(){return this.music.filename.split(/\s+-\s+/)[0]},singerImg:function(){if(this.song.imgUrl)return this.replaceImgUrlSize(this.song.imgUrl)},songName:function(){return this.music.filename.split(/\s+-\s+/)[1]}},Object(k["b"])({isPlaying:function(t){return t.isPlaying},song:function(t){return t.song},music:function(t){return t.music},audioEl:function(t){return t.audioEl},vMax:function(t){return t.device.vMax}})),beforeCreate:function(){var t=this;window.onresize=function(){t.isPlayerMin=window.innerHeight>.8*t.vMax}},destroyed:function(){window.onresize=null},mounted:function(){this.$store.commit("findAudioEl",this.$refs.audioEl)},methods:{play:function(){this.$store.commit("togglePlay",!0)}}},st=et,it=(e("++QB"),Object(l["a"])(st,y,b,!1,null,"4788a345",null)),at=it.exports,ot={name:"App",components:{PubHeader:d,PubNav:v,Player:at},mounted:function(){this.$refs.app.style.height=this.vMax+"px"},computed:{music:function(){return this.$store.state.music},vMax:function(){return this.$store.state.device.vMax}},data:function(){return{navs:[{text:"新歌",name:"new",active:!0,link:"/"},{text:"排行",name:"rank",active:!1,link:"/rank/list"},{text:"歌单",name:"song",active:!1,link:"/song/list"},{text:"歌手",name:"singer",active:!1,link:"/singer/category"}]}}},rt=ot,ct=(e("qSJm"),Object(l["a"])(rt,i,a,!1,null,"694b09b2",null)),ut=ct.exports,lt=e("jE9Z"),ft=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"main"},[e("PubNav",{staticClass:"main__nav",attrs:{navs:t.navs}}),e("router-view",{staticClass:"main__cont"})],1)},dt=[],gt={name:"Main",props:["navs"],components:{PubNav:v},methods:{}},mt=gt,pt=(e("wZDs"),Object(l["a"])(mt,ft,dt,!1,null,"4ae9459e",null)),ht=pt.exports,_t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"new_song"},[e("Slider",{staticClass:"new_song__slider",attrs:{data:t.sliderData}}),e("PubMusicList",{staticClass:"new_song__music_list",attrs:{"music-list":t.newSongs}})],1)},vt=[],yt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"pub_music__list"},t._l(t.musicList,function(n,s){return e("li",{key:s,staticClass:"pub_music__item main_border_bottom"},[t._t("index",null,{data:s}),e("div",{staticClass:"pub_music__name",on:{click:function(e){t.wantPlay(n)}}},[t._v(t._s(n.filename))]),e("button",{staticClass:"pub_music__download"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-download"}})])])],2)}))},bt=[],Ct={name:"PubMusicList",props:["musicList"],methods:{wantPlay:function(t){this.$store.commit("wantPlay",{music:t,musicList:this.$props.musicList})}}},wt=Ct,xt=(e("Mxf6"),Object(l["a"])(wt,yt,bt,!1,null,"a66fd5b0",null)),kt=xt.exports,It=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"slider"},[e("swiper",{ref:"mySwiper",staticClass:"slider__body",attrs:{options:t.swiperOptions}},[t._l(t.data,function(t,n){return e("swiper-slide",{key:n},[e("a",{staticClass:"slider__link",attrs:{href:t.extra.tourl}},[e("img",{staticClass:"slider__img",attrs:{src:t.imgurl,alt:t.title}})])])}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},St=[],Pt=e("chKg"),Lt=(e("36R9"),{name:"Slider",props:["data"],components:{swiper:Pt["swiper"],swiperSlide:Pt["swiperSlide"]},data:function(){return{swiperOptions:{autoplay:{delay:3e3,stopOnLastSlide:!0,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,hideOnClick:!1},on:{imagesReady:function(){this.autoplay.start()},slideChangeTransitionEnd:function(){var t=this;this.isEnd&&(this.autoplay.stop(),//! avoid blink in chrome, change to the same picture after render
setTimeout(function(){t.slideTo(0,0),setTimeout(function(){t.autoplay.start()},t.params.autoplay.delay)}))}}}}}}),Mt=Lt,jt=(e("kNYF"),Object(l["a"])(Mt,It,St,!1,null,"24b02fb7",null)),Ot=jt.exports,Rt=e("vDqi"),Et=e.n(Rt),Dt=(e("xpiv"),"https://bird.ioliu.cn/v1?url="),At="http://m.kugou.com",Ht={newSong:At+"/?json=true",rankList:At+"/rank/list&json=true",rankInfo:At+"/rank/info/?page=1&json=true&rankid=",songList:At+"/plist/index&json=true",songListInfo:At+"/plist/list/songListId?json=true",singerCategory:At+"/singer/class&json=true",singerCategoryInfo:At+"/singer/list/singerCategoryInfoId?json=true",singerInfo:At+"/singer/info/singerId&json=true",song_info:At+"/app/i/getSongInfo.php?cmd=playInfo&hash=",song_info_lyric:"http://www.kugou.com/yy/index.php?r=play/getdata&hash=",hotSearch:"http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30",searchResult:"http://mobilecdn.kugou.com/api/v3/search/song?format=json&page=1&pagesize=20&showtype=1&keyword="};Reflect.ownKeys(Ht).forEach(function(t){Ht[t]=Dt+Ht[t]});var Ut=Ht,zt={name:"NewSong",data:function(){return{newSongs:[],sliderData:[]}},created:function(){this.getNewSong()},methods:{getNewSong:function(){var t=this;Et.a.get(Ut.newSong).then(function(n){var e=n.data;t.newSongs=e.data;var s=e.banner;s.push(s.slice(0,1)[0]),t.sliderData=s})}},components:{PubMusicList:kt,Slider:Ot}},Nt=zt,Tt=(e("IKq/"),Object(l["a"])(Nt,_t,vt,!1,null,"e0320bbe",null)),Zt=Tt.exports,Bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"rank_list"},[0!==t.rankList.length?e("PubList",{staticClass:"rank_list__cont",attrs:{"pub-list":t.rankList},scopedSlots:t._u([{key:"cont",fn:function(n){return e("div",{staticClass:"rank_list__info"},[t._v(t._s(n.data.title))])}}])}):t._e()],1)},qt=[],Vt=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",{staticClass:"pub_list",on:{scroll:t.loadImgLazy}},t._l(t.pubList,function(n,i){return s("li",{key:i,staticClass:"pub_list__item main_border_bottom"},[s("router-link",{staticClass:"pub_list__link",attrs:{to:n.path}},[s("img",{ref:"lazyImages",refInFor:!0,staticClass:"pub_list__img",attrs:{src:e("a83/"),"data-src":n.imgUrl,"data-is-loaded":t.isLoaded}}),t._t("cont",null,{data:n}),s("button",{staticClass:"pub_list__btn arrow arrow--right"})],2)],1)}))},Kt=[],Gt={name:"PubList",mixins:[nt],props:["pubList"],mounted:function(){this.loadImgLazy()}},Xt=Gt,Qt=(e("1Akf"),Object(l["a"])(Xt,Vt,Kt,!1,null,"bd511054",null)),Wt=Qt.exports,Ft={name:"RankList",mixins:[nt],components:{PubList:Wt},data:function(){return{rankList:[]}},created:function(){this.getRank()},methods:{getRank:function(){var t=this;Et.a.get(Ut.rankList).then(function(n){var e=n.data;e.rank.list.forEach(function(n){n.imgUrl=t.replaceImgUrlSize(n.imgurl),n.path="/rank/info/"+n.rankid,n.title=n.rankname,t.rankList.push(n)})})}}},Yt=Ft,Jt=(e("gp92"),Object(l["a"])(Yt,Bt,qt,!1,null,"be129a4a",null)),$t=Jt.exports,tn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"song_list"},[0!==t.songList.length?e("PubList",{staticClass:"song_list__cont",attrs:{"pub-list":t.songList},scopedSlots:t._u([{key:"cont",fn:function(n){return e("div",{staticClass:"song_list__info"},[e("div",{staticClass:"song_list__title"},[t._v(t._s(n.data.title))]),e("div",{staticClass:"song_list__star"},[e("svg",{staticClass:"icon song_list__icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-music"}})]),e("span",{staticClass:"song_list__popularity"},[t._v(t._s(n.data.popularity))])])])}}])}):t._e()],1)},nn=[],en={name:"SongList",mixins:[nt],components:{PubList:Wt},data:function(){return{songList:[]}},created:function(){this.getSongList()},methods:{getSongList:function(){var t=this;Et.a.get(Ut.songList).then(function(n){var e=n.data;e.plist.list.info.forEach(function(n){n.imgUrl=t.replaceImgUrlSize(n.imgurl),n.path="/song/list/"+n.specialid,n.title=n.specialname,n.popularity=n.playcount,t.songList.push(n)})})}}},sn=en,an=(e("OHcH"),Object(l["a"])(sn,tn,nn,!1,null,"2696d452",null)),on=an.exports,rn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"singer_category"},t._l(t.singerCategories,function(n,s){return e("ul",{key:s,staticClass:"singer_category__list main_border"},t._l(n.data,function(n,s){return e("li",{key:"1"+s,staticClass:"singer_category__item main_border_bottom"},[e("router-link",{staticClass:"singer_category__link",attrs:{to:n.path}},[e("div",{staticClass:"singer_category__title"},[t._v(t._s(n.classname))]),e("button",{staticClass:"singer_category_btn arrow arrow--right"})])],1)}))}))},cn=[],un=(e("dRSK"),{name:"SingerCategory",data:function(){return{singerCategories:[]}},created:function(){this.getSingerCategories()},methods:{getSingerCategories:function(){var t=this;Et.a.get(Ut.singerCategory).then(function(n){var e=n.data;e.list.reduce(function(t,n){n.path="/singer/list/"+n.classid;var e=t.find(function(t){return t.category===n.classname.substring(0,2)});return e?e.data.push(n):t.push({category:n.classname.substring(0,2),data:[n]}),t},t.singerCategories)})}}}),ln=un,fn=(e("wapM"),Object(l["a"])(ln,rn,cn,!1,null,"684548ee",null)),dn=fn.exports,gn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isRankInfoShow?e("section",{staticClass:"rank_info"},[e("PubModuleHead",{attrs:{"module-head-info":t.getModuleHeadInfo()}},[e("time",{staticClass:"rank_info__update_time",attrs:{slot:"moduleUpdateTime"},slot:"moduleUpdateTime"},[t._v("\n      "+t._s(t.msg)+" "+t._s(t.formatDate())+"\n    ")])]),e("PubMusicList",{attrs:{"music-list":t.getMusicList()},scopedSlots:t._u([{key:"index",fn:function(n){return e("div",{class:"rank_info__index rank_info__index"+(n.data+1)},[t._v(t._s(n.data+1))])}}])})],1):t._e()},mn=[],pn=(e("9XZr"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"module__head",style:"background-image:url("+t.moduleHeadInfo.imgUrl+")"},[e("h6",{staticClass:"module__title"},[t._v(t._s(t.moduleHeadInfo.name))]),t._t("moduleUpdateTime")],2),t._t("moduleDes")],2)}),hn=[],_n={name:"PubModuleHead",props:["moduleHeadInfo"]},vn=_n,yn=(e("jVgL"),Object(l["a"])(vn,pn,hn,!1,null,"46bede66",null)),bn=yn.exports,Cn={name:"RankInfo",mixins:[nt],components:{PubModuleHead:bn,PubMusicList:kt},data:function(){return{rankInfo:{},isRankInfoShow:!1,msg:"上次更新时间 : ",formatDate:function(){var t=new Date(1e3*this.rankInfo.songs.timestamp);return t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0")},getModuleHeadInfo:function(){return{imgUrl:this.replaceImgUrlSize(this.rankInfo.info.banner7url),name:this.rankInfo.info.rankname}},getMusicList:function(){return this.rankInfo.songs.list}}},created:function(){var t=this.$route.path.split("/").pop();this.getRankInfo(t)},methods:{getRankInfo:function(t){var n=this;Et.a.get(Ut.rankInfo+t).then(function(t){var e={info:t.data.info,songs:t.data.songs};n.rankInfo=e,n.isRankInfoShow=!0}).catch(function(t){alert(t)})}}},wn=Cn,xn=(e("g3PQ"),Object(l["a"])(wn,gn,mn,!1,null,"dc96125c",null)),kn=xn.exports,In=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isSongListInfoShow?e("section",{staticClass:"song_list_info"},[e("PubModuleHead",{attrs:{"module-head-info":t.getModuleHeadInfo()}},[e("PubModuleDes",{attrs:{slot:"moduleDes",description:t.getModuleHeadInfo().intro},slot:"moduleDes"})],1),e("PubMusicList",{attrs:{"music-list":t.getMusicList()}})],1):t._e()},Sn=[],Pn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.showMore?"module_info__intro main_box_shadow show_more":"module_info__intro main_box_shadow"},[e("p",{staticClass:"module_info__text"},[t._v(t._s(t.description))]),e("button",{class:t.showMore?"more_btn more_btn--up":"more_btn",on:{click:function(n){t.showMore=!t.showMore}}})])},Ln=[],Mn={name:"PubModuleDes",props:["description"],data:function(){return{showMore:!1}},methods:{}},jn=Mn,On=(e("G0Ty"),Object(l["a"])(jn,Pn,Ln,!1,null,"787692ac",null)),Rn=On.exports,En={name:"SongListInfo",mixins:[nt],components:{PubModuleHead:bn,PubMusicList:kt,PubModuleDes:Rn},data:function(){return{songListInfo:{},isSongListInfoShow:!1,getModuleHeadInfo:function(){var t=this.songListInfo.info.list;return{imgUrl:this.replaceImgUrlSize(t.imgurl),name:t.specialname,intro:t.intro}},getMusicList:function(){return this.songListInfo.songs.list.info}}},created:function(){var t=this.$route.path.split("/").pop();this.getSongListInfo(t)},methods:{getSongListInfo:function(t){var n=this;Et.a.get(Ut.songListInfo.replace(/songListId?/i,t)).then(function(t){var e=t.data,s={info:e.info,songs:e.list};n.songListInfo=s,n.isSongListInfoShow=!0}).catch(function(t){alert(t)})}}},Dn=En,An=(e("cusK"),Object(l["a"])(Dn,In,Sn,!1,null,"0479dad2",null)),Hn=An.exports,Un=function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.isSingerCategoryInfoShow?s("section",{staticClass:"singer_category_info"},[s("PubModuleTitle",{attrs:{title:t.singerCategoryInfo.info.name}}),s("ul",{staticClass:"singer_category_info__list",on:{scroll:t.loadImgLazy}},t._l(t.singerCategoryInfo.data,function(n,i){return s("li",{key:i,staticClass:"singer_category_info__item main_border_bottom"},[s("router-link",{staticClass:"singer_category_info__link",attrs:{to:n.path}},[s("img",{ref:"lazyImages",refInFor:!0,staticClass:"singer_category_info__img",attrs:{src:e("a83/"),"data-src":n.imgUrl,"data-is-loaded":t.isLoaded}}),s("div",{staticClass:"singer_category_info__name"},[t._v(t._s(n.name))])])],1)}))],1):t._e()},zn=[],Nn=(e("91GP"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h4",{staticClass:"module_title main_box_shadow"},[t._v(t._s(t.title))])}),Tn=[],Zn={name:"PubModuleTitle",props:["title"]},Bn=Zn,qn=(e("fVBQ"),Object(l["a"])(Bn,Nn,Tn,!1,null,"3c1486b4",null)),Vn=qn.exports,Kn={name:"SingerCategoryInfo",mixins:[nt],components:{PubModuleTitle:Vn},data:function(){return{singerCategoryInfo:{},isSingerCategoryInfoShow:!1}},created:function(){var t=this.$route.path.split("/").pop();this.getSingerCategoryInfo(t)},mounted:function(){this.$watch("isSingerCategoryInfoShow",function(){this.loadImgLazy()})},methods:{getSingerCategoryInfo:function(t){var n=this;Et.a.get(Ut.singerCategoryInfo.replace(/singerCategoryInfoId?/i,t)).then(function(t){var e=t.data,s={info:{id:e.classid,name:e.classname,count:e.singers.total},data:e.singers.list.info};e.singers.list.info.forEach(function(t){t.id=t.singerid,t.name=t.singername,t.imgUrl=n.replaceImgUrlSize(t.imgurl),t.path="/singer/info/"+t.id}),Object.assign(n.singerCategoryInfo,s),n.singerCategoryInfo=s,n.isSingerCategoryInfoShow=!0}).catch(function(t){alert(t)})}}},Gn=Kn,Xn=(e("QaOA"),Object(l["a"])(Gn,Un,zn,!1,null,"c8698cc8",null)),Qn=Xn.exports,Wn=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isSingerInfoShow?e("section",{staticClass:"singer_info"},[e("PubModuleHead",{attrs:{"module-head-info":t.getModuleHeadInfo()}},[e("PubModuleDes",{attrs:{slot:"moduleDes",description:t.getModuleHeadInfo().intro},slot:"moduleDes"})],1),e("PubMusicList",{attrs:{"music-list":t.getMusicList()}})],1):t._e()},Fn=[],Yn={name:"SingerInfo",mixins:[nt],components:{PubModuleHead:bn,PubMusicList:kt,PubModuleDes:Rn},data:function(){return{singerInfo:{},isSingerInfoShow:!1,getModuleHeadInfo:function(){return this.singerInfo.info},getMusicList:function(){return this.singerInfo.data}}},created:function(){var t=this.$route.path.split("/").pop();this.getSingerInfo(t)},methods:{getSingerInfo:function(t){var n=this;Et.a.get(Ut.singerInfo.replace(/singerId?/i,t)).then(function(t){var e=t.data,s={info:{id:e.info.singerid,name:e.info.singername,count:e.info.songcount,albumcount:e.info.albumcount,imgUrl:n.replaceImgUrlSize(e.info.imgurl),intro:e.info.intro},data:e.songs.list};e.songs.list.forEach(function(t){t.name=t.filename}),Object.assign(n.singerInfo,s),n.singerInfo=s,n.isSingerInfoShow=!0}).catch(function(t){alert(t)})}}},Jn=Yn,$n=(e("mrmz"),Object(l["a"])(Jn,Wn,Fn,!1,null,"3203b8ab",null)),te=$n.exports,ne=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"search"},[e("PubModuleTitle",{staticClass:"search__title",attrs:{title:t.title}}),e("div",{staticClass:"search__cont"},[e("form",{staticClass:"search__form",on:{submit:function(t){t.preventDefault()}}},[e("input",{staticClass:"search__input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.keyword},on:{"update:value":function(n){t.keyword=n},input:function(n){t.keyword=arguments[0].target.value.trim()},keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.getSearchRes(n):null}}}),e("button",{class:t.isSearchResShow?"search__btn search__btn--active":"search__btn",attrs:{type:"button"},on:{click:t.getSearchRes}},[t._v(t._s(t.title))])]),t.isSearchRecShow?e("div",{staticClass:"search__rec"},[e("h6",{staticClass:"search__type"},[t._v(t._s(t.searchType))]),e("ul",{staticClass:"search__list"},t._l(t.searchRecArr,function(n,s){return e("li",{key:s,staticClass:"search__item main_border_bottom",on:{click:function(e){t.getTargetList(n.keyword)}}},[t._v(t._s(n.keyword))])}))]):t._e(),t.isSearchResShow?e("div",{staticClass:"search__res"},[e("div",{staticClass:"search__count"},[t._v("共有"+t._s(t.searchRes.info.length)+"条结果")]),e("PubMusicList",{staticClass:"search__res-list",attrs:{"music-list":t.searchRes.info}})],1):t._e()])],1)},ee=[],se={name:"Search",components:{PubModuleTitle:Vn,PubMusicList:kt},data:function(){return{title:"搜索",searchType:"最近热门",placeholder:"歌手/歌名/拼音",keyword:"",searchRecArr:[],isSearchRecShow:!0,searchRes:{},isSearchResShow:!1}},created:function(){this.getSearchRec()},mounted:function(){var t=document.getElementsByClassName("search__cont")[0];window.search__cont=t;//! bug with qq browser
var n=function(){t.scrollTop&&console.log(event.type,t.scrollTop)};window.addEventListener("touchstart",n),window.addEventListener("touchmove",n)},methods:{getSearchRec:function(){var t=this;Et.a.get(Ut.hotSearch).then(function(n){var e=n.data;e.data.info.forEach(function(n){t.searchRecArr.push(n)})}).catch(function(t){alert(t)})},getSearchRes:function(){var t=this;if(""!==this.keyword){var n=Ut.searchResult+encodeURIComponent(this.keyword);Et.a.get(n).then(function(n){t.searchRes=n.data.data,t.isSearchRecShow=!1,t.isSearchResShow=!0})}},getTargetList:function(t){this.keyword=t,this.getSearchRes()}}},ie=se,ae=(e("Wer1"),Object(l["a"])(ie,ne,ee,!1,null,"31105649",null)),oe=ae.exports;s["a"].use(lt["a"]);var re=new lt["a"]({routes:[{path:"/",component:ht,children:[{path:"/",component:Zt},{path:"rank/list",component:$t},{path:"song/list",component:on},{path:"singer/category",component:dn}]},{path:"/rank/info/:id",component:kn},{path:"/song/list/:id",component:Hn},{path:"/singer/list/:id",component:Qn},{path:"/singer/info/:id",component:te},{path:"/search/index",component:oe}]});e("INYr");s["a"].use(k["a"]);var ce=new k["a"].Store({state:{musicList:[],music:null,song:{},audioEl:{},isPlaying:!1,device:{vh:document.documentElement.clientHeight,vMax:Math.max(document.documentElement.clientHeight,document.documentElement.clientWidth)}},getters:{curMusicIndex:function(t){return t.musicList.findIndex(function(n){return n===t.music})}},mutations:{findAudioEl:function(t,n){t.audioEl=n},wantPlay:function(t,n){var e=n.music,s=n.musicList,i=void 0===s?t.musicList:s;t.music=e,t.musicList=i,Et.a.get(Ut.song_info+e.hash).then(function(n){t.song=n.data})},togglePlay:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!t.isPlaying;n?(t.audioEl.play(),t.isPlaying=!0):(t.audioEl.pause(),t.isPlaying=!1)},next:function(t){var n=ce.getters.curMusicIndex;n=n===t.musicList.length-1?-1:n,ce.commit("wantPlay",{music:t.musicList[n+1]})},prev:function(t){var n=ce.getters.curMusicIndex;n=0===n?t.musicList.length:n,ce.commit("wantPlay",{music:t.musicList[n-1]})}}});window.store=ce;var ue=ce;e("TuJu"),e("MhW3"),e("OhDf");s["a"].config.productionTip=!1,new s["a"]({router:re,store:ue,render:function(t){return t(ut)}}).$mount("#app")},WeTg:function(t,n,e){},Wer1:function(t,n,e){"use strict";var s=e("FvDA"),i=e.n(s);i.a},"Y/MS":function(t,n,e){},ZRFL:function(t,n,e){},"a83/":function(t,n){t.exports="data:image/png;base64,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"},cD3i:function(t,n,e){},cusK:function(t,n,e){"use strict";var s=e("Y/MS"),i=e.n(s);i.a},dvoZ:function(t,n,e){"use strict";var s=e("WeTg"),i=e.n(s);i.a},fVBQ:function(t,n,e){"use strict";var s=e("hPCt"),i=e.n(s);i.a},g3PQ:function(t,n,e){"use strict";var s=e("6Z17"),i=e.n(s);i.a},gp92:function(t,n,e){"use strict";var s=e("3Ln1"),i=e.n(s);i.a},hPCt:function(t,n,e){},il4g:function(t,n,e){"use strict";var s=e("nQ2z"),i=e.n(s);i.a},jCXZ:function(t,n,e){"use strict";var s=e("3xKS"),i=e.n(s);i.a},jVgL:function(t,n,e){"use strict";var s=e("1ApQ"),i=e.n(s);i.a},kNYF:function(t,n,e){"use strict";var s=e("HVZV"),i=e.n(s);i.a},mrmz:function(t,n,e){"use strict";var s=e("7SWe"),i=e.n(s);i.a},nQ2z:function(t,n,e){},nWR2:function(t,n,e){t.exports=e.p+"static/img/logo.d488aa15.png"},oqVw:function(t,n,e){"use strict";var s=e("8300"),i=e.n(s);i.a},q5sl:function(t,n,e){},qSJm:function(t,n,e){"use strict";var s=e("RWm3"),i=e.n(s);i.a},vFDm:function(t,n,e){},vWwe:function(t,n,e){},wZDs:function(t,n,e){"use strict";var s=e("4oXU"),i=e.n(s);i.a},wapM:function(t,n,e){"use strict";var s=e("q5sl"),i=e.n(s);i.a},xh4Y:function(t,n,e){"use strict";var s=e("cD3i"),i=e.n(s);i.a},zSfX:function(t,n,e){}});
//# sourceMappingURL=app.aa31bd90.js.map