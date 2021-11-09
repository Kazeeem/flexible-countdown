dayjs.extend(window.dayjs_plugin_duration);
dayjs.extend(window.dayjs_plugin_timezone);

dayjs.tz.setDefault("Africa/Lagos");

function flexible_countdown(future_time, target_element, time_elapsed_msg = "Time Up", reload_page=false, suffix=false, show_days=false, show_weeks=false, show_months=false, show_years=false) {
    var da_interval = setInterval(function(){
        flexible_countdown_int();
    }, 1000);

    function flexible_countdown_int() {
        var eventTime = dayjs(future_time);
        var currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss");

        var diffTime = eventTime.diff(currentTime); // Result would be in milliseconds.
        var duration = dayjs.duration(diffTime).asMilliseconds();

        duration = dayjs.duration(duration - 1000);

        var seconds = duration.seconds(),
        minutes = duration.minutes(),
        hours = duration.hours(),
        days = duration.days(),
        weeks = duration.weeks(),
        months = duration.months(),
        years = duration.years();

        if (years.toString().length < 2) { // Attach a zero before the years if it's one digit
            years = "0"+years;
        }

        if (months.toString().length < 2) { // Attach a zero before the months if it's one digit
            months = "0"+months;
        }

        if (weeks.toString().length < 2) { // Attach a zero before the weeks if it's one digit
            weeks = "0"+weeks;
        }

        if (days.toString().length < 2) { // Attach a zero before the days if it's one digit
            days = "0"+days;
        }

        if (hours.toString().length < 2) { // Attach a zero before the hour if it's one digit
            hours = "0"+hours;
        }

        if (minutes.toString().length < 2) { // Attach a zero before the minute if it's one digit
            minutes = "0"+minutes;
        }

        if (seconds.toString().length < 2) { // Attach a zero before the hour if it's one digit
            seconds = "0"+seconds;
        }

        if ((hours <= 0) && (minutes <= 0) && (seconds <= 0)) {
            $(target_element).text(time_elapsed_msg);

            if (reload_page == true) {
                clearInterval(da_interval);
                reload_page = false;

                window.location.reload();
            }
        }
        else {
            var days_counter = "", weeks_counter = "", months_counter = "", years_counter = "";

            if (suffix) {
                if (years_counter) {
                    years_counter =  years + " Years";
                }

                if (show_months) {
                    months_counter =  " " + months + " Months";
                }

                if (show_weeks) {
                    weeks_counter = " " + weeks + " Weeks ";
                }

                if (show_days) {
                    days_counter = " " + days + " Days ";
                }

                $(target_element).text(years_counter + months_counter + weeks_counter + days_counter + hours + " Hours " +  minutes + " Minutes " + seconds + " Seconds");
            }
            else {
                if (years_counter) {
                    years_counter =  years + ":";
                }

                if (show_months) {
                    months_counter =  months + ":";
                }

                if (show_weeks) {
                    weeks_counter = weeks + ":";
                }

                if (show_days) {
                    days_counter = days + ":"
                }

                $(target_element).text(years_counter + months_counter + weeks_counter + days_counter + hours + ":" + minutes + ":" + seconds);
            }
        }
    }
}