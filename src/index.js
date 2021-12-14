import ReactDom from 'react-dom';
import App from './App';
import './style.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root'),
);
