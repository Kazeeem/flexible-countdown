<h1 align="center">
  <br>
  <a href="https://codingkaz.com.ng"><img src="https://codingkaz.com.ng/images/countdown.gif" alt="Flexible Countdown" width="200"></a>
  <br>
  Flexible Countdown
  <br>
</h1>

<h4 align="center">Flexible Countdown is a special countdown timer built using <a href="https://day.js.org/" target="_blank">DayJs Library</a>.</h4>

<p align="center">
  <a href="https://img.shields.io/github/v/release/Kazeeem/flexible-countdown?label=Latest%20Release">
    <img src="https://img.shields.io/github/v/release/Kazeeem/flexible-countdown?label=Latest%20Release">
  </a>
  <a href="https://img.shields.io/github/last-commit/Kazeeem/flexible-countdown">
    <img src="https://img.shields.io/github/last-commit/Kazeeem/flexible-countdown">
  </a>
  <a href="https://img.shields.io/github/forks/Kazeeem/flexible-countdown?style=social">
    <img src="https://img.shields.io/github/forks/Kazeeem/flexible-countdown?style=social">
  </a>    
  <a href="https://img.shields.io/github/license/Kazeeem/flexible-countdown">
    <img src="https://img.shields.io/github/license/Kazeeem/flexible-countdown">
  </a>
</p>
  
  [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
  
 <p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## Key Features
* Locale support
  - You can specify the time in your timezone.
* Action to perform when timer elapses
  - You could either display a message or reload the page when the time reaches zero.
* Countdown in various formats. (i.e Year, months, weeks, days, hour, minutes and seconds.
* Easy to modify.

## How To Use
To clone and use this plugin, you'll need [Jquery 3.6.0 and above](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js)

```bash
# Clone this repository
$ git clone https://github.com/Kazeeem/flexible-countdown OR 
$ you could install it via composer 
* composer require kazeeem/flexible-countdown

# Locate the flexible-countdown.js file which will be found in src/assets/js
$ Make sure the flexible-countdown.js file is placed below your jquery.
```

![screenshot](https://codingkaz.com.ng/images/carbon.png)
# You can use the plugin as it is in the sample above
However, there are some optional parameters you may want to use as well:
* expiry_message
  - This is the message you may want to display when the timer reaches zero. If this value is not passed, the default message is "Time Up"
* reload_page
  - This takes the value of true or false. It reloads the page when the countdown reaches zero.
* suffix
  - This also takes the value of true or false. It will display the letters of the time beside the individual numbers
* show_days
  - By default, the timer shows Hour, minutes and seconds but if you want it to show the value of remaining days, you can set this to true
* show_weeks
  - If you want to show remaining weeks.
* show_months
  - If you want to show remaining months.
* show_years
  - If you want to show remaining year.
* local
  - You can specify the timezone you want the counter to use. By default, it is set to Africa/Lagos.

# Full Sample Code
![screenshot](https://codingkaz.com.ng/images/carbon1.png)

## Credits
This plugin uses the following libraries:
- [Dayjs](https://day.js.org/) and its plugins (Timezone and Duration).

## License

MIT

---

> [codingkaz.com.ng](https://codingkaz.com.ng) &nbsp;&middot;&nbsp;
> GitHub [@Kazeeem](https://github.com/Kazeeem) &nbsp;&middot;&nbsp;
> Twitter [@Kazeeem_A](https://twitter.com/Kazeeem_A)
