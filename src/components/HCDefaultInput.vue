<template>
  <div class="shadow">
    금액
    <input type="number" v-model="total" placeholder="금액" class="inputBox">
    리미트
    <input
      type="number"
      v-model="limit"
      :disabled="isLimitUsed == false"
      placeholder="리미트"
      class="inputBox"
    >
    <input type="checkbox" v-model="isLimitUsed" class="checkBox">
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      limit: 10000,
      isLimitUsed: true
    };
  },
  created() {
    this.total = this.$store.getters.getTotal;
    this.limit = this.$store.getters.getLimit;
    this.isLimitUsed = this.$store.getters.getLimitUsed;
  },
  watch: {
    total() {
      this.$store.commit("changeTotal", this.total);
    },
    limit() {
      this.$store.commit("changeLimit", this.limit);
    },
    isLimitUsed() {
      this.$store.commit("changeLimitUsed");
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.checkBox {
  background: white;
  height: 15px;
  width: 10%;
  border-radius: 5px;
}

</style>
