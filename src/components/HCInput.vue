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
    Member (grade, count) {
      this.grade = grade;
      this.count = count;
    },
    addMember() {
      const newMember = new this.Member(0,0);
      this.$store.commit("addMember", newMember);
    }
  }
};
</script>

<style>
.addBtn {
  text-align: left;
}
</style>
