const renderData = (arr) => {
  const list = document.querySelector('.items-list');
  list.innerHTML = '';
  arr.forEach((obj) => {
    list.innerHTML += `<li data-id='${obj.show.id}'> 
          <img src='${obj.show.image.medium}' alt='poster' />
          <span class="title-wrapper">${obj.show.name} <i class="fa-regular fa-heart"></i></span>
          <span class="likes">5 likes</span>
          <button class="comments" onclick="activePopUp(${obj.show.id});">Comments</button>
          <button class="reservations">Reservations</button>
          </li>`;
  });
};

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const myJson = await response.json();

  const result = myJson.slice(2, 8);
  renderData(result);
  return result;
};

const details = document.querySelector('.details');
const pop = document.querySelector('.pop-body');

window.activePopUp = async (index) => {
  details.style.display = 'flex';
  let arr = getData();
  arr = await arr;
  const arrUNeed = arr.find((obj) => +obj.show.id === +index);
  pop.innerHTML = `<button class="delete-popup" onclick="closeDetails()" type="button">
  </button>
  <img src="${arrUNeed.show.image.medium}" alt='poster' />
  <div class="summary">
  '${arrUNeed.show.name || 'Unknown'}'
  </div>
  <div class="show-details">
  <div class="show-details-1">
        <span>Score: ${parseInt(arrUNeed.score * 100, 10)}%</span>
        <span>Network: ${
  arrUNeed.show.network ? arrUNeed.show.network.name : 'Unkown'
}</span>
    </div>
    <div class="show-details-2">
        <span>Language:&nbsp;${arrUNeed.show.language}</span>
        <span>Genres: ${arrUNeed.show.genres[0]}</span>
    </div>
  </div>
`;
};

window.closeDetails = () => {
  details.style.display = 'none';
  //   body.style.overflow = 'auto';
};

getData();

export default getData();
