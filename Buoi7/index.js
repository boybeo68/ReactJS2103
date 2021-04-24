// switch case
// let key = 1;
// switch (key) {
//   case 0:
//     console.log("key = 0");
//     break;
//   case 1:
//     console.log("key = 1");
//     break;
//   case 2:
//     console.log("key = 2");
//     break;
//   case 3:
//     console.log("key = 3");
//     break;
//   default:
//     break;
// }
// vòng lặp for, while, do while
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// let array = ["chanh", "cam ", "quyt"];
// for (let index = 0; index <= array.length; index++) {
//   console.log(array[index]);
// }
// i++ => i = i + 1;
// i+=2 = i = i + 2
// i+=4 = i = i + 3
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log("i, j", i, j);
//   }
// }

let number = 0;
// while (number < 10) {
//   console.log(number);
//   number++;
// }

// do {
//   console.log(number);
//   number++;
// } while (number < 10);
// nhập vào 1 số tự nhiên => in ra các số lẻ từ 0 đến số đó

// let sotunhien = 20;
// for (let index = 1; index < sotunhien; index += 2) {
//   //   if (index % 2 !== 0) {
//   console.log(index);
//   //   }
// }

// bài 2: kiểm tra số n có phải số nguyên tố hay ko ?
//  => code chạy => giảm 1 nửa số vòng lặp => đến căn 2 =>sử dụng break để giảm thiểu vòng lặp
let check = true;
let n = 109;
if (n < 2) {
  check = false;
} else if (n == 2) {
  check = true;
} else if (n % 2 == 0) {
  check = false;
} else {
  for (let index = 3; index <= Math.sqrt(n); index += 2) {
    if (n % index == 0) {
      check = false;
      break;
    }
  }
}
if (check) {
  console.log("la nguyen to");
} else {
  console.log("khong la nguyen to");
}

for (let index = 0; index < 10; index++) {
  //   const element = array[index];
  if (index === 5) {
    break;
  }
  //   console.log(index);
}
//  function nếu có return đóng vai trò giống như 1 biến
function hello(name, age, sex) {
  console.log(`Xin chào ${name} ${age} ${sex}`);
  return 12;
}

hello("Tung", 22, 0);

function checkNN(n) {
  if (n < 2) {
    return false;
  } else if (n == 2) {
    return true;
  } else if (n % 2 == 0) {
    return false;
  } else {
    for (let index = 3; index <= Math.sqrt(n); index += 2) {
      if (n % index == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
let data = checkNN(10);
console.log(data);
