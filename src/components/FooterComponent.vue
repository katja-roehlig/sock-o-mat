<template>
  <div class="footer-container">
    <div class="button-container">
      <button class="link">
        <router-link :to="{ name: 'overview' }" class="button-link"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-view-list menu"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"
            /></svg
        ></router-link>
      </button>
      <button class="link">
        <router-link to="/" class="button-link"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"
            /></svg
        ></router-link>
      </button>
      <button class="link">
        <router-link :to="{ name: 'create' }" class="button-link"
          ><span class="new">+</span></router-link
        >
      </button>
    </div>
    <div class="bottom-footer"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  position: relative;
  top: 0.15em;
}
.new {
  font-size: 2.9em;
  position: relative;
  top: -0.24em;
}
.link {
  background-color: var(--bg-color);
  color: var(--contrast-color);
  border-radius: 2em;
  height: 2.5em;
  width: 2.5em;
  border: 2px solid var(--contrast-color);
  box-shadow: inset 0px 0px 3px 2px var(--contrast-color-middle),
    inset 0px 0px 6px 5px var(--contrast-color-light);
}
.button-container {
  background: linear-gradient(var(--basic-color), var(--bg-color) 70%);
  border-top: 1px solid var(--bg-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-block: 0.8em;
}
.bottom-footer {
  background-color: var(--basic-color);
  border-top: 2px solid var(--accent-color);
  height: 1em;
}
</style>
