$(document).ready(function () {
    var style = document.styleSheets[0];


    type=config.language_type;
    space=getSpace(12,type);
    $(".main-content .month").css("left",space.month+'px');
    $(".main-content .day").css("left",space.day+'px');
    $(".main-content .week").css("left",space.week+'px');
    $(".main-content .shichen").css("left",space.shichen+'px');
    $(".main-content .hour").css("left",space.hour+'px');
    $(".main-content .minute").css("left",space.minute+'px');
    $(".main-content .second").css("left",space.second+'px');

    
    $("body").css("color",config.font_color);
    style.cssRules[4].style.color=config.pointer_color;



    if(config.sound)
    {
        var ele="<audio controls loop autoplay><source src='sound/"+config.sound_name+"'></audio>"
        $("body").append(ele);
    }


    switch(config.background_style)
    {
        
        case 0:
            var ele1="url('images/"+config.background_picture+"') fixed no-repeat"
            $('body').css('background',ele1);
            $('body').css('background-size','100% 100%');
            break;
        case 1:
            $('body').append('<video loop autoplay muted><source src="video/'+config.background_video+'"></video>')
            break;
        case 2:
            $('body').css('background',config.background_color);
            break;
    }













    var monthLeft=$(".main-content .month").css("left");
    var dayLeft=$(".main-content .day").css("left");
    var weekLeft=$(".main-content .week").css("left");
    var shichenLeft=$(".main-content .shichen").css("left");
    var hourLeft=$(".main-content .hour").css("left");
    var minuteLeft=$(".main-content .minute").css("left");
    var secondLeft=$(".main-content .second").css("left");
    var top=$(".main-content .month").css("top");
    var yearLeft=$(".main-content .year span").width()/2;






    //进入当前时间
    var Time={
        currentTime:{
            year:1970,
            month:1,
            day:1,
            hour:0,
            minute:0,
            second:0,
            week:0,
            shichen:{}
        },
        months:[],
        days:[],
        hours:[],
        minutes:[],
        seconds:[],
        shichens:[],
        weeks:[],
        hours:[],
        minutes:[],
        seconds:[],
        yearUnit:"",
        monthUnit:"",
        dayUnit:"",
        weekUnit:"星期",
        hourUnit:"",
        minuteUnit:"",
        secondUnit:""
        
    }
    
    var month=Time.currentTime.month;
    var year=Time.currentTime.year;
    initTime(Time,type);

    


    $(".main-content .year").append("<span class='current'>"+Time.currentTime.year+Time.yearUnit+"</span>");

    var h=$(".year span").height();
    top=-(parseInt(top))-parseInt(h)/2;
    top+="px";


    $(".main-content .month").append("<span class='current'>"+Time.currentTime.month+Time.monthUnit+"</span>");
    $(".main-content .day").append("<span class='current'>"+Time.currentTime.day+Time.dayUnit+"</span>");
    $(".main-content .week").append("<span class='current'>"+Time.currentTime.week+"</span>");
    $(".main-content .shichen").append("<span class='current'>"+Time.currentTime.shichen.str+"</span>");
    $(".main-content .hour").append("<span class='current'>"+Time.currentTime.hour+Time.hourUnit+"</span>");
    $(".main-content .minute").append("<span class='current'>"+Time.currentTime.minute+Time.minuteUnit+"</span>");
    $(".main-content .second").append("<span class='current'>"+Time.currentTime.second+Time.secondUnit+"</span>");



    for (const key in Time.months) {
        if (Time.months.hasOwnProperty(key)) {
            const element = Time.months[key];
            if(element!=Time.currentTime.month){
                $(".main-content .month").append("<span>"+element+Time.monthUnit+"</span>");
            }
            
        }
    }

    for (const key in Time.days) {
        if (Time.days.hasOwnProperty(key)) {
            const element = Time.days[key];
            if(element!=Time.currentTime.day){
                $(".main-content .day").append("<span>"+element+Time.dayUnit+"</span>");
            }
            
        }
    }

    for (const key in Time.weeks) {
        if (Time.weeks.hasOwnProperty(key)) {
            const element = Time.weeks[key];
            if(element!=Time.currentTime.week){
                $(".main-content .week").append("<span>"+element+"</span>");
            }
            
            
        }
    }


    for (const key in Time.shichens) {
        if (Time.shichens.hasOwnProperty(key)) {
            const element = Time.shichens[key];
            if(element!=Time.currentTime.shichen.str){
                $(".main-content .shichen").append("<span>"+element+"</span>");
            }
            
        }
    }



    for (const key in Time.hours) {
        if (Time.hours.hasOwnProperty(key)) {
            const element = Time.hours[key];
            if(element!=Time.currentTime.hour){
                $(".main-content .hour").append("<span>"+element+Time.hourUnit+"</span>");
            }
            
        }
        
    }

    for (const key in Time.minutes) {
        if (Time.minutes.hasOwnProperty(key)) {
            const element = Time.minutes[key];
            if(element!=Time.currentTime.minute){
                $(".main-content .minute").append("<span>"+element+Time.minuteUnit+"</span>");
            }
            
        }
        
    }

    for (const key in Time.seconds) {
        if (Time.seconds.hasOwnProperty(key)) {
            const element = Time.seconds[key];
            if(element!=Time.currentTime.second){
                $(".main-content .second").append("<span>"+element+Time.secondUnit+"</span>");
            }
            
        }
        
    }





    setTimeout(function () {
        $(".month span").each(function(index,element){
            $(element).css("animation","month"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes month"+index+"{0%{transform: rotateZ(0);transform-origin: -"+monthLeft+" "+top+";}100%{transform:rotateZ("+-(360/12)*(index)+"deg);transform-origin: -"+monthLeft+" "+top+";}}",style.rules.length);

        });
    }, 0);


    setTimeout(function () {
        $(".day span").each(function(index,element){
            $(element).css("animation","day"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes day"+index+"{0%{transform: rotateZ(0);transform-origin: -"+dayLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.days.length)*index+"deg);transform-origin: -"+dayLeft+" "+top+";}}",style.rules.length);
        });
    }, 1000);

    setTimeout(function () {
        $(".week span").each(function(index,element){
            $(element).css("animation","week"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes week"+index+"{0%{transform: rotateZ(0);transform-origin: -"+weekLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.weeks.length)*index+"deg);transform-origin: -"+weekLeft+" "+top+";}}",style.rules.length);
        });
    }, 2000);




    setTimeout(function () {
        $(".shichen span").each(function(index,element){
            $(element).css("animation","shichen"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes shichen"+index+"{0%{transform: rotateZ(0);transform-origin: -"+shichenLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.shichens.length)*index+"deg);transform-origin: -"+shichenLeft+" "+top+";}}",style.rules.length);
        });
    }, 3000);


    setTimeout(function () {
        $(".hour span").each(function(index,element){
            $(element).css("animation","hour"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes hour"+index+"{0%{transform: rotateZ(0);transform-origin: -"+hourLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.hours.length)*index+"deg);transform-origin: -"+hourLeft+" "+top+";}}",style.rules.length);
        });
        
    }, 4000);

    setTimeout(function () {
        $(".minute span").each(function(index,element){
            $(element).css("animation","minute"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes minute"+index+"{0%{transform: rotateZ(0);transform-origin: -"+minuteLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.minutes.length)*index+"deg);transform-origin: -"+minuteLeft+" "+top+";}}",style.rules.length);
        });
        
    }, 5000);


    setTimeout(function () {
        $(".second span").each(function(index,element){
            $(element).css("animation","second"+index+" 1s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes second"+index+"{0%{transform: rotateZ(0);transform-origin: -"+secondLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.seconds.length)*index+"deg);transform-origin: -"+secondLeft+" "+top+";}}",style.rules.length);
        });
        
    }, 6000);

    

    
    //时间旋转
    setTimeout(function () {


        $(".year span").css("animation","yearRun 1s linear infinite");
        style.insertRule("@keyframes yearRun {0%{transform: rotateZ(0);transform-origin: -"+yearLeft+" "+top+";}100%{transform:rotateZ(720deg);transform-origin: -"+yearLeft+" "+top+";}}",style.rules.length);


        $($(".main-content .second span")[0]).removeClass("current");
        $(".second span").each(function(index,element){
            $(element).css("animation","secondRun"+index+" 1s linear infinite");
            style.insertRule("@keyframes secondRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+secondLeft+" "+top+";}100%{transform:rotateZ("+((index+1)*720)+"deg);transform-origin: -"+secondLeft+" "+top+";}}",style.rules.length);
            
        });


        $($(".main-content .minute span")[0]).removeClass("current");
        $(".minute span").each(function(index,element){
            $(element).css("animation","minuteRun"+index+" 1s linear infinite");
            style.insertRule("@keyframes minuteRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+minuteLeft+" "+top+";}100%{transform:rotateZ("+((index+1)*720)+"deg);transform-origin: -"+minuteLeft+" "+top+";}}",style.rules.length);
            
        });


        $($(".main-content .hour span")[0]).removeClass("current");
        $(".hour span").each(function(index,element){
            $(element).css("animation","hourRun"+index+" 1s linear infinite");
            style.insertRule("@keyframes hourRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+hourLeft+" "+top+";}100%{transform:rotateZ("+((index+1)*720)+"deg);transform-origin: -"+hourLeft+" "+top+";}}",style.rules.length);
            
        });

        $($(".main-content .shichen span")[0]).removeClass("current");
        $(".shichen span").each(function(index,element){
            $(element).css("animation","shichenRun"+index+" 1s linear infinite");
            style.insertRule("@keyframes shichenRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+shichenLeft+" "+top+";}100%{transform:rotateZ("+((index+1)*720)+"deg);transform-origin: -"+shichenLeft+" "+top+";}}",style.rules.length);
            
        });

        $($(".main-content .week span")[0]).removeClass("current");
        $(".week span").each(function(index,element){
            $(element).css("animation","weekRun"+index+" 1s linear infinite");
            style.insertRule("@keyframes weekRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+weekLeft+" "+top+";}100%{transform:rotateZ("+((index+1)*720)+"deg);transform-origin: -"+weekLeft+" "+top+";}}",style.rules.length);
            
        });

        $($(".main-content .day span")[0]).removeClass("current");
        $(".day span").each(function(index,element){
            $(element).css("animation","dayRun"+index+" 1s linear infinite");
            style.insertRule("@keyframes dayRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+dayLeft+" "+top+";}100%{transform:rotateZ("+((index+1)*720)+"deg);transform-origin: -"+dayLeft+" "+top+";}}",style.rules.length);
            
        });

        $($(".main-content .month span")[0]).removeClass("current");
        $(".month span").each(function(index,element){
            $(element).css("animation","monthRun"+index+" 1s linear infinite");
            style.insertRule("@keyframes monthRun"+index+" {0%{transform: rotateZ(0);transform-origin: -"+monthLeft+" "+top+";}100%{transform:rotateZ("+((index+1)*720)+"deg);transform-origin: -"+monthLeft+" "+top+";}}",style.rules.length);
            
        });


    }, 7000);
    

    //定义初始化当前时间
    setTimeout(function () {
        var myDate = new Date();
        Time.currentTime.year=myDate.getFullYear();
        Time.currentTime.month=myDate.getMonth()+1;
        Time.currentTime.day=myDate.getDate();
        Time.currentTime.week=myDate.getDay();
        Time.currentTime.hour=myDate.getHours();
        Time.currentTime.minute=myDate.getMinutes();
        Time.currentTime.second=myDate.getSeconds();
        month=Time.currentTime.month;
        year=Time.currentTime.year;
        initTime(Time,type);


        $(".main-content .year").html("");
        $(".main-content .year").append("<span class='current'>"+Time.currentTime.year+Time.yearUnit+"</span>");

        $(".main-content .second").html("");
        $(".main-content .second").append("<span class='current'>"+Time.currentTime.second+Time.secondUnit+"</span>");
        for (const key in Time.seconds) {
            if (Time.seconds.hasOwnProperty(key)) {
                const element = Time.seconds[key];
                if(element!=Time.currentTime.second){
                    $(".main-content .second").append("<span>"+element+Time.secondUnit+"</span>");
                }
                
            }
            
        }


        $(".main-content .minute").html("");
        $(".main-content .minute").append("<span class='current'>"+Time.currentTime.minute+Time.minuteUnit+"</span>");
        for (const key in Time.minutes) {
            if (Time.minutes.hasOwnProperty(key)) {
                const element = Time.minutes[key];
                if(element!=Time.currentTime.minute){
                    $(".main-content .minute").append("<span>"+element+Time.minuteUnit+"</span>");
                }
                
            }
            
        }


        $(".main-content .hour").html("");
        $(".main-content .hour").append("<span class='current'>"+Time.currentTime.hour+Time.hourUnit+"</span>");
        for (const key in Time.hours) {
            if (Time.hours.hasOwnProperty(key)) {
                const element = Time.hours[key];
                if(element!=Time.currentTime.hour){
                    $(".main-content .hour").append("<span>"+element+Time.hourUnit+"</span>");
                }
                
            }
            
        }


        $(".main-content .shichen").html("");
        $(".main-content .shichen").append("<span class='current'>"+Time.currentTime.shichen.str+"</span>");
        for (const key in Time.shichens) {
            if (Time.shichens.hasOwnProperty(key)) {
                const element = Time.shichens[key];
                if(element!=Time.currentTime.shichen.str){
                    $(".main-content .shichen").append("<span>"+element+"</span>");
                }
                
            }
            
        }


        $(".main-content .week").html("");
        $(".main-content .week").append("<span class='current'>"+Time.currentTime.week+"</span>");
        for (const key in Time.weeks) {
            if (Time.weeks.hasOwnProperty(key)) {
                const element = Time.weeks[key];
                if(element!=Time.currentTime.week){
                    $(".main-content .week").append("<span>"+element+"</span>");
                }
                
                
            }
            
        }

        $(".main-content .day").html("");
        $(".main-content .day").append("<span class='current'>"+Time.currentTime.day+Time.dayUnit+"</span>");
        for (const key in Time.days) {
            if (Time.days.hasOwnProperty(key)) {
                const element = Time.days[key];
                if(element!=Time.currentTime.day){
                    $(".main-content .day").append("<span>"+element+Time.dayUnit+"</span>");
                }
                
            }
            
        }


        $(".main-content .month").html("");
        $(".main-content .month").append("<span class='current'>"+Time.currentTime.month+Time.monthUnit+"</span>");
        for (const key in Time.months) {
            if (Time.months.hasOwnProperty(key)) {
                const element = Time.months[key];
                if(element!=Time.currentTime.month){
                    $(".main-content .month").append("<span>"+element+Time.monthUnit+"</span>");
                }
                
            }
            
        }



    }, 8000);

    //进来转回到当前时间
    setTimeout(function () {
        $(".second span").each(function(index,element){
            $(element).css("animation","second"+index+" 0s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes second"+index+"{0%{transform: rotateZ(0);transform-origin: -"+secondLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.seconds.length)*index+"deg);transform-origin: -"+secondLeft+" "+top+";}}",style.rules.length);

        });


        $(".minute span").each(function(index,element){
            $(element).css("animation","minute"+index+" 0s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes minute"+index+"{0%{transform: rotateZ(0);transform-origin: -"+minuteLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.minutes.length)*index+"deg);transform-origin: -"+minuteLeft+" "+top+";}}",style.rules.length);

        });


        $(".hour span").each(function(index,element){
            $(element).css("animation","hour"+index+" 0s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes hour"+index+"{0%{transform: rotateZ(0);transform-origin: -"+hourLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.hours.length)*index+"deg);transform-origin: -"+hourLeft+" "+top+";}}",style.rules.length);

        });


        
        $(".shichen span").each(function(index,element){
            $(element).css("animation","shichen"+index+" 0s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes shichen"+index+"{0%{transform: rotateZ(0);transform-origin: -"+shichenLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.shichens.length)*index+"deg);transform-origin: -"+shichenLeft+" "+top+";}}",style.rules.length);

        });


        $(".week span").each(function(index,element){
            $(element).css("animation","week"+index+" 0s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes week"+index+"{0%{transform: rotateZ(0);transform-origin: -"+weekLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.weeks.length)*index+"deg);transform-origin: -"+weekLeft+" "+top+";}}",style.rules.length);

        });


        $(".day span").each(function(index,element){
            $(element).css("animation","day"+index+" 0s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes day"+index+"{0%{transform: rotateZ(0);transform-origin: -"+dayLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.days.length)*index+"deg);transform-origin: -"+dayLeft+" "+top+";}}",style.rules.length);

        });


        $(".month span").each(function(index,element){
            $(element).css("animation","month"+index+" 0s linear");
            $(element).css("animation-fill-mode","forwards");
            style.insertRule("@keyframes month"+index+"{0%{transform: rotateZ(0);transform-origin: -"+monthLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.months.length)*index+"deg);transform-origin: -"+monthLeft+" "+top+";}}",style.rules.length);

        });

    }, 8000);

    setTimeout(function (){
        setInterval(run,1000)
    },8000)


    var seci=1;
    var mini=1;
    var houri=1;
    var shicheni=1;
    var weeki=1;
    var dayi=1;
    var monthi=1;
    function run(){
        var next=$(".second span.current").next();


        if(next.text()==""){
            next=$(".second span").first();
        }
        var secang1=6*(seci-1);
        var secang2=6*seci;
        $(".second").css("animation","secondRun"+seci+" 0.5s ease-in-out");
        $(".second").css("animation-fill-mode","forwards");
        style.insertRule("@keyframes secondRun"+seci+"{0%{transform: rotateZ("+secang1+"deg);transform-origin: -"+secondLeft+" "+top+";} 50%{transform:rotateZ("+(secang2+1)+"deg);transform-origin: -"+secondLeft+" "+top+";} 100%{transform:rotateZ("+secang2+"deg);transform-origin: -"+secondLeft+" "+top+";}}",style.rules.length);

        $(".second span.current").removeClass("current");
        next.addClass("current");
        seci++;
        if(seci>60){
            seci=1;
        }

        //展示分钟
        var secText=$(".second span.current").text();

        if(secText=="0秒"||secText=="零秒"||secText=="0 s"){
            var minang1=6*(mini-1);
            var minang2=6*mini;

            var next=$(".minute span.current").next();

            if(next.text()==""){
                next=$(".minute span").first();
            }

            $(".minute").css("animation","minuteRun"+mini+" 0.5s ease-in-out");
            $(".minute").css("animation-fill-mode","forwards");
            style.insertRule("@keyframes minuteRun"+mini+" {0%{transform: rotateZ("+minang1+"deg);transform-origin: -"+minuteLeft+" "+top+";} 100%{transform:rotateZ("+minang2+"deg);transform-origin: -"+minuteLeft+" "+top+";}}",style.rules.length);
            
            $(".minute span.current").removeClass("current");
            next.addClass("current");
            mini++;
            if(mini>60){
                mini=1;
            }
            
        }


        //展示小时
        var minText=$(".minute span.current").text();

        if((secText=="0秒"||secText=="零秒"||secText=="0 s") &&(minText=="0分"||minText=="零分"||minText=="0 m")){

            var hourang1=15*(houri-1);
            var hourang2=15*houri;

            var next=$(".hour span.current").next();

            if(next.text()==""){
                next=$(".hour span").first();
            }
            $(".hour").css("animation","hourRun"+houri+" 0.5s ease-in-out");
            $(".hour").css("animation-fill-mode","forwards");
            style.insertRule("@keyframes hourRun"+houri+" {0%{transform: rotateZ("+hourang1+"deg);transform-origin: -"+hourLeft+" "+top+";} 100%{transform:rotateZ("+hourang2+"deg);transform-origin: -"+hourLeft+" "+top+";}}",style.rules.length);
            
            $(".hour span.current").removeClass("current");
            next.addClass("current");
            houri++;
            if(houri>24){
                houri=1;
            }
            
        }

        //展示时辰
        var hourText=$(".hour span.current").text();

        if((secText=="0秒"||secText=="零秒"||secText=="0 s") && (minText=="0分"||minText=="零分"||minText=="0 m")&&isShichen(hourText)){
            var shichenang1=30*(shicheni-1);
            var shichenang2=30*shicheni;

            var next=$(".shichen span.current").next();

            if(next.text()==""){
                next=$(".shichen span").first();
            }
            $(".shichen").css("animation","shichenRun"+shicheni+" 0.5s ease-in-out");
            $(".shichen").css("animation-fill-mode","forwards");
            style.insertRule("@keyframes shichenRun"+shicheni+" {0%{transform: rotateZ("+shichenang1+"deg);transform-origin: -"+shichenLeft+" "+top+";} 100%{transform:rotateZ("+shichenang2+"deg);transform-origin: -"+shichenLeft+" "+top+";}}",style.rules.length);
            
            $(".shichen span.current").removeClass("current");
            next.addClass("current");
            shicheni++;
            if(shicheni>30){
                shicheni=1;
            }
            
        }


        //展示星期和日数
        if((secText=="0秒"||secText=="零秒"||secText=="0 s") && (minText=="0分"||minText=="零分"||minText=="0 m")&&(hourText=="0时"||hourText=="零时"||hourText=="0 h")){
            var weekang1=(360/7)*(weeki-1);
            var weekang2=(360/7)*weeki;
            var dayang1=(360/Time.days.length)*(dayi-1);
            var dayang2=(360/Time.days.length)*dayi;

            console.log(dayang1);
            var nextweek=$(".week span.current").next();
            var nextday=$(".day span.current").next();

            if(nextweek.text()==""){
                nextweek=$(".week span").first();
            }
            if(nextday.text()==""){
                nextday=$(".day span").first();
            }

            $(".week").css("animation","weekRun"+weeki+" 0.5s ease-in-out");
            $(".week").css("animation-fill-mode","forwards");
            style.insertRule("@keyframes weekRun"+weeki+" {0%{transform: rotateZ("+weekang1+"deg);transform-origin: -"+weekLeft+" "+top+";} 100%{transform:rotateZ("+weekang2+"deg);transform-origin: -"+weekLeft+" "+top+";}}",style.rules.length);
            
            $(".day").css("animation","dayRun"+dayi+" 0.5s ease-in-out");
            $(".day").css("animation-fill-mode","forwards");
            style.insertRule("@keyframes dayRun"+dayi+" {0%{transform: rotateZ("+dayang1+"deg);transform-origin: -"+dayLeft+" "+top+";} 100%{transform:rotateZ("+dayang2+"deg);transform-origin: -"+dayLeft+" "+top+";}}",style.rules.length);



            $(".week span.current").removeClass("current");
            nextweek.addClass("current");
            weeki++;
            if(weeki>7){
                weeki=1;
            }

            $(".day span.current").removeClass("current");
            nextday.addClass("current");
            dayi++;
            if(dayi>Time.days.length){
                dayi=1;
            }
            
        }


        //展示月
        var dayText=$(".day span.current").text();
        if((dayText=="1 day"||dayText==numToSimp(1)+"日"||dayText==numToTrad(1)+"日"||dayText=="1日")&&(secText=="0秒"||secText=="零秒"||secText=="0 s") && (minText=="0分"||minText=="零分"||minText=="0 m")&&(hourText=="0时"||hourText=="零时"||hourText=="0 h")){

            var monthang1=30*(monthi-1);
            var monthang2=30*monthi;
            

            var next=$(".month span.current").next();

            if(next.text()==""){
                next=$(".month span").first();
            }
            $(".month").css("animation","monthRun"+monthi+" 0.5s ease-in-out");
            $(".month").css("animation-fill-mode","forwards");
            style.insertRule("@keyframes monthRun"+monthi+" {0%{transform: rotateZ("+monthang1+"deg);transform-origin: -"+monthLeft+" "+top+";} 100%{transform:rotateZ("+monthang2+"deg);transform-origin: -"+monthLeft+" "+top+";}}",style.rules.length);
            

            month++;
            if(month>12)
            {
                month=1;
            }
            //更新到当前日
            $(".day").html("");
            Time.days=updateDays(type,year,month,1);
            Time.currentTime.day=getFirstDay(type);
            $(".main-content .day").append("<span class='current'>"+Time.currentTime.day+Time.dayUnit+"</span>");
            for (const key in Time.days) {
                if (Time.days.hasOwnProperty(key)) {
                    const element = Time.days[key];
                    if(element!=Time.currentTime.day){
                        $(".main-content .day").append("<span>"+element+Time.dayUnit+"</span>");
                    }
                    
                }
                
            }
            $(".day span").each(function(index,element){
                $(element).css("animation","day"+index+" 0.5s linear");
                $(element).css("animation-fill-mode","forwards");
                style.insertRule("@keyframes day"+index+"{0%{transform: rotateZ(0);transform-origin: -"+dayLeft+" "+top+";}100%{transform:rotateZ("+-(360/Time.days.length)*(index+1)+"deg);transform-origin: -"+dayLeft+" "+top+";}}",style.rules.length);
            });





            $(".month span.current").removeClass("current");
            next.addClass("current");
            monthi++;
            if(monthi>12){
                monthi=1;
            }
            
        }



        //跟新到年

        if(month==1&&(dayText=="1 day"||dayText==numToSimp(1)+"日"||dayText==numToTrad(1)+"日"||dayText=="1日")&&(secText=="0秒"||secText=="零秒"||secText=="0 s") && (minText=="0分"||minText=="零分"||minText=="0 m")&&(hourText=="0时"||hourText=="零时"||hourText=="0 h")){
            year++;
            Time.currentTime.year=getYear(type,year);
            $(".year span").html(getYear(type,year)+Time.yearUnit);
            
        }

    }

});





function initTime(Time,type){
    switch (type) {
        case 0:

        

            Time.months=getMonths(0,Time.currentTime.month);
            Time.days=getdays(0,Time.currentTime.year,Time.currentTime.month,Time.currentTime.day);
            Time.weeks=getWeeks(0,Time.currentTime.week);
            Time.hours=getHours(0,Time.currentTime.hour);
            Time.minutes=getMinutes(0,Time.currentTime.minute);
            Time.seconds=getSeconds(0,Time.currentTime.second);

            Time.currentTime.week=Time.weekUnit+ getWeek(0,Time.currentTime.week);
            Time.currentTime.shichen=getShiChen(0,Time.currentTime.hour);
            Time.shichens=getShiChens(0,Time.currentTime.shichen);


           
            break;
        case 1:

                
            Time.months=getMonths(1,Time.currentTime.month);
            Time.days=getdays(1,Time.currentTime.year,Time.currentTime.month,Time.currentTime.day);
            Time.weeks=getWeeks(1,Time.currentTime.week);
            Time.hours=getHours(1,Time.currentTime.hour);
            Time.minutes=getMinutes(1,Time.currentTime.minute);
            Time.seconds=getSeconds(1,Time.currentTime.second);

            Time.currentTime.month=numToSimp(Time.currentTime.month);
            Time.currentTime.day=numToSimp(Time.currentTime.day);
            Time.currentTime.week=Time.weekUnit+getWeek(1,Time.currentTime.week);
            Time.currentTime.shichen=getShiChen(1,Time.currentTime.hour);
            Time.shichens=getShiChens(1,Time.currentTime.shichen);
            Time.currentTime.hour=numToSimp(Time.currentTime.hour);
            Time.currentTime.minute=numToSimp(Time.currentTime.minute);
            Time.currentTime.second=numToSimp(Time.currentTime.second);
            Time.currentTime.year=getYear(1,Time.currentTime.year);

            break;
        case 2:


            Time.months=getMonths(2,Time.currentTime.month);
            Time.days=getdays(2,Time.currentTime.year,Time.currentTime.month,Time.currentTime.day);
            Time.weeks=getWeeks(2,Time.currentTime.week);
            Time.hours=getHours(2,Time.currentTime.hour);
            Time.minutes=getMinutes(2,Time.currentTime.minute);
            Time.seconds=getSeconds(2,Time.currentTime.second);


            Time.currentTime.month=numToTrad(Time.currentTime.month);
            Time.currentTime.day=numToTrad(Time.currentTime.day);
            Time.currentTime.week=Time.weekUnit+getWeek(2,Time.currentTime.week);
            Time.currentTime.shichen=getShiChen(2,Time.currentTime.hour);
            Time.shichens=getShiChens(2,Time.currentTime.shichen);
            Time.currentTime.hour=numToTrad(Time.currentTime.hour);
            Time.currentTime.minute=numToTrad(Time.currentTime.minute);
            Time.currentTime.second=numToTrad(Time.currentTime.second);
            Time.currentTime.year=getYear(2,Time.currentTime.year);

            break;
        case 3:

        
            Time.months=getMonths(3,Time.currentTime.month);
            Time.days=getdays(0,Time.currentTime.year,Time.currentTime.month,Time.currentTime.day);
            Time.weeks=getWeeks(3,Time.currentTime.week);
            Time.hours=getHours(3,Time.currentTime.hour);
            Time.minutes=getMinutes(3,Time.currentTime.minute);
            Time.seconds=getSeconds(3,Time.currentTime.second);



            Time.currentTime.month=getMonthEng(Time.currentTime.month);
            Time.currentTime.week=getWeek(3,Time.currentTime.week);
            Time.currentTime.shichen=getShiChen(3,Time.currentTime.hour);
            Time.shichens=getShiChens(3,Time.currentTime.shichen);
            Time.monthUnit="";
            Time.dayUnit=" day"
            Time.weekUnit=""
            Time.hourUnit=" h"
            Time.minuteUnit=" m"
            Time.secondUnit=" s"
            Time.yearUnit=" Year"
            


            break;
    }
}

//根据字体大小和文字类型获取时钟间距
function getSpace(fontSize,type)
{
    space={
        month:0,
        day:0,
        week:0,
        shichen:0,
        hour:0,
        minute:0,
        second:0

    }
    switch(type){
        case 0:
            space.month=30;
            space.day=65;
            space.week=100;
            space.shichen=150;
            space.hour=230;
            space.minute=270;
            space.second=310;
            break;
        case 1:
            space.month=40;
            space.day=85;
            space.week=145;
            space.shichen=192;
            space.hour=232;
            space.minute=292;
            space.second=355;
            break;
        case 2:
            space.month=40;
            space.day=85;
            space.week=145;
            space.shichen=190;
            space.hour=230;
            space.minute=290;
            space.second=350;
            break;
        case 3:
            space.month=40;
            space.day=75;
            space.week=125;
            space.shichen=160;
            space.hour=255;
            space.minute=295;
            space.second=335;
            break;
    }
    return space;
}
