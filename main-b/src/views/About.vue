<template>
  <about></about>
</template>
<script>
// @ is an alias to /src
import about from "@/components/about.vue";

export default {
  name: "Home",
  components: {
    about: about,
  },
};
</script>
