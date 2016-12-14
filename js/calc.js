function getById(elem) {
	return document.getElementById(elem);
}

function parseCheck(obj) {
	if(obj.checked == true)
		return parseInt(obj.value);
	else
		return 0;
}

function parseIndex(obj, int) {
	if(int==false)
		return obj.options[obj.selectedIndex].value;
	else
		return parseInt(obj.options[obj.selectedIndex].value);
}

function calc() {

	var kurt = getById('kurt');
	var price_kurt = 0;
	var shtan = getById('shtan');
	var price_shtan = 0;
	var vodolaz = getById('vodolaz');
	var price_vodolaz = 0;
	var kals = getById('kals');
	var price_kals = 0;
	var sock = getById('sock');
	var price_sock = 0;
	var hat = getById('hat');
	var price_hat = 0;
	var balak = getById('balak');
	var price_balak = 0;

	if(kurt.checked == true) {
		var size_kurt = getById('size_kurt');
		var colors_kurt = getById('colors_kurt');
		var prokl_kurt = getById('prokl_kurt');
		var kant_kurt = getById('kant_kurt');
		var utepl_kurt = getById('utepl_kurt');
		var sroki_kurt = getById('sroki_kurt');

		price_kurt += parseCheck(kurt);
		price_kurt += parseIndex(size_kurt);
		price_kurt += parseIndex(colors_kurt);
		price_kurt += parseCheck(prokl_kurt);
		price_kurt += parseCheck(kant_kurt);
		price_kurt += parseCheck(utepl_kurt);
		price_kurt *= parseIndex(sroki_kurt,false);

		result_kurt.innerHTML = price_kurt;
	} else {
		result_kurt.innerHTML = 0;
	}


	if(shtan.checked) {
		var size_shtan = getById('size_shtan');
		var colors_shtan = getById('colors_shtan');
		var sex_shtan = getById('sex_shtan');
		var prokl_shtan = getById('prokl_shtan');
		var kant_shtan = getById('kant_shtan');
		var utepl_shtan = getById('utepl_shtan');
		var sroki_shtan = getById('sroki_shtan');

		price_shtan += parseCheck(shtan);
		price_shtan += parseIndex(size_shtan);
		price_shtan += parseIndex(colors_shtan);
		price_shtan += parseIndex(sex_shtan);
		price_shtan += parseCheck(prokl_shtan);
		price_shtan += parseCheck(kant_shtan);
		price_shtan += parseCheck(utepl_shtan);
		price_shtan *= parseIndex(sroki_shtan,false);

		result_shtan.innerHTML = price_shtan;
	} else {
		result_shtan.innerHTML = 0;
	}


	if(vodolaz.checked) {
		var size_vodolaz = getById('size_vodolaz');
		var tkan_vodolaz = getById('tkan_vodolaz');
		price_vodolaz += parseCheck(vodolaz);
		price_vodolaz += parseIndex(size_vodolaz);
		price_vodolaz += parseIndex(tkan_vodolaz);
	}


	if(kals.checked) {
		var size_kals = getById('size_kals');
		var tkan_kals = getById('tkan_kals');
		price_kals += parseCheck(kals);
		price_kals += parseIndex(size_kals);
		price_kals += parseIndex(tkan_kals);
	}


	if(sock.checked) {
		var size_sock = getById('size_sock');
		price_sock += parseCheck(sock);
		price_sock += parseIndex(size_sock);
	}

	price_hat += parseCheck(hat);
	price_balak += parseCheck(balak);

	total.innerHTML = price_kurt + price_shtan + price_vodolaz + price_kals + price_sock + price_hat + price_balak;
}

$("#calc_form input").change(calc);
$("#calc_form select").change(calc);