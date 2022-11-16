<template class="basic-container">
  <ul class="list">
    <li>
      <SearchComponent @searchButton="searchSocks" />
    </li>
    <li v-for="sock in socks" :key="sock.id">
      <article class="item-container frame">
        <!-- <img src="{{sock.image}}" alt="Oh no!" />-->
        <span class="sock-img">
          <img
            :src="sock.image"
            style="width: 60px; height: 60px; object-fit: cover"
            alt="Oh nein!"
          />
        </span>

        <span class="title-style">{{ sock.title }}</span>

        <button class="button-style details">
          <router-link
            :to="{ name: 'detail', params: { id: sock.id } }"
            class="button-link"
          >
            Details</router-link
          >
        </button>
        <button class="delete" @click="deleteItem(sock.id)">✕</button>
      </article>
    </li>
  </ul>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  name: "SockItem",
  components: { SearchComponent },
  data() {
    return {
      socks: JSON.parse(localStorage.getItem("safeSocks")),
      shit: "",
    };
  },
  methods: {
    deleteItem(currentId) {
      this.result = confirm("Willst du das Projekt wirklich löschen?");
      if (this.result) {
        this.socks = this.socks.filter((element) => element.id !== currentId);
      }
      localStorage.setItem("safeSocks", JSON.stringify(this.socks));
    },

    searchSocks(result) {
      this.shit = result;
      if (this.search === "") {
        this.socks = JSON.parse(localStorage.getItem("safeSocks"));
      } else {
        this.socks = this.socks.filter((element) => {
          element.pattern === this.shit ||
            element.heel === this.shit ||
            element.wool === this.shit ||
            element.toe === this.shit;
        });
      }
    },
  },
};
</script>

<style scoped>
.list {
  all: unset;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.5em;
}

.item-container {
  display: grid;
  grid-template-columns: 23% 47% 22% 8%;
  align-items: center;
  justify-items: start;
  background-color: var(--bg-color);
  margin: 1.2em 1.5em -0.5em 1.5em;
}
.title-style {
  color: var(--contrast-color);
  justify-self: start;
  padding-inline: 0.5em;
}
.delete {
  align-self: start;
  justify-self: end;
  background-color: var(--basic-color);
  color: var(--bg-color);
  border: none;
  border-radius: 2px;
}
.delete:hover {
  background-color: var(--accent-color);
}
.details {
  justify-self: start;
}
.sock-img {
  padding: 0.5em;
}

@media screen and (min-width: 460px) {
  .item-container {
    padding-block: 0.1em;
    margin-bottom: 0.001em;
  }
}
</style>
