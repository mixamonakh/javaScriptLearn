// Восьмой урок: Создание разметки HTML при помощи методов JS

// ДЗ
// Создал функцию конструктор которая принимает объектъ
// element условный атрибут для испольования внутри функции конструктора
function Render(element){
    this.tagName = element.tagName
    this.className = element.className
    this.props = element.props
    this.attrs = element.attrs
    this.children = element.children
// Присвоил в локальную переменную метод createElement() создал дом-элемент
    var elem = document.createElement(this.tagName)

// Делаю проверку if(), что бы скрипт не лег, если какое то поле окажется пустым
    if( this.className ){
// Перебираю массив классов, в каждой итерации добавляю класс к созданному элементу
        for( i = 0; i < this.className.length; i++){
            elem.classList.add(this.className[i]);
        }
    };

// Перебираю массив свойств с помощью метода forEach
    if( this.props ){
        // В кажой итерации, с помощью метода объекта values() получаю значение ключей и присваиваю новое свойство элементу
        this.props.forEach( prop => {
            elem.setAttribute( Object.values(prop)[0], Object.values(prop)[1]  );
        });
    };

// Перебираю массив атрибутов с помощью метода forEach
    if( this.attrs ){
        // В кажой итерации, с помощью метода объекта values() получаю значение ключей и присваиваю новый атрибут элементу
        this.attrs.forEach( attr => {
            elem.setAttribute( Object.values(attr)[0], Object.values(attr)[1]  );
        });
    }

// Возвращаю готовый элемент
    return elem
}

// Теперь я могу создавать объект через оператор new, передавая в него данные, а на выходе получать дом елемент, который висит теперь в оперативке и с ним уже можно работать.
var p = new Render({
    tagName: 'input',
    attrs: [
        {
            name: 'type',
            value: 'text'
        },
        {
            name: 'placeholder',
            value: 'Name'
        }
    ],
    className: ['div', 'div2'],
    props: [
        {
            name: 'required',
            value: true
        }
    ],
    children: ['span']
})
// Добавляю созданный элемент в разметку
document.body.appendChild( p );

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