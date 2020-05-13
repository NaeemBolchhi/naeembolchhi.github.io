document.addEventListener('contextmenu', event => event.preventDefault());
// SCRAPE URL FOR LINKS
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
// STORE LINKS
if (getUrlVars().p1.match(/http/)) {
    var bef = "";
    var aft = "";
    var s0 = "";
} else if (getUrlVars().s0.match(/imgbb/)) {
    var bef = "https://i.ibb.co/";
    var aft = "/mangamob" + getUrlVars().p0 + ".jpg";
    var s0 = "&s0=" + getUrlVars().s0;
} else if (getUrlVars().s0.match(/postimg/)) {
    var bef = "https://i.postimg.cc/";
    var aft = "/mangamob" + getUrlVars().p0 + ".jpg";
    var s0 = "&s0=" + getUrlVars().s0;
}

var p0 = getUrlVars().p0;
var p1 = bef + getUrlVars().p1 + aft; var s1 = getUrlVars().p1;
var p2 = bef + getUrlVars().p2 + aft; var s2 = getUrlVars().p2;
var p3 = bef + getUrlVars().p3 + aft; var s3 = getUrlVars().p3;
var p4 = bef + getUrlVars().p4 + aft; var s4 = getUrlVars().p4;
var p5 = bef + getUrlVars().p5 + aft; var s5 = getUrlVars().p5;
var p6 = bef + getUrlVars().p6 + aft; var s6 = getUrlVars().p6;
var p7 = bef + getUrlVars().p7 + aft; var s7 = getUrlVars().p7;
var p8 = bef + getUrlVars().p8 + aft; var s8 = getUrlVars().p8;
var p9 = bef + getUrlVars().p9 + aft; var s9 = getUrlVars().p9;
var p10 = bef + getUrlVars().p10 + aft; var s10 = getUrlVars().p10;
var p11 = bef + getUrlVars().p11 + aft; var s11 = getUrlVars().p11;
var p12 = bef + getUrlVars().p12 + aft; var s12 = getUrlVars().p12;
var p13 = bef + getUrlVars().p13 + aft; var s13 = getUrlVars().p13;
var p14 = bef + getUrlVars().p14 + aft; var s14 = getUrlVars().p14;
var p15 = bef + getUrlVars().p15 + aft; var s15 = getUrlVars().p15;
var p16 = bef + getUrlVars().p16 + aft; var s16 = getUrlVars().p16;
var p17 = bef + getUrlVars().p17 + aft; var s17 = getUrlVars().p17;
var p18 = bef + getUrlVars().p18 + aft; var s18 = getUrlVars().p18;
var p19 = bef + getUrlVars().p19 + aft; var s19 = getUrlVars().p19;
var p20 = bef + getUrlVars().p20 + aft; var s20 = getUrlVars().p20;
var p21 = bef + getUrlVars().p21 + aft; var s21 = getUrlVars().p21;
var p22 = bef + getUrlVars().p22 + aft; var s22 = getUrlVars().p22;
var p23 = bef + getUrlVars().p23 + aft; var s23 = getUrlVars().p23;
var p24 = bef + getUrlVars().p24 + aft; var s24 = getUrlVars().p24;
var p25 = bef + getUrlVars().p25 + aft; var s25 = getUrlVars().p25;
var p26 = bef + getUrlVars().p26 + aft; var s26 = getUrlVars().p26;
var p27 = bef + getUrlVars().p27 + aft; var s27 = getUrlVars().p27;
var p28 = bef + getUrlVars().p28 + aft; var s28 = getUrlVars().p28;
var p29 = bef + getUrlVars().p29 + aft; var s29 = getUrlVars().p29;
var p30 = bef + getUrlVars().p30 + aft; var s30 = getUrlVars().p30;
var p31 = bef + getUrlVars().p31 + aft; var s31 = getUrlVars().p31;
var p32 = bef + getUrlVars().p32 + aft; var s32 = getUrlVars().p32;
var p33 = bef + getUrlVars().p33 + aft; var s33 = getUrlVars().p33;
var p34 = bef + getUrlVars().p34 + aft; var s34 = getUrlVars().p34;
var p35 = bef + getUrlVars().p35 + aft; var s35 = getUrlVars().p35;
var p36 = bef + getUrlVars().p36 + aft; var s36 = getUrlVars().p36;
var p37 = bef + getUrlVars().p37 + aft; var s37 = getUrlVars().p37;
var p38 = bef + getUrlVars().p38 + aft; var s38 = getUrlVars().p38;
var p39 = bef + getUrlVars().p39 + aft; var s39 = getUrlVars().p39;
var p40 = bef + getUrlVars().p40 + aft; var s40 = getUrlVars().p40;
var p41 = bef + getUrlVars().p41 + aft; var s41 = getUrlVars().p41;
var p42 = bef + getUrlVars().p42 + aft; var s42 = getUrlVars().p42;
var p43 = bef + getUrlVars().p43 + aft; var s43 = getUrlVars().p43;
var p44 = bef + getUrlVars().p44 + aft; var s44 = getUrlVars().p44;
var p45 = bef + getUrlVars().p45 + aft; var s45 = getUrlVars().p45;
var p46 = bef + getUrlVars().p46 + aft; var s46 = getUrlVars().p46;
var p47 = bef + getUrlVars().p47 + aft; var s47 = getUrlVars().p47;
var p48 = bef + getUrlVars().p48 + aft; var s48 = getUrlVars().p48;
var p49 = bef + getUrlVars().p49 + aft; var s49 = getUrlVars().p49;
var p50 = bef + getUrlVars().p50 + aft; var s50 = getUrlVars().p50;
var p51 = bef + getUrlVars().p51 + aft; var s51 = getUrlVars().p51;
var p52 = bef + getUrlVars().p52 + aft; var s52 = getUrlVars().p52;
var p53 = bef + getUrlVars().p53 + aft; var s53 = getUrlVars().p53;
var p54 = bef + getUrlVars().p54 + aft; var s54 = getUrlVars().p54;
var p55 = bef + getUrlVars().p55 + aft; var s55 = getUrlVars().p55;
var p56 = bef + getUrlVars().p56 + aft; var s56 = getUrlVars().p56;
var p57 = bef + getUrlVars().p57 + aft; var s57 = getUrlVars().p57;
var p58 = bef + getUrlVars().p58 + aft; var s58 = getUrlVars().p58;
var p59 = bef + getUrlVars().p59 + aft; var s59 = getUrlVars().p59;
var p60 = bef + getUrlVars().p60 + aft; var s60 = getUrlVars().p60;
var p61 = bef + getUrlVars().p61 + aft; var s61 = getUrlVars().p61;
var p62 = bef + getUrlVars().p62 + aft; var s62 = getUrlVars().p62;
var p63 = bef + getUrlVars().p63 + aft; var s63 = getUrlVars().p63;
var p64 = bef + getUrlVars().p64 + aft; var s64 = getUrlVars().p64;
var p65 = bef + getUrlVars().p65 + aft; var s65 = getUrlVars().p65;
var p66 = bef + getUrlVars().p66 + aft; var s66 = getUrlVars().p66;
var p67 = bef + getUrlVars().p67 + aft; var s67 = getUrlVars().p67;
var p68 = bef + getUrlVars().p68 + aft; var s68 = getUrlVars().p68;
var p69 = bef + getUrlVars().p69 + aft; var s69 = getUrlVars().p69;
var p70 = bef + getUrlVars().p70 + aft; var s70 = getUrlVars().p70;
var p71 = bef + getUrlVars().p71 + aft; var s71 = getUrlVars().p71;
var p72 = bef + getUrlVars().p72 + aft; var s72 = getUrlVars().p72;
var p73 = bef + getUrlVars().p73 + aft; var s73 = getUrlVars().p73;
var p74 = bef + getUrlVars().p74 + aft; var s74 = getUrlVars().p74;
var p75 = bef + getUrlVars().p75 + aft; var s75 = getUrlVars().p75;
var p76 = bef + getUrlVars().p76 + aft; var s76 = getUrlVars().p76;
var p77 = bef + getUrlVars().p77 + aft; var s77 = getUrlVars().p77;
var p78 = bef + getUrlVars().p78 + aft; var s78 = getUrlVars().p78;
var p79 = bef + getUrlVars().p79 + aft; var s79 = getUrlVars().p79;
var p80 = bef + getUrlVars().p80 + aft; var s80 = getUrlVars().p80;
var p81 = bef + getUrlVars().p81 + aft; var s81 = getUrlVars().p81;
var p82 = bef + getUrlVars().p82 + aft; var s82 = getUrlVars().p82;
var p83 = bef + getUrlVars().p83 + aft; var s83 = getUrlVars().p83;
var p84 = bef + getUrlVars().p84 + aft; var s84 = getUrlVars().p84;
var p85 = bef + getUrlVars().p85 + aft; var s85 = getUrlVars().p85;
var p86 = bef + getUrlVars().p86 + aft; var s86 = getUrlVars().p86;
var p87 = bef + getUrlVars().p87 + aft; var s87 = getUrlVars().p87;
var p88 = bef + getUrlVars().p88 + aft; var s88 = getUrlVars().p88;
var p89 = bef + getUrlVars().p89 + aft; var s89 = getUrlVars().p89;
var p90 = bef + getUrlVars().p90 + aft; var s90 = getUrlVars().p90;
var p91 = bef + getUrlVars().p91 + aft; var s91 = getUrlVars().p91;
var p92 = bef + getUrlVars().p92 + aft; var s92 = getUrlVars().p92;
var p93 = bef + getUrlVars().p93 + aft; var s93 = getUrlVars().p93;
var p94 = bef + getUrlVars().p94 + aft; var s94 = getUrlVars().p94;
var p95 = bef + getUrlVars().p95 + aft; var s95 = getUrlVars().p95;
var p96 = bef + getUrlVars().p96 + aft; var s96 = getUrlVars().p96;
var p97 = bef + getUrlVars().p97 + aft; var s97 = getUrlVars().p97;
var p98 = bef + getUrlVars().p98 + aft; var s98 = getUrlVars().p98;
var p99 = bef + getUrlVars().p99 + aft; var s99 = getUrlVars().p99;
var p100 = bef + getUrlVars().p100 + aft; var s100 = getUrlVars().p100;

// VARIABLESS
var arrowL = document.getElementById('arrowL');
var arrowR = document.getElementById('arrowR');
var page = document.getElementById('page');
var pageL = parseInt(p0) - 1;
var pageR = parseInt(p0) + 1;
var zenlinks = "&p1=" + s1 + "&p2=" + s2 + "&p3=" + s3 + "&p4=" + s4 + "&p5=" + s5 + "&p6=" + s6 + "&p7=" + s7 + "&p8=" + s8 + "&p9=" + s9 + "&p10=" + s10 + "&p11=" + s11 + "&p12=" + s12 + "&p13=" + s13 + "&p14=" + s14 + "&p15=" + s15 + "&p16=" + s16 + "&p17=" + s17 + "&p18=" + s18 + "&p19=" + s19 + "&p20=" + s20 + "&p21=" + s21 + "&p22=" + s22 + "&p23=" + s23 + "&p24=" + s24 + "&p25=" + s25 + "&p26=" + s26 + "&p27=" + s27 + "&p28=" + s28 + "&p29=" + s29 + "&p30=" + s30 + "&p31=" + s31 + "&p32=" + s32 + "&p33=" + s33 + "&p34=" + s34 + "&p35=" + s35 + "&p36=" + s36 + "&p37=" + s37 + "&p38=" + s38 + "&p39=" + s39 + "&p40=" + s40 + "&p41=" + s41 + "&p42=" + s42 + "&p43=" + s43 + "&p44=" + s44 + "&p45=" + s45 + "&p46=" + s46 + "&p47=" + s47 + "&p48=" + s48 + "&p49=" + s49 + "&p50=" + s50 + "&p51=" + s51 + "&p52=" + s52 + "&p53=" + s53 + "&p54=" + s54 + "&p55=" + s55 + "&p56=" + s56 + "&p57=" + s57 + "&p58=" + s58 + "&p59=" + s59 + "&p60=" + s60 + "&p61=" + s61 + "&p62=" + s62 + "&p63=" + s63 + "&p64=" + s64 + "&p65=" + s65 + "&p66=" + s66 + "&p67=" + s67 + "&p68=" + s68 + "&p69=" + s69 + "&p70=" + s70 + "&p71=" + s71 + "&p72=" + s72 + "&p73=" + s73 + "&p74=" + s74 + "&p75=" + s75 + "&p76=" + s76 + "&p77=" + s77 + "&p78=" + s78 + "&p79=" + s79 + "&p80=" + s80 + "&p81=" + s81 + "&p82=" + s82 + "&p83=" + s83 + "&p84=" + s84 + "&p85=" + s85 + "&p86=" + s86 + "&p87=" + s87 + "&p88=" + s88 + "&p89=" + s89 + "&p90=" + s90 + "&p91=" + s91 + "&p92=" + s92 + "&p93=" + s93 + "&p94=" + s94 + "&p95=" + s95 + "&p96=" + s96 + "&p97=" + s97 + "&p98=" + s98 + "&p99=" + s99 + "&p100=" + s100;
var pageNXT = "?p0=" + pageR + zenlinks + s0;
var pagePRV = "?p0=" + pageL + zenlinks + s0;


// USE VALUES
page.innerHTML = p0;

if (page.innerHTML == 1) {
  if (s1 != 0){
    document.getElementById('current').src = p1;
  } else {
    document.getElementById('current').src = s1;
  }
  if (s2 != 0){
    arrowR.href = pageNXT;
    arrowR.setAttribute("class",'nav');
    document.getElementById('preload').src = p2;
  }
}
if (page.innerHTML == 2) {
  if (s1 != 0){
    arrowL.href = pagePRV;
    arrowL.setAttribute("class",'nav');
  }
  if (s2 != 0){
    document.getElementById('current').src = p2;
  } else {
    document.getElementById('current').src = s2;
  }
  if (s3 != 0){
    arrowR.href = pageNXT;
    arrowR.setAttribute("class",'nav');
    document.getElementById('preload').src = p3;
  }
}
if (page.innerHTML == 3) {if (s2 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s3 != 0){document.getElementById('current').src = p3;} else {document.getElementById('current').src = s3;}if (s4 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p4;}}
if (page.innerHTML == 4) {if (s3 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s4 != 0){document.getElementById('current').src = p4;} else {document.getElementById('current').src = s4;}if (s5 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p5;}}
if (page.innerHTML == 5) {if (s4 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s5 != 0){document.getElementById('current').src = p5;} else {document.getElementById('current').src = s5;}if (s6 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p6;}}
if (page.innerHTML == 6) {if (s5 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s6 != 0){document.getElementById('current').src = p6;} else {document.getElementById('current').src = s6;}if (s7 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p7;}}
if (page.innerHTML == 7) {if (s6 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s7 != 0){document.getElementById('current').src = p7;} else {document.getElementById('current').src = s7;}if (s8 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p8;}}
if (page.innerHTML == 8) {if (s7 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s8 != 0){document.getElementById('current').src = p8;} else {document.getElementById('current').src = s8;}if (s9 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p9;}}
if (page.innerHTML == 9) {if (s8 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s9 != 0){document.getElementById('current').src = p9;} else {document.getElementById('current').src = s9;}if (s10 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p10;}}
if (page.innerHTML == 10) {if (s9 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s10 != 0){document.getElementById('current').src = p10;} else {document.getElementById('current').src = s10;}if (s11 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p11;}}
if (page.innerHTML == 11) {if (s10 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s11 != 0){document.getElementById('current').src = p11;} else {document.getElementById('current').src = s11;}if (s12 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p12;}}
if (page.innerHTML == 12) {if (s11 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s12 != 0){document.getElementById('current').src = p12;} else {document.getElementById('current').src = s12;}if (s13 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p13;}}
if (page.innerHTML == 13) {if (s12 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s13 != 0){document.getElementById('current').src = p13;} else {document.getElementById('current').src = s13;}if (s14 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p14;}}
if (page.innerHTML == 14) {if (s13 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s14 != 0){document.getElementById('current').src = p14;} else {document.getElementById('current').src = s14;}if (s15 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p15;}}
if (page.innerHTML == 15) {if (s14 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s15 != 0){document.getElementById('current').src = p15;} else {document.getElementById('current').src = s15;}if (s16 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p16;}}
if (page.innerHTML == 16) {if (s15 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s16 != 0){document.getElementById('current').src = p16;} else {document.getElementById('current').src = s16;}if (s17 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p17;}}
if (page.innerHTML == 17) {if (s16 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s17 != 0){document.getElementById('current').src = p17;} else {document.getElementById('current').src = s17;}if (s18 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p18;}}
if (page.innerHTML == 18) {if (s17 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s18 != 0){document.getElementById('current').src = p18;} else {document.getElementById('current').src = s18;}if (s19 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p19;}}
if (page.innerHTML == 19) {if (s18 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s19 != 0){document.getElementById('current').src = p19;} else {document.getElementById('current').src = s19;}if (s20 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p20;}}
if (page.innerHTML == 20) {if (s19 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s20 != 0){document.getElementById('current').src = p20;} else {document.getElementById('current').src = s20;}if (s21 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p21;}}
if (page.innerHTML == 21) {if (s20 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s21 != 0){document.getElementById('current').src = p21;} else {document.getElementById('current').src = s21;}if (s22 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p22;}}
if (page.innerHTML == 22) {if (s21 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s22 != 0){document.getElementById('current').src = p22;} else {document.getElementById('current').src = s22;}if (s23 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p23;}}
if (page.innerHTML == 23) {if (s22 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s23 != 0){document.getElementById('current').src = p23;} else {document.getElementById('current').src = s23;}if (s24 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p24;}}
if (page.innerHTML == 24) {if (s23 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s24 != 0){document.getElementById('current').src = p24;} else {document.getElementById('current').src = s24;}if (s25 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p25;}}
if (page.innerHTML == 25) {if (s24 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s25 != 0){document.getElementById('current').src = p25;} else {document.getElementById('current').src = s25;}if (s26 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p26;}}
if (page.innerHTML == 26) {if (s25 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s26 != 0){document.getElementById('current').src = p26;} else {document.getElementById('current').src = s26;}if (s27 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p27;}}
if (page.innerHTML == 27) {if (s26 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s27 != 0){document.getElementById('current').src = p27;} else {document.getElementById('current').src = s27;}if (s28 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p28;}}
if (page.innerHTML == 28) {if (s27 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s28 != 0){document.getElementById('current').src = p28;} else {document.getElementById('current').src = s28;}if (s29 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p29;}}
if (page.innerHTML == 29) {if (s28 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s29 != 0){document.getElementById('current').src = p29;} else {document.getElementById('current').src = s29;}if (s30 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p30;}}
if (page.innerHTML == 30) {if (s29 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s30 != 0){document.getElementById('current').src = p30;} else {document.getElementById('current').src = s30;}if (s31 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p31;}}
if (page.innerHTML == 31) {if (s30 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s31 != 0){document.getElementById('current').src = p31;} else {document.getElementById('current').src = s31;}if (s32 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p32;}}
if (page.innerHTML == 32) {if (s31 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s32 != 0){document.getElementById('current').src = p32;} else {document.getElementById('current').src = s32;}if (s33 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p33;}}
if (page.innerHTML == 33) {if (s32 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s33 != 0){document.getElementById('current').src = p33;} else {document.getElementById('current').src = s33;}if (s34 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p34;}}
if (page.innerHTML == 34) {if (s33 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s34 != 0){document.getElementById('current').src = p34;} else {document.getElementById('current').src = s34;}if (s35 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p35;}}
if (page.innerHTML == 35) {if (s34 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s35 != 0){document.getElementById('current').src = p35;} else {document.getElementById('current').src = s35;}if (s36 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p36;}}
if (page.innerHTML == 36) {if (s35 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s36 != 0){document.getElementById('current').src = p36;} else {document.getElementById('current').src = s36;}if (s37 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p37;}}
if (page.innerHTML == 37) {if (s36 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s37 != 0){document.getElementById('current').src = p37;} else {document.getElementById('current').src = s37;}if (s38 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p38;}}
if (page.innerHTML == 38) {if (s37 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s38 != 0){document.getElementById('current').src = p38;} else {document.getElementById('current').src = s38;}if (s39 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p39;}}
if (page.innerHTML == 39) {if (s38 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s39 != 0){document.getElementById('current').src = p39;} else {document.getElementById('current').src = s39;}if (s40 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p40;}}
if (page.innerHTML == 40) {if (s39 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s40 != 0){document.getElementById('current').src = p40;} else {document.getElementById('current').src = s40;}if (s41 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p41;}}
if (page.innerHTML == 41) {if (s40 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s41 != 0){document.getElementById('current').src = p41;} else {document.getElementById('current').src = s41;}if (s42 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p42;}}
if (page.innerHTML == 42) {if (s41 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s42 != 0){document.getElementById('current').src = p42;} else {document.getElementById('current').src = s42;}if (s43 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p43;}}
if (page.innerHTML == 43) {if (s42 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s43 != 0){document.getElementById('current').src = p43;} else {document.getElementById('current').src = s43;}if (s44 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p44;}}
if (page.innerHTML == 44) {if (s43 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s44 != 0){document.getElementById('current').src = p44;} else {document.getElementById('current').src = s44;}if (s45 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p45;}}
if (page.innerHTML == 45) {if (s44 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s45 != 0){document.getElementById('current').src = p45;} else {document.getElementById('current').src = s45;}if (s46 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p46;}}
if (page.innerHTML == 46) {if (s45 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s46 != 0){document.getElementById('current').src = p46;} else {document.getElementById('current').src = s46;}if (s47 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p47;}}
if (page.innerHTML == 47) {if (s46 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s47 != 0){document.getElementById('current').src = p47;} else {document.getElementById('current').src = s47;}if (s48 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p48;}}
if (page.innerHTML == 48) {if (s47 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s48 != 0){document.getElementById('current').src = p48;} else {document.getElementById('current').src = s48;}if (s49 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p49;}}
if (page.innerHTML == 49) {if (s48 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s49 != 0){document.getElementById('current').src = p49;} else {document.getElementById('current').src = s49;}if (s50 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p50;}}
if (page.innerHTML == 50) {if (s49 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s50 != 0){document.getElementById('current').src = p50;} else {document.getElementById('current').src = s50;}if (s51 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p51;}}
if (page.innerHTML == 51) {if (s50 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s51 != 0){document.getElementById('current').src = p51;} else {document.getElementById('current').src = s51;}if (s52 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p52;}}
if (page.innerHTML == 52) {if (s51 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s52 != 0){document.getElementById('current').src = p52;} else {document.getElementById('current').src = s52;}if (s53 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p53;}}
if (page.innerHTML == 53) {if (s52 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s53 != 0){document.getElementById('current').src = p53;} else {document.getElementById('current').src = s53;}if (s54 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p54;}}
if (page.innerHTML == 54) {if (s53 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s54 != 0){document.getElementById('current').src = p54;} else {document.getElementById('current').src = s54;}if (s55 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p55;}}
if (page.innerHTML == 55) {if (s54 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s55 != 0){document.getElementById('current').src = p55;} else {document.getElementById('current').src = s55;}if (s56 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p56;}}
if (page.innerHTML == 56) {if (s55 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s56 != 0){document.getElementById('current').src = p56;} else {document.getElementById('current').src = s56;}if (s57 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p57;}}
if (page.innerHTML == 57) {if (s56 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s57 != 0){document.getElementById('current').src = p57;} else {document.getElementById('current').src = s57;}if (s58 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p58;}}
if (page.innerHTML == 58) {if (s57 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s58 != 0){document.getElementById('current').src = p58;} else {document.getElementById('current').src = s58;}if (s59 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p59;}}
if (page.innerHTML == 59) {if (s58 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s59 != 0){document.getElementById('current').src = p59;} else {document.getElementById('current').src = s59;}if (s60 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p60;}}
if (page.innerHTML == 60) {if (s59 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s60 != 0){document.getElementById('current').src = p60;} else {document.getElementById('current').src = s60;}if (s61 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p61;}}
if (page.innerHTML == 61) {if (s60 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s61 != 0){document.getElementById('current').src = p61;} else {document.getElementById('current').src = s61;}if (s62 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p62;}}
if (page.innerHTML == 62) {if (s61 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s62 != 0){document.getElementById('current').src = p62;} else {document.getElementById('current').src = s62;}if (s63 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p63;}}
if (page.innerHTML == 63) {if (s62 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s63 != 0){document.getElementById('current').src = p63;} else {document.getElementById('current').src = s63;}if (s64 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p64;}}
if (page.innerHTML == 64) {if (s63 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s64 != 0){document.getElementById('current').src = p64;} else {document.getElementById('current').src = s64;}if (s65 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p65;}}
if (page.innerHTML == 65) {if (s64 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s65 != 0){document.getElementById('current').src = p65;} else {document.getElementById('current').src = s65;}if (s66 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p66;}}
if (page.innerHTML == 66) {if (s65 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s66 != 0){document.getElementById('current').src = p66;} else {document.getElementById('current').src = s66;}if (s67 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p67;}}
if (page.innerHTML == 67) {if (s66 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s67 != 0){document.getElementById('current').src = p67;} else {document.getElementById('current').src = s67;}if (s68 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p68;}}
if (page.innerHTML == 68) {if (s67 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s68 != 0){document.getElementById('current').src = p68;} else {document.getElementById('current').src = s68;}if (s69 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p69;}}
if (page.innerHTML == 69) {if (s68 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s69 != 0){document.getElementById('current').src = p69;} else {document.getElementById('current').src = s69;}if (s70 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p70;}}
if (page.innerHTML == 70) {if (s69 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s70 != 0){document.getElementById('current').src = p70;} else {document.getElementById('current').src = s70;}if (s71 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p71;}}
if (page.innerHTML == 71) {if (s70 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s71 != 0){document.getElementById('current').src = p71;} else {document.getElementById('current').src = s71;}if (s72 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p72;}}
if (page.innerHTML == 72) {if (s71 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s72 != 0){document.getElementById('current').src = p72;} else {document.getElementById('current').src = s72;}if (s73 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p73;}}
if (page.innerHTML == 73) {if (s72 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s73 != 0){document.getElementById('current').src = p73;} else {document.getElementById('current').src = s73;}if (s74 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p74;}}
if (page.innerHTML == 74) {if (s73 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s74 != 0){document.getElementById('current').src = p74;} else {document.getElementById('current').src = s74;}if (s75 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p75;}}
if (page.innerHTML == 75) {if (s74 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s75 != 0){document.getElementById('current').src = p75;} else {document.getElementById('current').src = s75;}if (s76 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p76;}}
if (page.innerHTML == 76) {if (s75 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s76 != 0){document.getElementById('current').src = p76;} else {document.getElementById('current').src = s76;}if (s77 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p77;}}
if (page.innerHTML == 77) {if (s76 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s77 != 0){document.getElementById('current').src = p77;} else {document.getElementById('current').src = s77;}if (s78 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p78;}}
if (page.innerHTML == 78) {if (s77 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s78 != 0){document.getElementById('current').src = p78;} else {document.getElementById('current').src = s78;}if (s79 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p79;}}
if (page.innerHTML == 79) {if (s78 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s79 != 0){document.getElementById('current').src = p79;} else {document.getElementById('current').src = s79;}if (s80 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p80;}}
if (page.innerHTML == 80) {if (s79 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s80 != 0){document.getElementById('current').src = p80;} else {document.getElementById('current').src = s80;}if (s81 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p81;}}
if (page.innerHTML == 81) {if (s80 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s81 != 0){document.getElementById('current').src = p81;} else {document.getElementById('current').src = s81;}if (s82 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p82;}}
if (page.innerHTML == 82) {if (s81 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s82 != 0){document.getElementById('current').src = p82;} else {document.getElementById('current').src = s82;}if (s83 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p83;}}
if (page.innerHTML == 83) {if (s82 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s83 != 0){document.getElementById('current').src = p83;} else {document.getElementById('current').src = s83;}if (s84 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p84;}}
if (page.innerHTML == 84) {if (s83 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s84 != 0){document.getElementById('current').src = p84;} else {document.getElementById('current').src = s84;}if (s85 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p85;}}
if (page.innerHTML == 85) {if (s84 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s85 != 0){document.getElementById('current').src = p85;} else {document.getElementById('current').src = s85;}if (s86 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p86;}}
if (page.innerHTML == 86) {if (s85 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s86 != 0){document.getElementById('current').src = p86;} else {document.getElementById('current').src = s86;}if (s87 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p87;}}
if (page.innerHTML == 87) {if (s86 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s87 != 0){document.getElementById('current').src = p87;} else {document.getElementById('current').src = s87;}if (s88 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p88;}}
if (page.innerHTML == 88) {if (s87 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s88 != 0){document.getElementById('current').src = p88;} else {document.getElementById('current').src = s88;}if (s89 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p89;}}
if (page.innerHTML == 89) {if (s88 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s89 != 0){document.getElementById('current').src = p89;} else {document.getElementById('current').src = s89;}if (s90 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p90;}}
if (page.innerHTML == 90) {if (s89 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s90 != 0){document.getElementById('current').src = p90;} else {document.getElementById('current').src = s90;}if (s91 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p91;}}
if (page.innerHTML == 91) {if (s90 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s91 != 0){document.getElementById('current').src = p91;} else {document.getElementById('current').src = s91;}if (s92 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p92;}}
if (page.innerHTML == 92) {if (s91 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s92 != 0){document.getElementById('current').src = p92;} else {document.getElementById('current').src = s92;}if (s93 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p93;}}
if (page.innerHTML == 93) {if (s92 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s93 != 0){document.getElementById('current').src = p93;} else {document.getElementById('current').src = s93;}if (s94 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p94;}}
if (page.innerHTML == 94) {if (s93 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s94 != 0){document.getElementById('current').src = p94;} else {document.getElementById('current').src = s94;}if (s95 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p95;}}
if (page.innerHTML == 95) {if (s94 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s95 != 0){document.getElementById('current').src = p95;} else {document.getElementById('current').src = s95;}if (s96 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p96;}}
if (page.innerHTML == 96) {if (s95 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s96 != 0){document.getElementById('current').src = p96;} else {document.getElementById('current').src = s96;}if (s97 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p97;}}
if (page.innerHTML == 97) {if (s96 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s97 != 0){document.getElementById('current').src = p97;} else {document.getElementById('current').src = s97;}if (s98 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p98;}}
if (page.innerHTML == 98) {if (s97 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s98 != 0){document.getElementById('current').src = p98;} else {document.getElementById('current').src = s98;}if (s99 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p99;}}
if (page.innerHTML == 99) {if (s98 != 0){arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (s99 != 0){document.getElementById('current').src = p99;} else {document.getElementById('current').src = s99;}if (s100 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p100;}}
if (page.innerHTML == 100) {
  if (s99 != 0){
    arrowL.href = pagePRV;
    arrowL.setAttribute("class",'nav');
  }
  if (s100 != 0){
    document.getElementById('current').src = p100;
  } else {
    document.getElementById('current').src = s100;
  }
}