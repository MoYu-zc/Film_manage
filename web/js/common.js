//这里显示简体字体
function numToSimp(n){
    var str = "";
    var units=parseInt(n%10);
    var tens=parseInt(n/10);
    var trans="零一二三四五六七八九十";



    if(tens>1){
        str=trans.charAt(tens);
    }
    if(tens!=0){
        str+="十";
    }
    if(units!=0){
        str += trans.charAt(units);
    }

    if(tens==0&&units==0){
        str=trans[0];
    }
    
    return str;
}

//繁体字更玄学
function numToTrad(n){
    var str = "";
    var units=parseInt(n%10);
    var tens=parseInt(n/10);
    var trans="零一二三四五六七八九";
    if(tens>1){
        str=trans.charAt(tens);
    }
    if(tens!=0){
        str+="十";
    }
    if(units!=0){
        str += trans.charAt(units);
    }

    if(tens==0&&units==0){
        str=trans[0];
    }
    
    return str;
}


//展示英文出来
function numToEng(n){
    var str = "";
    var units=parseInt(n%10);
    var tens=parseInt(n/10);
    var trans=[
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine","ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
        ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    ];
    if(n<20)
    {
        str=trans[0][n];
    }else{
        str=trans[1][tens-2];
        if(units!=0){
            str+=trans[0][units];
        }
    }

    if(tens==0&&units==0){
        str=trans[0][0];
    }
    return str;
}



function isLeapYear(year){
    if(year % 4 == 0 && year %100 != 0 ||year % 400 == 0)
    {
        return true;
    }else{
        return false;
    }
}



function getYear(type,year){
    var res=""
    var units=parseInt(year/1%10);
    var tens=parseInt(year/10%10);
    var hund=parseInt(year/100%10);
    var thou=parseInt(year/1000%10);
    switch(type){
        case 0:
        case 3:
            res=year;
            break;
        case 1:
            res=numToSimp(thou)+numToSimp(hund)+numToSimp(tens)+numToSimp(units);
            break;
        case 2:
            res=numToTrad(thou)+numToTrad(hund)+numToTrad(tens)+numToTrad(units);
            break;
    }
    return res;
}






/*
    获取月份
    参数：0 阿拉伯数字 1简体 2繁体 3英文
*/
function getMonths(type,month){
    var months=new Array();
    var monthsEng=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var i=1;
    switch (type) {
        case 0:
            for(i=month;i<=12;i++)
            {
                months.push(i);
            }
            for(i=1;i<month;i++)
            {
                months.push(i);
            }
            
            break;
        case 1:
            for(i=month;i<=12;i++)
            {
                months.push(numToSimp(i));
            }
            for(i=1;i<month;i++)
            {
                months.push(numToSimp(i));
            }
            break;
        case 2:

            for(i=month;i<=12;i++)
            {
                months.push(numToTrad(i));
            }
            for(i=1;i<month;i++)
            {
                months.push(numToTrad(i));
            }
            break;
        case 3:
            for(i=month-1;i<12;i++)
            {
                months.push(monthsEng[i]);
            }
            for(i=0;i<month-1;i++)
            {
                months.push(monthsEng[i]);
            }
            break;
    }
    return months;
}


function getdays(type,year,month,day){
    var days=new Array();
    var j=1;
    var isLeap=isLeapYear(year);
    switch (type) {
        case 0:
        case 3:
            for(j=day;j<=31;j++)
            {
                days.push(j)
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }
            for(j=1;j<day;j++){
                days.push(j)
            }
            break;
        case 1:
            for(j=day;j<=31;j++)
            {
                days.push(numToSimp(j))
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }

            for(j=1;j<day;j++){
                days.push(numToSimp(j))
            }

            break;
        case 2:
            for(j=day;j<=31;j++)
            {
                days.push(numToTrad(j))
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }

            for(j=1;j<day;j++){
                days.push(numToTrad(j))
            }

            break;
    }
    return days;
}






function getShiChen(type,hour){
    var shichen={
        index:0,
        str:""
    };

    switch(type){
        case 0:
            if(hour>=23||hour<1){
                shichen.index=0;
                shichen.str="23:00-1:00";
            }
            else if(hour>=1&&hour<3){
                shichen.index=1;
                shichen.str="1:00-3:00";
            }
            else if(hour>=3&&hour<5){
                shichen.index=2;
                shichen.str="3:00-5:00";
            }
            else if(hour>=5&&hour<7){
                shichen.index=3;
                shichen.str="5:00-7:00";
            }
            else if(hour>=7&&hour<9){
                shichen.index=4;
                shichen.str="7:00-9:00";
            }
            else if(hour>=9&&hour<11){
                shichen.index=5;
                shichen.str="9:00-11:00";
            }
            else if(hour>=11&&hour<13){
                shichen.index=6;
                shichen.str="11:00-13:00";
            }
            else if(hour>=13&&hour<15){
                shichen.index=7;
                shichen.str="13:00-15:00";
            }
            else if(hour>=15&&hour<17){
                shichen.index=8;
                shichen.str="15:00-17:00";
            }
            else if(hour>=17&&hour<19){
                shichen.index=9;
                shichen.str="17:00-19:00";
            }
            else if(hour>=19&&hour<21){
                shichen.index=10;
                shichen.str="19:00-21:00";
            }
            else if(hour>=21&&hour<23){
                shichen.index=11;
                shichen.str="21:00-23:00";
            }
            break;
        case 1:
        case 2:
            if(hour>=23||hour<1){
                shichen.index=0;
                shichen.str="子时"
            }
            else if(hour>=1&&hour<3){
                shichen.index=1;
                shichen.str="丑时";
            }
            else if(hour>=3&&hour<5){
                shichen.index=2;
                shichen.str="寅时";
            }
            else if(hour>=5&&hour<7){
                shichen.index=3;
                shichen.str="卯时";
            }
            else if(hour>=7&&hour<9){
                shichen.index=4;
                shichen.str="辰时";
            }
            else if(hour>=9&&hour<11){
                shichen.index=5;
                shichen.str="巳时";
            }
            else if(hour>=11&&hour<13){
                shichen.index=6;
                shichen.str="午时";
            }
            else if(hour>=13&&hour<15){
                shichen.index=7;
                shichen.str="未时";
            }
            else if(hour>=15&&hour<17){
                shichen.index=8;
                shichen.str="申时";
            }
            else if(hour>=17&&hour<19){
                shichen.index=9;
                shichen.str="酉时";
            }
            else if(hour>=19&&hour<21){
                shichen.index=10;
                shichen.str="戌时";
            }
            else if(hour>=21&&hour<23){
                shichen.index=11;
                shichen.str="亥时";
            }
            break;
        case 3:
            if(hour>=23||hour<1){
                shichen.index=0;
                shichen.str="23pm to 1am"
            }
            else if(hour>=1&&hour<3){
                shichen.index=1;
                shichen.str="1am to 3am"
            }
            else if(hour>=3&&hour<5){
                shichen.index=2;
                shichen.str="3am to 5am"
            }
            else if(hour>=5&&hour<7){
                shichen.index=3;
                shichen.str="5pm to 7am"
            }
            else if(hour>=7&&hour<9){
                shichen.index=4;
                shichen.str="7pm to 9am"
            }
            else if(hour>=9&&hour<11){
                shichen.index=5;
                shichen.str="9pm to 11am"
            }
            else if(hour>=11&&hour<13){
                shichen.index=6;
                shichen.str="11am to 13pm"
            }
            else if(hour>=13&&hour<15){
                shichen.index=7;
                shichen.str="13pm to 15pm"
            }
            else if(hour>=15&&hour<17){
                shichen.index=8;
                shichen.str="15pm to 17pm"
            }
            else if(hour>=17&&hour<19){
                shichen.index=9;
                shichen.str="17pm to 19pm"
            }
            else if(hour>=19&&hour<21){
                shichen.index=10; 
                shichen.str="19pm to 21pm"
            }
            else if(hour>=21&&hour<23){
                shichen.index=11;
                shichen.str="21pm to 23pm"
            }
            break;
    }



    return shichen;
}

function getShiChens(type,shichen){
    var shichens=new Array();
    var i=0;
    var shichen0=["23:00-1:00","1:00-3:00","3:00-5:00","5:00-7:00","7:00-9:00","9:00-11:00","11:00-13:00","13:00-15:00","15:00-17:00","17:00-19:00","19:00-21:00","21:00-23:00"];
    var shichen1=["子时","丑时","寅时","卯时","辰时","巳时","午时","未时","申时","酉时","戌时","亥时"];
    var shichen3=["23pm to 1am","1am to 3am","3am to 5am","5pm to 7am","7pm to 9am","9pm to 11am","11am to 13pm","13pm to 15pm","15pm to 17pm","17pm to 19pm","19pm to 21pm","21pm to 23pm"];
    switch(type){
        case 0:
            for(i=shichen.index;i<12;i++){
                shichens.push(shichen0[i]);
            }
            for(i=0;i<shichen.index;i++){
                shichens.push(shichen0[i]);
            }
            break;
        case 1:
        case 2:
            for(i=shichen.index;i<12;i++){
                shichens.push(shichen1[i]);
            }
            for(i=0;i<shichen.index;i++){
                shichens.push(shichen1[i]);
            }
            break;
        case 3:
            for(i=shichen.index;i<12;i++){
                shichens.push(shichen3[i]);
            }
            for(i=0;i<shichen.index;i++){
                shichens.push(shichen3[i]);
            }
            break;
    }
    return shichens;
}

function getMonthEng(month){
    var monthsEng=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return monthsEng[month-1];
}



function getWeeks(type,week){
    weeks=[];
    weeksEng=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    var i=0;
    switch(type){
        case 0:
        case 1:
        case 2:
            for(i=week;i<7;i++){
                weeks[i]="星期"+numToSimp(i);
                if(i==0){
                    weeks[i]="星期日"
                }
            }
            for(i=0;i<week;i++){
                weeks[i]="星期"+numToSimp(i);
            }
            break;
        case 3:
            for(i=week;i<7;i++)
            {
                weeks.push(weeksEng[i]);
            }
            for(i=0;i<week;i++)
            {
                weeks.push(weeksEng[i]);
            }
            break;
    }
    return weeks;
}

function getWeek(type,week){
    weekEng=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    res="";
    switch(type){
        case 0:
        case 1:
        case 2:
            if(week==0){
                res="日"
            }else{
                res=numToSimp(week);
            }
            break;
        case 3:
            res=weekEng[week];
            break;
    }
    return res;
}

function getHours(type,hour){
    var hours=new Array();
    var i=0;
    switch(type){
        case 0:
        case 3:
            for(i=hour;i<24;i++){
                hours.push(i);
            }
            for(i=0;i<hour;i++){
                hours.push(i);
            }
            break;
        case 1:
            for(i=hour;i<24;i++){
                hours.push(numToSimp(i));
            }
            for(i=0;i<hour;i++){
                hours.push(numToSimp(i));
            }
            break;
        case 2:
            for(i=hour;i<24;i++){
                hours.push(numToTrad(i));
            }
            for(i=0;i<hour;i++){
                hours.push(numToTrad(i));
            }
            break;
    }
    return hours;
}


function getMinutes(type,minute){
    var minutes=new Array();
    var i=0;
    switch(type){
        case 0:
        case 3:
            for(i=minute;i<60;i++){
                minutes.push(i);
            }
            for(i=0;i<minute;i++){
                minutes.push(i);
            }
            break;
        case 1:
            for(i=minute;i<60;i++){
                minutes.push(numToSimp(i));
            }
            for(i=0;i<minute;i++){
                minutes.push(numToSimp(i));
            }
            break;
        case 2:
            for(i=minute;i<60;i++){
                minutes.push(numToTrad(i));
            }
            for(i=0;i<minute;i++){
                minutes.push(numToTrad(i));
            }
            break;
    }
    return minutes;
}


function getSeconds(type,second){
    var seconds=new Array();
    var i=0;
    switch(type){
        case 0:
        case 3:
            for(i=second;i<60;i++){
                seconds.push(i);
            }
            for(i=0;i<second;i++){
                seconds.push(i);
            }
            break;
        case 1:
            for(i=second;i<60;i++){
                seconds.push(numToSimp(i));
            }
            for(i=0;i<second;i++){
                seconds.push(numToSimp(i));
            }
            break;
        case 2:
            for(i=second;i<60;i++){
                seconds.push(numToTrad(i));
            }
            for(i=0;i<second;i++){
                seconds.push(numToTrad(i));
            }
            break;
    }
    return seconds;
}

function isShichen(hour){
    if(hour=="one h"||hour=="three h"||hour=="five h"||hour=="seven h"||hour=="nine h"||hour=="eleven h"||hour=="thirteen h"||hour=="fifteen h"||hour=="seventeen h"||hour=="nineteen h"||hour=="twentyone h"||hour=="twentythree h"
    ||hour=="1时"||hour=="3时"||hour=="5时"||hour=="7时"||hour=="9时"||hour=="11时"||hour=="13时"||hour=="15时"||hour=="17时"||hour=="19时"||hour=="21时"||hour=="23时"
    ||hour=="一时"||hour=="三时"||hour=="五时"||hour=="七时"||hour=="九时"||hour=="十一时"||hour=="十三时"||hour=="十五时"||hour=="十七时"||hour=="十九时"||hour=="二十一时"||hour=="二十三时"
    ||hour=="壹时"||hour=="叁时"||hour=="伍时"||hour=="柒时"||hour=="玖时"||hour=="拾壹时"||hour=="拾叁时"||hour=="拾伍时"||hour=="拾柒时"||hour=="拾玖时"||hour=="贰拾壹时"||hour=="贰拾叁时"
    ||hour=="1 h"||hour=="3 h"||hour=="5 h"||hour=="7 h"||hour=="9 h"||hour=="11 h"||hour=="13 h"||hour=="15 h"||hour=="17 h"||hour=="19 h"||hour=="21 h"||hour=="23 h"){
        return true;
    }
    return false;
}


function updateDays(type,year,month,day){
    var days=new Array();
    var j=1;
    var isLeap=isLeapYear(year);
    switch (type) {
        case 0:
        case 3:
            for(j=day;j<=31;j++)
            {
                days.push(j)
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }
            for(j=1;j<day;j++){
                days.push(j)
            }
            break;
        case 1:
            for(j=1;j<=31;j++)
            {
                days.push(numToSimp(j))
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }

            for(j=1;j<day;j++){
                days.push(numToSimp(j))
            }

            break;
        case 2:
            for(j=1;j<=31;j++)
            {
                days.push(numToTrad(j))
                if(month==2&&isLeap&&j==29){
                    break;
                }
                if(month==2&&!isLeap&&j==28){
                    break;
                }
                if((month==2||month==4||month==6||month==9||month==11)&&j==30){
                    break;
                }

            }

            for(j=1;j<day;j++){
                days.push(numToTrad(j))
            }

            break;
    }
    return days;
}



function getFirstDay(type){
    day=1;
    switch (type) {
        case 1:
            day=numToSimp(day);
            break;
        case 2:
            day=numToTrad(day);
            break;
    }
    return day;
}