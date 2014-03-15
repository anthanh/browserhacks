(function(root) {

    var browserhacks = {};

    // Chrome * Opera 14+ Android 4.0.4
    browserhacks.isChromium = !! window.chrome;

    // Chrome * Safari 3+ Opera 14+
    browserhacks.isWebkit = 'WebkitAppearance' in document.documentElement.style;

    // Chrome 14+
    browserhacks.isChrome = !! window.chrome && !! window.chrome.webstore;


    // firefox *
    browserhacks.isFF = !! window.sidebar;
    // browserhacks.isFF = 'MozAppearance' in document.documentElement.style;
    // browserhacks.isFF = !! navigator.userAgent.match(/firefox/i);

    //  firefox 1.5+
    browserhacks.isFF_1_5 = typeof InstallTrigger !== 'undefined';

    // firefox 2-13
    browserhacks.isFF_2_13 = !! window.globalStorage;
    // browserhacks.isFF = /a/ [-1] == 'a';

    // firefox 2
    browserhacks.isFF_2 = (function x() {})[-6] == 'x';

    // firefox 3
    browserhacks.isFF_3 = (function x() {})[-5] == 'x';


    // Internet Explorer 6-
    browserhacks.isIE_6_ = document.all && !window.XMLHttpRequest;

    // Internet Explorer 6-10
    browserhacks.isIE_6_10 = document.all && document.compatMode;

    // Internet Explorer 7
    browserhacks.isIE_7 = document.all && window.XMLHttpRequest && !document.querySelector;

    // Internet Explorer 7-10
    browserhacks.isIE_7_10 = document.all && window.XMLHttpRequest;

    // Internet Explorer 7-
    browserhacks.isIE_7_ = document.all && !document.querySelector;

    // Internet Explorer 7
    browserhacks.isIE_7 = navigator.appVersion.indexOf("MSIE 7.") !== -1;

    // Internet Explorer 8-
    browserhacks.isIE_8_ = document.all && !document.addEventListener;
    // browserhacks.isIE = !+'\v1';
    // browserhacks.isIE = '\v' == 'v';

    // Internet Explorer 8
    browserhacks.isIE_8 = document.all && document.querySelector && !document.addEventListener;

    // Internet Explorer 8-10
    browserhacks.isIE_8_10 = document.all && document.querySelector;

    // Internet Explorer 9-10
    browserhacks.isIE_9_10 = document.all && document.addEventListener;

    // Internet Explorer 9
    browserhacks.isIE_9 = document.all && document.addEventListener && !window.atob;

    // Internet Explorer 9-
    browserhacks.isIE_9_ = document.all && !window.atob;

    // Internet Explorer 10-
    browserhacks.isIE_10_ = /*@cc_on!@*/ false;
    browserhacks.ieVersion = (function() {
        if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) {
            return parseFloat(RegExp.$1);
        } else {
            return false;
        }
    })();

    // Internet Explorer 3-10
    browserhacks.ieVersion_ = /*@cc_on (function() {switch(@_jscript_version) {case 1.0: return 3; case 3.0: return 4; case 5.0: return 5; case 5.1: return 5; case 5.5: return 5.5; case 5.6: return 6; case 5.7: return 7; case 5.8: return 8; case 9: return 9; case 10: return 10;}})() || @*/ 0;

    // Internet Explorer 10
    browserhacks.isIE_10 = document.all && window.atob;
    // browserhacks.isIE = eval("/*@cc_on!@*/false") && document.documentMode === 10;

    // Internet Explorer 10+
    browserhacks.isIE_10s = document.body.style.msTouchAction !== undefined;
    // browserhacks.isIE = window.navigator.msPointerEnabled;
    // browserhacks.isIE = 'behavior' in document.documentElement.style && '-ms-user-select' in document.documentElement.style;

    // Internet Explorer 11
    browserhacks.isIE_11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;


    // Opera *
    browserhacks.isOpera = !! window.opera || /opera|opr/i.test(navigator.userAgent);

    // Opera 9.64-
    browserhacks.isOpera_9 = /^function \(/.test([].sort);

    // Opera 12-
    browserhacks.isOpera_12 = window.opera && window.opera.version() == X;

    // Opera 12.16-
    browserhacks.isOpera_1216 = !! window.opera;

    // Opera Mini *
    browserhacks.isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
    // browserhacks.isOperaMini = Object.prototype.toString.call(window.operamini) === '[object OperaMini]';


    // Safari *
    browserhacks.isSafari = /constructor/i.test(window.HTMLElement);

    // Safari 5-
    browserhacks.isSafari_5_ = /a/.__proto__ == '//';

    // Safari 6
    browserhacks.isSafari_6 = !! navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome;

    root.browserhacks = browserhacks;

    return browserhacks;
})(this);