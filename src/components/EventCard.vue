<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <span>{{ event.attendees.length }} attending</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Beach cleanup',
        date: 'Sun Nov 11, 2019',
        time: '19:00',
        attendees: [
          {
            id: 'abc123',
            name: 'Dima'
          },
          {
            id: 'bcs122',
            name: 'Katya'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .event-card {
    padding: 20px;
    margin-bottom: 24px;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  }
  .event-card > .title {
    margin: 0;
  }
  .event-link {
    color: black;
    text-decoration: none;
    font-weight: 100;
  }
</style>

