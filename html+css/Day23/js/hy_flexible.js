
// 拿到html元素
const htmlEl = document.documentElement

function setRemUnit() {
  // 拿到html元素的屏幕宽度
  const htmlWidth = htmlEl.clientWidth
  // 根据宽度计算fs的大小
  const htmlFontSize = htmlWidth / 10
  // 把fs设置到html上
  htmlEl.style.fontSize = htmlFontSize + "px"
}
// 保证第一次进来可以设置一次font-size
setRemUnit()
// 事件监听，当屏幕尺寸变化时，可以实时改变fs
window.addEventListener("resize", setRemUnit)


