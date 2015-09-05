// ==UserScript==
// @name         SGLinkies
// @namespace    http://your.homepage/
// @version      1.0
// @description  add links to steamgifts menu and pages
// @author       Mullins
// @match        http://www.steamgifts.com/*
// @require      http://code.jquery.com/jquery-2.1.3.min.js
// @grant        GM_addStyle
// ==/UserScript==

// inject custom style
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.sg-info { background: linear-gradient(#464F60,#2F3540); padding: 6px 15px; text-shadow: none; color: #ffffff; align-items: center; cursor: pointer; }')
addGlobalStyle('.sg-info-txt { color: #ffffff; font: bold 11px/15px Arial,sans-serif; }');
addGlobalStyle('.sg-info-row { background: linear-gradient(#ffffff,#f6f7f9); padding: 6px 15px; text-shadow: none; align-items: center; display: flex; }');
addGlobalStyle('.sg-info-row:hover { background: linear-gradient(#63a0f4, #63a0f4); }');
addGlobalStyle('.sg-info-row:hover .nav__row__summary__name, .sg-info-row:hover i { color: #ffffff; }');
addGlobalStyle('.sg-info-row i { font-size: 16px; margin-right: 15px; color: #464F60; }');
addGlobalStyle('.sg-icon-black { color: #2E2E2E; }');
addGlobalStyle('.sg-icon-green { color: #3D8532; }');
addGlobalStyle('.sg-icon-red { color: #CB1D1D; }');


// add buttons to giveaway menu
$(".nav__left-container .nav__button-container:nth-child(2) .nav__absolute-dropdown").append ( ' \
<a class="nav__row" href="/account/settings/giveaways/filters"> \
<i class="sg-icon-black fa fa-fw fa-eye-slash"></i> \
<div class="nav__row__summary"> \
<p class="nav__row__summary__name">Hidden Giveaways</p> \
<p class="nav__row__summary__description">View all games you have hidden.</p> \
</div> \
</a> \
\
<a class="nav__row" href="/bundle-games"> \
<i class="sg-icon-green fa fa-fw fa-cube"></i> \
<div class="nav__row__summary"> \
<p class="nav__row__summary__name">Bundle List</p> \
<p class="nav__row__summary__description">List with all bundled games.</p> \
</div> \
</a> \
' );


// add buttons to discussion menu
$(".nav__left-container .nav__button-container:nth-child(5) .nav__absolute-dropdown").append ( ' \
<div class="sg-info"> \
<p class="sg-info-txt">Useful Threads</p> \
</div> \
\
<a class="sg-info-row" href="/trade/ERWWE/"> \
<i class="icon-black fa fa-fw fa-user"></i> \
<div class="nav__row__summary"> \
<p class="nav__row__summary__name">Find User by Steam ID</p> \
</div> \
</a> \
\
<a class="sg-info-row" href="/discussion/XaCbA/"> \
<i class="icon-black fa fa-fw fa-star"></i> \
<div class="nav__row__summary"> \
<p class="nav__row__summary__name">List of All CV Levels</p> \
</div> \
</a> \
\
<a class="sg-info-row" href="/discussion/pJRbR/"> \
<i class="icon-black fa fa-fw fa-ban"></i> \
<div class="nav__row__summary"> \
<p class="nav__row__summary__name">List of Games Disabled for GAs</p> \
</div> \
</a> \
\
<a class="sg-info-row" href="/discussion/1SCgV/"> \
<i class="icon-black fa fa-fw fa-plus"></i> \
<div class="nav__row__summary"> \
<p class="nav__row__summary__name">SG Add-ons Registry</p> \
</div> \
</a> \
\
<a class="sg-info-row" href="/discussion/TLR8m/"> \
<i class="icon-black fa fa-fw fa-puzzle-piece"></i> \
<div class="nav__row__summary"> \
<p class="nav__row__summary__name">Zelghadis Guide to SG Puzzling</p> \
</div> \
</a> \
' );


// add buttons to user menu
$(".nav__right-container .nav__button-container:nth-child(4) .nav__absolute-dropdown").append ( ' \
<div class="sg-info"> \
<p class="sg-info-txt">Quick Links</p> \
</div> \
\
<a class="sg-info-row" href="/account/manage/blacklist"> \
<i class="icon-black fa fa-fw fa-star"></i> \
<div class="nav__row__summary"> \
<p class="nav__row__summary__name">My Blacklist</p> \
</div> \
</a> \
\
<a class="sg-info-row" href="/account/manage/whitelist"> \
<i class="icon-black fa fa-fw fa-user"></i> \
<div class="nav__row__summary"> \
<p class="nav__row__summary__name">My Whitelist</p> \
</div> \
</a> \
' );


// add button to footer menu
$(".footer__inner-wrap>div:nth-child(2)").append ( ' \
<div> \
<i class="fa fa-flag"></i> \
<a href="/stats/community/regions">Regions</a> \
</div> \
' );
