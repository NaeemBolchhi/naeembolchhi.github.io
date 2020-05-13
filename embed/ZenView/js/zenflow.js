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
    var s0 = "";
} else if (getUrlVars().s0.match(/tiny/)) {
    var bef = "https://tiny.cc/";
    var s0 = "&s0=" + getUrlVars().s0;
}

var s1 = getUrlVars().p1; var p1 = bef + s1;
var s2 = getUrlVars().p2; var p2 = bef + s2;
var s3 = getUrlVars().p3; var p3 = bef + s3;
var s4 = getUrlVars().p4; var p4 = bef + s4;
var s5 = getUrlVars().p5; var p5 = bef + s5;
var s6 = getUrlVars().p6; var p6 = bef + s6;
var s7 = getUrlVars().p7; var p7 = bef + s7;
var s8 = getUrlVars().p8; var p8 = bef + s8;
var s9 = getUrlVars().p9; var p9 = bef + s9;
var s10 = getUrlVars().p10; var p10 = bef + s10;
var s11 = getUrlVars().p11; var p11 = bef + s11;
var s12 = getUrlVars().p12; var p12 = bef + s12;
var s13 = getUrlVars().p13; var p13 = bef + s13;
var s14 = getUrlVars().p14; var p14 = bef + s14;
var s15 = getUrlVars().p15; var p15 = bef + s15;
var s16 = getUrlVars().p16; var p16 = bef + s16;
var s17 = getUrlVars().p17; var p17 = bef + s17;
var s18 = getUrlVars().p18; var p18 = bef + s18;
var s19 = getUrlVars().p19; var p19 = bef + s19;
var s20 = getUrlVars().p20; var p20 = bef + s20;
var s21 = getUrlVars().p21; var p21 = bef + s21;
var s22 = getUrlVars().p22; var p22 = bef + s22;
var s23 = getUrlVars().p23; var p23 = bef + s23;
var s24 = getUrlVars().p24; var p24 = bef + s24;
var s25 = getUrlVars().p25; var p25 = bef + s25;
var s26 = getUrlVars().p26; var p26 = bef + s26;
var s27 = getUrlVars().p27; var p27 = bef + s27;
var s28 = getUrlVars().p28; var p28 = bef + s28;
var s29 = getUrlVars().p29; var p29 = bef + s29;
var s30 = getUrlVars().p30; var p30 = bef + s30;
var s31 = getUrlVars().p31; var p31 = bef + s31;
var s32 = getUrlVars().p32; var p32 = bef + s32;
var s33 = getUrlVars().p33; var p33 = bef + s33;
var s34 = getUrlVars().p34; var p34 = bef + s34;
var s35 = getUrlVars().p35; var p35 = bef + s35;
var s36 = getUrlVars().p36; var p36 = bef + s36;
var s37 = getUrlVars().p37; var p37 = bef + s37;
var s38 = getUrlVars().p38; var p38 = bef + s38;
var s39 = getUrlVars().p39; var p39 = bef + s39;
var s40 = getUrlVars().p40; var p40 = bef + s40;
var s41 = getUrlVars().p41; var p41 = bef + s41;
var s42 = getUrlVars().p42; var p42 = bef + s42;
var s43 = getUrlVars().p43; var p43 = bef + s43;
var s44 = getUrlVars().p44; var p44 = bef + s44;
var s45 = getUrlVars().p45; var p45 = bef + s45;
var s46 = getUrlVars().p46; var p46 = bef + s46;
var s47 = getUrlVars().p47; var p47 = bef + s47;
var s48 = getUrlVars().p48; var p48 = bef + s48;
var s49 = getUrlVars().p49; var p49 = bef + s49;
var s50 = getUrlVars().p50; var p50 = bef + s50;
var s51 = getUrlVars().p51; var p51 = bef + s51;
var s52 = getUrlVars().p52; var p52 = bef + s52;
var s53 = getUrlVars().p53; var p53 = bef + s53;
var s54 = getUrlVars().p54; var p54 = bef + s54;
var s55 = getUrlVars().p55; var p55 = bef + s55;
var s56 = getUrlVars().p56; var p56 = bef + s56;
var s57 = getUrlVars().p57; var p57 = bef + s57;
var s58 = getUrlVars().p58; var p58 = bef + s58;
var s59 = getUrlVars().p59; var p59 = bef + s59;
var s60 = getUrlVars().p60; var p60 = bef + s60;
var s61 = getUrlVars().p61; var p61 = bef + s61;
var s62 = getUrlVars().p62; var p62 = bef + s62;
var s63 = getUrlVars().p63; var p63 = bef + s63;
var s64 = getUrlVars().p64; var p64 = bef + s64;
var s65 = getUrlVars().p65; var p65 = bef + s65;
var s66 = getUrlVars().p66; var p66 = bef + s66;
var s67 = getUrlVars().p67; var p67 = bef + s67;
var s68 = getUrlVars().p68; var p68 = bef + s68;
var s69 = getUrlVars().p69; var p69 = bef + s69;
var s70 = getUrlVars().p70; var p70 = bef + s70;
var s71 = getUrlVars().p71; var p71 = bef + s71;
var s72 = getUrlVars().p72; var p72 = bef + s72;
var s73 = getUrlVars().p73; var p73 = bef + s73;
var s74 = getUrlVars().p74; var p74 = bef + s74;
var s75 = getUrlVars().p75; var p75 = bef + s75;
var s76 = getUrlVars().p76; var p76 = bef + s76;
var s77 = getUrlVars().p77; var p77 = bef + s77;
var s78 = getUrlVars().p78; var p78 = bef + s78;
var s79 = getUrlVars().p79; var p79 = bef + s79;
var s80 = getUrlVars().p80; var p80 = bef + s80;
var s81 = getUrlVars().p81; var p81 = bef + s81;
var s82 = getUrlVars().p82; var p82 = bef + s82;
var s83 = getUrlVars().p83; var p83 = bef + s83;
var s84 = getUrlVars().p84; var p84 = bef + s84;
var s85 = getUrlVars().p85; var p85 = bef + s85;
var s86 = getUrlVars().p86; var p86 = bef + s86;
var s87 = getUrlVars().p87; var p87 = bef + s87;
var s88 = getUrlVars().p88; var p88 = bef + s88;
var s89 = getUrlVars().p89; var p89 = bef + s89;
var s90 = getUrlVars().p90; var p90 = bef + s90;
var s91 = getUrlVars().p91; var p91 = bef + s91;
var s92 = getUrlVars().p92; var p92 = bef + s92;
var s93 = getUrlVars().p93; var p93 = bef + s93;
var s94 = getUrlVars().p94; var p94 = bef + s94;
var s95 = getUrlVars().p95; var p95 = bef + s95;
var s96 = getUrlVars().p96; var p96 = bef + s96;
var s97 = getUrlVars().p97; var p97 = bef + s97;
var s98 = getUrlVars().p98; var p98 = bef + s98;
var s99 = getUrlVars().p99; var p99 = bef + s99;
var s100 = getUrlVars().p100; var p100 = bef + s100;

// VARIABLES
var IMG = document.getElementById('blanket').getElementsByTagName('img');

// USE VALUES
if (s1 != 0) {
  if (s1 != void(0)) {
    IMG[0].setAttribute('style',"display: block;");
	IMG[0].setAttribute('src',p1);
  }
}
if (s2 != 0) {if (s2 != void(0)) {IMG[1].setAttribute('style',"display: block;");IMG[1].setAttribute('src',p2);}}
if (s3 != 0) {if (s3 != void(0)) {IMG[2].setAttribute('style',"display: block;");IMG[2].setAttribute('src',p3);}}
if (s4 != 0) {if (s4 != void(0)) {IMG[3].setAttribute('style',"display: block;");IMG[3].setAttribute('src',p4);}}
if (s5 != 0) {if (s5 != void(0)) {IMG[4].setAttribute('style',"display: block;");IMG[4].setAttribute('src',p5);}}
if (s6 != 0) {if (s6 != void(0)) {IMG[5].setAttribute('style',"display: block;");IMG[5].setAttribute('src',p6);}}
if (s7 != 0) {if (s7 != void(0)) {IMG[6].setAttribute('style',"display: block;");IMG[6].setAttribute('src',p7);}}
if (s8 != 0) {if (s8 != void(0)) {IMG[7].setAttribute('style',"display: block;");IMG[7].setAttribute('src',p8);}}
if (s9 != 0) {if (s9 != void(0)) {IMG[8].setAttribute('style',"display: block;");IMG[8].setAttribute('src',p9);}}
if (s10 != 0) {if (s10 != void(0)) {IMG[9].setAttribute('style',"display: block;");IMG[9].setAttribute('src',p10);}}
if (s11 != 0) {if (s11 != void(0)) {IMG[10].setAttribute('style',"display: block;");IMG[10].setAttribute('src',p11);}}
if (s12 != 0) {if (s12 != void(0)) {IMG[11].setAttribute('style',"display: block;");IMG[11].setAttribute('src',p12);}}
if (s13 != 0) {if (s13 != void(0)) {IMG[12].setAttribute('style',"display: block;");IMG[12].setAttribute('src',p13);}}
if (s14 != 0) {if (s14 != void(0)) {IMG[13].setAttribute('style',"display: block;");IMG[13].setAttribute('src',p14);}}
if (s15 != 0) {if (s15 != void(0)) {IMG[14].setAttribute('style',"display: block;");IMG[14].setAttribute('src',p15);}}
if (s16 != 0) {if (s16 != void(0)) {IMG[15].setAttribute('style',"display: block;");IMG[15].setAttribute('src',p16);}}
if (s17 != 0) {if (s17 != void(0)) {IMG[16].setAttribute('style',"display: block;");IMG[16].setAttribute('src',p17);}}
if (s18 != 0) {if (s18 != void(0)) {IMG[17].setAttribute('style',"display: block;");IMG[17].setAttribute('src',p18);}}
if (s19 != 0) {if (s19 != void(0)) {IMG[18].setAttribute('style',"display: block;");IMG[18].setAttribute('src',p19);}}
if (s20 != 0) {if (s20 != void(0)) {IMG[19].setAttribute('style',"display: block;");IMG[19].setAttribute('src',p20);}}
if (s21 != 0) {if (s21 != void(0)) {IMG[20].setAttribute('style',"display: block;");IMG[20].setAttribute('src',p21);}}
if (s22 != 0) {if (s22 != void(0)) {IMG[21].setAttribute('style',"display: block;");IMG[21].setAttribute('src',p22);}}
if (s23 != 0) {if (s23 != void(0)) {IMG[22].setAttribute('style',"display: block;");IMG[22].setAttribute('src',p23);}}
if (s24 != 0) {if (s24 != void(0)) {IMG[23].setAttribute('style',"display: block;");IMG[23].setAttribute('src',p24);}}
if (s25 != 0) {if (s25 != void(0)) {IMG[24].setAttribute('style',"display: block;");IMG[24].setAttribute('src',p25);}}
if (s26 != 0) {if (s26 != void(0)) {IMG[25].setAttribute('style',"display: block;");IMG[25].setAttribute('src',p26);}}
if (s27 != 0) {if (s27 != void(0)) {IMG[26].setAttribute('style',"display: block;");IMG[26].setAttribute('src',p27);}}
if (s28 != 0) {if (s28 != void(0)) {IMG[27].setAttribute('style',"display: block;");IMG[27].setAttribute('src',p28);}}
if (s29 != 0) {if (s29 != void(0)) {IMG[28].setAttribute('style',"display: block;");IMG[28].setAttribute('src',p29);}}
if (s30 != 0) {if (s30 != void(0)) {IMG[29].setAttribute('style',"display: block;");IMG[29].setAttribute('src',p30);}}
if (s31 != 0) {if (s31 != void(0)) {IMG[30].setAttribute('style',"display: block;");IMG[30].setAttribute('src',p31);}}
if (s32 != 0) {if (s32 != void(0)) {IMG[31].setAttribute('style',"display: block;");IMG[31].setAttribute('src',p32);}}
if (s33 != 0) {if (s33 != void(0)) {IMG[32].setAttribute('style',"display: block;");IMG[32].setAttribute('src',p33);}}
if (s34 != 0) {if (s34 != void(0)) {IMG[33].setAttribute('style',"display: block;");IMG[33].setAttribute('src',p34);}}
if (s35 != 0) {if (s35 != void(0)) {IMG[34].setAttribute('style',"display: block;");IMG[34].setAttribute('src',p35);}}
if (s36 != 0) {if (s36 != void(0)) {IMG[35].setAttribute('style',"display: block;");IMG[35].setAttribute('src',p36);}}
if (s37 != 0) {if (s37 != void(0)) {IMG[36].setAttribute('style',"display: block;");IMG[36].setAttribute('src',p37);}}
if (s38 != 0) {if (s38 != void(0)) {IMG[37].setAttribute('style',"display: block;");IMG[37].setAttribute('src',p38);}}
if (s39 != 0) {if (s39 != void(0)) {IMG[38].setAttribute('style',"display: block;");IMG[38].setAttribute('src',p39);}}
if (s40 != 0) {if (s40 != void(0)) {IMG[39].setAttribute('style',"display: block;");IMG[39].setAttribute('src',p40);}}
if (s41 != 0) {if (s41 != void(0)) {IMG[40].setAttribute('style',"display: block;");IMG[40].setAttribute('src',p41);}}
if (s42 != 0) {if (s42 != void(0)) {IMG[41].setAttribute('style',"display: block;");IMG[41].setAttribute('src',p42);}}
if (s43 != 0) {if (s43 != void(0)) {IMG[42].setAttribute('style',"display: block;");IMG[42].setAttribute('src',p43);}}
if (s44 != 0) {if (s44 != void(0)) {IMG[43].setAttribute('style',"display: block;");IMG[43].setAttribute('src',p44);}}
if (s45 != 0) {if (s45 != void(0)) {IMG[44].setAttribute('style',"display: block;");IMG[44].setAttribute('src',p45);}}
if (s46 != 0) {if (s46 != void(0)) {IMG[45].setAttribute('style',"display: block;");IMG[45].setAttribute('src',p46);}}
if (s47 != 0) {if (s47 != void(0)) {IMG[46].setAttribute('style',"display: block;");IMG[46].setAttribute('src',p47);}}
if (s48 != 0) {if (s48 != void(0)) {IMG[47].setAttribute('style',"display: block;");IMG[47].setAttribute('src',p48);}}
if (s49 != 0) {if (s49 != void(0)) {IMG[48].setAttribute('style',"display: block;");IMG[48].setAttribute('src',p49);}}
if (s50 != 0) {if (s50 != void(0)) {IMG[49].setAttribute('style',"display: block;");IMG[49].setAttribute('src',p50);}}
if (s51 != 0) {if (s51 != void(0)) {IMG[50].setAttribute('style',"display: block;");IMG[50].setAttribute('src',p51);}}
if (s52 != 0) {if (s52 != void(0)) {IMG[51].setAttribute('style',"display: block;");IMG[51].setAttribute('src',p52);}}
if (s53 != 0) {if (s53 != void(0)) {IMG[52].setAttribute('style',"display: block;");IMG[52].setAttribute('src',p53);}}
if (s54 != 0) {if (s54 != void(0)) {IMG[53].setAttribute('style',"display: block;");IMG[53].setAttribute('src',p54);}}
if (s55 != 0) {if (s55 != void(0)) {IMG[54].setAttribute('style',"display: block;");IMG[54].setAttribute('src',p55);}}
if (s56 != 0) {if (s56 != void(0)) {IMG[55].setAttribute('style',"display: block;");IMG[55].setAttribute('src',p56);}}
if (s57 != 0) {if (s57 != void(0)) {IMG[56].setAttribute('style',"display: block;");IMG[56].setAttribute('src',p57);}}
if (s58 != 0) {if (s58 != void(0)) {IMG[57].setAttribute('style',"display: block;");IMG[57].setAttribute('src',p58);}}
if (s59 != 0) {if (s59 != void(0)) {IMG[58].setAttribute('style',"display: block;");IMG[58].setAttribute('src',p59);}}
if (s60 != 0) {if (s60 != void(0)) {IMG[59].setAttribute('style',"display: block;");IMG[59].setAttribute('src',p60);}}
if (s61 != 0) {if (s61 != void(0)) {IMG[60].setAttribute('style',"display: block;");IMG[60].setAttribute('src',p61);}}
if (s62 != 0) {if (s62 != void(0)) {IMG[61].setAttribute('style',"display: block;");IMG[61].setAttribute('src',p62);}}
if (s63 != 0) {if (s63 != void(0)) {IMG[62].setAttribute('style',"display: block;");IMG[62].setAttribute('src',p63);}}
if (s64 != 0) {if (s64 != void(0)) {IMG[63].setAttribute('style',"display: block;");IMG[63].setAttribute('src',p64);}}
if (s65 != 0) {if (s65 != void(0)) {IMG[64].setAttribute('style',"display: block;");IMG[64].setAttribute('src',p65);}}
if (s66 != 0) {if (s66 != void(0)) {IMG[65].setAttribute('style',"display: block;");IMG[65].setAttribute('src',p66);}}
if (s67 != 0) {if (s67 != void(0)) {IMG[66].setAttribute('style',"display: block;");IMG[66].setAttribute('src',p67);}}
if (s68 != 0) {if (s68 != void(0)) {IMG[67].setAttribute('style',"display: block;");IMG[67].setAttribute('src',p68);}}
if (s69 != 0) {if (s69 != void(0)) {IMG[68].setAttribute('style',"display: block;");IMG[68].setAttribute('src',p69);}}
if (s70 != 0) {if (s70 != void(0)) {IMG[69].setAttribute('style',"display: block;");IMG[69].setAttribute('src',p70);}}
if (s71 != 0) {if (s71 != void(0)) {IMG[70].setAttribute('style',"display: block;");IMG[70].setAttribute('src',p71);}}
if (s72 != 0) {if (s72 != void(0)) {IMG[71].setAttribute('style',"display: block;");IMG[71].setAttribute('src',p72);}}
if (s73 != 0) {if (s73 != void(0)) {IMG[72].setAttribute('style',"display: block;");IMG[72].setAttribute('src',p73);}}
if (s74 != 0) {if (s74 != void(0)) {IMG[73].setAttribute('style',"display: block;");IMG[73].setAttribute('src',p74);}}
if (s75 != 0) {if (s75 != void(0)) {IMG[74].setAttribute('style',"display: block;");IMG[74].setAttribute('src',p75);}}
if (s76 != 0) {if (s76 != void(0)) {IMG[75].setAttribute('style',"display: block;");IMG[75].setAttribute('src',p76);}}
if (s77 != 0) {if (s77 != void(0)) {IMG[76].setAttribute('style',"display: block;");IMG[76].setAttribute('src',p77);}}
if (s78 != 0) {if (s78 != void(0)) {IMG[77].setAttribute('style',"display: block;");IMG[77].setAttribute('src',p78);}}
if (s79 != 0) {if (s79 != void(0)) {IMG[78].setAttribute('style',"display: block;");IMG[78].setAttribute('src',p79);}}
if (s80 != 0) {if (s80 != void(0)) {IMG[79].setAttribute('style',"display: block;");IMG[79].setAttribute('src',p80);}}
if (s81 != 0) {if (s81 != void(0)) {IMG[80].setAttribute('style',"display: block;");IMG[80].setAttribute('src',p81);}}
if (s82 != 0) {if (s82 != void(0)) {IMG[81].setAttribute('style',"display: block;");IMG[81].setAttribute('src',p82);}}
if (s83 != 0) {if (s83 != void(0)) {IMG[82].setAttribute('style',"display: block;");IMG[82].setAttribute('src',p83);}}
if (s84 != 0) {if (s84 != void(0)) {IMG[83].setAttribute('style',"display: block;");IMG[83].setAttribute('src',p84);}}
if (s85 != 0) {if (s85 != void(0)) {IMG[84].setAttribute('style',"display: block;");IMG[84].setAttribute('src',p85);}}
if (s86 != 0) {if (s86 != void(0)) {IMG[85].setAttribute('style',"display: block;");IMG[85].setAttribute('src',p86);}}
if (s87 != 0) {if (s87 != void(0)) {IMG[86].setAttribute('style',"display: block;");IMG[86].setAttribute('src',p87);}}
if (s88 != 0) {if (s88 != void(0)) {IMG[87].setAttribute('style',"display: block;");IMG[87].setAttribute('src',p88);}}
if (s89 != 0) {if (s89 != void(0)) {IMG[88].setAttribute('style',"display: block;");IMG[88].setAttribute('src',p89);}}
if (s90 != 0) {if (s90 != void(0)) {IMG[89].setAttribute('style',"display: block;");IMG[89].setAttribute('src',p90);}}
if (s91 != 0) {if (s91 != void(0)) {IMG[90].setAttribute('style',"display: block;");IMG[90].setAttribute('src',p91);}}
if (s92 != 0) {if (s92 != void(0)) {IMG[91].setAttribute('style',"display: block;");IMG[91].setAttribute('src',p92);}}
if (s93 != 0) {if (s93 != void(0)) {IMG[92].setAttribute('style',"display: block;");IMG[92].setAttribute('src',p93);}}
if (s94 != 0) {if (s94 != void(0)) {IMG[93].setAttribute('style',"display: block;");IMG[93].setAttribute('src',p94);}}
if (s95 != 0) {if (s95 != void(0)) {IMG[94].setAttribute('style',"display: block;");IMG[94].setAttribute('src',p95);}}
if (s96 != 0) {if (s96 != void(0)) {IMG[95].setAttribute('style',"display: block;");IMG[95].setAttribute('src',p96);}}
if (s97 != 0) {if (s97 != void(0)) {IMG[96].setAttribute('style',"display: block;");IMG[96].setAttribute('src',p97);}}
if (s98 != 0) {if (s98 != void(0)) {IMG[97].setAttribute('style',"display: block;");IMG[97].setAttribute('src',p98);}}
if (s99 != 0) {if (s99 != void(0)) {IMG[98].setAttribute('style',"display: block;");IMG[98].setAttribute('src',p99);}}
if (s100 != 0) {if (s100 != void(0)) {IMG[99].setAttribute('style',"display: block;");IMG[99].setAttribute('src',p100);}}