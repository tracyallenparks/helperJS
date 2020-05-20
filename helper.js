var __helper =(function(){
    const version = '1.0.0 - 2020-01-01';

    const cssInject = function(a,b){
        if (!document.querySelector('#'+b)) {
            let styler = document.createElement('style');
                styler.type = 'text/css';
                styler.id = b;
                styler.appendChild(document.createTextNode(a));
            document.head.appendChild(styler);
        }
    };

    const findAncestor = function(a,b) {
        while ((a = a.parentElement) && (a.tagName.toLowerCase() !== b.toLowerCase() && !a.classList.contains(b) && a.id !== b));
        return a;
    };

    const getParam = function(a,b) {
        if (!b) {
            b = document.location.href;
        }
        let match = RegExp('[?&]' + a + '=([^&]*)').exec(b);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    };

    const getRndNum = function(a,b) {
        let c = Math.floor(Math.random() * (b - a + 1)) + a;
        return c;
    };

    const getRndObj = function(a) {
        if (typeof a === 'object') {
            let b = Math.floor(Math.random() * ((a.length-1) - 0 + 1)) + 0;
            return a[b];
        } else {
            return false;
        }
    };

    const cookies = (function(){
        
        const bake = function(a,b,c){
            if(c){
                c = new Date(c);
                if (c) {
                    e = "; expires="+c.toUTCString();
                } else {
                    e = '';
                }
            } else {
                e = '';
            }
            let getHost = location.hostname.split('.');
                d = '.'+getHost[1]+'.'+getHost[2];

            document.cookie=a+'='+b+e+'; ;domain='+d+';path=/';
        };

        const eat = function(a){
            if (a) {
                __helper.cookies.bake(a,null,'Jan 01 1970 00:00:00');
            }
        };

        const read = function(a) {
            let v = null;
            if (a) {
                let allCookies = document.cookie.split('; ');
                for (let i = allCookies.length - 1; i >= 0; i--) {
                    let thisCookie = allCookies[i].split('=');
                    if (thisCookie[0] == a) {
                        v = thisCookie [1];
                    }
                }
            }
            return v;
        };

        return {
            bake: bake,
            eat: eat,
            read: read
        };

    })();

    const time = (function(){
        const addDays = function(a,b) {
            let result = new Date(a);
                result.setDate(result.getDate() + b);
            return result;
        };

        const checkDates = function(a,b){
            let isTrue = false;
            if(b === true || a === true){
                isTrue = true;
            } else {
                for (let i = 0; i < b.length; i++) {
                    let startDate = b[i][0];
                    let endDate = b[i][1];

                    let start = new Date(startDate);
                    let end = new Date(endDate);
                    let com = new Date(a);
                    if (com >= start && com <= end) {
                        isTrue = true;
                    }
                }
            }
            return isTrue;
        };

        const dst = function() {
            let year = new Date().getYear();
            if (year < 1000)
                year += 1900;

            let firstSwitch = 0;
            let secondSwitch = 0;
            let lastOffset = 99;

            for (i = 0; i < 12; i++) {
                let newDate = new Date(Date.UTC(year, i, 0, 0, 0, 0, 0));
                let tz = -1 * newDate.getTimezoneOffset() / 60;

                if (tz > lastOffset)
                    firstSwitch = i-1;
                else if (tz < lastOffset)
                    secondSwitch = i-1;

                lastOffset = tz;
            }

            let secondDstDate = new Date(findSwitchDate(year, secondSwitch));
            let firstDstDate = new Date(findSwitchDate(year, firstSwitch));
            let currentDate = new Date();
            if (firstDstDate == null && secondDstDate == null) {
                return false;
            } else {
                if (firstDstDate > secondDstDate) {
                    if ((currentDate > firstDstDate && currentDate > secondDstDate) || (currentDate < firstDstDate && currentDate > secondDstDate)){
                        secondDstDate = new Date(findSwitchDate(year+1, secondSwitch));
                    } else {
                        firstDstDate = new Date(findSwitchDate(year-1, firstSwitch));
                    }
                }
                if (firstDstDate <= currentDate && secondDstDate >= currentDate){
                    return true;
                } else {
                    return false;
                }
            }
            function findSwitchDate(year, month) {
                let baseDate = new Date(Date.UTC(year, month, 0, 0, 0, 0, 0));
                let changeDay = 0;
                let changeMinute = -1;
                let baseOffset = -1 * baseDate.getTimezoneOffset() / 60;
                let dstDate;
                for (day = 0; day < 50; day++) {
                    let tmpDate = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));
                    let tmpOffset = -1 * tmpDate.getTimezoneOffset() / 60;

                    if (tmpOffset != baseOffset) {
                        let minutes = 0;
                        changeDay = day;

                        tmpDate = new Date(Date.UTC(year, month, day-1, 0, 0, 0, 0));
                        tmpOffset = -1 * tmpDate.getTimezoneOffset() / 60;

                        while (changeMinute == -1) {
                            tmpDate = new Date(Date.UTC(year, month, day-1, 0, minutes, 0, 0));
                            tmpOffset = -1 * tmpDate.getTimezoneOffset() / 60;

                            if (tmpOffset != baseOffset){
                                tmpOffset = new Date(Date.UTC(year, month, day-1, 0, minutes-1, 0, 0));
                                changeMinute = minutes;
                                break;
                            }
                            else
                                minutes++;
                        }

                        dstDate = tmpOffset.getMonth() + 1;

                        if (dstDate < 10) dstDate = "0" + dstDate;

                        dstDate += '/' + tmpOffset.getDate() + '/' + year + ' ';

                        tmpDate = new Date(Date.UTC(year, month, day-1, 0, minutes-1, 0, 0));
                        dstDate += tmpDate.toTimeString().split(' ')[0];
                        return dstDate;
                    }
                }
            }
        }

        const monthFrom = function(a){
            let today = ((a)?new Date(a):new Date());
            let monthArray = ['Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan'];
            let todayDate = today.getDate();
            let todayMonth = today.getMonth()+1;
            let todayYear = today.getFullYear();
            let monthAway = new Date(monthArray[(todayMonth+1)]+' '+todayDate+' '+(((todayMonth+1) === 13)?todayYear+1:todayYear));
            return monthAway
        };

        const timeRemaining = function(a) {
            let t = Date.parse(a) - Date.parse(new Date());

            let seconds = Math.floor( (t/1000) % 60 );
            let minutes = Math.floor( (t/1000/60) % 60 );
            let hoursTotal = Math.floor( (t/(1000*60*60)) );
            let hours = Math.floor( (t/(1000*60*60)) % 24 );
            let days = Math.floor( t/(1000*60*60*24) );

            return {
                'total': t,
                'days' : days,
                'hours': hours,
                'hoursTotal': hoursTotal,
                'minutes': minutes,
                'seconds': seconds
            };
        };
        return {
            addDays: addDays,
            checkDates: checkDates,
            dst: dst,
            monthFrom: monthFrom,
            timeRemaining: timeRemaining
        };
    })();

    return {
        cssInject: cssInject,
        findAncestor: findAncestor,
        getParam: getParam,
        getRndNum: getRndNum,
        getRndObj: getRndObj,
        cookies: cookies,
        time: time,
        v: version
    };
}());