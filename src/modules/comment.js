export const commentForm = () => {
    const pop = document.querySelector('.pop-body');
    pop.innerHTML += ` <div class="addcomment">
                  <h4>Add comment</h4>
                  <form class ="comment-form">
                  <input type="text" placeholder="your name" id="name">
                  <textarea name="" id="text" cols="30" rows="10" placeholder="your view"></textarea>
                  <button id="comment-btn">submit</button>
                </form>
              </div>`;
  };
  
