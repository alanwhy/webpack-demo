function getComponent() {
  // 魔法注释写法
  return import( /* webpackChunkName:"lodash" */ "lodash").then(({
    default: _
  }) => {
    var element = document.createElement("div")
    element.innerHTML = _.join(["dell", "lee"], "-")
    return element
  })
}


getComponent().then(element => {
  document.body.appendChild(element)
})