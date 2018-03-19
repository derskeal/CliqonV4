function getCur2(cur1, cur2, amount, tofrom, label) {
	var c1, c2;
	var rates = new Array();
	var units = new Array();
	var names = new Array();
	var symbols = new Array();
	units = ['AFN','ALL','DZD','USD','AOA','ARS','AMD','AWG','AUD','AZN','BSD','BHD','BDT','BBD','BYR','BZD','BMD','BTN','BTC','BOB','BAM','BWP','BRL','BND','BGN','BIF','KHR','CAD','CVE','KYD','XAF','CLP','CLF','CNY','COP','KMF','CRC','HRK','CUP','CYP','CZK','DKK','DJF','DOP','XCD','EGP','ERN','ETH','ETB','EUR','FJD','CDF','XPF','GMD','GEL','GHS','GIP','GTQ','GNF','GYD','HTG','HNL','HKD','HUF','ISK','INR','IDR','IRR','IQD','ILS','JMD','JPY','JOD','KZT','KES','KRW','KWD','KGS','LAK','LBP','LSL','LRD','LYD','MOP','MKD','MGA','MWK','MYR','MVR','MTL','MRO','MUR','MXN','MXV','MDL','MNT','MAD','MMK','NAD','NPR','ANG','MZN','TWD','TRY','NZD','NIO','NGN','NOK','OMR','XAL','XCP','XAU','XPD','XPT','XAG','PKR','PAB','PGK','PYG','PEN','PHP','PLN','GBP','QAR','RON','RUB','RWF','SHP','WST','STD','SAR','RSD','SCR','SLL','SGD','SBD','SOS','ZAR','SDR','LKR','SDD','SRD','SZL','SEK','CHF','SYP','TJS','TZS','THB','THO','TOP','TTD','TND','TMM','UGX','UAH','AED','UYU','UZS','VUV','VEB','VND','XOF','YER','ZMK','ZWD'];
names = ['Afghani','Lek','Dinar','Dollar','Kwanza','Peso','Dram','Florin','AU Dollar','Manat','BS Dollar','Dinar','Taka','BB Dollar','Ruble','BZ Dollar','BM Dollar','Ngultrum','Bitcoin','Boliviano','Convertibl','Pula','Real','BN Dollar','Lev','Franc','Riel','CA Dollar','Escudo','KY Dollar','Franc','Peso','Fomento','Yuan','Peso','Franc','Colon','Kuna','Peso','CY Pound','Koruna','Krone','Franc','Peso','AG Dollar','EG Pound','Nakfa','Ethereum','Birr','Euro','FJ Dollar','Congolais','Franc','Dalasi','Lari','Cedi','GI Pound','Quetzal','Franc','GY Dollar','Gourde','Lempira','HK Dollar','Forint','Krona','Rupee','Rupiah','Rial','Dinar','Shekel','JM Dollar','Yen','Dinar','Tenge','Shilling','Won','Dinar','Som','Kip','LB Pound','Loti','LR Dollar','Dinar','Pataca','Denar','Ariary','Kwacha','Ringgit','Rufiyaa','Lira','Ouguiya','Rupee','Peso','Inversion','Leu','Tugrik','Dirham','Kyat','NA Dollar','Rupee','Guilder','Metical','TW Dollar','Lira','NZ Dollar','Oro','Naira','Krone','Rial','Aluminum','Copper','Gold','Palladium','Platinum','Silver','Rupee','Balboa','Kina','Guarani','Sol','Peso','Zloty','Pound','Rial','Leu','Ruble','Franc','SH Pound','Tala','Dobra','Riyal','Dinar','Rupee','Leone','SG Dollar','SB Dollar','Shilling','Rand','Right','Rupee','Dinar','SR Dollar','Lilangeni','Krona','Franc','SY Pound','Somoni','Shilling','Baht','Baht','Anga','TT Dollar','Dinar','Manat','Shilling','Hryvnia','Dirham','Peso','Sum','Vatu','Bolivar','Dong','Franc','Rial','Kwacha','ZW Dollar'];
symbols = ['&#1547;','&#76;&#101;&#107;','&#1583;&#1580;','&#36;','&#75;&#122;','&#36;','&#1380;&#1408;','&#402;','&#65;&#85;&#36;','&#1084;&#1072;&#1085;','&#36;','&#66;&#68;','&#2547;','&#36;','&#66;&#114;','&#66;&#90;&#36;','&#36;','&#78;&#117;','&#66;','&#36;&#98;','&#75;&#77;','&#80;','&#82;&#36;','&#36;','&#1083;&#1074;','&#70;&#66;&#117;','&#6107;','&#67;&#36;','&#69;&#115;&#99;','&#36;','','&#67;&#104;&#36;','','&#165;','&#36;','&#67;&#70;','&#8353;','&#107;&#110;','&#8369;','&#163;','&#75;&#269;','&#107;&#114;','&#70;&#100;&#106;','&#82;&#68;&#36;','&#36;','&#69;&#163;','&#78;&#102;&#107;','&#926;','&#66;&#114;','&#8364;','&#36;','','&#70;','&#68;','','&#71;&#72;&#8373;','&#163;','&#81;','&#70;&#71;','&#36;','&#71;','&#76;','&#72;&#75;&#36;','&#70;&#116;','&#107;&#114;','&#8377;','&#82;&#112;','&#65020;','&#1593;&#46;&#1583;','&#8362;','&#74;&#36;','&#165;','','&#1083;&#1074;','&#75;&#83;&#104;','&#8361;','&#1583;&#46;&#1603;','&#1083;&#1074;','&#8365;','&#163;','&#76;','&#36;','&#76;&#68;','&#77;&#79;&#80;&#36;','&#1076;&#1077;&#1085;','','&#77;&#75;','&#82;&#77;','&#1923;','','&#85;&#77;','&#8360;','&#36;','','&#108;&#101;&#105;','&#8366;','&#1583;&#46;&#1605;&#46;','&#75;','&#36;','&#8360;','&#402;','&#77;&#84;','&#78;&#84;&#36;','&#84;&#76;','&#36;','&#67;&#36;','&#8358;','&#107;&#114;','&#65020;','','','','','','','&#8360;','&#65;','','&#71;&#115;','&#83;&#47;&#46;','&#80;&#104;&#112;','&#122;&#322;','&#163;','&#65020;','&#108;&#101;&#105;','&#1088;&#1091;&#1073;','&#82;&#70;','&#163;','','&#68;&#98;','&#65020;','&#1044;&#1080;&#1085;&#46;','&#8360;','&#76;&#101;','&#36;','&#36;','&#83;','&#82;','','&#8360;','&#163;&#83;&#100;','&#36;','&#76;','&#107;&#114;','&#67;&#72;&#70;','&#163;','','','&#3647;','','&#162;','&#84;&#84;&#36;','&#1583;&#46;&#1578;','&#77;','&#85;&#83;&#104;','&#8372;','&#1583;&#46;&#1573;','&#36;&#85;','&#1083;&#1074;','','&#66;&#115;&#32;&#70;','&#8363;','','&#65020;','&#90;&#75;','&#90;&#36;'];
rates = [68.95999900000034, 106.6500020000013, 113.84600100000058, 1, 214.83000200001158, 20.21900000000073, 480.2300110000228, 1.780000000000091, 1.2713000000000485, 1.6995000000000768, 1, 0.3769000000000152, 82.87000300000089, 2.00000000000008, 20020.000000000782, 1.9978000000000513, 1, 65.02500200000391, 0.00010429569243743227, 6.86000000000031, 1.5894000000000648, 9.591900000000454, 3.2546000000001, 1.3165000000000553, 1.591300000000088, 1750.9799800000608, 4006.0000000000596, 1.2805500000000367, 89.4800030000011, 0.8199999999999672, 531.8400270000277, 602.0200200000023, 0.022080000000000863, 6.328300000000151, 2864.800049000087, 399.14001500000734, 565.599976000009, 5.989400000000235, 1, 0.47670698146127904, 20.670799000000667, 6.04589000000021, 176.83000200000868, 49.77999900000173, 2.7000000000000752, 17.559999000000875, 15.290000000000227, 0.0013791787534892846, 27.20000100000103, 0.8112999999999723, 2.0220000000000433, 1565.5000000000548, 96.18000000000343, 46.86999900000205, 2.436200000000065, 4.431000000000126, 0.7214000000000318, 7.336000000000405, 9004.000000000426, 205.4799960000072, 63.770000000002796, 23.542999000000844, 7.838400000000089, 252.6499940000072, 99.79000100000562, 64.97110000000438, 13768.00000000059, 37440.00000000099, 1184.0000000000064, 3.437800000000154, 127.25000000000068, 106.62699900000011, 0.7074999999999778, 320.45999100000586, 100.84999800000332, 1063.5000000000139, 0.300100000000007, 68.14700300000266, 8270.000000000824, 1505.5000000000668, 11.795000000000472, 130.6600040000042, 1.3288000000000655, 8.068200000000628, 49.75000000000202, 3060.000000000141, 713.4000240000065, 3.907000000000037, 15.570000000000833, 0.34934016344502744, 350.000000000007, 32.90000200000101, 18.618900000000625, 3.097498000000103, 16.54900000000079, 2392.000000000093, 9.185500000000324, 1339.0000000000289, 11.807000000000668, 104.24400300000278, 1.780000000000091, 61.599998000002216, 29.25799900000103, 3.8086000000002165, 1.3669000000000322, 30.900000000001494, 355.00000000001313, 7.764900000000573, 0.3845000000000179, 0.000332021024125028, 0.00010139126162689534, 0.0005217473236250267, 0.0010259686521342263, 0.0010541718221684824, 0.0602857387909094, 110.47000100000554, 1, 3.239000000000165, 5510.600098000224, 3.256300000000146, 52.000000000000625, 3.4012000000000677, 0.7215299999999917, 3.6398000000001227, 3.77210000000013, 56.66799900000232, 842.520019999996, 0.7214000000000318, 2.5208000000000874, 19883.09960900056, 3.7501000000001428, 95.53070100000605, 13.569000000000292, 7629.999999999838, 1.3143600000000721, 7.7314999999999365, 570.0000000000261, 11.839600000000544, 0.6902717091559242, 155.39999400000704, 1802.1348436308506, 7.400000000000281, 11.838800000000102, 8.231540000000388, 0.949840000000034, 514.9799800000171, 8.823599999999995, 2247.000000000042, 31.299999000000454, , 2.2311000000001195, 6.73300000000038, 2.3935000000000866, 17256.792728898105, 3644.0000000001596, 26.090000000000344, 3.6723000000000714, 28.299999000001087, 8155.00000000006, 104.07000000000478, 39900.00000000161, 22759.000000000415, 531.8400270000277, 249.8500060000073, 9627.220490319338, ];
var i;
var result;
var ctarget;
	for (i = 0; i < units.length; i++)
		if (units[i] == cur1) {
			c1 = i;
			break;
		}
	for (i = 0; i < units.length; i++)
		if (units[i] == cur2) {
			c2 = i;
			break;
		}
	if(!tofrom[0].checked){
		result = amount * rates[c1] / rates[c2];
	    //		ctarget = cur1;
	    		ctarget = names[c1] + 's (' + cur1 + ')';
	    		cfrom = names[c2] + 's (' + cur2 + ')';
	}
	else{
		result = amount * rates[c2] / rates[c1];
		    //ctarget = cur2;
    		ctarget = names[c2] + 's (' + cur2 + ')';
    		cfrom = names[c1] + 's (' + cur1 + ')';
	}
	//document.getElementsByName("V1result").innerHTML = result.toFixed(2);
	var xx = document.getElementsByName(label + 'result');
	xx[0].innerHTML = result.toFixed(2);
	var yy = document.getElementsByName(label + 'amount_label');
	if(yy[0])
	    yy[0].innerHTML = cfrom;

	//document.getElementById("result").innerHTML = result.toFixed(2);
	document.getElementById(label + 'result_label').innerHTML = ctarget;


	return false;
}
 var form_content = '<body onload="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');"><style type="text/css">.Vmsg_1{        font-family: Arial,Verdana!important;        font-size: 10px!important;        font-weight: normal;        text-align: left;}.Vmsg_1 a {        font-family: Arial,Verdana!important;        font-size: 10px!important;        font-weight: normal;        text-align: left;	padding:0px!important;	margin:0px!important;	line-height:10px!important;        color: #000!important;}.VselectBox {        font-family: Arial, Verdana, Helvetica, sans-serif!important;        font-size: 12px;        font-weight: normal;        text-align: left;        width: 91%;	padding:0!important;	margin:0!important;}.Vtextarea {        overflow: hidden;        width: 88%;        height: 22px;        font-family: Arial, Verdana, Helvetica, sans-serif!important;        font-size: 16px;        font-weight: bold;        text-align: right;}.Vlabel {        font-family: Arial, Verdana, Helvetica, sans-serif!important;        font-size: 11px!important;        line-height: 16px!important;        color: #000!important;        font-weight: bold;        text-align: center;	padding:0px!important;	margin:0px!important;}.VgoContainer {        text-align: right;	padding:0!important;	margin:0!important;	line-height:0px;}.VmainContainer {        font-family: Arial, Verdana, Helvetica, sans-serif!important;        font-size: 13px;        font-weight: bold;        width: 100%;	text-align:center;	align:center;	padding:2px 0px!important;	margin:2px 0px!important;}.Vspacer {	padding:0!important;	margin:8px 0px 0px 0px!important;	line-height:0px!important;}#Vform1 {        font-family: Arial, Verdana, Helvetica, sans-serif!important;        font-size: 13px;        font-weight: bold;        width: 100%;	text-align:center;	align:center;	padding:0px 0px!important;	margin:0px 0px!important;}</style><form id="Vform1" name="Vform1" method="post" action="" autocomplete="off"onsubmit="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');"><div class="VmainContainer" >    <font class="Vlabel">Amount</font><br />    <input class="Vtextarea"  name="Vamount" id="Vamount" value="1000"     onchange="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');"    onkeyup="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');">    </input>    <div class="Vspacer"></div>    <input type="radio" style="display:none" name="Vtofrom" id="Vtofrom" value="1" checked="checked"><font style="display:none" >FROM</font>    <font class="Vlabel">FROM</font><br>    <select name="Vfrom" id="Vfrom" size="1" class="VselectBox"    onchange="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');"    onmouseup="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');"    onkeyup="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');">    <option value="USD" selected>American Dollar</option><option value="GBP">British Pound</option><option value="CAD">Canadian Dollar</option><option value="EUR">Euro</option><option value="JPY">Japanese Yen</option><option value="CHF">Swiss Franc</option><option value="AUD">Australian Dollar</option><optgroup label="---------------"></optgroup><option value="AFN">Afghan Afghani</option><option value="ALL">Albanian Lek</option><option value="DZD">Algerian Dinar</option><option value="USD">American Dollar</option><option value="AOA">Angolan Kwanza</option><option value="ARS">Argentine Peso</option><option value="AMD">Armenian Dram</option><option value="AWG">Aruban Florin</option><option value="AUD">Australian Dollar</option><option value="AZN">Azerbaijani Manat</option><option value="BSD">Bahamian Dollar</option><option value="BHD">Bahraini Dinar</option><option value="BDT">Bangladeshi Taka</option><option value="BBD">Barbados Dollar</option><option value="BYR">Belarusian Ruble</option><option value="BZD">Belize Dollar</option><option value="BMD">Bermudian Dollar</option><option value="BTC">Bitcoin</option><option value="BTN">Bhutan Ngultrum</option><option value="BOB">Bolivian Boliviano</option><option value="BAM">Bosnia-Herzegovina Convertibl</option><option value="BWP">Botswana Pula</option><option value="BRL">Brazilian Real</option><option value="BND">Brunei Dollar</option><option value="BGN">Bulgarian Lev</option><option value="BIF">Burundi Franc</option><option value="KHR">Cambodian Riel</option><option value="CAD">Canadian Dollar</option><option value="CVE">Cape Verde Escudo</option><option value="KYD">Cayman Islands Dollar</option><option value="XAF">CFA BEAC Franc</option><option value="CLP">Chilean Peso</option><option value="CLF">Chilean Unidad de Fomento</option><option value="CNY">Chinese Yuan Renminbi</option><option value="COP">Colombian Peso</option><option value="KMF">Comoros Franc</option><option value="CRC">Costa Rican Colon</option><option value="HRK">Croatian Kuna</option><option value="CUP">Cuban Peso</option><option value="CYP">Cypriot Pound</option><option value="CZK">Czech Koruna</option><option value="DKK">Danish Krone</option><option value="DJF">Djibouti Franc</option><option value="DOP">Dominican Peso</option><option value="XCD">East Caribbean Dollar</option><option value="EGP">Egyptian Pound</option><option value="ERN">Eritrean Nakfa</option><option value="EEK">Estonian Kroon</option><option value="ETB">Ethiopian Birr</option><option value="EUR">Euro</option><option value="FJD">Fiji Dollar</option><option value="CDF">Franc Congolais</option><option value="XPF">CFP Franc</option><option value="GMD">Gambian Dalasi</option><option value="GEL">Georgian Lari</option><option value="GHS">Ghanaian Cedi</option><option value="GIP">Gibraltar Pound</option><option value="GTQ">Guatemalan Quetzal</option><option value="GNF">Guinean Franc</option><option value="GYD">Guyanese Dollar</option><option value="HTG">Haitian Gourde</option><option value="HNL">Honduran Lempira</option><option value="HKD">Hong Kong Dollar</option><option value="HUF">Hungarian Forint</option><option value="ISK">Iceland Krona</option><option value="INR">Indian Rupee</option><option value="IDR">Indonesian Rupiah</option><option value="IRR">Iranian Rial</option><option value="IQD">Iraqi Dinar</option><option value="ILS">Israeli New Shekel</option><option value="JMD">Jamaican Dollar</option><option value="JPY">Japanese Yen</option><option value="JOD">Jordanian Dinar</option><option value="KZT">Kazakhstan Tenge</option><option value="KES">Kenyan Shilling</option><option value="KRW">Korean Won</option><option value="KWD">Kuwaiti Dinar</option><option value="KGS">Kyrgyzstan Som</option><option value="LAK">Lao Kip</option><option value="LVL">Latvian Lats</option><option value="LBP">Lebanese Pound</option><option value="LSL">Lesotho Loti</option><option value="LRD">Liberian Dollar</option><option value="LYD">Libyan Dinar</option><option value="LTL">Lithuanian Litas</option><option value="MOP">Macau Pataca</option><option value="MKD">Macedonia Denar</option><option value="MGA">Malagasy Ariary</option><option value="MWK">Malawi Kwacha</option><option value="MYR">Malaysian Ringgit</option><option value="MVR">Maldive Rufiyaa</option><option value="MTL">Maltese Lira</option><option value="MRO">Mauritania Ouguiya</option><option value="MUR">Mauritius Rupee</option><option value="MXN">Mexican Peso</option><option value="MXV">Mexican Unidad De Inversion</option><option value="MDL">Moldovan Leu</option><option value="MNT">Mongolian Tugrik</option><option value="MAD">Moroccan Dirham</option><option value="MMK">Myanmar Kyat</option><option value="NAD">Namibian Dollar</option><option value="NPR">Nepalese Rupee</option><option value="ANG">Netherlands Antillian Guilder</option><option value="MZN">New Mozambican Metical</option><option value="TWD">Taiwan Dollar</option><option value="TRY">Turkish Lira</option><option value="NZD">New Zealand Dollar</option><option value="NIO">Nicaraguan Cordoba Oro</option><option value="NGN">Nigerian Naira</option><option value="NOK">Norwegian Krone</option><option value="OMR">Omani Rial</option><option value="XAL">Ounces of Aluminum</option><option value="XCP">Ounces of Copper</option><option value="XAU">Ounces of Gold</option><option value="XPD">Ounces of Palladium</option><option value="XPT">Ounces of Platinum</option><option value="XAG">Ounces of Silver</option><option value="PKR">Pakistan Rupee</option><option value="PAB">Panamanian Balboa</option><option value="PGK">Papua New Guinea Kina</option><option value="PYG">Paraguay Guarani</option><option value="PEN">Peruvian Neuevo Sol</option><option value="PHP">Philippine Peso</option><option value="PLN">Polish Zloty</option><option value="GBP">British Pound</option><option value="QAR">Qatari Rial</option><option value="RON">Romanian Leu</option><option value="RUB">Russian Ruble</option><option value="RWF">Rwanda Franc</option><option value="SHP">Saint Helena Pound</option><option value="WST">Samoa Tala</option><option value="STD">Sao Tome Dobra</option><option value="SAR">Saudi Riyal</option><option value="RSD">Serbian Dinar</option><option value="SCR">Seychelles Rupee</option><option value="SLL">Sierra Leonean Leone</option><option value="SGD">Singapore Dollar</option><option value="SKK">Slovak Koruna</option><option value="SBD">Solomon Islands Dollar</option><option value="SOS">Somali Shilling</option><option value="ZAR">South African Rand</option><option value="SDR">Special Drawing Right</option><option value="LKR">Sri Lanka Rupee</option><option value="SDD">Sudanese Dinar</option><option value="SRD">Suriname Dollar</option><option value="SZL">Swaziland Lilangeni</option><option value="SEK">Swedish Krona</option><option value="CHF">Swiss Franc</option><option value="SYP">Syrian Pound</option><option value="TJS">Tajikistan Somoni</option><option value="TZS">Tanzanian Shilling</option><option value="THB">Thai Baht</option><option value="THO">Thai Offshore Baht</option><option value="TOP">Tongan Pa Anga</option><option value="TTD">Trinidad and Tobago Dollar</option><option value="TND">Tunisian Dinar</option><option value="TMM">Turkmenistan Manat</option><option value="UGX">Uganda Shilling</option><option value="UAH">Ukraine Hryvnia</option><option value="AED">United Arab Emirates Dirham</option><option value="UYU">Uruguayan peso</option><option value="UZS">Uzbekistan Sum</option><option value="VUV">Vanuatu Vatu</option><option value="VEB">Venezuelan Bolivar</option><option value="VND">Vietnamese Dong</option><option value="XOF">CFA BCEAO Franc</option><option value="YER">Yemeni Rial</option><option value="ZMK">Zambian Kwacha</option><option value="ZWD">Zimbabwe Dollar</option>  </select><br />    <div class="Vspacer"></div>    <font class="Vlabel">TO</font><br>    <select name="Vto" id="Vto" size="1" class="VselectBox"    onchange="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');"    onmouseup="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');"    onkeyup="return getCur2(document.getElementById(\'Vfrom\').value, document.getElementById(\'Vto\').value, document.getElementById(\'Vamount\').value, document.getElementsByName(\'Vtofrom\'),\'V\');">    <option value="USD">American Dollar</option><option value="GBP">British Pound</option><option value="CAD">Canadian Dollar</option><option value="EUR" selected>Euro</option><option value="JPY">Japanese Yen</option><option value="CHF">Swiss Franc</option><option value="AUD">Australian Dollar</option><optgroup label="---------------"></optgroup><option value="AFN">Afghan Afghani</option><option value="ALL">Albanian Lek</option><option value="DZD">Algerian Dinar</option><option value="USD">American Dollar</option><option value="AOA">Angolan Kwanza</option><option value="ARS">Argentine Peso</option><option value="AMD">Armenian Dram</option><option value="AWG">Aruban Florin</option><option value="AUD">Australian Dollar</option><option value="AZN">Azerbaijani Manat</option><option value="BSD">Bahamian Dollar</option><option value="BHD">Bahraini Dinar</option><option value="BDT">Bangladeshi Taka</option><option value="BBD">Barbados Dollar</option><option value="BYR">Belarusian Ruble</option><option value="BZD">Belize Dollar</option><option value="BMD">Bermudian Dollar</option><option value="BTC">Bitcoin</option><option value="BTN">Bhutan Ngultrum</option><option value="BOB">Bolivian Boliviano</option><option value="BAM">Bosnia-Herzegovina Convertibl</option><option value="BWP">Botswana Pula</option><option value="BRL">Brazilian Real</option><option value="BND">Brunei Dollar</option><option value="BGN">Bulgarian Lev</option><option value="BIF">Burundi Franc</option><option value="KHR">Cambodian Riel</option><option value="CAD">Canadian Dollar</option><option value="CVE">Cape Verde Escudo</option><option value="KYD">Cayman Islands Dollar</option><option value="XAF">CFA BEAC Franc</option><option value="CLP">Chilean Peso</option><option value="CLF">Chilean Unidad de Fomento</option><option value="CNY">Chinese Yuan Renminbi</option><option value="COP">Colombian Peso</option><option value="KMF">Comoros Franc</option><option value="CRC">Costa Rican Colon</option><option value="HRK">Croatian Kuna</option><option value="CUP">Cuban Peso</option><option value="CYP">Cypriot Pound</option><option value="CZK">Czech Koruna</option><option value="DKK">Danish Krone</option><option value="DJF">Djibouti Franc</option><option value="DOP">Dominican Peso</option><option value="XCD">East Caribbean Dollar</option><option value="EGP">Egyptian Pound</option><option value="ERN">Eritrean Nakfa</option><option value="EEK">Estonian Kroon</option><option value="ETB">Ethiopian Birr</option><option value="EUR">Euro</option><option value="FJD">Fiji Dollar</option><option value="CDF">Franc Congolais</option><option value="XPF">CFP Franc</option><option value="GMD">Gambian Dalasi</option><option value="GEL">Georgian Lari</option><option value="GHS">Ghanaian Cedi</option><option value="GIP">Gibraltar Pound</option><option value="GTQ">Guatemalan Quetzal</option><option value="GNF">Guinean Franc</option><option value="GYD">Guyanese Dollar</option><option value="HTG">Haitian Gourde</option><option value="HNL">Honduran Lempira</option><option value="HKD">Hong Kong Dollar</option><option value="HUF">Hungarian Forint</option><option value="ISK">Iceland Krona</option><option value="INR">Indian Rupee</option><option value="IDR">Indonesian Rupiah</option><option value="IRR">Iranian Rial</option><option value="IQD">Iraqi Dinar</option><option value="ILS">Israeli New Shekel</option><option value="JMD">Jamaican Dollar</option><option value="JPY">Japanese Yen</option><option value="JOD">Jordanian Dinar</option><option value="KZT">Kazakhstan Tenge</option><option value="KES">Kenyan Shilling</option><option value="KRW">Korean Won</option><option value="KWD">Kuwaiti Dinar</option><option value="KGS">Kyrgyzstan Som</option><option value="LAK">Lao Kip</option><option value="LVL">Latvian Lats</option><option value="LBP">Lebanese Pound</option><option value="LSL">Lesotho Loti</option><option value="LRD">Liberian Dollar</option><option value="LYD">Libyan Dinar</option><option value="LTL">Lithuanian Litas</option><option value="MOP">Macau Pataca</option><option value="MKD">Macedonia Denar</option><option value="MGA">Malagasy Ariary</option><option value="MWK">Malawi Kwacha</option><option value="MYR">Malaysian Ringgit</option><option value="MVR">Maldive Rufiyaa</option><option value="MTL">Maltese Lira</option><option value="MRO">Mauritania Ouguiya</option><option value="MUR">Mauritius Rupee</option><option value="MXN">Mexican Peso</option><option value="MXV">Mexican Unidad De Inversion</option><option value="MDL">Moldovan Leu</option><option value="MNT">Mongolian Tugrik</option><option value="MAD">Moroccan Dirham</option><option value="MMK">Myanmar Kyat</option><option value="NAD">Namibian Dollar</option><option value="NPR">Nepalese Rupee</option><option value="ANG">Netherlands Antillian Guilder</option><option value="MZN">New Mozambican Metical</option><option value="TWD">Taiwan Dollar</option><option value="TRY">Turkish Lira</option><option value="NZD">New Zealand Dollar</option><option value="NIO">Nicaraguan Cordoba Oro</option><option value="NGN">Nigerian Naira</option><option value="NOK">Norwegian Krone</option><option value="OMR">Omani Rial</option><option value="XAL">Ounces of Aluminum</option><option value="XCP">Ounces of Copper</option><option value="XAU">Ounces of Gold</option><option value="XPD">Ounces of Palladium</option><option value="XPT">Ounces of Platinum</option><option value="XAG">Ounces of Silver</option><option value="PKR">Pakistan Rupee</option><option value="PAB">Panamanian Balboa</option><option value="PGK">Papua New Guinea Kina</option><option value="PYG">Paraguay Guarani</option><option value="PEN">Peruvian Neuevo Sol</option><option value="PHP">Philippine Peso</option><option value="PLN">Polish Zloty</option><option value="GBP">British Pound</option><option value="QAR">Qatari Rial</option><option value="RON">Romanian Leu</option><option value="RUB">Russian Ruble</option><option value="RWF">Rwanda Franc</option><option value="SHP">Saint Helena Pound</option><option value="WST">Samoa Tala</option><option value="STD">Sao Tome Dobra</option><option value="SAR">Saudi Riyal</option><option value="RSD">Serbian Dinar</option><option value="SCR">Seychelles Rupee</option><option value="SLL">Sierra Leonean Leone</option><option value="SGD">Singapore Dollar</option><option value="SKK">Slovak Koruna</option><option value="SBD">Solomon Islands Dollar</option><option value="SOS">Somali Shilling</option><option value="ZAR">South African Rand</option><option value="SDR">Special Drawing Right</option><option value="LKR">Sri Lanka Rupee</option><option value="SDD">Sudanese Dinar</option><option value="SRD">Suriname Dollar</option><option value="SZL">Swaziland Lilangeni</option><option value="SEK">Swedish Krona</option><option value="CHF">Swiss Franc</option><option value="SYP">Syrian Pound</option><option value="TJS">Tajikistan Somoni</option><option value="TZS">Tanzanian Shilling</option><option value="THB">Thai Baht</option><option value="THO">Thai Offshore Baht</option><option value="TOP">Tongan Pa Anga</option><option value="TTD">Trinidad and Tobago Dollar</option><option value="TND">Tunisian Dinar</option><option value="TMM">Turkmenistan Manat</option><option value="UGX">Uganda Shilling</option><option value="UAH">Ukraine Hryvnia</option><option value="AED">United Arab Emirates Dirham</option><option value="UYU">Uruguayan peso</option><option value="UZS">Uzbekistan Sum</option><option value="VUV">Vanuatu Vatu</option><option value="VEB">Venezuelan Bolivar</option><option value="VND">Vietnamese Dong</option><option value="XOF">CFA BCEAO Franc</option><option value="YER">Yemeni Rial</option><option value="ZMK">Zambian Kwacha</option><option value="ZWD">Zimbabwe Dollar</option>   </select>   <div class="Vspacer"></div>   <font class="Vlabel" id="Vresult_label"> Result:</font><br />   <textarea style="color:#777" class="Vtextarea" cols="18" rows="1" name="Vresult" id="result" readonly></textarea>   <div class="Vspacer"></div><font class="Vmsg_1"><a href="https://fx-rate.net/widget/">Rates on <b>12 Mar 2018</b></a></font></div></form></body>';
document.write(form_content);