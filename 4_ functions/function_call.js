function hello(msg) {
  console.log(msg, this.name);
}

const user = { name: "Tuệ" };

hello.call(user, "Xin chào"); 
// 👉 Gọi ngay, this = user
// Kết quả: "Xin chào Tuệ"
