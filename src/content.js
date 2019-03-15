import EN from './EN.png';
import './index.less';

function Content() {
  var dom = document.getElementById('root');
  var content = document.createElement('img');
  content.src = EN;
  content.classList.add('enStyle')
  dom.append(content)
}

export default Content;