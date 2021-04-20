// Acesso ao DOM
var w = document.querySelector('#weight');
var h = document.querySelector('#height');
var text = document.querySelector('#textShow');
var subText = document.querySelector('#subText');
var modal = document.querySelector('.modal');

// Armazena o resultado
var result;
var msg;

document.querySelector('form')
	.addEventListener('submit', function (event) {
		event.preventDefault();
		result = imc(Number(w.value), Number(h.value));
		
		if (result < 17) {
			msg = "Muito Abaixo do Peso";
		}
		else if (result < 18.5) {
			msg = "Abaixo do Peso";
		}
		else if (result < 25) {
			msg = "Peso Normal";
		}
		else if (result < 30) {
			msg = "Acima do Peso";
		}
		else if (result < 35) {
			msg = "Obesidade I";
		}
		else if (result < 40) {
			msg = "Obesidade II (severa)";
		} else {
			msg = "Obesidade III (severa)";
		}
		
		text.innerHTML = "IMC: " + result.toFixed(2);
		subText.innerHTML = msg;
		
		modal.style.display = "flex";
	});

// Fecha o modal
function closeModal() {
	modal.style.display = "none";
}

// Limpa os campos
function clearField() {
	w.value = "";
	h.value = "";
}

// Calcula o IMC
function imc(weight, height) {
	return weight / (height / 100) ** 2;
}