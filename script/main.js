"use strict";

var flag = 0;
var btnExpand = false;

function openpara(val) {
	calc.display.value += val;
	flag += 1;
}

function closepara(valval) {
	calc.display.value += valval;
	flag -= 1;
}

function backspace(calc) {
	var size = calc.display.value.length;
	calc.display.value = calc.display.value.substring(0, size - 1);
}

function Resetfunction(calc) {
	calc.display.value = " ";

	flag = 0;
}

function cos_function() {
	flag += 1;
	calc.display.value += 'Math.cos(';
}

function sin_function() {
	flag += 1;
	calc.display.value += 'Math.sin(';
}

function tan_function() {
	flag += 1;
	calc.display.value += 'Math.tan(';
}

function log_function() {
	flag += 1;
	calc.display.value += 'Math.log(';
}

function sqrt_function() {
	flag += 1;
	calc.display.value += 'Math.sqrt(';
}

function exp_function() {
	flag += 1;
	calc.display.value += 'Math.exp(';
}

function fact(x) {
	factvar = 1;
	for (i = 1; i <= x; i++) {
		factvar = factvar * i;
	}
	return factvar;
}

function fact_function(x) {
	flag += 1;
	calc.display.value += 'fact(';
}

function power_function(x) {
	flag += 1;
	calc.display.value += 'Math.pow(x,y';
}

function evaluation(calc) {
	var n = calc.display.value;
	var size = calc.display.value.length;
	var lastchar = calc.display.value.charAt(size)
	if (isNaN(lastchar) && lastchar != ")" && lastchar != "!") {
		calc.display.value = "syntax error";
	} else if (flag != 0) {
		calc.display.value = "error:paranthesis";
	} else {
		var result = eval(n);
		calc.display.value = result;
	}
}

var tdExpand = function () {
	var ex = document.getElementsByClassName("moreCol");
	if (btnExpand) {
		for (var i = 0; i < ex.length; i++) {
			ex[i].style.display = "none";
		}
		$("#displaytd").attr('colspan', 4);
		$("#tdExpand").html("&lsaquo;");
		btnExpand = false;
	} else {
		for (i = 0; i < ex.length; i++) {
			ex[i].style.display = "table-cell";
		}
		$("#displaytd").attr('colspan', 6);
		$("#tdExpand").html("&rsaquo;");
		btnExpand = true;
	}
};

$(function () {
	
});
