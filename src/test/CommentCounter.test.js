import listComment from '../modules/list.js';
import commentsCounter from '../modules/commentCount.js';

describe('Tests for comment counter', () => {
  document.body.innerHTML = `
  
              <div class="comment">
                  <h4 class="head">comment()</h4>
                  <ul class="test">
                  </ul>
              </div>
                  `;

  const list = [
    { creation_date: 'few minutes ago', username: 'ilyass', comment: 'Great' },
    { creation_date: 'few minutes ago', username: 'ilyass', comment: 'Great' },
    { creation_date: 'few minutes ago', username: 'ilyass', comment: 'Great' },
    { creation_date: 'few minutes ago', username: 'ilyass', comment: 'Great' },
  ];

  const test = document.querySelector('.test');

  it('test the number of element in UI ', () => {
    expect(commentsCounter('.test li')).toBe(0);
  });

  it('Should return the number of comments elements in the UI after adding to comment', () => {
    list.map((lists) => {
      listComment(lists, test);
      return list;
    });
    expect(commentsCounter('.test li')).toBe(4);
  });
});
