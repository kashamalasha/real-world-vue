<template>
  <div id="app">
    <div id="nav">
<<<<<<< HEAD
      <router-link v-bind:to="{ name:'home'}">Home</router-link> |
      <router-link v-bind:to="{name:'about'}">About</router-link>
=======
      <router-link v-bind:to="{ name: 'home' }">Home</router-link> |
      <router-link v-bind:to="{ name: 'about' }">About</router-link>
>>>>>>> 4646268ae1b15ab8f55315eebfe57ccc0015fb4b
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body { border-top: none; }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
