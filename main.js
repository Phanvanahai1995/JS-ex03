// Bài 1 N số fibonacci

// const n = +prompt("Vui lòng nhập N vào đây");

// function fibonacci(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else if (n >= 2) {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// for (i = 0; i < n; i++) {
//   if (n >= 1 && n % 1 === 0) {
//     console.log(fibonacci(i));
//   } else {
//     alert("Vui lòng nhập đúng N");
//     i = n;
//   }
// }

//Bài 2: Đảo ngược số
// TH1 đề bài muốn như thế này 12345 => 54321, 10000 => 00001
// let result = "";

// const reverse = function (n) {
//   if (typeof n === "number" && n >= 0 && n % 1 === 0) {
//     let result = "";
//     n = String(n);
//     for (i = n.length - 1; i >= 0; i--) {
//       result += n[i];
//     }
//     return result;
//   } else {
//     alert("Vui lòng nhập đúng N");
//   }
// };

// console.log(reverse(12345));

// console.log(result);

// TH2 là số 12345 => 54321, 10000 => 1
// const reverse = function (n) {
//   if (typeof n === "number" && n >= 0 && n % 1 === 0) {
//     let result = "";
//     n = String(n);
//     for (i = n.length - 1; i >= 0; i--) {
//       result += n[i];
//     }
//     return Number(result);
//   } else {
//     alert("Vui lòng nhập đúng N");
//   }
// };

// console.log(reverse(1000));

// Bài 3: Viết hàm chuyển số thành chữ
// Đọc 3 số
const readNumberThreeText = function (number) {
  var numberName = [
    "Không",
    "Một",
    "Hai",
    "Ba",
    "Bốn",
    "Năm",
    "Sáu",
    "Bảy",
    "Tám",
    "Chín",
  ];
  var result = number
    .toString()
    .split("")
    .reverse()
    .map((num, index) => {
      let level = ["", " Mươi", " Trăm"];
      return numberName[num - 0] + level[index];
    })
    .reverse()
    .join(" ")
    .replace("Không Mươi", "Linh")
    .replace("Một Mươi", "Mười")
    .replace("Mươi Không", "Mươi")
    .replace("Mười Không", "Mười")
    .replace("Mươi Năm", "Mươi Lăm")
    .replace("Mươi Bốn", "Mươi Tư")
    .replace("Linh Bốn", "Linh Tư")
    .replace(" Linh Không", "");
  return result;
};

// Đọc nhiều số
const readNumbersToText = function (number) {
  result = number
    .toLocaleString("en")
    .split(",")
    .reverse()
    .map((num, index) => {
      let level = ["", " Nghìn", " Triệu", " Tỷ", " Ngàn"];
      if (!(num - 0)) {
        return "";
      }
      return readNumberThreeText(num) + level[index];
    })
    .reverse()
    .join(" ");
  console.log(result);
};

readNumbersToText(1200000000000);
