<template>
  <div>
    <v-btn color="success" @click="calculate">계산</v-btn>
  </div>
</template>

<script>
  import {calculator} from './util/calculator'

export default {
  data() {
    return {
      memberList: [],
      total: 0,
      limit: 0,
      isLimitUsed: true,
    };
  },
  methods: {
    fetch() {
      this.memberList = this.$store.getters.getMemberList.slice(0);
      this.total = this.$store.getters.getTotal;
      this.limit = this.$store.getters.getLimit;
      this.isLimitUsed = this.$store.getters.getLimitUsed;
    },
    calculate() {
      this.fetch();
      if (this.memberList.length == 0) {
        alert("어느 학년도 등록되지 않았습니다.");
        return;
      }

      let result;calculator
      if (this.isLimitUsed) {
        result = calculator.calculateRecur(this.memberList, this.total, this.limit);
      } else {
        result = calculator.calculateRecur(
          this.memberList,
          this.total,
          Number.MAX_SAFE_INTEGER
        );
      }

      let notice = "";
      if (result === "OVERFLOW. LIMIT_IS_NOT_VALID")
        notice = "리미트가 너무 낮아서 계산이 불가능 합니다. \n리미트를 사용하지 않거나 한도를 늘려주세요";
      else if (result.plus >= 0) {
        notice = "학년 플러스 " +
          result.plus +
          "\n남는 잔액은 " +
          result.balance +
          "입니다.";
      } else {
        notice = "학년 마이너스 " +
          result.plus * -1 +
          "\n남는 잔액은 " +
          result.balance +
          "입니다."
      }

      for(let i = 0; i < this.memberList.length; i++) {
        if(this.memberList[i].grade === 1)
          notice += "\n앗! 1학년도 포함되어 있네요. 1학년도 돈을 내나요?"
      }
      alert(notice);
    }
  }
};
</script>

<style>
</style>
