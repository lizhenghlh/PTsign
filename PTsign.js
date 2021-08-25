// ==UserScript==
// @name        PTsign
// @description pt 自动签到
// @include     *hdhome*
// @include     *ourbits*
// @include     *hdupt*
// @include     *totheglory*
// @include     *lemonhd*
// @include     *btschool*
// @include     *nicept*
// @grant none
// @version     1.4
// @namespace @github.com/lizhenghlh
// ==/UserScript==
(function (window) {
  var url = window.location.href
  setTimeout(function() {
    var ttgSign = document.getElementById('signed') || ''
    var hdcSign = document.getElementsByClassName('userinfort')[0] || ''
    if (hdcSign) {
      var hdc = hdcSign.getElementsByTagName('a')[1];
    }
    var ourSign = document.getElementsByClassName('faqlink')[0] || ''
    var hdhomeSign = document.getElementsByClassName('faqlink')[0] || ''
    var leamonSign = document.getElementsByClassName('faqlink')[0] || ''
    // var schoolSign = document.get
    var niceptSign = document.getElementsByClassName('faqlink')[0] || ''
    var hdu = document.getElementById('qiandao') || ''
    if (hdu) {
      var hduSign = hdu.firstChild
    }
    if (window.location.host.indexOf('hdu') != -1) {
      qiandao('qiandao')
    }
    if (window.location.host.indexOf('ourbits') != -1 && ourSign.innerText.indexOf('签到得魔力') != -1) {
      ourSign.click()
    }
    if (window.location.host.indexOf('hdhome') != -1 && hdhomeSign.innerText.indexOf('签到得魔力') != -1) {
      hdhomeSign.click()
    }
    if (window.location.host.indexOf('lemonhd') != -1 && hdhomeSign.innerText.indexOf('签到') != -1) {
      leamonSign.click()
    }
    // if (window.location.host.indexOf('btschool') != -1 && schoolSign.href.indexOf('addbonus') != -1) {
    //   schoolSign.click()
    // }
    if (window.location.host.indexOf('nicept') != -1 && niceptSign.innerText.indexOf('簽到得魔力') != -1) {
      niceptSign.click()
    }
    if (window.location.host.indexOf('totheglory') != -1 && ttgSign.innerText.indexOf('签到') != -1) {
      ttgSign.click()
    }
  }, 500)
})(window)
