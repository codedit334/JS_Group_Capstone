const renderData = (arr) => {
  const list = document.querySelector('.items-list');

  list.innerHTML = '';
  arr.forEach((obj) => {
    list.innerHTML += `<li data-id='${obj.show.id}'> 
          <img src='${obj.show.image.medium}' alt='poster' />
          <span class="title-wrapper">${obj.show.name} <i class="fa-regular fa-heart"></i></span>
          <span class="likes">5 likes</span>
          <button class="comments">Comments</button>
          <button class="reservations">Reservations</button>
          </li>`;
  });
};

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const myJson = await response.json();

  const result = myJson.slice(2, 8);
  renderData(result);
};

getData();
