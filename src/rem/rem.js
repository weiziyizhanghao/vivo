(function flexible (window, document) {
  var docEl = document.documentElement//获取document坐标
  var dpr = window.devicePixelRatio || 1//设备物理像素和设备独立像素(dips)的比例

  // 调整正文字体大小
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  
  setBodyFontSize();
  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10//document宽
    docEl.style.fontSize = rem + 'px'
  }
  setRemUnit()

  // 在页面上重置rem单元调整大小
  window.addEventListener('resize', setRemUnit)//添加resize事件监听
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')//创建一个按钮
    var testElement = document.createElement('div')//创建一个按钮
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)//fakeBody添加testElement
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)//删除
  }
}(window, document))