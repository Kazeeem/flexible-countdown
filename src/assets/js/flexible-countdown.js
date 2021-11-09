!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

!function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs_plugin_duration=s()}(this,function(){"use strict";function r(t){return t instanceof $}function o(t,s,i){return new $(t,i,s.$l)}function e(t){return a.p(t)+"s"}function i(t){return t<0?Math.ceil(t):Math.floor(t)}function h(t,s){return t?t<0?{negative:!0,format:""+Math.abs(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}}var u,a,t,s=36e5,n=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,f=2592e6,m=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:c,months:f,days:n,hours:s,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},$=((t=y.prototype).calMilliseconds=function(){var i=this;this.$ms=Object.keys(this.$d).reduce(function(t,s){return t+(i.$d[s]||0)*l[s]},0)},t.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=i(t/c),this.$d.months=i((t%=c)/f),this.$d.days=i((t%=f)/n),this.$d.hours=i((t%=n)/s),this.$d.minutes=i((t%=s)/6e4),this.$d.seconds=i((t%=6e4)/1e3),this.$d.milliseconds=t%=1e3},t.toISOString=function(){var t=h(this.$d.years,"Y"),s=h(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var n=h(i,"D"),e=h(this.$d.hours,"H"),r=h(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=h(o,"S"),i=t.negative||s.negative||n.negative||e.negative||r.negative||u.negative,o=e.format||r.format||u.format?"T":"",u=(i?"-":"")+"P"+t.format+s.format+n.format+o+e.format+r.format+u.format;return"P"==u||"-P"==u?"P0D":u},t.toJSON=function(){return this.toISOString()},t.format=function(t){var t=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return t.replace(d,function(t,s){return s||String(i[t])})},t.as=function(t){return this.$ms/l[e(t)]},t.get=function(t){var s=this.$ms,t=e(t);return"milliseconds"===t?s%=1e3:s="weeks"===t?i(s/l[t]):this.$d[t],0===s?0:s},t.add=function(t,s,i){t=s?t*l[e(s)]:(r(t)?t:o(t,this)).$ms;return o(this.$ms+t*(i?-1:1),this)},t.subtract=function(t,s){return this.add(t,s,!0)},t.locale=function(t){var s=this.clone();return s.$l=t,s},t.clone=function(){return o(this.$ms,this)},t.humanize=function(t){return u().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},t.milliseconds=function(){return this.get("milliseconds")},t.asMilliseconds=function(){return this.as("milliseconds")},t.seconds=function(){return this.get("seconds")},t.asSeconds=function(){return this.as("seconds")},t.minutes=function(){return this.get("minutes")},t.asMinutes=function(){return this.as("minutes")},t.hours=function(){return this.get("hours")},t.asHours=function(){return this.as("hours")},t.days=function(){return this.get("days")},t.asDays=function(){return this.as("days")},t.weeks=function(){return this.get("weeks")},t.asWeeks=function(){return this.as("weeks")},t.months=function(){return this.get("months")},t.asMonths=function(){return this.as("months")},t.years=function(){return this.get("years")},t.asYears=function(){return this.as("years")},y);function y(s,t,i){var n=this;if(this.$d={},this.$l=i,void 0===s&&(this.$ms=0,this.parseFromMilliseconds()),t)return o(s*l[e(t)],this);if("number"==typeof s)return this.$ms=s,this.parseFromMilliseconds(),this;if("object"==typeof s)return Object.keys(s).forEach(function(t){n.$d[e(t)]=s[t]}),this.calMilliseconds(),this;if("string"==typeof s){t=s.match(m);if(t){t=t.slice(2).map(function(t){return null!=t?Number(t):0});return this.$d.years=t[0],this.$d.months=t[1],this.$d.weeks=t[2],this.$d.days=t[3],this.$d.hours=t[4],this.$d.minutes=t[5],this.$d.seconds=t[6],this.calMilliseconds(),this}}return this}return function(t,s,n){a=(u=n)().$utils(),n.duration=function(t,s){var i=n.locale();return o(t,{$l:i},s)},n.isDuration=r;var i=s.prototype.add,e=s.prototype.subtract;s.prototype.add=function(t,s){return r(t)&&(t=t.asMilliseconds()),i.bind(this)(t,s)},s.prototype.subtract=function(t,s){return r(t)&&(t=t.asMilliseconds()),e.bind(this)(t,s)}}});

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs_plugin_timezone=e()}(this,function(){"use strict";var s={year:0,month:1,day:2,hour:3,minute:4,second:5},m={};return function(t,e,a){function f(t,e,n){void 0===n&&(n={});var i,o=new Date(t);return i=(void 0===n?{}:n).timeZoneName||"short",(n=m[t=e+"|"+i])||(n=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),m[t]=n),n.formatToParts(o)}function r(t,e){for(var n=f(t,e),i=[],o=0;o<n.length;o+=1){var r=n[o],u=r.type,r=r.value,u=s[u];0<=u&&(i[u]=parseInt(r,10))}return e=i[3],e=i[0]+"-"+i[1]+"-"+i[2]+" "+(24===e?0:e)+":"+i[4]+":"+i[5]+":000",t=+t,(a.utc(e).valueOf()-(t-t%1e3))/6e4}var u,e=e.prototype;e.tz=function(t,e){void 0===t&&(t=u);var n=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:t}),r=Math.round((i-new Date(o))/1e3/60),r=a(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-r,!0);return e&&(e=r.utcOffset(),r=r.add(n-e,"minute")),r.$x.$timezone=t,r},e.offsetName=function(t){var e=this.$x.$timezone||a.tz.guess(),t=f(this.valueOf(),e,{timeZoneName:t}).find(function(t){return"timezonename"===t.type.toLowerCase()});return t&&t.value};var i=e.startOf;e.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return i.call(this,t,e);var n=a(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return i.call(n,t,e).tz(this.$x.$timezone,!0)},a.tz=function(t,e,n){var i=n&&e,n=n||e||u,e=r(+a(),n);if("string"!=typeof t)return a(t).tz(n);i=function(t,e,n){var i=t-60*e*1e3,o=r(i,n);if(e===o)return[i,e];n=r(i-=60*(o-e)*1e3,n);return o===n?[i,o]:[t-60*Math.min(o,n)*1e3,Math.max(o,n)]}(a.utc(t,i).valueOf(),e,n),e=i[0],i=i[1],i=a(e).utcOffset(i);return i.$x.$timezone=n,i},a.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},a.tz.setDefault=function(t){u=t}}});

dayjs.extend(window.dayjs_plugin_duration);
dayjs.extend(window.dayjs_plugin_timezone);

/**
 *                                                  _ _ _                    _ _ _ _
 * _ _ _ _              _ _ _ _      \   /    |     |    \     |            |
 * |        |           |             \ /     |     |   /      |            |
 * |_ _ _   |           |_ _ _ _       /      |     |   \      |            | - - - - 
 * |        |           |             /  \    |     |    \     |            |
 * |        |_ _ _ _    |_ _ _ _     /    \   |     |_ _ /     |_ _ _ _     | _ _ _ _
 */

function flexible_countdown_init(options) {
    if (options.locale) {
        dayjs.tz.setDefault(options.locale);
    }
    else {
        dayjs.tz.setDefault("Africa/Lagos");
    }

    var da_interval = setInterval(function(){
        flexible_countdown();
    }, 1000);

    function flexible_countdown() {
        var eventTime = dayjs(options.future);
        var currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss");

        var diffTime = eventTime.diff(currentTime);
        var duration = dayjs.duration(diffTime).asMilliseconds();

        var reload = false;

        duration = dayjs.duration(duration - 1000);

        var seconds = duration.seconds(),
        minutes = duration.minutes(),
        hours = duration.hours(),
        days = duration.days(),
        weeks = duration.weeks(),
        months = duration.months(),
        years = duration.years();

        if (years.toString().length < 2) {
            years = "0"+years;
        }

        if (months.toString().length < 2) {
            months = "0"+months;
        }

        if (weeks.toString().length < 2) {
            weeks = "0"+weeks;
        }

        if (days.toString().length < 2) {
            days = "0"+days;
        }

        if (hours.toString().length < 2) {
            hours = "0"+hours;
        }

        if (minutes.toString().length < 2) {
            minutes = "0"+minutes;
        }

        if (seconds.toString().length < 2) {
            seconds = "0"+seconds;
        }

        if ((hours <= 0) && (minutes <= 0) && (seconds <= 0)) {
            if (options.expiry_message) {
                $(options.target).text(options.expiry_message);                
            }
            else {
                $(options.target).text("Time Up");
            }

            if (options.reload_page == true) {
                clearInterval(da_interval);
                options.reload_page = false;

                window.location.reload();
            }
        }
        else {
            var days_counter = "", weeks_counter = "", months_counter = "", years_counter = "";

            if (options.suffix) {
                if (options.show_years) {
                    years_counter =  years + " Years";
                }

                if (options.show_months) {
                    months_counter =  " " + months + " Months";
                }

                if (options.show_weeks) {
                    weeks_counter = " " + weeks + " Weeks ";
                }

                if (options.show_days) {
                    days_counter = " " + days + " Days ";
                }

                $(options.target).text(years_counter + months_counter + weeks_counter + days_counter + hours + " Hours " +  minutes + " Minutes " + seconds + " Seconds");
            }
            else {
                if (options.show_years) {
                    years_counter =  years + ":";
                }

                if (options.show_months) {
                    months_counter =  months + ":";
                }

                if (options.show_weeks) {
                    weeks_counter = weeks + ":";
                }

                if (options.show_days) {
                    days_counter = days + ":"
                }

                $(options.target).text(years_counter + months_counter + weeks_counter + days_counter + hours + ":" + minutes + ":" + seconds);
            }
        }
    }
}