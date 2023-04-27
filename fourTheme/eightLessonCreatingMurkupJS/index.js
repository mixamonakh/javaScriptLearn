// Восьмой урок: Создание разметки HTML при помощи методов JS

// Функция принимает объект
// function render( obj ){
//     return newNode;
// }

// // Передаваемый в функцию объект имеет следующий вид:

// var test = {
//     // Ключ имя тега
//     tagName: 'input', // Обязателньый ключ
//     // Ключ атрибуты
//     attrs: [
//         {
//             name: 'type',
//             value: 'text'
//         },
//         {
//             name: 'placehloder',
//             value: 'Name'
//         }
//     ],
//     // Ключ классы
//     className: ['class1', 'class2'],
//     props:[
//         {
//             name: 'required',
//             value: true
//         }
//     ],
//     children: [ ...DomNodes ]
// }

// Мы вызываем фунцию и передаем в нее объект. Вызов функции присваиваем в переменную что бы потом можно было создать разметку

// var newDiv = render({
//     tagName: 'div',
//     className: ['div', 'div-2']
// })

// document.body.appendChild( newDiv );



// Отработка моментов из урока:

//Повесить сообщение об отправки на форму

var forma = document.querySelector('.form');

forma.addEventListener( 'submit', function(){
    alert('Send!!');
});