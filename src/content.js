function Content() {
  const dom = document.getElementById('root');
  const btn = document.createElement('button');
  btn.innerText = '新增';
  dom.append(btn);
  btn.onclick = function() {
    const text = document.createElement('div');
    text.classList.add('textdiv');
    text.innerText = 'inner';
    dom.append(text);
  }
  // const dom = document.getElementById('root');
  // const content = document.createElement('div');
  // content.innerText = 'content';
  // dom.append(content);
}
export default Content;