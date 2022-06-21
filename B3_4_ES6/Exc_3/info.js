class Information {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  static multi(a = 1) {
    return a * 3;
  }
}

class Geometry extends Information {
  // khi extend một class thì phải dùng từ khóa super để gọi lớp cha
  //trước khi khởi tạo thuộc tính của lớp con
  constructor(name, description, length) {
    super(name, description);
    this.length = length;
  }
  static plus(b) {
    return b + b;
  }
}

let lineToHigh = new Geometry("line", "redline", 20);
console.log(lineToHigh.description);
Geometry.plus(50);
console.log(Geometry.plus(50));
