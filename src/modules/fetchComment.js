/* eslint-disable   */
import listlayout from './list.js';
export const fetchapi = (dataid, arr) => {
  const id = dataid;
  const comres = async () => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jSvbwvFa0M2a3HGwtKaG/comments?item_id=${id}`);
    const data = await res.json();
    return data;
  };
  comres().then((each) => {
    const comsec = document.querySelector('.test');
    arr.push(...arr, ...each);
    each.map((e) => {
      listlayout(e, comsec);
      const header = document.querySelector('.head');
      header.innerHTML = `${each.length}`;
      return e;
    });
  });
};
