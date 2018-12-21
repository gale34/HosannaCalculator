<template>
  <div>
    <i class="fas fa-plus addBtn" @click="addMember"></i>
  </div>
</template>

<script>
function Member (grade, count) {
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
.addBtn {
  text-align: left;
}
</style>
