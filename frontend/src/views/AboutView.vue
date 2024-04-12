<template>
  <div class="about">
    <h1>parallax scroll</h1>
    <div>css를 통한 방법 z축활용</div>
    <div id="parallax-wrapper">
      <div id="parallax-A" class="parallax">A</div>
      <div id="parallax-B" class="parallax">B</div>
      <div id="parallax-C" class="parallax">C</div>
    </div>
    <div style="height: 1000px"></div>
    <div>자바스크립트를 통한 방법</div>
    <div id="java-parall">
      <div id="m1" class="mountain"></div>
      <div id="m2" class="mountain"></div>
      <div id="m3" class="mountain"></div>
      <div id="m4" class="mountain"></div>
      <div id="m5" class="mountain"></div>
      <div id="m6" class="mountain"></div>
      <div id="b1" class="bird"></div>
      <div id="b2" class="bird"></div>
      <div id="b3" class="bird"></div>
    </div>

    <div style="height: 1000px"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    let m1 = document.getElementById("m1");
    let m2 = document.getElementById("m2");
    let m3 = document.getElementById("m3");
    let m4 = document.getElementById("m4");
    let m5 = document.getElementById("m5");
    let m6 = document.getElementById("m6");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > 1050 && scrollY < 1800) {
        const sy = scrollY - 1050;
        m1.style.top = `${sy * 0.95}px`;
        m2.style.top = `${sy * 0.9}px`;
        m3.style.top = `${sy * 0.75}px`;
        m4.style.top = `${sy * 0.65}px`;
        m5.style.top = `${sy * 0.55}px`;
        m6.style.top = `${sy * 0.15}px`;
      }
    });
  },
};
</script>
<style>
#java-parall {
  height: 500px;
  position: relative;
  background-color: rgb(197, 240, 197);
  overflow: hidden;
}
.mountain {
  height: 100px;
  width: 300px;
  opacity: 0.5;
  position: absolute;
}
#m1 {
  background-color: rgb(238, 101, 77);
  top: 10%;
  left: 1%;
}
#m2 {
  background-color: rgb(248, 220, 183);
  top: 20%;
  left: 2%;
}
#m3 {
  background-color: aqua;
  top: 20%;
  right: 2%;
}

#m4 {
  background-color: black;
  top: 30%;
  left: 10%;
}

#m5 {
  background-color: blueviolet;
  top: 50%;
  right: 20%;
}
#m6 {
  background-color: rgb(223, 65, 194);
  top: 60%;
  right: 5%;
}
#parallax-wrapper {
  height: 20vh;
  overflow-x: hidden;
  perspective: 1px;
}

.parallax {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

#parallax-A {
  background-color: red;
  height: 50rem;
}

#parallax-B {
  background-color: aqua;
  height: 500px;
  transform: translateZ(-2px); /* C보다 더 느리게 움직인다*/
}

#parallax-C {
  background-color: blueviolet;
  height: 500px;
  transform: translateZ(-1px);
}
</style>
