<template>
  <dashboard></dashboard>
</template>

<script>
// @ is an alias to /src
import dashBoard from "@/components/dashBoard.vue";

export default {
  name: "Home",
  components: {
    dashboard: dashBoard,
  },
};
</script>
