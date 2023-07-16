// Восьмой урок: Создание разметки HTML при помощи методов JS


//Повесить сообщение об отправки на форму

var forma = document.querySelector('.form');
var container = document.querySelector('.container');
container.addEventListener( 'submit', function(e){
    // Отмена стандартного события с помощью превент дефолт
    e.preventDefault()
    alert('Send!!');
});

// Такое копирование разметки не создает дом узел, а просто дописывает HTML текстом. В итоге мы не можем подписываться на события.
var outerForm = forma.outerHTML
// container.innerHTML += forma.outerHTML

// Такой способ имеет место быть если надо поменять текст в кнопке
var btn = document.querySelector('.btn');
container.addEventListener( 'submit', function(e){
    elem = e.target.querySelector('.btn');
    elem.innerHTML = 'Отправлно!';
    elem.setAttribute('disabled', true)
});

// Метод для создания DOM узла - createElement()
//Создадим форму
var newForma = document.createElement('form');
newForma.setAttribute('action', '#');
newForma.setAttribute('method', 'get');

// className перезапишет ключ className
newForma.className = 'form new-form';

// задавая классы через setAttribute, перезапишутся классы
// newForma.setAttribute('class', 'get');
// classList.add() добавит класс к уже существующим
newForma.classList.add('default');
console.log({newForma});

// Создадим инпут
var newInput = document.createElement('input');
newInput.setAttribute('type', 'text')
newInput.setAttribute('placeholder', 'Name');
newInput.className = 'form__input';
newInput.required = true;

// Создадим кнопку
var newBtn = document.createElement('button');
newBtn.setAttribute('type', 'submit')
newBtn.className = 'btn';
newBtn.innerText = 'Send';

// метод appendChild() добавит детей в объект ( дом узел )
// добавляем инпут и кноку в форму
newForma.appendChild( newInput );
newForma.appendChild( newBtn );

// добавляем форму в контейнер и выводим в разметку
container.appendChild( newForma );

// cloneNode() копирует DOM узел, а не текст
var nodeForm = forma.cloneNode( true );
nodeForm.classList.add('new-form')
container.appendChild( nodeForm );

// insertBefore() позволяет вставить элемент перед другим элементом в родитле !
// родитель.insertBefore( новыйЭлемент, передКакимЭлементомВставить )
container.insertBefore( nodeForm, newForma );

// prepend() / append()
// prepend() добавляет в начало списка детей
// append() добавляет в конец списка детей

//insertAdjacentHRML() вставляет Текст перед/после открывающимся тегом, перед/после закрывающимся тегом
var heading = document.createElement('h1');
heading.style.color = '#fff';
heading.innerText = 'olala';
container.insertAdjacentHTML( 'beforebegin', heading );