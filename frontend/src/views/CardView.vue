<template>
  <div>카드 페이지 입니다.</div>
  <div class="container">
    <div class="overlay"></div>
    <div class="card"></div>
  </div>
  <div class="container">
    <div class="overlay"></div>
    <div class="card"></div>
  </div>
  <div class="container">
    <div class="overlay"></div>
    <div class="card"></div>
  </div>
</template>
<script>
export default {
  name: "CardView",
  mounted() {
    var container = document.querySelectorAll(".container");
    //var overlay = document.querySelectorAll(".overlay");
    [].forEach.call(container, function (col) {
      col.addEventListener("mousemove", function (e) {
        console.log(e);
        var x = e.offsetX;
        var y = e.offsetY;
        var rotateY = (-1 / 5) * x + 20;
        var rotateX = (4 / 30) * y - 20;

        e.target.style = `background-position : ${
          x / 5 + y / 5
        }%; filter : opacity(${x / 200}) brightness(1.2)`;

        col.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      col.addEventListener("mouseout", function (e) {
        e.target.style = "filter : opacity(0)";
        col.style =
          "transform : perspective(350px) rotateY(0deg) rotateX(0deg)";
      });
    });
    // container.addEventListener("mousemove", function (e) {
    //   var x = e.offsetX;
    //   var y = e.offsetY;
    //   var rotateY = (-1 / 5) * x + 20;
    //   var rotateX = (4 / 30) * y - 20;

    //   overlay.style = `background-position : ${
    //     x / 5 + y / 5
    //   }%; filter : opacity(${x / 200}) brightness(1.2)`;

    //   container.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    // });

    // container.addEventListener("mouseout", function () {
    //   overlay.style = "filter : opacity(0)";
    //   container.style =
    //     "transform : perspective(350px) rotateY(0deg) rotateX(0deg)";
    // });
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.container {
  width: 220px;
  height: 310px;
  transition: all 0.1s;
  position: relative;
}
.overlay {
  position: absolute;
  width: 220px;
  height: 310px;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 219, 112, 0.8) 45%,
    rgba(132, 50, 255, 0.6) 50%,
    transparent 54%
  );
  filter: brightness(1.1) opacity(0.8);
  mix-blend-mode: color-dodge;
  background-size: 150% 150%;
  background-position: 100%;
  transition: all 0.1s;
}
.card {
  width: 220px;
  height: 310px;
  background-image: url(../assets/card1.png);
  background-size: cover;
}
</style>
