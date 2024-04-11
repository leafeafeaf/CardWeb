<template>
  <div>
    <div class="back-div">
      <div class="title">PICK YOUR FAVORITE</div>
      <img
        src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_NewYear_pick_img.png"
        alt=""
        class="photo"
      />
    </div>
    <div style="height: 2000px"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const io = new IntersectionObserver((e) => {
      e.forEach((entry) => {
        //title일떄
        console.log(entry);
        if (entry.target.className == "title") {
          if (entry.isIntersecting) {
            entry.target.style.animation =
              "title-slide 1.5s ease-in-out forwards";
          } else {
            entry.target.style.animation = "none";
          }
        }
        //photo일때
        else if (entry.target.className == "photo")
          if (entry.isIntersecting) {
            entry.target.style.animation =
              "photo-slide 1.5s ease-in-out forwards";
          } else {
            entry.target.style.animation = "none";
          }
      });
    });
    let title = document.getElementsByClassName("title");

    for (let i = 0; i < title.length; i++) {
      io.observe(title[i]);
    }
    let photo = document.getElementsByClassName("photo");

    for (let i = 0; i < photo.length; i++) {
      io.observe(photo[i]);
    }
  },
};
</script>

<style>
.back-div {
  background: url("https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg")
    fixed;

  height: 800px;
}
.title {
  font-size: 6em;
  width: 258px;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  position: absolute;
  /*animation: title-slide 1.5s ease-in-out;*/
  top: 100px;
}
.photo {
  position: absolute;
  top: 100px;
  right: 200px;
}

@keyframes title-slide {
  from {
    left: -100px;
    opacity: 0;
  }
  to {
    left: 200px;
    opacity: 1;
  }
}

@keyframes photo-slide {
  0% {
    top: 300px;
    opacity: 0;
  }
  100% {
    top: 100px;
    opacity: 1;
  }
}
</style>
