export async function getData() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const myJson = await response.json();

  const likesResponse = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4aTSjUAMwHbqF73Z3l5i/likes',
  );
  const likesJson = await likesResponse.json();

  const result = myJson.slice(2, 8);

  result.forEach((tvObj) => {
    tvObj.likes = 0;
  });
  result.forEach((tvObj) => {
    likesJson.forEach((likesObj) => {
      if (+tvObj.show.id === +likesObj.item_id) tvObj.likes = likesObj.likes;
    });
  });

  // renderData(result);
  return result;
}

export default getData();
