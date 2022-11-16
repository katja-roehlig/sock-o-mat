<template>
  <article class="detail-container">
    <div class="foto-container">
      <div class="foto-box">
        <img
          :src="sock.image"
          style="width: 100%; height: 100%; object-fit: contain"
          alt="Schade! Kein Foto!"
          :class="{ visible: isVisible }"
          @click="zoomImage"
          class="foto-style"
        />
      </div>
    </div>
    <div class="size" v-if="sock.size !== ''">
      <h3>Größe:</h3>
      <p class="sock-detail">{{ sock.size }}</p>
    </div>
    <div class="stitches" v-if="sock.stitches !== ''">
      <h3>Maschen:</h3>
      <p class="sock-detail">{{ sock.stitches }}</p>
    </div>
    <div class="cuff" v-if="sock.cuff !== ''">
      <h3>Bündchen:</h3>
      <p class="sock-detail">{{ sock.cuff }}</p>
    </div>
    <div class="heel" v-if="sock.heel !== ''">
      <h3>Ferse</h3>
      <p class="sock-detail">{{ sock.heel }}</p>
    </div>
    <div class="toe" v-if="sock.toe !== ''">
      <h3>Spitze</h3>
      <p class="sock-detail">{{ sock.toe }}</p>
    </div>
    <div class="wool" v-if="sock.wool !== ''">
      <h3>Wolle</h3>
      <p class="sock-detail">{{ sock.wool }}</p>
    </div>
    <div class="pattern" v-if="sock.pattern !== ''">
      <h3>Muster</h3>
      <p class="sock-detail">{{ sock.pattern }}</p>
    </div>
    <div class="specials" v-if="sock.specials !== ''">
      <h3>Besonderheiten</h3>
      <p class="sock-detail">{{ sock.specials }}</p>
    </div>
  </article>
</template>

<!-- Script ******************************************************-->

<script>
export default {
  name: "DetailComponent",
  data() {
    return {
      socks: JSON.parse(localStorage.getItem("safeSocks")),
      sock: {},
      isVisible: false,
    };
  },

  methods: {
    getSubtitle() {
      this.$emit("subtitleSock", this.sock?.title);
    },
    zoomImage() {
      this.isVisible = !this.isVisible;
    },
  },
  created() {
    this.sock = this.socks.find(
      (element) => element.id === this.$route.params.id
    );
    this.getSubtitle();
  },
  emits: ["subtitleSock"],
};
</script>

<!-- Style **********************************************************-->

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
    "area1 area6 area6"
    "area1 area5 area5"
    "area7 area7 area7"
    "area8 area8 area8"
    "area9 area9 area9";
  background-color: #b8e5f6;
}
.title {
  background-color: var(--basic-color);
}
.foto-container {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  grid-area: area1;
  display: flex;
  align-items: center;
  justify-items: center;
}
.foto-style {
  box-shadow: 2px 2px 3px var(--contrast-color);
  border: 1px solid var(--contrast-color);
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

.image-zoom {
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100vw;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
}
.visible {
  transition: transform 1s ease-out;
  transform: scale(2);
  transform-origin: 0% 0%;
}
</style>
