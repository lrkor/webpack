import _ from 'lodash';
import printMe from './print.js';

// import './style.css';
// import image from './2.png';
// import Data from './data.xml';
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    // element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    // var myImage = new Image();
    // myImage.src = image;
    // element.appendChild(myImage);

    // console.log(Data);
    return element;
}

document.body.appendChild(component());
if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
