<template>
  <form class="form-container" @submit.prevent="saveProject">
    <label for="title" class="visually-hidden title-label">Name: </label>
    <input
      type="text"
      name="title"
      id="title"
      class="input-style title-text"
      placeholder="Gib deinem Sockenprojekt einen Namen"
      required
      v-model="title"
    />

    <label for="image" class="foto-label">Foto auswählen: </label>
    <div class="input-style foto-container">
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        ref="image"
      />
    </div>

    <label for="size" class="size-label">Größe: </label>
    <input
      type="text"
      id="size"
      name="size"
      class="input-style size-text"
      size="5"
      v-model="size"
    />

    <label for="stitches" class="stitches-label">Maschen: </label>
    <input
      type="text"
      id="stitches"
      name="stitches"
      class="input-style stitches-text"
      v-model="stitches"
      size="5"
    />

    <label for="cuff" class="cuff-label">Bündchen </label>
    <input
      type="text"
      name="cuff"
      id="cuff"
      class="input-style cuff-text"
      v-model="cuff"
    />

    <label for="heel" class="heel-label">Ferse </label>
    <input
      type="text"
      name="heel"
      id="heel"
      class="input-style heel-text"
      v-model="heel"
    />

    <label for="toe" class="toe-label">Spitze </label>
    <input
      type="text"
      name="toe"
      id="toe"
      class="input-style toe-text"
      v-model="toe"
    />

    <label for="wool" class="wool-label">Wolle: </label>
    <textarea
      type="text"
      name="wool"
      id="wool"
      class="input-style wool-text"
      v-model="wool"
    />

    <label for="pattern" class="pattern-label">Muster: </label>
    <textarea
      name="pattern"
      id="pattern"
      class="input-style pattern-text"
      v-model="pattern"
    />

    <label for="specials" class="specials-label">Besonderheiten: </label>
    <textarea
      class="input-style specials-text frame"
      name="specials"
      id="specials"
      v-model="specials"
    />

    <button class="button-style button-safe">Speichern</button>
  </form>
</template>
<!-- Script ******************************************************* -->
<script>
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
export default {
  name: "CreateComponent",
  data() {
    return {
      title: "",
      size: "",
      stitches: "",
      cuff: "",
      toe: "",
      heel: "",
      wool: "",
      pattern: "",
      specials: "",
      socks: JSON.parse(localStorage.getItem("safeSocks")) || [],
    };
  },
  methods: {
    async saveProject() {
      let imageFile = this.$refs.image.files[0];
      let newImage = "null";
      if (imageFile === undefined) {
        newImage = "/img/Socke-Opal-3.png";
      } else {
        newImage = await convertBase64(imageFile);
      }

      const sockProject = {
        title: this.title,
        id: this.createId(),
        image: newImage,
        size: this.size,
        stitches: this.stitches,
        cuff: this.cuff,
        toe: this.toe,
        heel: this.heel,
        wool: this.wool,
        pattern: this.pattern,
        specials: this.specials,
      };
      this.socks.push(sockProject);
      console.log(this.socks);
      localStorage.setItem("safeSocks", JSON.stringify(this.socks));
      this.$router.push("/detail/" + sockProject.id);
    },

    createId() {
      return (
        this.title.replaceAll(" ", "").toLowerCase() +
        Math.floor(Math.random() * 10000)
      );
    },
  },
};
</script>

<!-- Style ****************************************************** -->
<style scoped>
label {
  font-size: 1em;
}
textarea {
  overflow: visible;
}
textarea:focus,
input:focus {
  outline: none;
  box-shadow: 2px 2px 3px var(--contrast-color);
  border: 1px solid var(--contrast-color);
}

.form-container {
  background-color: var(--main-bg-color);
  padding: 2em 2em 3em 2em;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-column-gap: 0.5em;
  align-items: start;
  justify-items: start;
  grid-template-areas:
    "title-label title-label title-label"
    "title-text title-text title-text"
    "foto-label foto-label foto-label"
    "foto-container  foto-container foto-container"
    "cuff-label size-label stitches-label"
    "cuff-text size-text stitches-text"
    "toe-label heel-label heel-label"
    "toe-text heel-text heel-text"
    "wool-label wool-label wool-label"
    "wool-text wool-text wool-text"
    "pattern-label pattern-label pattern-label"
    "pattern-text pattern-text pattern-text"
    "specials-label specials-label specials-label"
    "specials-text specials-text specials-text"
    "button-safe button-safe button-safe";
}
.title-label {
  grid-area: title-label;
}
.title-text {
  grid-area: title-text;
  width: 100%;
}
.foto-label {
  grid-area: foto-label;
}
.foto-container {
  grid-area: foto-container;
  font-size: 0.7em;
  width: 100%;
  padding-block: 1em;
  height: 80%;
  margin-bottom: 2em;
}
.size-label {
  grid-area: size-label;
}
.size-text {
  grid-area: size-text;
  width: 100%;
}
.stitches-label {
  grid-area: stitches-label;
}
.stitches-text {
  grid-area: stitches-text;
  width: 100%;
}
.cuff-label {
  grid-area: cuff-label;
}
.cuff-text {
  grid-area: cuff-text;
  width: 100%;
}
.heel-label {
  grid-area: heel-label;
}
.heel-text {
  grid-area: heel-text;
  width: 100%;
}
.toe-label {
  grid-area: toe-label;
}
.toe-text {
  grid-area: toe-text;
  width: 100%;
}
.wool-label {
  grid-area: wool-label;
}
.wool-text {
  grid-area: wool-text;
  width: 100%;
}
.pattern-label {
  grid-area: pattern-label;
}
.pattern-text {
  grid-area: pattern-text;
  width: 100%;
}
.specials-label {
  grid-area: specials-label;
}
.specials-text {
  grid-area: specials-text;
  width: 100%;
}
.input-style {
  background-color: var(--bg-color);
  padding: 0.6em 0.6em;
  margin-bottom: 0.8em;
  border-radius: 5px;
  box-shadow: 2px 2px 3px var(--basic-color);
  border: 1px solid var(--basic-color);
  line-height: 1.2em;
  font-size: 1em;
}

.button-safe {
  grid-area: button-safe;
  justify-self: center;
  margin-block: 1em;
}

input::placeholder {
  font-size: 0.8em;
}
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

/****IDs ******************************************* */
</style>
