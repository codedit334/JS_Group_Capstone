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
  `;
  };
  
  window.closeDetails = () => {
    details.style.display = 'none';
    //   body.style.overflow = 'auto';
  };