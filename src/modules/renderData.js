import itemsCounter from './itemCounter.js';

export default async function renderData(arr) {
  const ourArr = await arr;
  const list = document.querySelector('.items-list');
  list.innerHTML = '';
  if (ourArr.length > 0) {
    ourArr.forEach((obj) => {
      list.innerHTML += `<li data-id='${obj.show.id || 0}'> 
            <img src='${obj.show.image.medium}' alt='poster' />
            <span class="title-wrapper">${obj.show.name} <i class="fa-regular fa-heart likeBtn" onClick="addLike(${obj.show.id})"></i></span>
            <span class="likes">${obj.likes} likes</span>
            <button class="comments" onclick="activePopUp(${obj.show.id});">Comments</button>
            </li>`;
    });
    document.querySelector('.count').innerHTML = itemsCounter('.items-list li');
  }
}
