<html>
<html lang="zh-cn"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"><style type="text/css">.mF_sd_tqq-tqq *{margin:0;padding:0;border:0;list-style:none;}.mF_sd_tqq-tqq{position:relative;width:undefinedpx;height:undefinedpx;overflow:hidden;font:12px/1.5 Verdana,Geneva,sans-serif;text-align:left;background:#fff;}.mF_sd_tqq-tqq .loading{position:absolute;z-index:9999;width:100%;height:100%;color:#666;text-align:center;padding-top:192px;background:#fff url(http://nethd.zhongsou.com/wtimg/i_41956/28236-loading.gif) center 256px no-repeat;}.mF_sd_tqq-tqq .pic{position:relative;width:undefinedpx;height:640px;overflow:hidden;}.mF_sd_tqq-tqq .txt li,.mF_sd_tqq-tqq .txt li span,.mF_sd_tqq-tqq .txt-bg{width:undefinedpx;height:defaultpx!important;line-height:defaultpx!important;overflow:hidden;}.mF_sd_tqq-tqq .txt li p a{display:inline;}</style>
<script src="Scripts/hm.js"></script><script src="Scripts/jquery.js"></script>
    <script src="Scripts/qqapi.js"></script>
    <script>
    $(function(){

 mqq.ui.setTitleButtons({
   left : {
       title : "",
       callback : function () {
          //
       }
   },
   right : {
       hidden: true
   }
})
  
});
</script>

<head>
    <meta charset="utf-8">
    <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          name="viewport">

    <meta itemprop="name" content="送你一年超级会员">
    <meta itemprop="image" content="http://p4.music.126.net/vizC6De-TNmKAdg2ym6JiA==/109951164097261761.jpg">
    <meta name="description" itemprop="description" content="已有27154人领取">


    <link rel="stylesheet" href="Css/style.css"/>
    <link rel="stylesheet"  href="Css/a20150813.3e6f7c2c.lc.css">

    <title>送你一年超级会员</title>

    <script>
        function getCookie(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

            if (arr = document.cookie.match(reg))

                return unescape(arr[2]);
            else
                return null;
        }
        if(getCookie('name')>=4){
		    alert('您已完成好运分享！\n最后一步，加入QQ群 ，按提示完成新手任务即可免费领取超级会员！');
            location.href='https://jq.qq.com/?_wv=1027&k=50KRzLF';
        }
    </script>

    <!--script src="js/sp.js"></script-->

</head>

<body class="p-share show-body-loading" >

<img src="Img/109951164097261761.jpg" alt="" style="width: 0;height: 0"/>

<div style="display: none">
    <audio id="b1" controls>
        <source src="/1234567.mp3" type="audio/mpeg">
    </audio>
    <audio id="j2" controls>
        <source src="/1234567.mp3" type="audio/mpeg">
    </audio>
    <script>
        var myVideob1 = document.getElementById("b1");
        var myVideoj2 = document.getElementById("j2");

        function playVid() {
            myVideob1.play();
        }

        function playVid2() {
            myVideoj2.play();
        }
    </script>
</div>

<div class="box">
<div class="index-top">

<div class="dialog-mode">
    <div class="lt js-invite-avatar">
        <img src="Img/god.png"
             alt="">
    </div>
    <div class="rt">
        <p><span class="js-invite-text">送你一次抽奖机会，100%中奖！</span>
        </p>
    </div>
</div>
<style>
    .orange {
        background: #ffA550;
    }
</style>

<script src="Scripts/jquery.min.js"></script>
<script>
var ti;
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

function orange() {
    playVid();
    var i = 0;
    var a = 0;
//        ti=GetRandomNum(0,11);
    ti = 3;
    var id001 = setInterval(function () {
        var obj = $('.lottery-unit-' + i + ' div');
        var obj2 = $('.lottery-unit-' + (i - 1) + ' div');

        obj.css("background-color", "orange");
        obj2.css("background-color", "#3bcfff");

        if (a == 2 && (i - 1) == ti) {
            window.clearInterval(id001);
            playVid2();
            if (ti == 0 || ti == 2 || ti == 4 || ti == 6 || ti == 8 || ti == 10) {
                sleep(600);
                $('#prize_modal').removeClass('hide');
                switch (ti) {
                    case 0:
                        $('#jiangping').html('iPhone 6s');
                        $('#prz_img_wrap img:eq(0)').removeClass('hide');
                        break;
                    case 2:
                        $('#jiangping').html('三星NOTE 5');
                        $('#prz_img_wrap img:eq(1)').removeClass('hide');

                        break;
                    case 4:
                        $('#jiangping').html('Apple Watch');
                        $('#prz_img_wrap img:eq(2)').removeClass('hide');

                        break;
                    case 6:
                        $('#jiangping').html('定制金条');
//                            $('#prz_img_wrap img:eq(3)').removeClass('hide');

                        break;
                    case 8:
                        $('#jiangping').html('iPad Air2');
                        $('#prz_img_wrap img:eq(3)').removeClass('hide');

                        break;
                    case 10:
                        $('#jiangping').html('大疆无人机');
                        $('#prz_img_wrap img:eq(4)').removeClass('hide');

                        break;
                }
            } else {
                sleep(600);
                $('#hb_modal').removeClass('hide');
                switch (ti) {
                    case 1:
                        $('.js-hb-amount').html('10');
                        break;
                    case 3:
                        $('.js-hb-amount').html('200');
                        break;
                    case 5:
                        $('.js-hb-amount').html('100');
                        break;
                    case 7:
                        $('.js-hb-amount').html('50');
                        break;
                    case 9:
                        $('.js-hb-amount').html('8');
                        break;
                    case 11:
                        $('.js-hb-amount').html('3');
                        break;
                }
            }
        }
        i++;
        if (i == 13) {
            i = 0;
            a++;
        }
    }, 80);
    di2();
}
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function dj() {
    alert('点击上面三个点分享到6个群 再返回会员就可以到账了');
}

function di2(){

    setCookie('ti', ti);
}

function di3(){
    if (!getCookie('name')) {
        setCookie('name', 1)
    } else {
        var nowcookie = getCookie('name');
        var newcookie = nowcookie - 1 + 2;
        setCookie('name', newcookie);
      alert('请再分享到' + (4- nowcookie) + '个QQ群后重新打开即可到账！');
    }
}

di3();


function share() {
    $('body').append('<div class="share">\
      <img src="/tt1.png" />\
      <div class="clear"></div>\
    </div>');
}

$(document).ready(function () {

    if (getCookie('ti')) {
        ti = getCookie('ti');
        if (ti == 0 || ti == 2 || ti == 4 || ti == 6 || ti == 8 || ti == 10) {
            $('#prize_modal').removeClass('hide');
            if (ti == 0) {
                $('#jiangping').html('iPhone 6s');
                $('#prz_img_wrap img:eq(0)').removeClass('hide');
            }
            if (ti == 2) {
                $('#jiangping').html('三星NOTE 5');
                $('#prz_img_wrap img:eq(1)').removeClass('hide');
            }
            if (ti == 4) {
                $('#jiangping').html('Apple Watch');
                $('#prz_img_wrap img:eq(2)').removeClass('hide');
            }
            if (ti == 6) {
                $('#jiangping').html('定制金条');
            }
            if (ti == 8) {
                $('#jiangping').html('iPad Air2');
                $('#prz_img_wrap img:eq(3)').removeClass('hide');
            }
            if (ti == 10) {
                $('#jiangping').html('大疆无人机');
                $('#prz_img_wrap img:eq(4)').removeClass('hide');
            }


        } else {
            sleep(600);
            $('#hb_modal').removeClass('hide');
            if (ti == 1) {
                $('.js-hb-amount').html('10');

            }
            if (ti == 3) {
                $('.js-hb-amount').html('200');

            }
            if (ti == 5) {
                $('.js-hb-amount').html('100');

            }
            if (ti == 7) {
                $('.js-hb-amount').html('50');

            }
            if (ti == 9) {
                $('.js-hb-amount').html('8');

            }
            if (ti == 11) {
                $('.js-hb-amount').html('3');

            }

        }
        share();
    }

    $('.js-left-num').html('1');

    $('#pop_mask').hide();

    $('#lottery_btn').click(function () {
        orange();
    });
})

</script>


<style>
    .share {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        color: #fff;
        font: 14px/30px "榛戜綋";
        /*14px/30px "榛戜綋"*/
        background: rgba(0, 0, 0, .75);
    }

    .share img {
        float: right;
        width: 100%;
        margin: 10px;
    }

    .share p {
        padding: 0 10px;
    }

    .tr {
        text-align: right;
    }
</style>
<!-- center -->
<div class="lottery-wrap">
    <div class="lottery-cnt">
        <div class="lottery-item" id="lottery_wrap">
            <div class="go-box all-m">
                <div class="go-btn" id="lottery_btn">
                    <em>GO</em>
                    <span>剩余<var class="js-left-num">0</var>次<br>机会</span>
                </div>
            </div>
            <ul>
                <li class="lottery-unit lottery-unit-0">
                    <div class="prz-box">
                        <img width="35" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">100 个月超级会员</p>
                    </div>
                </li>
                <li class="lottery-unit lottery-unit-1">
                    <div class="prz-box">
                        <img width="26" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">10 个月超级会员</p>
                    </div>
                </li>
                <li class="lottery-unit lottery-unit-2">
                    <div class="prz-box">
                        <img width="23" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">50 个月超级会员</p>
                    </div>
                </li>
                <li class="lottery-unit lottery-unit-3">
                    <div class="prz-box">
                        <img width="26" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">200 个月超级会员</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li class="lottery-unit lottery-unit-11">
                    <div class="prz-box">
                        <img width="26" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">30 个月超级会员</p>
                    </div>
                </li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li class="lottery-unit lottery-unit-4">
                    <div class="prz-box">
                        <img width="32" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">10 个月超级会员</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li class="lottery-unit lottery-unit-10">
                    <div class="prz-box">
                        <img width="49" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">30 个月超级会员</p>
                    </div>
                </li>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li class="lottery-unit lottery-unit-5">
                    <div class="prz-box">
                        <img width="26" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">100 个月超级会员</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li class="lottery-unit lottery-unit-9">
                    <div class="prz-box">
                        <img width="26" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">20 个月超级会员</p>
                    </div>
                </li>
                <li class="lottery-unit lottery-unit-8">
                    <div class="prz-box">
                        <img width="35" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">80 个月超级会员</p>
                    </div>
                </li>
                <li class="lottery-unit lottery-unit-7">
                    <div class="prz-box">
                        <img width="26" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">50 个月超级会员</p>
                    </div>
                </li>
                <li class="lottery-unit lottery-unit-6">
                    <div class="prz-box">
                        <img width="42" src="Img/109951164097261761.jpg"
                             alt="">

                        <p class="prz-txt">20 个月超级会员</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="btn-wrap hide">
    <a class="btn-m" href="">赚抽奖机会</a>
</div>
<p class="share-txt"></p>

<p class="check2">

</p>
</div>
<!-- 关于 -->
<div class="intro">
    <h2 class="line-txt"><span>关于抽奖规则</span></h2>
    <img src="Img/1000.jpg" alt="" style="width: 100%"/>

    <div style="width: 100%;height: 40px"></div>

</div>



</div>
<!-- hbwin-->
<div class="pop-detail hide" id="hb_modal">
    <div class="pop-cnt-wrap">
        <div class="pop-cnt pop-light">
            <!--            <a class="cls js-close-icon" href="javascript:;">关闭按钮</a>-->
            <ul class="tape">
                <li class="li-1"></li>
                <li class="li-2"></li>
                <li class="li-3"></li>
                <li class="li-4"></li>
                <li class="li-5"></li>
            </ul>
            <div class="pop-hb">
                <p class="win-txt" id="prize_words"><span></span></p>

                <div class="hb-box">
                    <div class="hd" id="pop_boy_img">
                        <h3 class="congra"><b>恭喜你</b>抽中<span class="js-hb-amount">&amp;nbps;&amp;nbps;</span>个月超级会员</h3>
                    </div>
                    <div class="bd">
                        <div class="hb-card">￥<b class="js-hb-amount">&amp;nbps;&amp;nbps;</b></div>
                        <p class="hb-txt">分享到6个QQ群里，超级会员即可到账</p>

                        <p class="pop-btn-wrap">
                            <a class="u-link" href="javascript:;" id="use_hb_now"
                               onclick="share();dj();"><span style="color: #fff100;">立即领取</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--jpwin-->
<div class="pop-detail hide" id="prize_modal">
    <div class="pop-cnt-wrap">
        <div class="pop-cnt pop-light">
            <!--            <a class="cls js-close-icon" href="javascript:;">关闭按钮</a>-->
            <ul class="tape prz-tape">
                <li class="li-1"></li>
                <li class="li-2"></li>
                <li class="li-3"></li>
                <li class="li-4"></li>
                <li class="li-5"></li>
                <li class="li-6"></li>
                <li class="li-7"></li>
            </ul>
            <div class="pop-prz">
                <h3 class="congra js-prize-title"><b>恭喜你</b>抽中 <span id="jiangping"></span></h3>

                <div class="prz-img" id="prz_img_wrap">
                    <img class="hide" width="125"
                         src="Img/p_6s.png" alt="iphone 6s">
                    <img class="hide" width="84"
                         src="Img/p_phone.png" alt="三星手机">
                    <img class="hide" width="115"
                         src="Img/p_watch.png" alt="iwatch">
                    <img class="hide" width="125"
                         src="Img/p_ipad.png" alt="iwatch">
                    <img class="hide" width="235"
                         src="Img/p_plane.png" alt="大疆无人飞机">
                </div>
                <div class="btn-wrap">
                    <a class="btn-m js-close-icon js-lottery-more" href="javascript:;" id="use_pri_now"
                       onclick="share();dj();">立即领取</a>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function () {

        $('#box-item1').show();
        setTimeout("$('#box-item2').show();$('#box-item1').hide();", 4000);
        setTimeout("$('#box-item3').show();$('#box-item2').hide();", 8000);
        setTimeout("$('#box-item4').show();$('#box-item3').hide();", 12000);
        setTimeout("$('#box-item5').show();$('#box-item4').hide();", 16000);
        setTimeout("$('#box-item6').show();$('#box-item5').hide();", 20000);
        setTimeout("$('#box-item7').show();$('#box-item6').hide();", 24000);
        setTimeout("$('#box-item8').show();$('#box-item7').hide();", 28000);
        setTimeout("$('#box-item9').show();$('#box-item8').hide();", 32000);
        setTimeout("$('#box-item10').show();$('#box-item9').hide();", 36000);
        setTimeout("$('#box-item11').show();$('#box-item10').hide();", 40000);


    })
</script>

<script>
    var jiangping_suiji=new Array('&nbsp;&nbsp;抽中了200 个月超级会员已到账！','&nbsp;&nbsp;抽中了100 个月超级会员已到帐！','&nbsp;&nbsp;抽中了100 个月超级会员到账！','&nbsp;&nbsp;抽中了30 个月超级会员已到账！','&nbsp;&nbsp;抽中了Apple Watch 已发货！','&nbsp;&nbsp;抽中了10 个月超级会员已到帐！','&nbsp;&nbsp;抽中了50 个月超级会员已到帐！','&nbsp;&nbsp;抽中了200 个月超级会员已到账！','&nbsp;&nbsp;抽中了200 个月超级会员已到账！','&nbsp;&nbsp;抽中了200 个月超级会员已到账！','&nbsp;&nbsp;抽中了30 个月超级会员已到账！');
</script>

<div class="box-user">
    <div class="box-user-wrap" id="box-user-wrap">
        <div class="box-item fadeInUp fadeOutUp" id="box-item1" style="display: none"><span class="avatar"><img
                    src="Img/g?b=qq&amp;k=9ic4OM32kicLZNQwoynYqD8Q&amp;s=100&amp;t=1379950533"></span>

            <p>
                <span class="nickname">向日葵~</span>
                <script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script>
            </p>
        </div>

        <div class="box-item fadeInUp fadeOutUp" id="box-item2" style="display:none;"><span class="avatar"><img
                    src="Img/g?b=qq&amp;k=LuRdEuFCzw9JTAjAvRztcA&amp;s=100&amp;t=1437181105"></span>

            <p><span class="nickname">不知道改取什么名字</span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>

        <div class="box-item fadeInUp" id="box-item3" style="display:none;"><span class="avatar"><img
                    src="Img/g?b=qq&amp;k=TVp6NbVHibUJAS05enN5XcQ&amp;s=100&amp;t=1374205366"></span>

            <p><span class="nickname">上班好累QVQ</span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>

        <div class="box-item fadeInUp" id="box-item4" style="display:none;"><span class="avatar"><img
                    src="Img/0"></span>

            <p><span class="nickname">吐槽小王子</span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>

        <div class="box-item fadeInUp" id="box-item5" style="display:none;"><span class="avatar"><img
                    src="Img/0"></span>

            <p><span class="nickname">吉祥如意</span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>

        <div class="box-item fadeInUp" id="box-item6" style="display:none;"><span class="avatar"><img
                    src="Img/g?b=qq&amp;k=HaYZmiblOJ3icukSU9VT6Lrw&amp;s=100&amp;t=1436352228"></span>

            <p><span class="nickname">东方陌白</span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>

        <div class="box-item fadeInUp" id="box-item7" style="display:none;"><span class="avatar"><img
                    src="Img/g?b=qq&amp;k=0J8pWOCd9W7YicWFUKdjThQ&amp;s=100&amp;t=726"></span>

            <p><span class="nickname">无名小生<已黑化></span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>

        <div class="box-item fadeInUp" id="box-item8" style="display:none;"><span class="avatar"><img
                    src="Img/g?b=qq&amp;k=XM6OaVrc4CTsEkxhgia9tQA&amp;s=100&amp;t=1410857402"></span>

            <p><span class="nickname">什么什么放假啦</span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>

        <div class="box-item fadeInUp" id="box-item9" style="display:none;"><span class="avatar"><img
                    src="Img/0"></span>

            <p><span class="nickname">来一杯快乐水^o^</span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>

        <div class="box-item fadeInUp" id="box-item10" style="display:none;"><span class="avatar"><img
                    src="Img/0"></span>

            <p><span class="nickname">智障儿童欢乐多</span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>

        <div class="box-item fadeInUp" id="box-item11" style="display:none;"><span class="avatar"><img
                    src="Img/g?b=qq&amp;k=fWia3HH6RRPUGCzgic7UAvCg&amp;s=100&amp;t=594"></span>

            <p><span class="nickname">欲望の海</span><script>document.write(jiangping_suiji[GetRandomNum(0,jiangping_suiji.length-1)]);</script></p></div>
    </div>
</div>

<script language=Javascript src="Scripts/zz.js" type=text/javascript></script>

<div style="display: none">

</div>
<script type="text/javascript" src="Scripts/19597021.js"></script>
</body>
</html>