function f() {
    document.getElementById("error").innerHTML = ""
    document.getElementById("S").innerHTML = ""
    document.getElementById("kox1v").innerHTML = ""
    document.getElementById("kox2v").innerHTML = ""
    document.getElementById("kox3v").innerHTML = ""
    document.getElementById("ank1v").innerHTML = ""
    document.getElementById("ank2v").innerHTML = ""
    document.getElementById("ank3v").innerHTML = ""
    document.getElementById("P").innerHTML = ""
    document.getElementById("r").innerHTML = ""
    document.getElementById("R").innerHTML = ""
    var S = 0;
    var p = 0;
    var P = 0;
    var r = 0;
    var R = 0;
    var ma = 0;
    var mb = 0;
    var mc = 0;
    var la = 0;
    var lb = 0;
    var lc = 0;
    var ha = 0;
    var hb = 0;
    var hc = 0;
    var ank1x = Number((document.getElementById('ank1').value) * Math.PI / 180);
    var ank2x = Number((document.getElementById('ank2').value) * Math.PI / 180);
    var ank3x = Number((document.getElementById('ank3').value) * Math.PI / 180);
    var kox1x = Number(document.getElementById('kox1').value);
    var kox2x = Number(document.getElementById('kox2').value);
    var kox3x = Number(document.getElementById('kox3').value);
    var ank1 = ank1x;
    var ank2 = ank2x;
    var ank3 = ank3x;
    var kox1 = kox1x;
    var kox2 = kox2x;
    var kox3 = kox3x;
    if (ank1 != "" && kox1 != "" && kox3 != "") {
        S = yst_koxmi_ev_ankyan(kox1, kox3, ank1);
        kox2 = Math.sqrt(kox1 ** 2 + kox3 ** 2 - 2 * kox1 * kox3 * Math.cos(ank1))
        ank2 = Math.asin(kox3 * Math.sin(ank1) / kox2)
        ank3 = Math.PI - ank1 - ank2
    } else if (ank2 != "" && kox1 != "" && kox2 != "") {
        S = yst_koxmi_ev_ankyan(kox1, kox2, ank2);
        kox3 = Math.sqrt(kox1 ** 2 + kox2 ** 2 - 2 * kox1 * kox2 * Math.cos(ank2))
        ank3 = Math.asin(kox1 * Math.sin(ank2) / kox3)
        ank1 = Math.PI - ank3 - ank2
    } else if (ank3 != "" && kox3 != "" && kox2 != "") {
        S = yst_koxmi_ev_ankyan(kox2, kox3, ank3);
        kox1 = Math.sqrt(kox3 ** 2 + kox2 ** 2 - 2 * kox3 * kox2 * Math.cos(ank3))
        ank2 = Math.asin(kox3 * Math.sin(ank3) / kox1)
        ank1 = Math.PI - ank3 - ank2
    } else if (kox1 != "" && kox2 != "" && kox3 != "") {
        p = kox1 / 2 + kox2 / 2 + kox3 / 2
        S = Math.sqrt(p * (p - kox1) * (p - kox2) * (p - kox3));
        ank2 = Math.acos((kox1 ** 2 + kox2 ** 2 - kox3 ** 2) / (2 * kox1 * kox2))
        ank1 = Math.asin(kox2 * Math.sin(ank2) / kox3)
        ank3 = Math.PI - ank1 - ank2
    } else if (ank2 != "" && kox1 != "" && kox3 != "") {
        ank1 = sin(kox1, kox3, ank2);
        S = yst_koxmi_ev_ankyan(kox1, kox3, ank1);
        ank3 = Math.PI - ank1 - ank2
        kox2 = Math.sin(ank1) * kox1 / Math.sin(ank3)
    } else if (ank3 != "" && kox1 != "" && kox3 != "") {
        ank1 = sin(kox3, kox1, ank3);
        S = yst_koxmi_ev_ankyan(kox1, kox3, ank1);
        ank2 = Math.PI - ank1 - ank3
        kox2 = Math.sin(ank1) * kox1 / Math.sin(ank3)
    } else if (ank3 != "" && kox1 != "" && kox2 != "") {
        ank1 = Math.asin(kox2 * Math.sin(3) / kox1)
        ank2 = Math.PI - ank3 - ank1
        S = yst_koxmi_ev_ankyan(kox2, kox1, ank2);
        kox3 = Math.sin(ank2) * kox2 / Math.sin(ank1)
    } else if (ank1 != "" && kox1 != "" && kox2 != "") {
        ank2 = sin(kox1, kox2, ank1);
        S = yst_koxmi_ev_ankyan(kox1, kox2, ank2);
        ank3 = Math.PI - ank2 - ank1
        kox3 = Math.sin(ank2) * kox2 / Math.sin(ank1)
    } else if (ank1 != "" && kox3 != "" && kox2 != "") {
        ank3 = sin(kox3, kox2, ank1);
        S = yst_koxmi_ev_ankyan(kox2, kox3, ank3);
        ank2 = Math.PI - ank1 - ank3
        kox1 = Math.sin(ank3) * kox2 / Math.sin(ank1)
    } else if (ank2 != "" && kox2 != "" && kox3 != "") {
        ank1 = (kox2 * Math.sin(ank2) / kox3)
        ank3 = Math.PI - ank2 - ank1
        S = yst_koxmi_ev_ankyan(kox2, kox3, ank3);
        kox1 = Math.sin(ank3) * kox2 / Math.sin(ank1)
    } else if (ank1 != "" && ank2 != "" && kox1 != "") {
        kox3 = kox1 * (Math.sin(ank2)) / (Math.sin(Math.PI - ank1 - ank2))
        S = yst_koxmi_ev_ankyan(kox1, kox3, ank1);
        ank3 = Math.PI - ank1 - ank2
        kox2 = Math.sin(ank1) * kox1 / Math.sin(ank3)
    } else if (ank1 != "" && ank3 != "" && kox1 != "") {
        kox3 = kox1 * (Math.sin(Math.PI - ank1 - ank3)) / Math.sin(ank3)
        S = yst_koxmi_ev_ankyan(kox1, kox3, ank1);
        ank2 = Math.PI - ank1 - ank3
        kox2 = Math.sin(ank1) * kox1 / Math.sin(ank3)
    } else if (ank2 != "" && ank3 != "" && kox1 != "") {
        kox3 = kox1 * Math.sin(ank2) / Math.sin(ank3)
        S = yst_koxmi_ev_ankyan(kox1, kox3, (Math.PI - ank2 - ank3));
        ank1 = Math.PI - ank2 - ank3
        kox2 = Math.sin(ank1) * kox1 / Math.sin(ank3)
    } else if (ank2 != "" && ank3 != "" && kox2 != "") {
        kox1 = kox2 * Math.sin(ank3) / Math.sin(Math.PI - ank2 - ank3)
        S = yst_koxmi_ev_ankyan(kox1, kox2, ank2);
        ank1 = Math.PI - ank2 - ank3
        kox3 = Math.sin(ank2) * kox2 / Math.sin(ank1)
    } else if (ank1 != "" && ank3 != "" && kox2 != "") {
        kox1 = kox2 * Math.sin(ank3) / Math.sin(ank1)
        S = yst_koxmi_ev_ankyan(kox1, kox2, (Math.PI - ank1 - ank3));
        ank2 = Math.PI - ank1 - ank3
        kox3 = Math.sin(ank2) * kox2 / Math.sin(ank1)
    } else if (ank1 != "" && ank2 != "" && kox2 != "") {
        kox1 = kox2 * Math.sin(Math.PI - ank1 - ank2) / Math.sin(ank1)
        S = yst_koxmi_ev_ankyan(kox2, kox1, ank2);
        ank3 = Math.PI - ank1 - ank2
        kox3 = Math.sin(ank2) * kox2 / Math.sin(ank1)
    } else if (ank1 != "" && ank2 != "" && kox3 != "") {
        kox1 = kox3 * Math.sin(Math.PI - ank1 - ank2) / Math.sin(ank2)
        S = yst_koxmi_ev_ankyan(kox1, kox3, ank1);
        ank3 = Math.PI - ank1 - ank2
        kox2 = Math.sin(ank1) * kox3 / Math.sin(ank2)
    } else if (ank1 != "" && ank3 != "" && kox3 != "") {
        kox1 = kox3 * Math.sin(ank3) / Math.sin(Math.PI - ank1 - ank3)
        S = yst_koxmi_ev_ankyan(kox1, kox3, ank1);
        ank2 = Math.PI - ank1 - ank3
        kox2 = Math.sin(ank1) * kox3 / Math.sin(ank2)
    } else if (ank2 != "" && ank3 != "" && kox3 != "") {
        kox1 = kox3 * Math.sin(ank3) / Math.sin(ank2)
        S = yst_koxmi_ev_ankyan(kox1, kox3, (Math.PI - ank2 - ank3));
        ank1 = Math.PI - ank2 - ank3
        kox2 = Math.sin(ank1) * kox3 / Math.sin(ank2)
    } else if (ank1 != "" && ank2 != "" && ank3 != "") {
        document.getElementById("error").innerHTML = "Հնարաոր չէ որոշել եռանկյան մակերեսը ըստ երեք անկյան, քանի որ այդ պահանջին բավարարում են անթիվ բազմությամբ նման եռանկյուններ:"
    }
    P = kox1 + kox2 + kox3
    p = P / 2
    R = (kox1 * kox2 * kox3) / 4 / S
    r = S / P * 2
    ma = 0.5 * Math.sqrt(2 * (kox2 ** 2 + kox3 ** 2) - kox1 ** 2)
    mb = 0.5 * Math.sqrt(2 * (kox1 ** 2 + kox3 ** 2) - kox2 ** 2)
    mc = 0.5 * Math.sqrt(2 * (kox1 ** 2 + kox2 ** 2) - kox3 ** 2)
    la = 2 / (kox2 + kox3) * Math.sqrt(kox2 * kox3 * p * (p - kox1))
    lb = 2 / (kox1 + kox3) * Math.sqrt(kox1 * kox3 * p * (p - kox2))
    lc = 2 / (kox1 + kox2) * Math.sqrt(kox2 * kox1 * p * (p - kox3))
    ha = 2 * S / kox1
    hb = 2 * S / kox2
    hc = 2 * S / kox3

    if (isNaN(kox1) || isNaN(kox2) || isNaN(kox3) || isNaN(ank1) || isNaN(ank2) || isNaN(ank3) || isNaN(r) || isNaN(R) || isNaN(S) || isNaN(P) || isNaN(ma) || isNaN(mb) || isNaN(mc) || isNaN(la) || isNaN(lb) || isNaN(lc) || isNaN(ha) || isNaN(hb) || isNaN(hc) || ((ank1 + ank2 + ank3) < (Math.PI - 0.01) || (ank1 + ank2 + ank3) > (Math.PI + 0.01)) || (ank1x != 0 && ank1 != ank1x) || (ank2x != 0 && ank2 != ank2x) || (ank3x != 0 && ank3 != ank3x) || (kox1x != 0 && kox1 != kox1x) || (kox2x != 0 && kox2 != kox2x) || (kox3x != 0 && kox3 != kox3x)) {
        document.getElementById("error").innerHTML = "Ներմուծված տվյալներով եռանկյուն գոյություն չունի։"

        document.getElementById("S").innerHTML = ""
        document.getElementById("kox1v").innerHTML = ""
        document.getElementById("kox2v").innerHTML = ""
        document.getElementById("kox3v").innerHTML = ""
        document.getElementById("ank1v").innerHTML = ""
        document.getElementById("ank2v").innerHTML = ""
        document.getElementById("ank3v").innerHTML = ""
        document.getElementById("P").innerHTML = ""
        document.getElementById("r").innerHTML = ""
        document.getElementById("R").innerHTML = ""
        document.getElementById("ma").innerHTML = ""
        document.getElementById("mb").innerHTML = ""
        document.getElementById("mc").innerHTML = ""
        document.getElementById("la").innerHTML = ""
        document.getElementById("lb").innerHTML = ""
        document.getElementById("lc").innerHTML = ""
        document.getElementById("ha").innerHTML = ""
        document.getElementById("hb").innerHTML = ""
        document.getElementById("hc").innerHTML = ""

    } else {


        document.getElementById("S").innerHTML = "Մակերես - " + (Math.round(S * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("kox1v").innerHTML = "Կողմ 1 - " + (Math.round(kox1 * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("kox2v").innerHTML = "Կողմ 2 - " + (Math.round(kox2 * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("kox3v").innerHTML = "Կողմ 3 - " + (Math.round(kox3 * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("ank1v").innerHTML = "Անկյուն 1 - " + (Math.round((ank1 * 180 / Math.PI) * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("ank2v").innerHTML = "Անկյուն 2 - " + (Math.round((ank2 * 180 / Math.PI) * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("ank3v").innerHTML = "Անկյուն 3 - " + (Math.round((ank3 * 180 / Math.PI) * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("P").innerHTML = "Պարագիծ - " + (Math.round(P * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("r").innerHTML = "Ներգծած շրջանագծի շառավիղ - " + (Math.round(r * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("R").innerHTML = "Արտագծսծ շրջանագծի շառավիղ - " + (Math.round(R * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("ma").innerHTML = "1֊ի կողմին տարած միջնագիծ ֊ " + (Math.round(ma * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("mb").innerHTML = "2֊րդ կողմին տարած միջնագիծ ֊ " + (Math.round(mb * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("mc").innerHTML = "3֊րդ կողմին տարած միջնագիծ ֊ " + (Math.round(mc * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("la").innerHTML = "1֊ի կողմին տարած կիսորդ ֊ " + (Math.round(la * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("lb").innerHTML = "2֊րդ կողմին տարած կիսորդ ֊ " + (Math.round(lb * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("lc").innerHTML = "3֊րդ կողմին տարած կիսորդ ֊ " + (Math.round(lc * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("ha").innerHTML = "1֊ի կողմին տարած բարձրություն ֊ " + (Math.round(ha * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("hb").innerHTML = "2֊րդ կողմին տարած բարձրություն ֊ " + (Math.round(hb * Math.pow(10, 2)) / Math.pow(10, 2))
        document.getElementById("hc").innerHTML = "3֊րդ կողմին տարած բարձրություն ֊ " + (Math.round(hc * Math.pow(10, 2)) / Math.pow(10, 2))
    }
}
function yst_koxmi_ev_ankyan(kox1, kox2, ank) {
    var x = 0.5 * (kox1 * kox2) * (Math.sin(ank));
    return x

}
function sin(kox1, kox2, ank) {
    x = Math.PI - ank - Math.asin(kox1 * (Math.sin(ank)) / kox2);
    return x
}