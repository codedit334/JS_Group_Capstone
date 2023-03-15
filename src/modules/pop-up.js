// import getData  from './render-list.js';

const main = document.querySelector('.main-section');
// const list = document.querySelector(".items-list");
// const header = document.querySelector(".header");

const activePopUp = (id) => {
  main.innerHTML = `<div class= "pop-body">
    <img src='${id.show.image.original}' alt='poster' />

    </div>`;
};

export default activePopUp;
