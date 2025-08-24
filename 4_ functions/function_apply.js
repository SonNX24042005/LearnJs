function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(add.apply(null, numbers)); 
// 👉 Gọi ngay, this = null
// Kết quả: 6
