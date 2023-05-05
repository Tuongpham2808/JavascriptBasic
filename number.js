const number1 = "5";
const number2 = "4.8";
//hàm covert thành số nguyên
console.log(parseInt(number1));
// hàm convert thành số thập phân
console.log(parseFloat(number2));
const number3 = -10;
//hàm số học
//hàm trị tuyệt đối
console.log(Math.abs(number3));
//hàm làm tròn xuống
console.log(Math.floor(4.3));
//hàm làm tròn lên
console.log(Math.ceil(5.6));
//hàm làm tròn gần nhất
console.log(Math.round(4.3));
console.log(Math.round(4.5));
//hàm giới hạn số chữ số thập phân
//hàm toFixed(number) vd: 0.3333333 -> 0.33
console.log((1 / 3).toFixed(2));
//hàm random số từ 0 đến 1
console.log(Math.random());
console.log(Math.ceil(Math.random() * 100) + "%");
//hàm trả ra số lớn nhất
console.log(Math.max(1, 2, 100));
//hàm trả ra số nhỏ nhất
console.log(Math.min(1, 2, 100, -20));
//hàm mũ vd Math.pow(3,2) -> 3^2 = 9
console.log(Math.pow(3, 2));
//ham isNaN kiểm tra không phải là số
console.log(isNaN("This is a string")); // true
console.log(isNaN("1234")); // false
//Number.NaN() cần truyền vào 1 NaN - giá trị không phải số, có type là number
console.log(Number.isNaN(NaN)); //true
