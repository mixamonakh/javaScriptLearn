// Создать функцию конструктор которая принимает объект и создает элемент дом
// element условный атрибут для испольования внутри функции конструктора
function Render(element){
    this.tagName = element.tagName
    this.className = element.className
    this.props = element.props
    this.attrs = element.attrs
    this.children = element.children
    this.text = element.text
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
// Пишем текст
    if ( this.text ){
        elem.innerText = this.text
    }
// Добавляем элементу детей, если они нужны
    if( this.children ){
        for( i = 0; i < this.children.length; i++){
            elem.appendChild(this.children[i]);
        }
    }

// Возвращаю готовый элемент
    return elem
}

// Теперь я могу создавать объект через оператор new, передавая в него данные, а на выходе получать дом елемент, который висит теперь в оперативке и с ним уже можно работать.
var span = new Render({
    tagName: 'span',
    text: 'я спан'
})
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
    // в ключ children я передаю переменную с созданным элементом. Таким образом я могу собирать дом-узлы.
    children: [ span ]
})

console.log(span)
// Добавляю созданный элемент в разметку
document.body.appendChild( p );