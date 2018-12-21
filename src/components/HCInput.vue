<template>
  <div>
    <v-fab-transition>
      <v-btn
          color="blue darken-3"
          dark
          fab
          right
          bottom
          fixed
          @click="addMember"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
  function Member(grade, count) {
    this.grade = grade;
    this.count = count;
  }

  export default {
    data() {
      return {};
    },
    methods: {
      addMember() {
        const newMember = new Member(0, 0);
        this.$store.commit("addMember", newMember);
      }
    }
  };
</script>

<style>
</style>
