<template>
  <div>
    <i class="fas fa-plus addBtn" @click="addMember"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    Member(grade, count) {
      this.grade = grade;
      this.count = count;
    },
    addMember() {
      this.$store.commit("addMember", new this.Member(0, 0));
    }
  }
};
</script>

<style>
.addBtn {
  text-align: left;
}
</style>
