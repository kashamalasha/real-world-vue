<template>
  <div>
    <h1>Event Listening</h1>
    <router-link v-bind:to="{ name: 'event-show',
                              params: { id: '1' }}">Show Event #1</router-link>
    <EventCard/>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue"

export default {
  components: {
    EventCard
  }
}
</script>
