<template>
  <v-layout class="ma-2 pa-2">
    <v-flex class="mx-1">
      <v-text-field
          hide-details v-model.number="total" label="금액" outline type="number"></v-text-field>
    </v-flex>
    <v-flex class="mx-1">
      <v-text-field
          hide-details v-model.number="limit" :append-icon="isLimitUsed ? 'check_box' : 'check_box_outline_blank'" label="리미트"
          outline type="number" @click:append="toggleLimitUsed"></v-text-field>
    </v-flex>
  </v-layout>
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
    },
    methods: {
      toggleLimitUsed() {
        this.isLimitUsed = !this.isLimitUsed
      }
    }
  };
</script>

<style scoped>

  .checkBox {
    background: white;
    height: 15px;
    width: 10%;
    border-radius: 5px;
  }

</style>
