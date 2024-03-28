<template>
  <div>카드 페이지 입니다.</div>
  <div class="card-container" @mousemove="rotateCard" @mouseout="resetCard">
    <div class="card-overlay"></div>
    <div class="card"></div>
  </div>
  <div class="card-container" @mousemove="rotateCard" @mouseout="resetCard">
    <div class="card"></div>
  </div>
  <div class="card-container" @mousemove="rotateCard" @mouseout="resetCard">
    <div class="card"></div>
  </div>
</template>
<script>
export default {
  name: "CardView",
  data() {
    return {};
  },
  methods: {
    rotateCard(e) {
      var x = e.offsetX; //0 20, 220 -20
      var y = e.offsetY;
      var rotateY = (-2 / 11) * x + 20;
      var rotateX = (4 / 31) * y - 20;
      e.target.style = `transform:perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    resetCard(e) {
      e.target.style =
        "    transition: all linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%) 1s; transform:perspective(350px) rotateX(0deg) rotateY(0deg);";
    },
  },
};
</script>
<style scoped>
.card-container {
  width: 220px;
  height: 310px;
  transition: all 0.1s;
}
.card-overlay {
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
  background-size: 150% 150%;
  background-position: 100%;
}
.card {
  background-image: url("../assets/card1.png");
  width: 220px;
  height: 310px;
  background-size: cover;
}
</style>
