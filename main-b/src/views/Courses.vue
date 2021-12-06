<template>
  <courses></courses>
</template>

<script>
// @ is an alias to /src
import courses from "@/components/courses.vue";

export default {
  name: "Home",
  components: {
    courses: courses,
  },
};
</script>
