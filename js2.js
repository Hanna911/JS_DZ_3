var arr = [1,2,3,4,5];


document.getElementById('push').onclick = push_f;


function push_f() {

		var index_p = document.getElementById('index').value;
		var zn_p = document.getElementById('zn').value;

		for (i=0; i<arr.length; i++){

			if (i == index_p){
				arr[i] = zn_p;

				console.log(arr);
			}

		};
}

document.getElementById('pop').onclick = pop_f; // Удаляет последний элемент из массива и возвращает его:
function pop_f() {
	console.log( arr.pop() ); 
	console.log(arr);
}


document.getElementById('shift').onclick = shift_f; // Удаляет из массива первый элемент и возвращает его:
function shift_f() {
	console.log( arr.shift() ); 
	console.log(arr);
}


document.getElementById('push_method').onclick = push_method_f; // Добавляет элемент в конец массива:

function push_method_f() {
	var chislo_p = document.getElementById('chislo').value;
	arr.push(chislo_p)
	console.log(arr);
}