// import { activePopUp } from "./pop-up.js";

const renderData = (arr) => {
  const list = document.querySelector(".items-list");
  list.innerHTML = "";
  arr.forEach((obj) => {
    list.innerHTML += `<li data-id='${obj.show.id}'> 
          <img src='${obj.show.image.medium}' alt='poster' />
          <span class="title-wrapper">${obj.show.name} <i class="fa-regular fa-heart"></i></span>
          <span class="likes">5 likes</span>
          <button class="comments" onclick="activePopUp(${obj.show.id});">Comments</button>
          
          <button class="reservations">Reservations</button>
          </li>`;
    console.log(obj.show);
  });
};

// console.log(activePopUp)
const details = document.querySelector(".details");
const pop = document.querySelector(".pop-body");
console.log(pop);

window.activePopUp = async (index) => {
  details.style.display = "flex";
  console.log(index)
  let arr = getData();
  arr = await arr;
  console.log(arr);
  const arrUNeed = arr.find(obj => +obj.show.id === +index);
  console.log(arrUNeed);
  pop.innerHTML = `<button class="delete-popup" onclick="closeDetails()" type="button">
  </button>
  <img  alt='poster' />
  <div class="summary">
  ljhihihihh
  
  </div>
`;
};

window.closeDetails = () => {
  details.style.display = "none";
  body.style.overflow = "auto";
};

export const getData = async () => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
  const myJson = await response.json();

  const result = myJson.slice(2, 8);
  renderData(result);
  return result;
};

getData();
