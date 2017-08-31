  import test from './testHot.js'

  const component = function () {
    var element = document.createElement('div');
    element.innerHTML = "<p>this is my frist prod!!!</p>"

    return element;
  }


  const inner = component();

  document.body.appendChild(inner);
  test();
  if (module.hot) {
    module.hot.accept('./testHot.js', function() {
      test();
    })
 }