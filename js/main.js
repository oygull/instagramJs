let posts = [
  {
    id:1,
    mediaUrl: ['images/post1.png'],
    desc: "Its almost Halloween!! 🎃👻✨",
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
    desc: "Verified I LOVE YOU SO MUCH 💞",
    like: 45234,
    comment: 9421,
    save: false,
    type: "video"
  },

  {
    id:4,
    mediaUrl: ['images/post3.1.png', 'images/post3.2.png'],
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
    desc: "My favorite Snapchat filter 💕",
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
    mediaUrl: ['images/post6.1.png','images/post6.2.png'],
    desc: "Besties for life 🐻",
    like: 62347,
    comment: 6521,
    save: false,
    type: "imgs"
  },
];

let postsList = document.getElementById('postsList');


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
       <button id="typeBtn" class="type-btn"><i class='bx bx-play' ></i></button>
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
       <button id="typeBtn" class="type-btn"><i class='bx bx-trim'></i></button>
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

function openModal(id){
  posts.forEach((item)=>{
    if(item.id==id){
      let modalContent = document.createElement('div');
      modalContent.innerHTML = `
      `
    }
  })
}



