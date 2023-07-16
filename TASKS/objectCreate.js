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