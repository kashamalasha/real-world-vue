<template>
  <div>
    <h1>Create Event {{ user.name }}</h1>
    <p>Created by {{ catLength }}</p>
    <ul>
      <li v-for="cat in categories" v-bind:key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapState(["user", "categories"])
  }
};
</script>
