export {}

//6. Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.

interface IUser { 
  name: string,
  age: number;
  email?: string
}

let user1: IUser = {
  name: 'Vlada',
  age: 20,
}

let user2: IUser = {
  name: 'Vlad',
  age: 23,
  email: 'vlad@example.com'
}

console.log(user1, user2);

//7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля

interface IStudent extends IUser {
  curs: number;
}

let student: IStudent = {
  name: 'Vladik',
  age: 17,
  curs: 2
}

console.log(student)

//4. Создать переменную uploadStatus, которая может быть только: "loading", "success", "error".

let uploadStatus: "loading" | "success" | "error"
uploadStatus = "loading";
uploadStatus = "success";
uploadStatus = "error";

//5. Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".

let textFormat: "uppercase" | "lowercase" | "capitalize"

textFormat = "uppercase";
textFormat = "lowercase";
textFormat = "capitalize";


//3. Создать функцию, которая принимает 2 числа и возвращает их сумму. Полностью типизировать параметры, значение, возвращаемое функцией.

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(20, 30))


//8. Создать функцию, которая принимает строку и вариант, как именно форматировать строку (задание №5) 
//и на основе этого возвращает форматированную строку.

function foramtText (text: string, formatMode: "uppercase" | "lowercase" | "capitalize"): string {
  if (formatMode === "uppercase") {
    return text.toUpperCase()
  } else if (formatMode === "lowercase") {
    return text.toLowerCase()
  } else {
    return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()
  }
}

console.log(foramtText('Привет, я изучаю Ангуляр', "capitalize"));

//9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.

function withoutSymbol (text: string, symbol: string): string {
  return text.replaceAll(symbol, '')
}

console.log(withoutSymbol('Привет, я изучаю Ангуляр', 'А'))

//10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров

const users: IUser[] = [
  {name: 'Vladislav', age: 30, email: 'example1@ex.com'},
  {name: 'Daunila', age: 28, email: 'example2@ex.com'},
  {name: 'Eugene', age: 21, email: 'example3@ex.com'}
]

console.log('Отфильтровнный как пиво массив', users.filter(user => user.age <= 25))