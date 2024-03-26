<template>
  <div>카드 페이지 입니다.</div>
  <div class="card" @mousemove="rotateCard"></div>
  <div class="card" @mousemove="rotateCard"></div>
  <div class="card"></div>
  <div class="card"></div>
</template>
<script>
export default {
  name: "CardView",
  data() {
    return {};
  },
  methods: {
    rotateCard($event) {
      console.log($event);
    },
  },
};
</script>
<style scoped>
.card {
  background-image: url("../assets/card1.png");
  width: 18rem;
  height: 25rem;
  background-size: cover;
}
</style>
