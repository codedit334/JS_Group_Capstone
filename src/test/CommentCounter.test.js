
import listComment from '../modules/list.js';
import itemsCounter from '../modules/commentCount.js';

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
    const head = document.querySelector('.head');

    test('test the number of element in UI ', () => {
      expect(itemsCounter(test)).toHaveLength(0);
    });
  
    test('Should return the number of comments elements in the UI after adding to comment', () => {
      list.map((lists) => {
        listComment(lists, test);
        return list;
      });
      expect(itemsCounter(test)).toHaveLength(4);
    });
  });