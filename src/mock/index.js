import Mock from 'mockjs'

const Random = Mock.Random
const managerList = []
for (let i = 0; i < 10; i++) {
  // 生成10个对象放到数组中
  const template = {
    Boolean: Random.boolean, // 可以生成基本数据类型
    Natural: Random.natural(1, 100), // 生成1到100之间自然数
    Integer: Random.integer(1, 100), // 生成1到100之间的整数
    Float: Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
    Character: Random.character(), // 生成随机字符,可加参数定义规则
    String: Random.string(2, 10), // 生成2到10个字符之间的字符串
    Range: Random.range(0, 10, 6), // 生成一个随机数组
    Date: Random.date(), // 生成一个随机日期,可加参数定义日期格式
    Image: Random.image(Random.size, '#02adea', '#fff', 'png', 'Hello'),
    Color: Random.color(), // 生成一个颜色随机值
    Paragraph: Random.paragraph(2, 5), // 生成2至5个句子的文本
    Name: Random.name(), // 生成姓名
    Url: Random.url(), // 生成web地址
    Address: Random.province(), // 生成地址
  }
  managerList.push(template)
}
Mock.mock(document.location.origin + '/api/manager-list', 'get', managerList)
