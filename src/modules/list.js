export const listComment = (e, comsec) => {
  const temp = `${e.creation_date} ${e.username} : ${e.comment}`;
  const per = document.createElement('li');
  per.innerHTML = temp;
  comsec.appendChild(per);
};
export default listComment;
