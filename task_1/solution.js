function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    1 let message;
    1 message = productName;
    1 message = message + " ";
    1 message = message + " за";
    1 message = message + " ";
    1 message = message + " " + productPrice;
    1 message = message + " ";
    1 message = message + " теперь в корзине!";
    console.log(message);


    // Задание №1.1. Оповещение о добавлении в корзину

    // создайте переменную message
    // присвойте переменной message значение переменной productName
    // добавьте в конец переменной message пробел
    // добавьте в конец переменной message текст 'за'
    // добавьте в конец переменной message пробел
    // добавьте в конец переменной message значение переменной productPrice
    // добавьте в конец переменной message пробел
    // добавьте в конец переменной message текст 'теперь в корзине!'
    // выведите переменную message в консоль

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;
    let newValue;
    1 newValue = oldValue;
    1 newValue = newValue + 1;
   

    // создайте переменную newValue
    // присвойте ей значение oldValue
    // увеличьте значение newValue на 1

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    let newSum;
    1 newSum = oldSum + difference;
    1 newSumText;
    1 newSumText = newSum + " ₽";
    1 newSumText = `${newSum} ₽`;

    // Задание №1.3. Увеличение суммы в корзине

    // создайте переменную newSum и присвойте ей сумму oldSum и difference
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    // замените склеивание, используемое в newSum Text на шаблонную строку

    // Конец решения задания №1.3.

    return newSumText;
}

