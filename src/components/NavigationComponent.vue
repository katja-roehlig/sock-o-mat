<nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link>-->
    <router-link :to="{ name: 'create' }">Neue Socke</router-link>|
    <router-link :to="{ name: 'overview' }">Überblick</router-link>|
    <router-link :to="{ name: 'detail' }">Einzelne Socke</router-link>
  </nav>
