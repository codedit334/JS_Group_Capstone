import { getData } from './getData.js';
import renderData from './renderData.js';

window.addLike = async (tvID) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4aTSjUAMwHbqF73Z3l5i/likes',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: tvID,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  const searchQuery = document.querySelector('.items-search-input').value || 'girls';

  const dataArr = getData(searchQuery);
  renderData(dataArr);
  return response;
};
