// import "@babel/polyfill";

// ES Moudule 模块引入方式
// import Header from './header';
// import Content from './content';
// // import Sidebar from './sidebar';
// import banner from '../images/1.png';
// import './index.less';

// const Header = require('./header');
// console.log(banner);
// const img = new Image();
// img.src = banner;
// img.classList.add('banner');
// const ele = document.getElementById('root');
// ele.append(img);
// new Header();
// // new Sidebar();
// new Content();

// import React, { Component } from 'react';
// import ReactDom from 'react-dom';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.onInnerClick = this.onInnerClick.bind(this);
//     this.state = {
//       inner: 123,
//     }
//   }
//   onInnerClick() {
//     this.setState({ inner: this.state.inner + 1 });
//   }
//   render() {
//     return (
//       <div onClick={this.onInnerClick}>{this.state.inner}</div>
//     );
//   }
// };

// ReactDom.render(<App />, document.getElementById('root'));

import { add } from './math';

add(1, 3);