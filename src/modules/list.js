import commentsCounter from './commentCount';

export const listComment = (e, comsec) => {
  const temp = `${e.creation_date} ${e.username} : ${e.comment}`;
  const per = document.createElement('li');
  per.innerHTML = temp;
  comsec.appendChild(per);
  const header = document.querySelector('.head');
  header.innerHTML = commentsCounter('.test li');
};
export default listComment;
