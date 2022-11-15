<template>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      socks: [
        {
          title: "Omas Socken",
          id: "omassocken99345",
          image: "@/assets/img/Socke-Opal-3.png",
          size: 39,
          stitches: 60,
          cuff: "2re, 2li",
          heel: "Bumerangferse ohne Zwischenrunden",
          toe: "Sternchenspitze",
          wool: "4 fädig, Lana Grossa hand-dyed",
          pattern: "Gundel",
          specials: "Vor der Ferse 3x 2M in jeder 2. Runde zunehmen",
        },
        {
          title: "Weihnachtssocken",
          id: "weihnachtssocken12345",
          image: "http://picsum.photos/50",
          size: 40,
          stitches: 64,
          cuff: "1re verschr, 2li",
          heel: "Käppchenferse",
          toe: "Bandspitze",
          wool: "4 fädig, ",
          pattern: [
            "Zimtwaffel",
            "https://www.youtube.com/watch?v=OSvraBmW0BU",
          ],
          specials: "",
        },
      ],
    };
  },
  /*created() {
    localStorage.setItem("safeSocks", JSON.stringify(this.socks));
  },*/
};
</script>

<style>
@import url("@/assets/main.css");
</style>
