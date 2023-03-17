import { getData } from "./getData.js";
import submitListen from "./submitListen.js";
import fetchapi from "./fetchComment.js";

const details = document.querySelector(".details");
const pop = document.querySelector(".pop-body");

window.activePopUp = async (index) => {
  details.style.display = "flex";

  const lists = [];

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
            arrUNeed.show.network ? arrUNeed.show.network.name : "Unkown"
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

  fetchapi(arrUNeed.show.id, lists);
  submitListen(arrUNeed);
};

window.closeDetails = () => {
  details.style.display = "none";
};
