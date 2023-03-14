// import { activePopUp } from "./pop-up.js";

 const renderData = (arr) => {
  const list = document.querySelector('.items-list');
debugger
  list.innerHTML = '';
  arr.forEach((obj) => {
    list.innerHTML += `<li data-id='${obj.show.id}'> 
          <img src='${obj.show.image.medium}' alt='poster' />
          <span class="title-wrapper">${obj.show.name} <i class="fa-regular fa-heart"></i></span>
          <span class="likes">5 likes</span>
          <button class="comments" onclick="activePopUp(${obj.show});">Comments</button>
          
          <button class="reservations">Reservations</button>
          </li>`;console.log(obj.show)
  });    
};

// console.log(activePopUp)
const details = document.querySelector('.details');
const pop = document.querySelector('.pop-body');
console.log(pop)
window.activePopUp = (index) => {
 details.style.display = 'flex'
  pop.innerHTML = `<button class="delete-popup" onclick="closeDetails()" type="button">
  </button>
  <img  alt='poster' />
  <div class="summary">
  ljhihihihh
  '${index}'
  </div>
` 


}

window.closeDetails = () => {
  details.style.display = 'none';
  body.style.overflow = 'auto';
};


export const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const myJson = await response.json();

  const result = myJson.slice(2, 8);
  console.log(result)
  renderData(result);
};

getData();
