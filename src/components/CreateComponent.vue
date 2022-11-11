<template>
  <form class="form-container" @submit.prevent="saveProject">
    <div class="input-container title-input">
      <label for="title" class="label-style">Name: </label><br />
      <input
        type="text"
        name="title"
        id="title"
        size="35"
        placeholder="Gib deinem Sockenprojekt einen Namen"
        v-model="title"
      />
    </div>
    <div class="foto-style">
      <label for="image" class="label-style">Foto deiner Socke</label>

      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        class="input-foto"
        ref="image"
      />
    </div>
    <div class="number-container">
      <div>
        <label for="size" class="label-style">Größe: </label><br />
        <input
          type="text"
          id="size"
          name="size"
          class="number-input"
          v-model="size"
        />
      </div>
      <div>
        <label for="stitches" class="label-style">Maschen: </label><br />
        <input
          type="text"
          id="stitches"
          name="stitches"
          class="number-input"
          v-model="stitches"
        />
      </div>
    </div>
    <div class="input-container">
      <label for="cuff" class="label-style">Bündchen </label><br />
      <input
        type="text"
        name="cuff"
        id="cuff"
        class="input-style"
        size="10"
        v-model="cuff"
      />
    </div>

    <div class="input-container">
      <label for="heel" class="label-style">Ferse </label><br />
      <input
        type="text"
        name="heel"
        id="heel"
        class="input-style"
        size="10"
        v-model="heel"
      />
    </div>
    <div class="input-container">
      <label for="toe" class="label-style">Spitze </label><br />
      <input
        type="text"
        name="toe"
        id="toe"
        class="input-style"
        size="10"
        v-model="toe"
      />
    </div>

    <div class="input-container wool">
      <label for="wool" class="label-style">Wolle: </label><br />
      <input
        type="text"
        name="wool"
        id="wool"
        class="input-style"
        size="10"
        v-model="wool"
      />
    </div>

    <div class="input-container pattern">
      <label for="pattern" class="label-style">Muster: </label><br />
      <input
        type="text"
        name="pattern"
        id="pattern"
        class="input-style"
        size="10"
        v-model="pattern"
      />
    </div>
    <div class="input-container specials">
      <label for="specials" class="label-style">Besonderheiten: </label><br />
      <input
        type="text"
        name="specials"
        id="specials"
        class="input-style"
        size="10"
        v-model="specials"
      />
    </div>
    <button class="button-style">Speichern</button>
  </form>

  <div class="button-container">
    <button class="button-style">
      <router-link to="/" class="button-link">⏎</router-link>
    </button>
  </div>
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
      socks: [],
    };
  },
  methods: {
    async saveProject() {
      let imageFile = this.$refs.image.files[0];
      let newImage = "null";
      if (imageFile === undefined) {
        newImage = "@/assets/img/Socke-Opal-3.png";
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
      this.$router.push("/");
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
input {
  height: 2em;
  border: 1px solid var(--basic-color);
}

.label-style {
  font-size: 0.8em;
}
.input-style {
  width: 40vmin;
}
.foto-style {
  width: 40vmin;
  height: 30vmin;
  border: 2px solid var(--basic-color);
  background-color: rgba(128, 128, 128, 0.311);
  display: inline-block;
  grid-row: span 2;
}
.input-foto {
  all: unset;
  display: inline-block;
  width: 30vmin;
  font-size: 0.8em;
}

.form-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1.5em 2em;
  grid-row-gap: 0.8em;
  grid-column-gap: 1em;
  align-items: start;
  justify-items: start;
}
.title-input {
  grid-column: span 2;
}
.number-container {
  display: flex;
  gap: 1.5em;
}
.number-input {
  width: 15vmin;
}
.wool,
.pattern,
.specials {
  grid-column: span 2;
}
.button-container {
  display: flex;
  justify-content: space-around;
}
.button-link {
  all: unset;
}
/*.input-container {
  display: inline-block;
}*/

/****IDs ******************************************* */
</style>
