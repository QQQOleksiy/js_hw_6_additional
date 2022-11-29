// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// function cutString(str, n) {
//     let arr_str = []
//     for (let i = 0; i < str.length; i += n) {
//         let str_ = ''
//         for (let j = 0; j < n; j++) {
//             if (str[i] === undefined){
//                 break
//             }
//             else{
//             str_ += str[i]
//             i++
//             }
//         }
//         i -= n
//         arr_str.push(str_)
//     }
//     return arr_str
// }
// let str = 'наслаждение'
// console.log(cutString(str, 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// function delete_characters(str, lenght) {
//     let new_str = ''
//     for (let i = 0; i < lenght; i++) {
//         if (str[i] === undefined){
//             break
//         }else {
//             new_str += str[i]
//         }
//     }
//     return new_str
// }
// let str = 'Каждый охотник желает знать';
// console.log(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let str = "HTML JavaScript PHP";
// function insert_dash(str){
//     str = str.toUpperCase()
//     str = str.replaceAll(' ', '-')
//     return str
// }
//
// console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let str = 'qwerty'
// function textUpper(text) {
//     let str = text[0].toUpperCase()
//     let anyText = text.substring(1,text.length)
//     text = str.concat(anyText)
//     return text
// }
// console.log(textUpper(str));

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//
//
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// function normalizeName(text) {
//     text = text.replaceAll('.', ' ')
//         .replaceAll('-', ' ')
//         .replaceAll('_', ' ')
//     let split = text.split(' ')
//     let arr_name = []
//     for (let string of split) {
//         if (string !== ' ' && string !== '') {
//             arr_name.push(string)
//         }
//     }
//     let str = ''
//     for (let i = 0; i < arr_name.length; i++) {
//         let arrNameElement = arr_name[i];
//         str += arrNameElement + ' '
//     }
//     str = str.trim()
//     text = str
//     return text
// }
//
// console.log(normalizeName(n1));
// console.log(normalizeName(n2));
// console.log(normalizeName(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// function random_number(how_many, max, min) {
//     let arr_number = []
//     for (let i = 0; i < how_many; i++) {
//         arr_number.push(Math.trunc(Math.random() * (max + 1 - min) + min))
//     }
//     return arr_number
// }
// let numbers = random_number(20, 100, 0)
// console.log(numbers);
//
// console.log(numbers.sort((a, b) => b - a));
//
// console.log(numbers.filter(value => value % 2 === 0 && value !== 0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// function capitalize(str){
//     let arr_str = str.split(' ')
//     let new_str = ''
//     for (let arrStrElement of arr_str) {
//         let str = arrStrElement[0].toUpperCase()
//         let anyText = arrStrElement.substring(1,arrStrElement.length)
//         arrStrElement = str.concat(anyText)
//         new_str += arrStrElement + ' '
//     }
//     return new_str
// }
// let str = 'каждый охотник желает знать';
// console.log(capitalize(str));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
//
// function mail(mail){
//     let count = 0
//     for (let mail_element of mail) {
//         if (mail_element === '@'){
//             count += 1
//         }
//     }
//     if (count === 1){
//         let content = mail.indexOf('@')
//         if (content >= 3 && content <= 20){
//             let krapka = mail.indexOf('.', content)
//             if (krapka - content > 2){
//                 console.log('norm')
//             }else{
//                 console.log('error3')
//             }
//         }else {
//             console.log('error2')
//         }
//     }
//     else{
//         console.log('error1')
//     }
// }
// mail('someemail@gmail.com')
// mail('someeMAIL@gmail.com')
// mail('someeMAIL@i.ua')
// mail('some.email@gmail.com')

// - є масив
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'git',
//             'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'sass']
//     }
// ];
// console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// function count(str, stringsearch) {
//     let count = 0
//     for (let strElement of str) {
//         if (strElement === stringsearch){
//             count += 1
//         }
//     }
//     return count
// }
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// console.log(count(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// let str = "Сила тяжести приложена к центру масс тела";
// function cutString(str, n){
//     let arr_str = str.split(' ')
//     new_str = ''
//     for (let i = 0; i < n; i++) {
//         new_str += arr_str[i] + ' '
//     }
//     return new_str
// }
// console.log(cutString(str, 5));