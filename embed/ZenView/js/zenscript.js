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
var p0 = getUrlVars().p0;
var p1 = getUrlVars().p1;
var p2 = getUrlVars().p2;
var p3 = getUrlVars().p3;
var p4 = getUrlVars().p4;
var p5 = getUrlVars().p5;
var p6 = getUrlVars().p6;
var p7 = getUrlVars().p7;
var p8 = getUrlVars().p8;
var p9 = getUrlVars().p9;
var p10 = getUrlVars().p10;
var p11 = getUrlVars().p11;
var p12 = getUrlVars().p12;
var p13 = getUrlVars().p13;
var p14 = getUrlVars().p14;
var p15 = getUrlVars().p15;
var p16 = getUrlVars().p16;
var p17 = getUrlVars().p17;
var p18 = getUrlVars().p18;
var p19 = getUrlVars().p19;
var p20 = getUrlVars().p20;
var p21 = getUrlVars().p21;
var p22 = getUrlVars().p22;
var p23 = getUrlVars().p23;
var p24 = getUrlVars().p24;
var p25 = getUrlVars().p25;
var p26 = getUrlVars().p26;
var p27 = getUrlVars().p27;
var p28 = getUrlVars().p28;
var p29 = getUrlVars().p29;
var p30 = getUrlVars().p30;
var p31 = getUrlVars().p31;
var p32 = getUrlVars().p32;
var p33 = getUrlVars().p33;
var p34 = getUrlVars().p34;
var p35 = getUrlVars().p35;
var p36 = getUrlVars().p36;
var p37 = getUrlVars().p37;
var p38 = getUrlVars().p38;
var p39 = getUrlVars().p39;
var p40 = getUrlVars().p40;
var p41 = getUrlVars().p41;
var p42 = getUrlVars().p42;
var p43 = getUrlVars().p43;
var p44 = getUrlVars().p44;
var p45 = getUrlVars().p45;
var p46 = getUrlVars().p46;
var p47 = getUrlVars().p47;
var p48 = getUrlVars().p48;
var p49 = getUrlVars().p49;
var p50 = getUrlVars().p50;
var p51 = getUrlVars().p51;
var p52 = getUrlVars().p52;
var p53 = getUrlVars().p53;
var p54 = getUrlVars().p54;
var p55 = getUrlVars().p55;
var p56 = getUrlVars().p56;
var p57 = getUrlVars().p57;
var p58 = getUrlVars().p58;
var p59 = getUrlVars().p59;
var p60 = getUrlVars().p60;
var p61 = getUrlVars().p61;
var p62 = getUrlVars().p62;
var p63 = getUrlVars().p63;
var p64 = getUrlVars().p64;
var p65 = getUrlVars().p65;
var p66 = getUrlVars().p66;
var p67 = getUrlVars().p67;
var p68 = getUrlVars().p68;
var p69 = getUrlVars().p69;
var p70 = getUrlVars().p70;
var p71 = getUrlVars().p71;
var p72 = getUrlVars().p72;
var p73 = getUrlVars().p73;
var p74 = getUrlVars().p74;
var p75 = getUrlVars().p75;
var p76 = getUrlVars().p76;
var p77 = getUrlVars().p77;
var p78 = getUrlVars().p78;
var p79 = getUrlVars().p79;
var p80 = getUrlVars().p80;
var p81 = getUrlVars().p81;
var p82 = getUrlVars().p82;
var p83 = getUrlVars().p83;
var p84 = getUrlVars().p84;
var p85 = getUrlVars().p85;
var p86 = getUrlVars().p86;
var p87 = getUrlVars().p87;
var p88 = getUrlVars().p88;
var p89 = getUrlVars().p89;
var p90 = getUrlVars().p90;
var p91 = getUrlVars().p91;
var p92 = getUrlVars().p92;
var p93 = getUrlVars().p93;
var p94 = getUrlVars().p94;
var p95 = getUrlVars().p95;
var p96 = getUrlVars().p96;
var p97 = getUrlVars().p97;
var p98 = getUrlVars().p98;
var p99 = getUrlVars().p99;
var p100 = getUrlVars().p100;

// VARIABLESS
var arrowL = document.getElementById('arrowL');
var arrowR = document.getElementById('arrowR');
var page = document.getElementById('page');
var pageL = parseInt(p0) - 1;
var pageR = parseInt(p0) + 1;
var zenlinks = "&p1=" + p1 + "&p2=" + p2 + "&p3=" + p3 + "&p4=" + p4 + "&p5=" + p5 + "&p6=" + p6 + "&p7=" + p7 + "&p8=" + p8 + "&p9=" + p9 + "&p10=" + p10 + "&p11=" + p11 + "&p12=" + p12 + "&p13=" + p13 + "&p14=" + p14 + "&p15=" + p15 + "&p16=" + p16 + "&p17=" + p17 + "&p18=" + p18 + "&p19=" + p19 + "&p20=" + p20 + "&p21=" + p21 + "&p22=" + p22 + "&p23=" + p23 + "&p24=" + p24 + "&p25=" + p25 + "&p26=" + p26 + "&p27=" + p27 + "&p28=" + p28 + "&p29=" + p29 + "&p30=" + p30 + "&p31=" + p31 + "&p32=" + p32 + "&p33=" + p33 + "&p34=" + p34 + "&p35=" + p35 + "&p36=" + p36 + "&p37=" + p37 + "&p38=" + p38 + "&p39=" + p39 + "&p40=" + p40 + "&p41=" + p41 + "&p42=" + p42 + "&p43=" + p43 + "&p44=" + p44 + "&p45=" + p45 + "&p46=" + p46 + "&p47=" + p47 + "&p48=" + p48 + "&p49=" + p49 + "&p50=" + p50 + "&p51=" + p51 + "&p52=" + p52 + "&p53=" + p53 + "&p54=" + p54 + "&p55=" + p55 + "&p56=" + p56 + "&p57=" + p57 + "&p58=" + p58 + "&p59=" + p59 + "&p60=" + p60 + "&p61=" + p61 + "&p62=" + p62 + "&p63=" + p63 + "&p64=" + p64 + "&p65=" + p65 + "&p66=" + p66 + "&p67=" + p67 + "&p68=" + p68 + "&p69=" + p69 + "&p70=" + p70 + "&p71=" + p71 + "&p72=" + p72 + "&p73=" + p73 + "&p74=" + p74 + "&p75=" + p75 + "&p76=" + p76 + "&p77=" + p77 + "&p78=" + p78 + "&p79=" + p79 + "&p80=" + p80 + "&p81=" + p81 + "&p82=" + p82 + "&p83=" + p83 + "&p84=" + p84 + "&p85=" + p85 + "&p86=" + p86 + "&p87=" + p87 + "&p88=" + p88 + "&p89=" + p89 + "&p90=" + p90 + "&p91=" + p91 + "&p92=" + p92 + "&p93=" + p93 + "&p94=" + p94 + "&p95=" + p95 + "&p96=" + p96 + "&p97=" + p97 + "&p98=" + p98 + "&p99=" + p99 + "&p100=" + p100;
var pageNXT = "?p0=" + pageR + zenlinks;
var pagePRV = "?p0=" + pageL + zenlinks;


// USE VALUES
page.innerHTML = p0;

if (page.innerHTML == 1) {
  document.getElementById('current').src = p1;
  if (p2 != 0){
    arrowR.href = pageNXT;
    arrowR.setAttribute("class",'nav');
	document.getElementById('preload').src = p2;
  }
}
if (page.innerHTML == 2) {
  if (p1 != 0){
    document.getElementById('current').src = p2;
    arrowL.href = pagePRV;
    arrowL.setAttribute("class",'nav');
  }
  if (p3 != 0){
    arrowR.href = pageNXT;
    arrowR.setAttribute("class",'nav');
	document.getElementById('preload').src = p3;
  }
}
if (page.innerHTML == 3){if (p2 != 0){document.getElementById('current').src = p3;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p4 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p4;}}
if (page.innerHTML == 4){if (p3 != 0){document.getElementById('current').src = p4;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p5 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p5;}}
if (page.innerHTML == 5){if (p4 != 0){document.getElementById('current').src = p5;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p6 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p6;}}
if (page.innerHTML == 6){if (p5 != 0){document.getElementById('current').src = p6;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p7 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p7;}}
if (page.innerHTML == 7){if (p6 != 0){document.getElementById('current').src = p7;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p8 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p8;}}
if (page.innerHTML == 8){if (p7 != 0){document.getElementById('current').src = p8;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p9 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p9;}}
if (page.innerHTML == 9){if (p8 != 0){document.getElementById('current').src = p9;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p10 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p10;}}
if (page.innerHTML == 10){if (p9 != 0){document.getElementById('current').src = p10;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p11 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p11;}}
if (page.innerHTML == 11){if (p10 != 0){document.getElementById('current').src = p11;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p12 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p12;}}
if (page.innerHTML == 12){if (p11 != 0){document.getElementById('current').src = p12;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p13 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p13;}}
if (page.innerHTML == 13){if (p12 != 0){document.getElementById('current').src = p13;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p14 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p14;}}
if (page.innerHTML == 14){if (p13 != 0){document.getElementById('current').src = p14;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p15 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p15;}}
if (page.innerHTML == 15){if (p14 != 0){document.getElementById('current').src = p15;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p16 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p16;}}
if (page.innerHTML == 16){if (p15 != 0){document.getElementById('current').src = p16;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p17 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p17;}}
if (page.innerHTML == 17){if (p16 != 0){document.getElementById('current').src = p17;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p18 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p18;}}
if (page.innerHTML == 18){if (p17 != 0){document.getElementById('current').src = p18;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p19 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p19;}}
if (page.innerHTML == 19){if (p18 != 0){document.getElementById('current').src = p19;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p20 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p20;}}
if (page.innerHTML == 20){if (p19 != 0){document.getElementById('current').src = p20;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p21 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p21;}}
if (page.innerHTML == 21){if (p20 != 0){document.getElementById('current').src = p21;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p22 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p22;}}
if (page.innerHTML == 22){if (p21 != 0){document.getElementById('current').src = p22;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p23 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p23;}}
if (page.innerHTML == 23){if (p22 != 0){document.getElementById('current').src = p23;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p24 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p24;}}
if (page.innerHTML == 24){if (p23 != 0){document.getElementById('current').src = p24;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p25 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p25;}}
if (page.innerHTML == 25){if (p24 != 0){document.getElementById('current').src = p25;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p26 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p26;}}
if (page.innerHTML == 26){if (p25 != 0){document.getElementById('current').src = p26;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p27 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p27;}}
if (page.innerHTML == 27){if (p26 != 0){document.getElementById('current').src = p27;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p28 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p28;}}
if (page.innerHTML == 28){if (p27 != 0){document.getElementById('current').src = p28;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p29 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p29;}}
if (page.innerHTML == 29){if (p28 != 0){document.getElementById('current').src = p29;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p30 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p30;}}
if (page.innerHTML == 30){if (p29 != 0){document.getElementById('current').src = p30;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p31 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p31;}}
if (page.innerHTML == 31){if (p30 != 0){document.getElementById('current').src = p31;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p32 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p32;}}
if (page.innerHTML == 32){if (p31 != 0){document.getElementById('current').src = p32;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p33 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p33;}}
if (page.innerHTML == 33){if (p32 != 0){document.getElementById('current').src = p33;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p34 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p34;}}
if (page.innerHTML == 34){if (p33 != 0){document.getElementById('current').src = p34;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p35 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p35;}}
if (page.innerHTML == 35){if (p34 != 0){document.getElementById('current').src = p35;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p36 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p36;}}
if (page.innerHTML == 36){if (p35 != 0){document.getElementById('current').src = p36;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p37 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p37;}}
if (page.innerHTML == 37){if (p36 != 0){document.getElementById('current').src = p37;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p38 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p38;}}
if (page.innerHTML == 38){if (p37 != 0){document.getElementById('current').src = p38;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p39 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p39;}}
if (page.innerHTML == 39){if (p38 != 0){document.getElementById('current').src = p39;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p40 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p40;}}
if (page.innerHTML == 40){if (p39 != 0){document.getElementById('current').src = p40;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p41 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p41;}}
if (page.innerHTML == 41){if (p40 != 0){document.getElementById('current').src = p41;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p42 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p42;}}
if (page.innerHTML == 42){if (p41 != 0){document.getElementById('current').src = p42;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p43 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p43;}}
if (page.innerHTML == 43){if (p42 != 0){document.getElementById('current').src = p43;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p44 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p44;}}
if (page.innerHTML == 44){if (p43 != 0){document.getElementById('current').src = p44;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p45 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p45;}}
if (page.innerHTML == 45){if (p44 != 0){document.getElementById('current').src = p45;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p46 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p46;}}
if (page.innerHTML == 46){if (p45 != 0){document.getElementById('current').src = p46;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p47 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p47;}}
if (page.innerHTML == 47){if (p46 != 0){document.getElementById('current').src = p47;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p48 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p48;}}
if (page.innerHTML == 48){if (p47 != 0){document.getElementById('current').src = p48;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p49 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p49;}}
if (page.innerHTML == 49){if (p48 != 0){document.getElementById('current').src = p49;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p50 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p50;}}
if (page.innerHTML == 50){if (p49 != 0){document.getElementById('current').src = p50;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p51 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p51;}}
if (page.innerHTML == 51){if (p50 != 0){document.getElementById('current').src = p51;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p52 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p52;}}
if (page.innerHTML == 52){if (p51 != 0){document.getElementById('current').src = p52;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p53 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p53;}}
if (page.innerHTML == 53){if (p52 != 0){document.getElementById('current').src = p53;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p54 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p54;}}
if (page.innerHTML == 54){if (p53 != 0){document.getElementById('current').src = p54;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p55 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p55;}}
if (page.innerHTML == 55){if (p54 != 0){document.getElementById('current').src = p55;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p56 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p56;}}
if (page.innerHTML == 56){if (p55 != 0){document.getElementById('current').src = p56;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p57 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p57;}}
if (page.innerHTML == 57){if (p56 != 0){document.getElementById('current').src = p57;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p58 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p58;}}
if (page.innerHTML == 58){if (p57 != 0){document.getElementById('current').src = p58;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p59 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p59;}}
if (page.innerHTML == 59){if (p58 != 0){document.getElementById('current').src = p59;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p60 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p60;}}
if (page.innerHTML == 60){if (p59 != 0){document.getElementById('current').src = p60;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p61 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p61;}}
if (page.innerHTML == 61){if (p60 != 0){document.getElementById('current').src = p61;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p62 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p62;}}
if (page.innerHTML == 62){if (p61 != 0){document.getElementById('current').src = p62;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p63 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p63;}}
if (page.innerHTML == 63){if (p62 != 0){document.getElementById('current').src = p63;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p64 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p64;}}
if (page.innerHTML == 64){if (p63 != 0){document.getElementById('current').src = p64;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p65 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p65;}}
if (page.innerHTML == 65){if (p64 != 0){document.getElementById('current').src = p65;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p66 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p66;}}
if (page.innerHTML == 66){if (p65 != 0){document.getElementById('current').src = p66;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p67 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p67;}}
if (page.innerHTML == 67){if (p66 != 0){document.getElementById('current').src = p67;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p68 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p68;}}
if (page.innerHTML == 68){if (p67 != 0){document.getElementById('current').src = p68;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p69 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p69;}}
if (page.innerHTML == 69){if (p68 != 0){document.getElementById('current').src = p69;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p70 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p70;}}
if (page.innerHTML == 70){if (p69 != 0){document.getElementById('current').src = p70;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p71 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p71;}}
if (page.innerHTML == 71){if (p70 != 0){document.getElementById('current').src = p71;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p72 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p72;}}
if (page.innerHTML == 72){if (p71 != 0){document.getElementById('current').src = p72;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p73 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p73;}}
if (page.innerHTML == 73){if (p72 != 0){document.getElementById('current').src = p73;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p74 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p74;}}
if (page.innerHTML == 74){if (p73 != 0){document.getElementById('current').src = p74;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p75 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p75;}}
if (page.innerHTML == 75){if (p74 != 0){document.getElementById('current').src = p75;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p76 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p76;}}
if (page.innerHTML == 76){if (p75 != 0){document.getElementById('current').src = p76;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p77 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p77;}}
if (page.innerHTML == 77){if (p76 != 0){document.getElementById('current').src = p77;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p78 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p78;}}
if (page.innerHTML == 78){if (p77 != 0){document.getElementById('current').src = p78;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p79 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p79;}}
if (page.innerHTML == 79){if (p78 != 0){document.getElementById('current').src = p79;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p80 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p80;}}
if (page.innerHTML == 80){if (p79 != 0){document.getElementById('current').src = p80;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p81 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p81;}}
if (page.innerHTML == 81){if (p80 != 0){document.getElementById('current').src = p81;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p82 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p82;}}
if (page.innerHTML == 82){if (p81 != 0){document.getElementById('current').src = p82;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p83 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p83;}}
if (page.innerHTML == 83){if (p82 != 0){document.getElementById('current').src = p83;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p84 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p84;}}
if (page.innerHTML == 84){if (p83 != 0){document.getElementById('current').src = p84;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p85 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p85;}}
if (page.innerHTML == 85){if (p84 != 0){document.getElementById('current').src = p85;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p86 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p86;}}
if (page.innerHTML == 86){if (p85 != 0){document.getElementById('current').src = p86;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p87 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p87;}}
if (page.innerHTML == 87){if (p86 != 0){document.getElementById('current').src = p87;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p88 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p88;}}
if (page.innerHTML == 88){if (p87 != 0){document.getElementById('current').src = p88;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p89 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p89;}}
if (page.innerHTML == 89){if (p88 != 0){document.getElementById('current').src = p89;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p90 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p90;}}
if (page.innerHTML == 90){if (p89 != 0){document.getElementById('current').src = p90;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p91 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p91;}}
if (page.innerHTML == 91){if (p90 != 0){document.getElementById('current').src = p91;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p92 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p92;}}
if (page.innerHTML == 92){if (p91 != 0){document.getElementById('current').src = p92;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p93 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p93;}}
if (page.innerHTML == 93){if (p92 != 0){document.getElementById('current').src = p93;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p94 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p94;}}
if (page.innerHTML == 94){if (p93 != 0){document.getElementById('current').src = p94;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p95 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p95;}}
if (page.innerHTML == 95){if (p94 != 0){document.getElementById('current').src = p95;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p96 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p96;}}
if (page.innerHTML == 96){if (p95 != 0){document.getElementById('current').src = p96;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p97 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p97;}}
if (page.innerHTML == 97){if (p96 != 0){document.getElementById('current').src = p97;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p98 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p98;}}
if (page.innerHTML == 98){if (p97 != 0){document.getElementById('current').src = p98;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p99 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p99;}}
if (page.innerHTML == 99){if (p98 != 0){document.getElementById('current').src = p99;arrowL.href = pagePRV;arrowL.setAttribute("class",'nav');}if (p100 != 0){arrowR.href = pageNXT;arrowR.setAttribute("class",'nav');document.getElementById('preload').src = p100;}}
if (page.innerHTML == 100) {
  if (p99 != 0){
    document.getElementById('current').src = p100;
    arrowL.href = pagePRV;
    arrowL.setAttribute("class",'nav');
  }
}