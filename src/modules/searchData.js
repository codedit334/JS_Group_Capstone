import { getData } from './getData.js';
import renderData from './renderData.js';

window.searchData = (val, event) => {
  if (event.key === 'Enter') {
    const dataArr = getData(val);
    renderData(dataArr);
  }
};
