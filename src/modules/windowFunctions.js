import { getData } from './getData.js';
import { addcomment } from './Addcomment.js';
import { fetchapi } from './fetchComment.js';
import { listComment } from './list.js';
import commentsCounter from './commentCount.js';

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
    '${arrUNeed.show.name}'
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
          <span>Genres: ${arrUNeed.show.genres.toString()}</span>
      </div>
    </div>
    <div class="comment">
                <h4>comment(<span class="head"></span>)</h4>
                <ul class="test ">
                
                </ul>
        </div>
        <div class="addcomment">
                  <h4>Add comment</h4>
                  <form class ="comment-form">
                  <input type="text" placeholder="your name" id="name">
                  <textarea name="" id="text" cols="30" rows="10" placeholder="your view"></textarea>
                  <button id="comment-btn">submit</button>
                </form>
              </div>
  `;
  const lists = [];
  fetchapi(arrUNeed.show.id, lists);
  const form = document.querySelector('form');
  const user = document.querySelector('#name');
  const text = document.querySelector('#text');
  const comsec = document.querySelector('.test');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (user.value === '' || text.value === '') {
      return;
    }
    addcomment(arrUNeed.show.id, user.value, text.value);
    lists.push({
      creation_date: 'few second ago',
      username: user.value,
      comment: text.value,
    });
    comsec.innerHTML = '';
    lists.map((e) => listComment(e, comsec));
    const header = document.querySelector('.head');
    header.innerHTML = commentsCounter('.test li');
    user.value = '';
    text.value = '';
  });
};

window.closeDetails = () => {
  details.style.display = 'none';
};
