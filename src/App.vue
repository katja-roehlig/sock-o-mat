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
  created() {
    localStorage.setItem("safeSocks", JSON.stringify(this.socks));
  },
};
</script>

<style>
/* custom-properties ***** */
:root {
  --basic-color: #fdc921;
  --contrast-color: #2997be;
  --main-bg-color: #fae588;
  --bg-color: white;
  --text-color: #000000;
  --accent-color: #7e0101;
}
* {
  box-sizing: border-box;
}
#app {
  text-align: center;
  background-color: var(--main-bg-color);
  margin: 0;
}
/****Font-Styling********************************************************************** */
@font-face {
  font-family: "Orbitron";
  src: url("@/assets/fonts/Orbitron/static/Orbitron-ExtraBold.ttf");
}
@font-face {
  font-family: "SourceSansPro";
  src: url("@/assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf");
  font-weight: 400;
}
h1 {
  font-family: "Orbitron", sans-serif;
}
html {
  font-family: "SourceSansPro";
}

/*Navigation-Style********************************************************************** */
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
