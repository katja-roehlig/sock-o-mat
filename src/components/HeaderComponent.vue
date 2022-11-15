<template>
  <header>
    <div class="title">
      <h1>SOCK <span class="accent">O</span> MAT</h1>
    </div>
    <div class="subtitle">
      <h2>{{ msg }}</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
header {
  text-align: center;
}
h1 {
  color: var(--bg-color);
  font-size: 1.7em;
  font-weight: 900;
  padding-block: 0.8em 0.6em;
  margin: 0;
  text-shadow: 2px 2px 0px var(--contrast-color);
}

h2 {
  font-size: 1.1em;
  padding-block: 0.6em;
  margin: 0;
  color: var(--contrast-color);
}

.title {
  background-color: var(--basic-color);
  border-bottom: 2px solid var(--accent-color);
  grid-column: span 3;
  /*box-shadow: 0px 4px 3px 3px var(--accent-color);*/
}
.accent {
  color: var(--accent-color);
  text-shadow: none;
  position: relative;
  display: inline-block;
  transform: rotate(45deg);
}
.subtitle {
  color: var(--contrast-color);
  background-color: var(--bg-color);
  border-bottom: 2px solid var(--basic-color);
}
.bi {
  color: var(--contrast-color);
}
</style>
