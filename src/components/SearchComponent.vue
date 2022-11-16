<template>
  <div class="search-container">
    <form class="form" @input.prevent="clickBtn">
      <input
        type="search"
        name="suche"
        id="suche"
        class="search-input"
        placeholder="Gib einen
  Suchbegriff ein"
        autocomplete="off"
        v-model="result"
      />
      <button class="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="var(--accent-color)"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: "",
    };
  },
  methods: {
    clickBtn() {
      this.$emit("searchButton", this.result);
    },
  },
};
</script>
<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}
.form {
  position: relative;
  width: 100%;
  margin-inline: 1.5em;
}
.search-button {
  position: absolute;
  width: 80%px;
  background-color: white;
  border: transparent;
  font-size: 20px;
  z-index: 0;
  cursor: pointer;
  outline: 0;
  right: 1em;
  top: 0.5em;
}
.search-input {
  appearance: none;
  border-radius: 5px;
  padding: 0.6em 2em;
  box-shadow: 2px 2px 3px var(--contrast-color);
  border: 1px solid var(--contrast-color);
  width: 100%;
  background-color: var(--bg-color);
}
.search-input:focus {
  text-decoration: none;
  outline: none;
  appearance: none;
  border: 2px solid var(--accent-color);
}
</style>
