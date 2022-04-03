let posts = [
  {
    id:1,
    mediaUrl: ['images/post1.png'],
    desc: "If happiness was a person 🤣💞",
    like: 23445,
    comment: 5321,
    save: false,
    type: 'postImg'
  },
    {
    id:2,
    mediaUrl: ['images/post2.1.png','images/post2.2.png','images/post2.3.png'],
    desc: "Sisters Elle & Alaïa as : Elsa & Anna ❄️💜👑",
    like: 62347,
    comment: 6521,
    save: false,
    type: "imgs"
  },
  {
    id:3,
    mediaUrl: ['videos/video1.mp4'],
    desc: "I LOVE YOU SO MUCH 💞",
    like: 45234,
    comment: 9421,
    save: false,
    type: "video"
  },

  {
    id:4,
    mediaUrl: ['images/post3.1.png', 'images/post3.2.png','images/post3.3.png'],
    desc: "2 more months till I turn 5!!! 🥳🦄☀️",
    like: 4567312,
    comment: 1321,
    save: false,
    type: "imgs"
  },

  {
    id:5,
    mediaUrl: ['videos/video2.mp4'],
    desc: "Elle was like Ok Im done 😂😂😂 ",
    like: 123712,
    comment: 2341,
    save: false,
    type: "video"
  },
  {
    id:6,
    mediaUrl: ['images/post4.png'],
    desc: "Cant get over eyes! 🥺🥺😭",
    like: 345622,
    comment: 32451,
    save: false,
    type: "postImg"
  },
  {
    id:7,
    mediaUrl: ['videos/data.mp4'],
    desc: "My first video is now available on my app, watch full video by clicking the link my bio and download the app.",
    like: 123712,
    comment: 2341,
    save: false,
    type: "video"
  },
  {
    id:8,
    mediaUrl: ['images/post5.png'],
    desc: "Happy birthday baby sister!!!! 💕🧸🎀🎉",
    like: 12322,
    comment: 1251,
    save: false,
    type: "postImg"
  },
  {
    id:9,
    mediaUrl: ['images/post6.1.png','images/post6.2.png','images/post6.3.png'],
    desc: "Besties for life 🐻",
    like: 62347,
    comment: 6521,
    save: false,
    type: "imgs"
  },
  {
    id:10,
    mediaUrl: ['images/post7.png'],
    desc: "Ready for a gulf cart ride🛺 I am the DJ! What is your favorite song right now?",
    like: 12322,
    comment: 1251,
    save: false,
    type: "postImg"
  },
  {
    id:11,
    mediaUrl: ['images/post8.1.png','images/post8.2.png','images/post8.3.png'],
    desc: "Call me slime master! 😆",
    like: 35347,
    comment: 1221,
    save: false,
    type: "imgs"
  },
  {
    id:12,
    mediaUrl: ['videos/video3.mp4'],
    desc: "My favorite Snapchat filter 💕",
    like: 123712,
    comment: 2341,
    save: false,
    type: "video"
  }
];



function showPosts(wrapper,arr){
  arr.forEach(item => {
    let li = document.createElement('li');

    if(item.type=='video'){
      li.innerHTML = `
      <div type="button" onclick="openModal(${item.id})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="item__inner">
       <video class="posts__img"  src="${item.mediaUrl[0]}"></video>
      <div class="box__inner">
        <p class="count__post"><i class='bx bxs-heart' ></i> ${item.like}</p>
        <p class="count__post"><i class='bx bxs-comment-dots'></i>${item.comment}</p>
      </div>
     <div class="type-btn-box">
       <button id="typeBtn" class="type-btn"><img src="images/play.svg" alt="play"></button>
     </div>
     </div>
      `;
    }
    else if(item.type=='imgs'){
      li.innerHTML = `
      <div type="button" onclick="openModal(${item.id})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="item__inner">
      <img class="posts__img" src="${item.mediaUrl[0]}" alt="post1">
      <div class="box__inner">
        <p class="count__post"><i class='bx bxs-heart' ></i> ${item.like}</p>
        <p class="count__post"><i class='bx bxs-comment-dots'></i>${item.comment}</p>
      </div>
     <div class="type-btn-box">
       <button id="typeBtn" class="type-btn"><img src="images/carousel.svg" alt="carousel"></button>
     </div>
     </div>
      `;
    }
    else {
      li.innerHTML = `
      <div type="button" onclick="openModal(${item.id})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="item__inner">
      <img class="posts__img" src="${item.mediaUrl[0]}" alt="post1">
      <div class="box__inner">
        <p class="count__post"><i class='bx bxs-heart' ></i> ${item.like}</p>
        <p class="count__post"><i class='bx bxs-comment-dots'></i>${item.comment}</p>
      </div>
     <div class="type-btn-box">
       <button id="typeBtn" class="type-btn"></button>
     </div>
      </div>
      `;
    }
    
    li.classList ='posts__item col-lg-4 col-md-6 col-xs-12';
    wrapper.appendChild(li);
  });
}
showPosts(postsList,posts);
let modalContainer = document.getElementById('modalContainer')

function openModal(id){
  let modalContent = document.createElement('div');
  modalContainer.innerHTML ='';

  posts.forEach((item)=>{

    if(item.id==id){
      if(item.type=='postImg'){
        modalContent.innerHTML = `
        <div class="modal__imgbox col-md-6 col-xs-12">
          <img class="modal-img" src="${item.mediaUrl[0]}" alt="">
        </div>
        <div class="modal__desc col-md-6 col-xs-12">
          <div class="modal__header">
            <div class="modal__box">
             <a href="#" class="modal__user">
               <img class="modal__user--img" src="images/user.png" alt="">
             </a>
             <p class="user__name">elle <i class='bx bxs-badge-check'></i></p>
             <p class="header__text">Following</p>
            </div>
           <button class="menu__btn"><i class='bx bx-dots-horizontal-rounded'></i></button>
          </div>
          <div class="modal__textdesc">
            <div class="modal__box">
             <a href="#" class="modal__user">
               <img class="modal__user--img" src="images/user.png" alt="">
             </a>
             <p class="user__name">elle <i class='bx bxs-badge-check'></i></p>
             <p class="post__desc">${item.desc}</p>
            </div>
           <button class="like-post__btn"><i class='bx bx-heart' ></i></button>
          </div>
         <div class="modal__footer">
           <div class="footer__inner">
             <div class="footer-btns">
               <button class="footer-btn like-footer-btn"><img src="images/like2.svg" alt="direct"></button>
               <button class="footer-btn comment-footer-btn"><img src="images/direct.svg" alt="direct"></button>
               <button class="footer-btn send-footer-btn"><img src="images/save.svg" alt="save"></button>
             </div>
             <button onclick="savePost(${item.id})" id="savePostBtn" class="footer-btn footer-save-btn"><img src="images/savespost.svg" alt="savespost"></button>
           </div>
          <p class="footer-liked">Liked by <span>${item.like}</span></p>
           <form class="footer__form">
             <div class="footer__form-box">
               <button class="footer-btn smile-btn"> <img src="images/emoji.svg" alt="emoji"></button>
               <input class="footer__input" type="text" placeholder="Add a comment...">
             </div>
             <button type="submit" class="footer-modal-btn">Post</button>
           </form>
         </div>
        </div>
        `;
      }
      if(item.type=='video'){
        modalContent.innerHTML = `
        <div class="modal__imgbox col-md-6 col-xs-12">
        <video controls autoplay class="modal-img"  src="${item.mediaUrl[0]}"></video>
        </div>
        <div class="modal__desc col-md-6 col-xs-12">
          <div class="modal__header">
            <div class="modal__box">
             <a href="#" class="modal__user">
               <img class="modal__user--img" src="images/user.png" alt="">
             </a>
             <p class="user__name">elle <i class='bx bxs-badge-check'></i></p>
             <p class="header__text">Following</p>
            </div>
           <button class="menu__btn"><i class='bx bx-dots-horizontal-rounded'></i></button>
          </div>
          <div class="modal__textdesc">
            <div class="modal__box">
             <a href="#" class="modal__user">
               <img class="modal__user--img" src="images/user.png" alt="">
             </a>
             <p class="user__name">elle <i class='bx bxs-badge-check'></i></p>
             <p class="post__desc">${item.desc}</p>
            </div>
           <button class="like-post__btn"><i class='bx bx-heart' ></i></button>
          </div>
         <div class="modal__footer">
           <div class="footer__inner">
             <div class="footer-btns">
               <button class="footer-btn like-footer-btn"><img src="images/like2.svg" alt="direct"></button>
               <button class="footer-btn comment-footer-btn"><img src="images/direct.svg" alt="direct"></button>
               <button class="footer-btn send-footer-btn"><img src="images/save.svg" alt="save"></button>
             </div>
             <button onclick="savePost(${item.id})" id="savePostBtn" class="footer-btn footer-save-btn"><img src="images/savespost.svg" alt="savespost"></button>
           </div>
          <p class="footer-liked">Viewed by <span>${item.like}</span></p>
           <form class="footer__form">
             <div class="footer__form-box">
               <button class="footer-btn smile-btn"> <img src="images/emoji.svg" alt="emoji"></button>
               <input class="footer__input" type="text" placeholder="Add a comment...">
             </div>
             <button type="submit" class="footer-modal-btn">Post</button>
           </form>
         </div>
        </div>
        `;
      }
      if(item.type=='imgs'){
        modalContent.innerHTML = `
        <div class="modal__imgbox col-md-6 col-xs-12">
        <ul id="postSlider" class="post-slider">
            <li  class="imgbox"><img src="${item.mediaUrl[2]}" class="post-slider" alt="post-slider"></li>
            <li class="imgbox"><img src="${item.mediaUrl[1]}"  class="post-slider"  alt="post-slider"></li>
            <li class="imgbox"><img src="${item.mediaUrl[0]}"  class="post-slider"  alt="post-slider"></li>
         </ul>
         <button onclick="nextSlide()" class="slide-control next-slide"><i class='bx bx-chevron-right' ></i></button>
         <button onclick="prevSlide()" class="slide-control prev-slide"><i class='bx bx-chevron-left' ></i></button>
        </div>
        <div class="modal__desc col-md-6 col-xs-12">
          <div class="modal__header">
            <div class="modal__box">
             <a href="#" class="modal__user">
               <img class="modal__user--img" src="images/user.png" alt="">
             </a>
             <p class="user__name">elle <i class='bx bxs-badge-check'></i></p>
             <p class="header__text">Following</p>
            </div>
           <button class="menu__btn"><i class='bx bx-dots-horizontal-rounded'></i></button>
          </div>
          <div class="modal__textdesc">
            <div class="modal__box">
             <a href="#" class="modal__user">
               <img class="modal__user--img" src="images/user.png" alt="">
             </a>
             <p class="user__name">elle <i class='bx bxs-badge-check'></i></p>
             <p class="post__desc">${item.desc}</p>
            </div>
           <button class="like-post__btn"><i class='bx bx-heart' ></i></button>
          </div>
         <div class="modal__footer">
           <div class="footer__inner">
           <div class="footer-btns">
           <button class="footer-btn like-footer-btn"><img src="images/like2.svg" alt="direct"></button>
           <button class="footer-btn comment-footer-btn"><img src="images/direct.svg" alt="direct"></button>
           <button class="footer-btn send-footer-btn"><img src="images/save.svg" alt="save"></button>
           </div>
           <button onclick="savePost(${item.id})" id="savePostBtn" class="footer-btn footer-save-btn"> <img src="images/savespost.svg" alt="savespost"></button>
           </div>
           <p class="footer-liked">Liked by <span>${item.like}</span></p>
           <form class="footer__form">
           <div class="footer__form-box">
           <button class="footer-btn smile-btn"> <img src="images/emoji.svg" alt="emoji"></button>
           <input class="footer__input" type="text" placeholder="Add a comment...">
           </div>
           <button type="submit" class="footer-modal-btn">Post</button>
           </form>
           </div>
           </div>
           `;
          }
          modalContent.classList="modal-body row";
          modalContainer.appendChild(modalContent);
        }
      })

    }

    function myFunction(id){
      console.log(id);
    }

    let elSliderItem = document.getElementsByClassName("imgbox");
    let index = 1;
    
    function mySlides() {
      if (index > elSliderItem.length){
        index = 1
      }    
      if (index < 1) {
        index = elSliderItem.length
      }
      for (i = 0; i < elSliderItem.length; i++) {
        elSliderItem[i].style.display = "none";  
      }
      elSliderItem[index-1].style.display = "block"; 
    }   
    
    function nextSlide(){
      mySlides(index -= 1);
    }
    function prevSlide(){
      mySlides(index += 1);
    }
    
    let savedList = document.getElementById('savedList');
    

    function savePost(id){
      savedList.innerHTML='';
      let savePostBtn = document.getElementById('savePostBtn');
      posts.forEach((item)=>{
        if(item.id==id){
        if(item.save==true){
          item.save=false;
          savePostBtn.innerHTML = `<i class='bx bx-bookmark' ></i>`
        }
        else if(item.save==false){
          item.save=true;
          savePostBtn.innerHTML = `<i class='bx bxs-bookmark'></i>`
        }
        }
      })
      let savedArr = posts.filter((item)=>{
        return item.save==true;
      })
      showPosts(savedList,savedArr);
    }

    let videoList = document.getElementById('videoList');
    let videoArr = posts.filter((item)=>{
      return item.type=='video'
    })
    showPosts(videoList,videoArr);

