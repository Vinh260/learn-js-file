// var a=1;
// var b=2;

// var result = a>b;

// console.log(result);

// if (result){// if result is true then A<B but result is false then A>B
//     console.log('A<B')
// }else{
//     console.log('A>B')
// }
/*
toan tu and xet dung dieu kien neu all true thi luom thang cuoi 
toan tu or xet dung dieu kien o ve dau thi bat luon khong can nghi 

*/
// ----------------------------------------------------------------
// NEXT LESSON STRING 
// var fullName = ' Vinh rat yeu \'code\' khong them yeu \'Phuong\' ';
// console.log(fullName);
// var text = 'vinh day ne';
// console.log(text.length);// xac dinh lenght chuoi
// console.log(`thi ra day la anh: ${text}`);// dung dau ` not '

//----------------------------------------------------------------

// NEXT LESSON STRING WORK
/**       var StringText = ' thank you F8'
 * 1. length console.log(StringText.length)
 * 2. find index console.log(StringText.indexOf('ou',1))  
            console.log(StringText.lastIndexOf('F'))
            console.log(StringText.search(''))
 * 3. cut string  console.log(StringText.slice(1,7))
 * 4. replace console.log(StringText.replace('thank', 'thanks'))
 * 5. convert to uppercase 
 * 6. convert to lowercase
 * 7. trim var StringText = '    thank you F8'
            console.log(StringText.trim())
 * 8. split cat chuoi thanh array
            var StringText = 'dao, lan, my, cuc, hoa'
                console.log(StringText.split(','))
 * 9. get a character by index
 * 
 */

// --------------------------------------------------------------
// NEXT LESSON Number
// var result = 2/ 5
// console.log(isNaN(result)) toString chuyen so thanh chuoi 

// var numeric = 12.65432846;

// console.log(numeric.toFixed(4))
// --------------------------------------------------------------
// NEXT LESSON ARRAY
/**
 * toString 
 * Join 
 * Pop delete last element and return element delete
 * Push add 1 or many element last array
 * Shirt opposite Pop
 * UnShirt same Push but add start array
 * splicing  splice(1, 1, 'insert' ) remove all elements from 1 to 1
 * Concat connect array
 * Slicing cut array
 */
// var languages = ['hello', 'hi', 'thank you'];
// var programming = ['ruby', 'php', 'js'] 

// console.log(programming.concat(languages));

//----------------------------------------------------------------

// NEXT LESSON function

// function hello(){
//     alert('hello')
// }
// hello()
//----------------------------------------------------------------
// NEXT LESSON ham

// function hello(name1, name2) {
    
//     if (name1 == name2) {
//     console.log(`${name1}`+' same '+`${name2}`)   
//     }else{
//         console.log('differs from the value')
//     }
    
// }

// function textArgument() {
//   var myString = "";
//   for (var param of arguments) {
//     myString += ` ${param} - `;
//   }
//   console.log(myString)
// }
// textArgument('hello', 'jenny','ham');

//--- return ham-----

// function sum(a ,b){
//  return a + b;
// }

// var result = sum(2,8)
// console.log(result)

//---kind function 
// showMessage1();
// showMessage()
// function showMessage1(){
//     console.log('declaration function')
// }
// var showMessage = function sum(a,b){
//     return a+b;
// }
// result = showMessage(4,8);
//console.log(`ket qua la:${result}`);

//-------------------------------------
// NEXT LESSON Polyfill
// include chi supporting 1 vai trinh duyet

//----------------------------------------------------------------
// NEXT LESSON Object
// var phoneKey = 'phone';
// var myInfo ={
//     name: 'Hung Vinh',
//     age: '19',
//     address: 'Quang Nam',
//     [phoneKey]: 'samsung',
//     getName: function(){
//         return this.name;
//     }
// }
// delete myInfo.phoneKey; 
// myInfo.email = 'vinh@gmail.com';
// var myKey = 'address';

// console.log(myInfo.getName());
//----------------------------------------------------------------
// NEXT LESSON Object constructor 

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return 'the full name is:'+ `${this.firstName} ${this.lastName}`;
//     }

// }// this is a Object constructor name is User

// var author = new User('Vinh','Hung','avatar');
// var user = new User('Tram', 'Ngoc', 'avatar');

// author.title = 'hi chao em';
// user.comments ='chao anh';

// console.log(author.getName());
// console.log(user);
//------------------------------------------------------------------------------
// NEXT LESSON Object prototype 
// var date = new Date();
// function User(name, age, email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
// }
// var year = date.getFullYear();
// User.prototype.University = 'VKU';//add thuoc tinh ben ngoai ham tao
// User.prototype.University2 = 'DONG A';

// User.prototype.getUniversity = function(){
//     return this.University2;
// }
// var user = new User('VinhHung', '19','vinh@gmail.com' );
// var user2 = new User('TramNgoc','19','tram@gmail.com');

// console.log(user.University+ ` ${year}`);
// console.log( user2.getUniversity());
//------------------------------------------------------------------------------
// NEXT LESSON Date

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth();
// console.log();
//------------------------------------------------------------------------------
// note if else nothing 
// switch nothing 
//for---------------------------------------------------------------- 

// var food=['ice cream','soup','rice','noodle','bbq'];

// var lengthArray = food.length;// toi uu hon
// for (var i=0; i<lengthArray; i++) {
//     console.log(food[i])
// }

//--for in---------------
var food={iceCream: 'chocolate',
            soup: 'chicken soup',
            rice: 'rice with beef',
            noodle: 'chicken noodle',
            Grille: 'bbq'};
var languages =['php','js','java','C++']

//for (var key in food) {
//console.log(food[key]) 
//}
// for (var value of  languages) {// ko dung vong lap of cho obj phair dung dac biet
//    // console.log(value);
// }
// //cach dac biet 
// for (var value of Object.keys(food)){
//     console.log(food[value])
// }//or

// console.log(Object.values(food))
//--while-------------------------------

// var i= 1;

// while (i<1000){
//     console.log(i);
//     i++
// }
// vong lap long nhau 

// var myArray =[[1,2],[3,4],[5,6],[6,7],[7,8],[8,9]];


// for(i=0; i<myArray.length; i++){
//    for(j=0; j<myArray[i].length; j++){
//        console.log(myArray[i][j])
//    }
// }

//--------------------------------------------------------------

// array phan 2 array
// ham 

var dishes=[
    {
        id:1,
        name:'soup',
        price:'2$'
    },
    {
        id:2,
        name:'bbq',
        price:'20$'
    },
    {
        id:3,
        name:'noodle',
        price:'0$'
    }
];

//foreach de duyet phan tu 

// dishes.forEach(function(dish, index){
//          console.log(index,dish)   
// });

//every()
var isFree= dishes.every(function(dish, index){
  //  console.log(index)
    return dish.price ==='0$';
})

//console.log(isFree) // false is free

//some() 1 ong thoa man dieu kien dung la duoc 
var isFreeOne= dishes.some(function(dish, index){
   // console.log(index)
    return dish.price ==='0$';
})

//console.log(isFreeOne)

//find() tim kiem 1 phan tu neu dung thi true no thi undifine
var isFind= dishes.find(function(dish, index){
    // console.log(index)
     return dish.price ==='0$';
 })

console.log(isFind)

//filter() nhu find() tim kiem nhieu thang thoa man