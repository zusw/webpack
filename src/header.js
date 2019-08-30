function Header() {
  const dom = document.getElementById('root');
  const header = document.createElement('div');
  header.classList.add('iconfont');
  header.classList.add('icon-bianjixiugaiqianbishuxie');
  // header.innerText = 'header';
  dom.append(header);
}
module.exports = Header;
// export default Header;
