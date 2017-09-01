  import test from './testHot.js'

  const component = () => {
    var element = document.createElement('div');
    element.innerHTML = "<p>this is light and complete!!</p>"

    return element;
  }


  const inner = component();

  document.body.appendChild(inner);
  test();

  // 热重载
  if (module.hot) {
    module.hot.accept('./testHot.js', function() {
      test();
    })
 }