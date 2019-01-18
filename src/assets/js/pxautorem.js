
// 基准大小
const baseSize = 32
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 375 宽的缩放比例，可根据自己需要修改。
  let doc_elm = document.documentElement;
  const scale = doc_elm.clientWidth / 375
  // 设置页面根节点字体大小
  doc_elm.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}