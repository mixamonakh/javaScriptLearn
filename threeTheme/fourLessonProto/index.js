// Наследование через __proto__ - старый способ

objMan = {
    name: 'Petr',
    age: 20
}

function User( name, age ){
    this.name = name;
    this.age = age;
    this.__proto__ = objMan;
}

const user = new User( 'Alex', 25);

// console.log(user)

// Наследование через метод функции call() - подмена контекста
function Voice( content ){
    content = content;
    this.voiceActive = function(){
        console.log(content)
    };
}
function Animal( name, age, size, content ){
    this.name = name;
    this.age = age;
    this.size = size;
    Voice.call( this, content)
}


const cat = new Animal( 'pip', 7, 300, 'meoooow' );

// console.log(cat)

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

// --- свойство функции-конструктора prototype ---

function Weapon( material ){
    this.material = material;
}

// Наследование литерального объекта с помощью свойства prototype
Weapon.prototype = {
    size: 200
}
// При таком способе затирается свойсвто constructor

// Мы можем дописать constructor вручную
Weapon.prototype = {
    size: 200,
    constructor: Weapon
}

// Выносим методы за функцию конструктор и наследуемся через объект prototype
Weapon.prototype.showMaterial = function(){
    console.log( this.material);
}

const ak47 = new Weapon( 'metal' );
const sword = new Weapon( 'wood' );
// console.log(sword.showMaterial())

// Полный цикл работы прототипного наследования в ES5, а соответственно и под капотом ES6

function DefaultUser( nickname ){
    this.nickname = nickname;
}

function Admin( nickname ){
    DefaultUser.call( this, nickname );
    this.key = 777;
}

//методы выносим в prototype
DefaultUser.prototype.getName = function(){
    return this.nickname;
}
// Но при таком наследовании, наш Admin не унаследовал метод

// метод create глобального объекта Object позволяет указать в параметр объект, от которого следует наследоваться
Admin.prototype = Object.create( DefaultUser.prototype )

// я могу и дальше расширять prototype
Admin.prototype.getKey = function(){
    return( this.key );
}
// я могу переназначить метод, полиморфизм
Admin.prototype.getName = function(){
    const oldResult = DefaultUser.prototype.getName.call(this);
    return oldResult + ' - ADMIN'
}

// теряется ключ constructor, запишем его ручками
Admin.prototype.constructor = Admin;

const admin = new Admin( 'demon');
const admin2 = new Admin( 'angel');
const user1 = new DefaultUser( 'petya' );
// console.log( admin.getName() );


// Новый стандарт ES6 КЛАССЫ


class NewUser {
    // тело шаблона
    constructor( name, age ){
        this.name = name;
        this.age = age;
    }
    // выносим методы
    getName(){
        return this.name;
    }
}

class Administrator extends NewUser {
    constructor( name, age ){
        // super осуществляет вызов функции конструктора( класса ) от которого надо наследоваться в контексте этого шаблона, в него передаем параметры
        super( name, age );
        // а дальше уже дополняем шаблон
        this.priv = 777;
    }
    getPriv(){
        return this.priv;
    }
    getName(){
        const oldResult = super.getName();
        return 'ADMIN - ' + oldResult;
    }
}

const vasek = new NewUser( 'one', 25 );
const petek = new Administrator( 'one', 25 );

console.log( petek )