// Наследование в функциях-конструкторе через подмену контекста, метод call(), этот способ поддерживается старыми браузерами
function User( name, pass ){
    this.name = name;
    this.pass= pass;
    this.hey = function(){
        alert(this.name);
    }
}

function Avatar( avatar ){
    this.avatar = avatar;
}

function Admin( name, pass, status, avatar ){
    this.status = status;
    Avatar.call( this, avatar );
    User.call( this, name, pass );
}

let admin = new Admin( 'Misha', 123, 'administrator', 'img' );

// Литеральные объекты, пример наследования через __proto__
const obj1 = {
    a: 1,
    b: 2
}
const obj2 = {
    c: 1,
    d: 2,
    __proto__: obj1
}

// Задача написать подобие метода create() глобального объекта Object

// Создаем функцию которая принимает 2 аргумента: объект для наследования и объект свойств для будущих полей
function createObj( prototype, properties ){
    // создаем внутри функцию-конструктор
    function forProperties( ){
        // Наследуем объект
        this.__proto__ = prototype;
        // Перебираем объект свойств для создания полей
        for(property in properties){
            this[property] = properties[property];
        }
    }
    // Возвращаем создание объекта
    return new forProperties();
}
// Присваиваем в переменную вызов функции куда передаём объект от которого будем наследоваться и объект свойств
let newObj = createObj( obj2, { a: 12, b: 13 } )

console.log(newObj)