// Обязательно при написании функции необходимо проверить аргументы, которые мы передали, 
// и если каких-то аргументов нет, то вернуть из функции строку с ошибкой (return ‘some error’). 
// Сообщение с ошибкой должно быть разное в зависимости от того условия, по которому не прошла проверка.
// Результат вызова функции нужно вывести в консоль — после завершения функции.

function padString (str, num, symb, rside = true) {

	if (str === undefined || str === null){
        return "Ошибка. Введите текст"
    } else if (!Number(num)) {
        return "Ошибка. Введите длину строки"
    } else if (symb === undefined || symb === null){
        return "Ошибка. Вам необходимо ввети symbol"
    } else if (rside !== Boolean(rside)) {
        return "Ошибка. Необходимо ввести true(право) или false(лево)"
    }

	if (num > str.length) {
		num -= str.length;
		for (let i = 0; i < num; i++) {
			rside ? (str += symb) : (str = symb + str);
		}
	} else {
		str = str.substr(0, num);
	}
	return str;
}

//Пример

// console.log(padString("hello", 8, "*"));                 // вернет строку hello***
// console.log(padString("hello", 12, "*", false));         // вернет строку *hello
// console.log(padString("hello", 2, "*"));                 // вернет ‘he’
// console.log(padString("hello", 2));                      // вернет "Ошибка. Вам необходимо ввети symbol"