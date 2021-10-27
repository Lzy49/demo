enum m_1 {
  age,
  name
}
enum m_2 {
  age,
  name,
}
// m_1 === m_2 // 完全不兼容
let m_1_:m_1.age = 10;
let m_1_1:m_1.age = m_1.age; 
let m_1_number:number = m_1.age; // 数字兼容所有 枚举