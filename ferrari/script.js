/*var radio = document.getElementsByName('motor');

for(var i = 0; i < radio.length; i++){
	radio[i].onchange = testRadio;
}

function testRadio(){
	console.log(this.value);
}
*/
var sum = Number(0);
document.getElementById('knopkaMotor').onclick = radioMotor;
document.getElementById('knopkaKapot').onclick = radioKapot;
document.getElementById('knopkaTormoza').onclick = radioTormoza;
document.getElementById('knopkaDiski').onclick = radioDiski;

function radioMotor() {
	var mas = document.getElementsByName('motor');
	for(var i = 0; i <mas.length; i++){
		if(mas[i].checked){
			sum+= Number(mas[i].value);
			document.getElementById("knopkaMotor").disabled = true;
			document.getElementById('total').value = sum;
			break;
		}
	}
}

function radioKapot() {
	var mas1 = document.getElementsByName('kapot');
	for(var i = 0; i <mas1.length; i++){
		if(mas1[i].checked){
			sum+= Number(mas1[i].value);
			document.getElementById("knopkaKapot").disabled = true;
			document.getElementById('total').value = sum;
			break;
		}
	}
}

function radioTormoza() {
	var mas2 = document.getElementsByName('kapot');
	for(var i = 0; i <mas2.length; i++){
		if(mas2[i].checked){
			sum+= Number(mas2[i].value);
			document.getElementById("knopkaTormoza").disabled = true;
			document.getElementById('total').value = sum;
			break;
		}
	}
}

function radioDiski() {
	var mas3 = document.getElementsByName('kapot');
	for(var i = 0; i <mas3.length; i++){
		if(mas3[i].checked){
			sum+= Number(mas3[i].value);
			sum+=5000000;
			document.getElementById("knopkaDiski").disabled = true;
			document.getElementById('total').value = sum;
			break;
		}
	}
}

