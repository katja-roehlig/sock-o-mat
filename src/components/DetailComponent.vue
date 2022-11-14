<template>
  <article class="detail-container">
    <div class="foto-style">
      <img
        :src="sock.image"
        style="width: 100%; height: 100%; object-fit: cover"
        alt="Hier fehlt ein Foto"
      />
    </div>
    <div class="size">
      <h3>Größe:</h3>
      <p class="sock-detail">{{ sock.size }}</p>
    </div>
    <div class="stitches">
      <h3>Maschen:</h3>
      <p class="sock-detail">{{ sock.stitches }}</p>
    </div>
    <div class="cuff">
      <h3>Bündchen:</h3>
      <p class="sock-detail">{{ sock.cuff }}</p>
    </div>
    <div class="heel">
      <h3>Ferse</h3>
      <p class="sock-detail">{{ sock.heel }}</p>
    </div>
    <div class="toe">
      <h3>Spitze</h3>
      <p class="sock-detail">{{ sock.toe }}</p>
    </div>
    <div class="wool">
      <h3>Wolle</h3>
      <p class="sock-detail">{{ sock.wool }}</p>
    </div>
    <div class="pattern">
      <h3>Muster</h3>
      <p class="sock-detail">{{ sock.pattern }}</p>
    </div>
    <div class="specials">
      <h3>Besonderheiten</h3>
      <p class="sock-detail">{{ sock.specials }}</p>
    </div>
  </article>
  <div class="button-container">
    <button class="button-style">
      <router-link class="button-link" :to="{ name: 'overview' }"
        >Übersicht</router-link
      >
    </button>
    <button class="button-style">
      <router-link to="/" class="button-link">Home</router-link>
    </button>
    <button class="button-style">
      <router-link :to="{ name: 'create' }" class="button-link"
        >Neue Socke</router-link
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "DetailComponent",
  data() {
    return {
      socks: JSON.parse(localStorage.getItem("safeSocks")),
      sock: {},
    };
  },
  methods: {
    getSubtitle() {
      this.$emit("subtitleSock", this.sock?.title);
    },
  },
  created() {
    this.sock = this.socks.find(
      (element) => element.id === this.$route.params.id
    );
    console.log(this.sock);
  },
  emits: ["subtitleSock"],
};
</script>

<style scoped>
.detail-container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 1.5em 2em;
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  align-items: start;
  justify-items: start;
  grid-template-areas:
    "area1 area2 area3"
    "area1 area4 area4"
    "area5 area6 area6"
    "area7 area7 area7"
    "area8 area8 area8"
    "area9 area9 area9";
  background-color: #b8e5f6;
}
.title {
  background-color: var(--basic-color);
}
.foto-style {
  width: 40vmin;
  height: 30vmin;
  border-radius: 5px;
  box-shadow: 2px 2px 3px var(--basic-color);
  border: 1px solid var(--basic-color);
  grid-area: area1;
}
.size {
  grid-area: area2;
  width: 100%;
}
.stitches {
  grid-area: area3;
  width: 100%;
}
.cuff {
  grid-area: area4;
  width: 100%;
}
.heel {
  grid-area: area5;
  width: 100%;
}
.toe {
  grid-area: area6;
  width: 100%;
}
.wool {
  grid-area: area7;
  width: 100%;
}
.pattern {
  grid-area: area8;
  width: 100%;
}
.specials {
  grid-area: area9;
  width: 100%;
}
.sock-detail {
  background-color: var(--bg-color);
  padding: 0.3em 0.6em;
  margin-top: 3px;
  margin-bottom: 0;
  border-radius: 5px;
  box-shadow: 2px 2px 3px var(--contrast-color);
  border: 1px solid var(--contrast-color);
}
.button-container {
  display: flex;
  justify-content: space-around;
  padding-block: 1em 2em;
  background-color: var(--bg-color);
  border-top: 2px solid var(--accent-color);
}
</style>
