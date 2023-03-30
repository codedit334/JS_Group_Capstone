export async function getData(query = 'girls') {
  const APP_ID = '4aTSjUAMwHbqF73Z3l5i';
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const myJson = await response.json();

  const likesResponse = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes`,
  );
  const likesJson = await likesResponse.json();

  // const result = myJson.slice(2, 8);
  const result = myJson;

  result.forEach((tvObj) => {
    tvObj.likes = 0;
  });
  result.forEach((tvObj) => {
    likesJson.forEach((likesObj) => {
      if (+tvObj.show.id === +likesObj.item_id) tvObj.likes = likesObj.likes;
    });
  });

  return result;
}

export default getData();
