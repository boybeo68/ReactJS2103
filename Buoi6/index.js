// console.log("start"); // in ra màn hình
// Khai báo biến 
//  var, let, const 
var a = 10.23;
var b = "chuoi 1"
var c = 'chuoi 2'
var d = `day la ${b}123123 ${c} chuoi ${a}`
var testBoolF = false
var testBoolT = true
var car = {
    color: 'red',
    price: 1000,
    isBuy: true
}
var array = [1,2,'string', car,5]
// console.log(array[3]);
// var undefA;
// undefined
var nullA ;
// console.log(nullA);
// console.log(typeof NaN);
let scopeB = 20;
const hangsoA = 'test const'
// hangsoA = 'change const'
const hangsoB = {
    data: [1,2,3,4],
    name: 'tung'
}
// hangSoB.name = 'Cường'
// console.log(hangSoB);
//  đặt tên biến có nghĩa
// nếu tên biến là từ ghép thì đặt CC
// let dayLaMotMang

// các phép toán trong js + - * / %
let congA = 10;
let congB = '3';
let result = congA / congB
// console.log(result);
// phép toán so sánh > , < , == , >= , <= , != , === , !==, 
let soSanhA = '10';
let soSanhB = 10;
let respone = {
    success: true,
}
// console.log(respone.success === true);
// câu điều kiện if else 
let diemTrungBinh = 9;
let isGood = 8 < diemTrungBinh && diemTrungBinh < 10;

if (diemTrungBinh <= 5) {
    console.log('học quá kém');
}else if(diemTrungBinh <= 8){
    console.log('học tạm được');
}else if(isGood){
    console.log('học giỏi');
}else {
    console.log('xuất sắc');
}

if(car.color === 'blue' || car.color === 'red'){
    console.log('đúng màu ô tô rồi');
}
// btvn Giải phương trình bậc 2 

