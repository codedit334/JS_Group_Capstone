import addcomment from './Addcomment.js';
import listComment from './list.js';
import commentsCounter from './commentCount.js';
import fetchapi from './fetchComment.js';

export default function submitListen(arr) {
  const form = document.querySelector('form');
  const user = document.querySelector('#name');
  const text = document.querySelector('#text');
  const comsec = document.querySelector('.test');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const lists = [];

    if (user.value === '' || text.value === '') {
      return;
    }
    addcomment(arr.show.id, user.value, text.value);
    lists.push({
      creation_date: 'few second ago',
      username: user.value,
      comment: text.value,
    });
    comsec.innerHTML = '';
    lists.map((e) => listComment(e, comsec));

    fetchapi(arr.show.id, lists);

    const header = document.querySelector('.head');
    header.innerHTML = commentsCounter('.test li');
    user.value = '';
    text.value = '';
  });
}
