window.addEventListener('load', () => {
  let temperaturaValor = document.getElementById('temperatura-valor');
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
  let ubicacion = document.getElementById('ubicacion');
  let iconoAnimado = document.getElementById('icono-animado');
  let vientoVelocidad = document.getElementById('viento-velocidad');
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicion => {
      log = posicion.coords.longitude;
      lat = posicion.coords.latitude;
    });
  }

  const searchBar = document.getElementById('search-bar');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    let location = searchBar.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&units=metric&appid=20d6c6304cddb170143f32cc2eac4964`;

    fetch(url)
      .then(response => { return response.json() })
      .then(data => {
        console.log(data.main.temp);
        console.log(url);
        console.log(data.sys.country)
        let temp = Math.round(data.main.temp);
        temperaturaValor.textContent = `${temp} °C`;

        let desc = data.weather[0].description;
        console.log(desc);
        temperaturaDescripcion.textContent = desc.toUpperCase();
        ubicacion.textContent = data.name;
        vientoVelocidad.textContent = `${data.wind.speed} m/s`;

        console.log(data.weather[0].icon);

        /*Clima*/
        switch (data.weather[0].main) {
          case 'Thunderstorm':
            console.log("Tormenta");
            iconoAnimado.src = 'nube/thunder.svg';
            break;
          case 'Drizzle':
            console.log("Llovizna");
            iconoAnimado.src = 'nube/rainy-2.svg';
            break;
          case 'Rain':
            console.log("Lluvia");
            iconoAnimado.src = 'nube/rainy-7.svg';
            break;
          case 'Snow':
            console.log("Nieve");
            iconoAnimado.src = 'nube/snowy-7.svg';
            break;
          case 'Atmosphere':
            console.log("Atmosphera");
            iconoAnimado.src = 'nube/weather.svg';
            break;
          case 'Clouds':
            console.log("Nuboso");
            iconoAnimado.src = 'nube/cloudy-day-1.svg';
            break;
          case 'Haze':
            console.log("Niebla");
            iconoAnimado.src = 'nube/cloudy-day-3.svg';
            break;
          case 'Clear':
            iconoAnimado.src = 'nube/day.svg';
            break;
        }

        /*Paises*/
        switch (data.sys.country) {
          case "AF":
            console.log("Afghanistan");
            paisImg.src = "svg/af.svg";
            
            break;
          case "AX":
            console.log("Aland Islands");
            paisImg.src = "svg/ax.svg";
            break;
          case "AL":
            console.log("Albania");
            paisImg.src = "svg/al.svg";
            break;
          case "DZ":
            console.log("Algeria");
            paisImg.src = "svg/dz.svg";
            break;
          case "AS":
            console.log("American Samoa");
            paisImg.src = "svg/as.svg";
            break;
          case "AD":
            console.log("Andorra");
            paisImg.src = "svg/ad.svg";
            break;
          case "AO":
            console.log("Angola");
            paisImg.src = "svg/ao.svg";
            break;
          case "AI":
            console.log("Anguilla");
            paisImg.src = "svg/ai.svg";
            break;
          case "AQ":
            console.log("Antarctica");
            paisImg.src = "svg/aq.svg";
            break;
          case "AG":
            console.log("Antigua and Barbuda");
            paisImg.src = "svg/ag.svg";
            break;
          case "AR":
            console.log("Argentina");
            paisImg.src = "svg/ar.svg";
            break;
          case "AM":
            console.log("Armenia");
            paisImg.src = "svg/am.svg";
            break;
          case "AW":
            console.log("Aruba");
            paisImg.src = "svg/aw.svg";
            break;
          case "AU":
            console.log("Australia");
            paisImg.src = "svg/au.svg";
            break;
          case "AT":
            console.log("Austria");
            paisImg.src = "svg/at.svg";
            break;
          case "AZ":
            console.log("Azerbaijan");
            paisImg.src = "svg/az.svg";
            break;
          case "BS":
            console.log("Bahamas");
            paisImg.src = "svg/bs.svg";
            break;
          case "BH":
            console.log("Bahrain");
            paisImg.src = "svg/bh.svg";
            break;
          case "BD":
            console.log("Bangladesh");
            paisImg.src = "svg/bd.svg";
            break;
          case "BB":
            console.log("Barbados");
            paisImg.src = "svg/bb.svg";
            break;
          case "BY":
            console.log("Belarus");
            paisImg.src = "svg/by.svg";
            break;
          case "BE":
            console.log("Belgium");
            paisImg.src = "svg/be.svg";
            break;
          case "BZ":
            console.log("Belize");
            paisImg.src = "svg/bz.svg";
            break;
          case "BJ":
            console.log("Benin");
            paisImg.src = "svg/bj.svg";
            break;
          case "BM":
            console.log("Bermuda");
            paisImg.src = "svg/bm.svg";
            break;
          case "BT":
            console.log("Bhutan");
            paisImg.src = "svg/bt.svg";
            break;
          case "BO":
            console.log("Bolivia");
            paisImg.src = "svg/bo.svg";
            break;
          case "BQ":
            console.log("Bonaire");
            paisImg.src = "svg/bq.svg";
            break;
          case "BA":
            console.log("Bosnia and Herzegovina");
            paisImg.src = "svg/ba.svg";
            break;
          case "BW":
            console.log("Botswana");
            paisImg.src = "svg/bw.svg";
            break;
          case "BV":
            console.log("Bouvet Island");
            paisImg.src = "svg/bv.svg";
            break;
          case "BR":
            console.log("Brazil");
            paisImg.src = "svg/br.svg";
            break;
          case "IO":
            console.log("British Indian Ocean Territory");
            paisImg.src = "svg/io.svg";
            break;
          case "VG":
            console.log("British Virgin Islands");
            paisImg.src = "svg/vg.svg";
            break;
          case "BN":
            console.log("Brunei");
            paisImg.src = "svg/bn.svg";
            break;
          case "BG":
            console.log("Bulgaria");
            paisImg.src = "svg/bg.svg";
            break;
          case "BF":
            console.log("Burkina Faso");
            paisImg.src = "svg/bf.svg";
            break;
          case "BI":
            console.log("Burundi");
            paisImg.src = "svg/bi.svg";
            break;
          case "KH":
            console.log("Cambodia");
            paisImg.src = "svg/kh.svg";
            break;
          case "CM":
            console.log("Cameroon");
            paisImg.src = "svg/cm.svg";
            break;
          case "CA":
            console.log("Canada");
            paisImg.src = "svg/ca.svg";
            break;
          case "CV":
            console.log("Cape Verde");
            paisImg.src = "svg/cv.svg";
            break;
          case "KY":
            console.log("Cayman Islands");
            paisImg.src = "svg/ky.svg";
            break;
          case "CF":
            console.log("Central African Republic");
            paisImg.src = "svg/cf.svg";
            break;
          case "TD":
            console.log("Chad");
            paisImg.src = "svg/td.svg";
            break;
          case "CL":
            console.log("Chile");
            paisImg.src = "svg/cl.svg";
            break;
          case "CN":
            console.log("China");
            paisImg.src = "svg/cn.svg";
            break;
          case "CX":
            console.log("Christmas Island");
            paisImg.src = "svg/cx.svg";
            break;
          case "CC":
            console.log("Cocos Islands");
            paisImg.src = "svg/cc.svg";
            break;
          case "CO":
            console.log("Colombia");
            paisImg.src = "svg/co.svg";
            break;
          case "KM":
            console.log("Comoros");
            paisImg.src = "svg/km.svg";
            break;
          case "CG":
            console.log("Republic of the Congo");
            paisImg.src = "svg/cg.svg";
            break;
          case "CD":
            console.log("Democratic Republic of the Congo");
            paisImg.src = "svg/cd.svg";
            break;
          case "CK":
            console.log("Cook Islands");
            paisImg.src = "svg/ck.svg";
            break;
          case "CR":
            console.log("Costa Rica");
            paisImg.src = "svg/cr.svg";
            break;
          case "HR":
            console.log("Croatia");
            paisImg.src = "svg/hr.svg";
            break;
          case "CU":
            console.log("Cuba");
            paisImg.src = "svg/cu.svg";
            break;
          case "CW":
            console.log("Curacao");
            paisImg.src = "svg/cw.svg";
            break;
          case "CY":
            console.log("Cyprus");
            paisImg.src = "svg/cy.svg";
            break;
          case "CZ":
            console.log("Czech Republic");
            paisImg.src = "svg/cz.svg";
            break;
          case "DK":
            console.log("Denmark");
            paisImg.src = "svg/dk.svg";
            break;
          case "DJ":
            console.log("Djibouti");
            paisImg.src = "svg/dj.svg";
            break;
          case "DM":
            console.log("Dominica");
            paisImg.src = "svg/dm.svg";
            break;
          case "DO":
            console.log("Dominican Republic");
            paisImg.src = "svg/do.svg";
            break;
          case "TL":
            console.log("East Timor");
            paisImg.src = "svg/tl.svg";
            break;
          case "EC":
            console.log("Ecuador");
            paisImg.src = "svg/ec.svg";
            break;
          case "EG":
            console.log("Egypt");
            paisImg.src = "svg/eg.svg";
            break;
          case "SV":
            console.log("El Salvador");
            paisImg.src = "svg/sv.svg";
            break;
          case "GQ":
            console.log("Equatorial Guinea");
            paisImg.src = "svg/gq.svg";
            break;
          case "ER":
            console.log("Eritrea");
            paisImg.src = "svg/er.svg";
            break;
          case "EE":
            console.log("Estonia");
            paisImg.src = "svg/ee.svg";
            break;
          case "ET":
            console.log("Ethiopia");
            paisImg.src = "svg/et.svg";
            break;
          case "FK":
            console.log("Falkland Islands");
            paisImg.src = "svg/fk.svg";
            break;
          case "FO":
            console.log("Faroe Islands");
            paisImg.src = "svg/fo.svg";
            break;
          case "FJ":
            console.log("Fiji");
            paisImg.src = "svg/fj.svg";
            break;
          case "FI":
            console.log("Finland");
            paisImg.src = "svg/fi.svg";
            break;
          case "FR":
            console.log("France");
            paisImg.src = "svg/fr.svg";
            break;
          case "GF":
            console.log("French Guiana");
            paisImg.src = "svg/gf.svg";
            break;
          case "PF":
            console.log("French Polynesia");
            paisImg.src = "svg/pf.svg";
            break;
          case "TF":
            console.log("French Southern Territories");
            paisImg.src = "svg/tf.svg";
            break;
          case "GA":
            console.log("Gabon");
            paisImg.src = "svg/ga.svg";
            break;
          case "GM":
            console.log("Gambia");
            paisImg.src = "svg/gm.svg";
            break;
          case "GE":
            console.log("Georgia");
            paisImg.src = "svg/ge.svg";
            break;
          case "DE":
            console.log("Germany");
            paisImg.src = "svg/de.svg";
            break;
          case "GH":
            console.log("Ghana");
            paisImg.src = "svg/gh.svg";
            break;
          case "GI":
            console.log("Gibraltar");
            paisImg.src = "svg/gi.svg";
            break;
          case "GR":
            console.log("Greece");
            paisImg.src = "svg/gr.svg";
            break;
          case "GL":
            console.log("Greenland");
            paisImg.src = "svg/gl.svg";
            break;
          case "GD":
            console.log("Grenada");
            paisImg.src = "svg/gd.svg";
            break;
          case "GP":
            console.log("Guadeloupe");
            paisImg.src = "svg/gp.svg";
            break;
          case "GU":
            console.log("Guam");
            paisImg.src = "svg/gu.svg";
            break;
          case "GT":
            console.log("Guatemala");
            paisImg.src = "svg/gt.svg";
            break;
          case "GG":
            console.log("Guernsey");
            paisImg.src = "svg/gg.svg";
            break;
          case "GN":
            console.log("Guinea");
            paisImg.src = "svg/gn.svg";
            break;
          case "GW":
            console.log("Guinea-Bissau");
            paisImg.src = "svg/gw.svg";
            break;
          case "GY":
            console.log("Guyana");
            paisImg.src = "svg/gy.svg";
            break;
          case "HT":
            console.log("Haiti");
            paisImg.src = "svg/ht.svg";
            break;
          case "HM":
            console.log("Heard Island and McDonald Islands");
            paisImg.src = "svg/hm.svg";
            break;
          case "HN":
            console.log("Honduras");
            paisImg.src = "svg/hn.svg";
            break;
          case "HK":
            console.log("Hong Kong");
            paisImg.src = "svg/hk.svg";
            break;
          case "HU":
            console.log("Hungary");
            paisImg.src = "svg/hu.svg";
            break;
          case "IS":
            console.log("Iceland");
            paisImg.src = "svg/is.svg";
            break;
          case "IN":
            console.log("India");
            paisImg.src = "svg/in.svg";
            break;
          case "ID":
            console.log("Indonesia");
            paisImg.src = "svg/id.svg";
            break;
          case "IR":
            console.log("Iran");
            paisImg.src = "svg/ir.svg";
            break;
          case "IQ":
            console.log("Iraq");
            paisImg.src = "svg/iq.svg";
            break;
          case "IE":
            console.log("Ireland");
            paisImg.src = "svg/ie.svg";
            break;
          case "IM":
            console.log("Isle of Man");
            paisImg.src = "svg/im.svg";
            break;
          case "IL":
            console.log("Israel");
            paisImg.src = "svg/il.svg";
            break;
          case "IT":
            console.log("Italy");
            paisImg.src = "svg/it.svg";
            break;
          case "JM":
            console.log("Jamaica");
            paisImg.src = "svg/jm.svg";
            break;
          case "JP":
            console.log("Japan");
            paisImg.src = "svg/jp.svg";
            break;
          case "JE":
            console.log("Jersey");
            paisImg.src = "svg/je.svg";
            break;
          case "JO":
            console.log("Jordan");
            paisImg.src = "svg/jo.svg";
            break;
          case "KZ":
            console.log("Kazakhstan");
            paisImg.src = "svg/kz.svg";
            break;
          case "KE":
            console.log("Kenya");
            paisImg.src = "svg/ke.svg";
            break;
          case "KI":
            console.log("Kiribati");
            paisImg.src = "svg/ki.svg";
            break;
          case "XK":
            console.log("Kosovo");
            paisImg.src = "svg/xk.svg";
            break;
          case "KW":
            console.log("Kuwait");
            paisImg.src = "svg/kw.svg";
            break;
          case "KG":
            console.log("Kyrgyzstan");
            paisImg.src = "svg/kg.svg";
            break;
          case "LA":
            console.log("Laos");
            paisImg.src = "svg/la.svg";
            break;
          case "LV":
            console.log("Latvia");
            paisImg.src = "svg/lv.svg";
            break;
          case "LB":
            console.log("Lebanon");
            paisImg.src = "svg/lb.svg";
            break;
          case "LS":
            console.log("Lesotho");
            paisImg.src = "svg/ls.svg";
            break;
          case "LR":
            console.log("Liberia");
            paisImg.src = "svg/lr.svg";
            break;
          case "LY":
            console.log("Libya");
            paisImg.src = "svg/ly.svg";
            break;
          case "LI":
            console.log("Liechtenstein");
            paisImg.src = "svg/li.svg";
            break;
          case "LT":
            console.log("Lithuania");
            paisImg.src = "svg/lt.svg";
            break;
          case "LU":
            console.log("Luxembourg");
            paisImg.src = "svg/lu.svg";
            break;
          case "MO":
            console.log("Macao");
            paisImg.src = "svg/mo.svg";
            break;
          case "MK":
            console.log("Macedonia");
            paisImg.src = "svg/mk.svg";
            break;
          case "MG":
            console.log("Madagascar");
            paisImg.src = "svg/mg.svg";
            break;
          case "MW":
            console.log("Malawi");
            paisImg.src = "svg/mw.svg";
            break;
          case "MY":
            console.log("Malaysia");
            paisImg.src = "svg/my.svg";
            break;
          case "MV":
            console.log("Maldives");
            paisImg.src = "svg/mv.svg";
            break;
          case "ML":
            console.log("Mali");
            paisImg.src = "svg/ml.svg";
            break;
          case "MT":
            console.log("Malta");
            paisImg.src = "svg/mt.svg";
            break;
          case "MH":
            console.log("Marshall Islands");
            paisImg.src = "svg/mh.svg";
            break;
          case "MQ":
            console.log("Martinique");
            paisImg.src = "svg/mq.svg";
            break;
          case "MR":
            console.log("Mauritania");
            paisImg.src = "svg/mr.svg";
            break;
          case "MU":
            console.log("Mauritius");
            paisImg.src = "svg/mu.svg";
            break;
          case "YT":
            console.log("Mayotte");
            paisImg.src = "svg/yt.svg";
            break;
          case "MX":
            console.log("Mexico");
            paisImg.src = "svg/mx.svg";
            break;
          case "FM":
            console.log("Micronesia");
            paisImg.src = "svg/fm.svg";
            break;
          case "MD":
            console.log("Moldova");
            paisImg.src = "svg/md.svg";
            break;
          case "MC":
            console.log("Monaco");
            paisImg.src = "svg/mc.svg";
            break;
          case "MN":
            console.log("Mongolia");
            paisImg.src = "svg/mn.svg";
            break;
          case "ME":
            console.log("Montenegro");
            paisImg.src = "svg/me.svg";
            break;
          case "MS":
            console.log("Montserrat");
            paisImg.src = "svg/ms.svg";
            break;
          case "MA":
            console.log("Morocco");
            paisImg.src = "svg/ma.svg";
            break;
          case "MZ":
            console.log("Mozambique");
            paisImg.src = "svg/mz.svg";
            break;
          case "MM":
            console.log("Myanmar");
            paisImg.src = "svg/mm.svg";
            break;
          case "NA":
            console.log("Namibia");
            paisImg.src = "svg/na.svg";
            break;
          case "NR":
            console.log("Nauru");
            paisImg.src = "svg/nr.svg";
            break;
          case "NP":
            console.log("Nepal");
            paisImg.src = "svg/np.svg";
            break;
          case "NL":
            console.log("Netherlands");
            paisImg.src = "svg/nl.svg";
            break;
          case "AN":
            console.log("Netherlands Antilles");
            paisImg.src = "svg/an.svg";
            break;
          case "NC":
            console.log("New Caledonia");
            paisImg.src = "svg/nc.svg";
            break;
          case "NZ":
            console.log("New Zealand");
            paisImg.src = "svg/nz.svg";
            break;
          case "NI":
            console.log("Nicaragua");
            paisImg.src = "svg/ni.svg";
            break;
          case "NE":
            console.log("Niger");
            paisImg.src = "svg/ne.svg";
            break;
          case "NG":
            console.log("Nigeria");
            paisImg.src = "svg/ng.svg";
            break;
          case "NU":
            console.log("Niue");
            paisImg.src = "svg/nu.svg";
            break;
          case "NF":
            console.log("Norfolk Island");
            paisImg.src = "svg/nf.svg";
            break;
          case "KP":
            console.log("North Korea");
            paisImg.src = "svg/kp.svg";
            break;
          case "MP":
            console.log("Northern Mariana Islands");
            paisImg.src = "svg/mp.svg";
            break;
          case "NO":
            console.log("Norway");
            paisImg.src = "svg/no.svg";
            break;
          case "OM":
            console.log("Oman");
            paisImg.src = "svg/om.svg";
            break;
          case "PK":
            console.log("Pakistan");
            paisImg.src = "svg/pk.svg";
            break;
          case "PW":
            console.log("Palau");
            paisImg.src = "svg/pw.svg";
            break;
          case "PS":
            console.log("Palestinian Territory");
            paisImg.src = "svg/ps.svg";
            break;
          case "PA":
            console.log("Panama");
            paisImg.src = "svg/pa.svg";
            break;
          case "PG":
            console.log("Papua New Guinea");
            paisImg.src = "svg/pg.svg";
            break;
          case "PY":
            console.log("Paraguay");
            paisImg.src = "svg/py.svg";
            break;
          case "PE":
            console.log("Peru");
            paisImg.src = "svg/pe.svg";
            break;
          case "PH":
            console.log("Philippines");
            paisImg.src = "svg/ph.svg";
            break;
          case "PN":
            console.log("Pitcairn");
            paisImg.src = "svg/pn.svg";
            break;
          case "PL":
            console.log("Poland");
            paisImg.src = "svg/pl.svg";
            break;
          case "PT":
            console.log("Portugal");
            paisImg.src = "svg/pt.svg";
            break;
          case "PR":
            console.log("Puerto Rico");
            paisImg.src = "svg/pr.svg";
            break;
          case "QA":
            console.log("Qatar");
            paisImg.src = "svg/qa.svg";
            break;
          case "RE":
            console.log("Reunion");
            paisImg.src = "svg/re.svg";
            break;
          case "RO":
            console.log("Romania");
            paisImg.src = "svg/ro.svg";
            break;
          case "RU":
            console.log("Russia");
            paisImg.src = "svg/ru.svg";
            break;
          case "RW":
            console.log("Rwanda");
            paisImg.src = "svg/rw.svg";
            break;
          case "BL":
            console.log("Saint Barthélemy");
            paisImg.src = "svg/bl.svg";
            break;
          case "SH":
            console.log("Saint Helena");
            paisImg.src = "svg/sh.svg";
            break;
          case "KN":
            console.log("Saint Kitts and Nevis");
            paisImg.src = "svg/kn.svg";
            break;
          case "LC":
            console.log("Saint Lucia");
            paisImg.src = "svg/lc.svg";
            break;
          case "MF":
            console.log("Saint Martin");
            paisImg.src = "svg/mf.svg";
            break;
          case "PM":
            console.log("Saint Pierre and Miquelon");
            paisImg.src = "svg/pm.svg";
            break;
          case "VC":
            console.log("Saint Vincent and the Grenadines");
            paisImg.src = "svg/vc.svg";
            break;
          case "WS":
            console.log("Samoa");
            paisImg.src = "svg/ws.svg";
            break;
          case "SM":
            console.log("San Marino");
            paisImg.src = "svg/sm.svg";
            break;
          case "ST":
            console.log("Sao Tome and Principe");
            paisImg.src = "svg/st.svg";
            break;
          case "SA":
            console.log("Saudi Arabia");
            paisImg.src = "svg/sa.svg";
            break;
          case "SN":
            console.log("Senegal");
            paisImg.src = "svg/sn.svg";
            break;
          case "RS":
            console.log("Serbia");
            paisImg.src = "svg/rs.svg";
            break;
          case "SC":
            console.log("Seychelles");
            paisImg.src = "svg/sc.svg";
            break;
          case "SL":
            console.log("Sierra Leone");
            paisImg.src = "svg/sl.svg";
            break;
          case "SG":
            console.log("Singapore");
            paisImg.src = "svg/sg.svg";
            break;
          case "SX":
            console.log("Sint Maarten");
            paisImg.src = "svg/sx.svg";
            break;
          case "SK":
            console.log("Slovakia");
            paisImg.src = "svg/sk.svg";
            break;
          case "SI":
            console.log("Slovenia");
            paisImg.src = "svg/si.svg";
            break;
          case "SB":
            console.log("Solomon Islands");
            paisImg.src = "svg/sb.svg";
            break;
          case "SO":
            console.log("Somalia");
            paisImg.src = "svg/so.svg";
            break;
          case "ZA":
            console.log("South Africa");
            paisImg.src = "svg/za.svg";
            break;
          case "GS":
            console.log("South Georgia and the South Sandwich Islands");
            paisImg.src = "svg/gs.svg";
            break;
          case "KR":
            console.log("South Korea");
            paisImg.src = "svg/kr.svg";
            break;
          case "SS":
            console.log("South Sudan");
            paisImg.src = "svg/ss.svg";
            break;
          case "ES":
            console.log("Spain");
            paisImg.src = "svg/es.svg";
            break;
          case "LK":
            console.log("Sri Lanka");
            paisImg.src = "svg/lk.svg";
            break;
          case "SD":
            console.log("Sudan");
            paisImg.src = "svg/sd.svg";
            break;
          case "SR":
            console.log("Suriname");
            paisImg.src = "svg/sr.svg";
            break;
          case "SJ":
            console.log("Svalbard and Jan Mayen");
            paisImg.src = "svg/sj.svg";
            break;
          case "SZ":
            console.log("Swaziland");
            paisImg.src = "svg/sz.svg";
            break;
          case "SE":
            console.log("Sweden");
            paisImg.src = "svg/se.svg";
            break;
          case "CH":
            console.log("Switzerland");
            paisImg.src = "svg/ch.svg";
            break;
          case "SY":
            console.log("Syria");
            paisImg.src = "svg/sy.svg";
            break;
          case "TW":
            console.log("Taiwan");
            paisImg.src = "svg/tw.svg";
            break;
          case "TJ":
            console.log("Tajikistan");
            paisImg.src = "svg/tj.svg";
            break;
          case "TZ":
            console.log("Tanzania");
            paisImg.src = "svg/tz.svg";
            break;
          case "TH":
            console.log("Thailand");
            paisImg.src = "svg/th.svg";
            break;
          case "TL":
            console.log("Timor-Leste");
            paisImg.src = "svg/tl.svg";
            break;
          case "TG":
            console.log("Togo");
            paisImg.src = "svg/tg.svg";
            break;
          case "TK":
            console.log("Tokelau");
            paisImg.src = "svg/tk.svg";
            break;
          case "TO":
            console.log("Tonga");
            paisImg.src = "svg/to.svg";
            break;
          case "TT":
            console.log("Trinidad and Tobago");
            paisImg.src = "svg/tt.svg";
            break;
          case "TN":
            console.log("Tunisia");
            paisImg.src = "svg/tn.svg";
            break;
          case "TR":
            console.log("Turkey");
            paisImg.src = "svg/tr.svg";
            break;
          case "TM":
            console.log("Turkmenistan");
            paisImg.src = "svg/tm.svg";
            break;
          case "TC":
            console.log("Turks and Caicos Islands");
            paisImg.src = "svg/tc.svg";
            break;
          case "TV":
            console.log("Tuvalu");
            paisImg.src = "svg/tv.svg";
            break;
          case "UG":
            console.log("Uganda");
            paisImg.src = "svg/ug.svg";
            break;
          case "UA":
            console.log("Ukraine");
            paisImg.src = "svg/ua.svg";
            break;
          case "AE":
            console.log("United Arab Emirates");
            paisImg.src = "svg/ae.svg";
            break;
          case "GB":
            console.log("United Kingdom");
            paisImg.src = "svg/gb.svg";
            break;
          case "US":
            console.log("United States");
            paisImg.src = "svg/us.svg";
            break;
          case "UM":
            console.log("United States Minor Outlying Islands");
            paisImg.src = "svg/um.svg";
            break;
          case "UY":
            console.log("Uruguay");
            paisImg.src = "svg/uy.svg";
            break;
          case "UZ":
            console.log("Uzbekistan");
            paisImg.src = "svg/uz.svg";
            break;
          case "VU":
            console.log("Vanuatu");
            paisImg.src = "svg/vu.svg";
            break;
          case "VA":
            console.log("Vatican");
            paisImg.src = "svg/va.svg";
            break;
          case "VE":
            console.log("Venezuela");
            paisImg.src = "svg/ve.svg";
            break;
          case "VN":
            console.log("Vietnam");
            paisImg.src = "svg/vn.svg";
            break;
          case "VG":
            console.log("Virgin Islands, British");
            paisImg.src = "svg/vg.svg";
            break;
          case "VI":
            console.log("Virgin Islands, U.S.");
            paisImg.src = "svg/vi.svg";
            break;
          case "WF":
            console.log("Wallis and Futuna");
            paisImg.src = "svg/wf.svg";
            break;
          case "EH":
            console.log("Western Sahara");
            paisImg.src = "svg/eh.svg";
            break;
          case "YE":
            console.log("Yemen");
            paisImg.src = "svg/ye.svg";
            break;
          case "ZM":
            console.log("Zambia");
            paisImg.src = "svg/zm.svg";
            break;
          case "ZW":
            console.log("Zimbabwe");
            paisImg.src = "svg/zw.svg";
            break;
          default:
            console.log("Código de país no válido");
            paisImg.src = "svg/unknown.svg";
            break;
        }

      })
      .catch(error => {
        console.error(error);
      });
  });
});
