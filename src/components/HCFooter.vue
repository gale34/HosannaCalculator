<template>
  <div>
    <button @click="calculate()">계산</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberList: [],
      total: 0,
      limit: 0,
      isLimitUsed: true,
      payUnit: 1000
    };
  },
  methods: {
    Member(grade, count) {
      this.grade = grade;
      this.count = count;
    },
    fetch() {
      this.memberList = this.$store.getters.getMemberList.slice(0);
      this.total = this.$store.getters.getTotal;
      this.limit = this.$store.getters.getLimit;
      this.isLimitUsed = this.$store.getters.getLimitUsed;
    },
    calculate() {
      this.fetch();
      if (this.memberList.length == 0) {
        alert("멤버가 등록되지 않았습니다.");
        return;
      }

      let result;
      if (this.isLimitUsed) {
        result = this.calculateWithLimit(
          this.memberList,
          this.total,
          this.limit
        );
      } else {
        result = this.calculateWithoutLimit(this.memberList, this.total);
      }

      if (result === "OVERFLOW. LIMIT_IS_NOT_VALID")
        alert(
          "리미트가 너무 낮아서 계산이 불가능 합니다. \n리미트를 사용하지 않거나 한도를 늘려주세요"
        );
      else if (result.plus >= 0) {
        alert(
          "학년 플러스 " +
            result.plus +
            "\n남는 잔액은 " +
            result.balance +
            "입니다."
        );
      } else {
        alert(
          "학년 마이너스 " +
            result.plus +
            "\n남는 잔액은 " +
            result.balance +
            "입니다."
        );
      }
    },
    calculateWithLimit(memberList, total, limit) {
      memberList.sort(this.compare);
      let subTotal = this.getSubTotal(memberList, limit);
      let numOfPerson = this.getNumOfPerson(memberList);
      let plusUnit = numOfPerson * this.payUnit;
      let margin = total - subTotal;

      if (margin > 0) {
        if (!this.validateLimit(memberList, margin, limit))
          return "OVERFLOW. LIMIT_IS_NOT_VALID";

        let expectBalance = margin % plusUnit;
        let expectPlus = (margin - expectBalance) / plusUnit;
        if (expectBalance != 0) {
          expectBalance = plusUnit - expectBalance;
          expectPlus += 1;
        }

        if (
          (expectPlus + this.getMaxGrade(memberList)) * this.payUnit <=
          limit
        ) {
          return {
            plus: expectPlus,
            balance: expectBalance
          };
        } else {
          let overflow = this.reBasePlusMemberList(
            memberList,
            limit,
            expectPlus
          );
          total -= overflow;
          //this.calculateWithLimit(memberList, total, limit);
        }
      } else if (margin == 0) {
        return {
          plus: 0,
          balance: 0
        };
      } else {
        margin = Math.abs(margin);
        let expectBalance = margin % plusUnit;
        let expectMinus = (margin - expectBalance) / plusUnit;

        if ((this.getMinGrade(memberList) - expectMinus) * this.payUnit >= 0) {
          return {
            plus: expectMinus,
            balance: expectBalance
          };
        } else {
          let underflow = this.reBaseMinusMemberList(
            memberList,
            limit,
            expectMinus
          );
          total -= underflow;
          this.calculateWithLimit(memberList, total, limit);
        }
      }
    },
    calculateWithoutLimit(memberList, total) {
      memberList.sort(this.compare);

      let subTotal = 0;
      memberList.forEach(element => {
        subTotal += element.grade * element.count * this.payUnit;
      });

      let numOfPerson = memberList.length;
      let plusUnit = numOfPerson * this.payUnit;
      let margin = total - subTotal;

      if (margin > 0) {
        let expectBalance = plusUnit - (margin % plusUnit);
        let expectPlus = (margin + expectBalance) / plusUnit;

        return {
          plus: expectPlus,
          balance: expectBalance
        };
      } else if (margin == 0) {
        return {
          plus: 0,
          balance: 0
        };
      } else {
        margin = Math.abs(margin);
        let expectBalance = margin % plusUnit;
        let expectMinus = (margin - expectBalance) / plusUnit;

        if ((this.getMinGrade(memberList) - expectMinus) * this.payUnit >= 0) {
          return {
            plus: expectMinus,
            balance: expectBalance
          };
        } else {
          let underflow = this.reBaseMinusMemberList(memberList, expectMinus);
          total -= underflow;
          this.calculateWithoutLimit(memberList, total);
        }
      }
    },
    compare(a, b) {
      if (a.grade < b.grade) return -1;
      else if (a.grade > b.grade) return 1;
      else return 0;
    },
    getSubTotal(memberList, limit) {
      let subTotal = 0;
      memberList.forEach(element => {
        if (element.grade * this.payUnit <= limit)
          subTotal += element.grade * element.count * this.payUnit;
        else subTotal += limit * element.count;
      });
      return subTotal;
    },
    getNumOfPerson(memberList) {
      let result = 0;
      memberList.forEach(element => {
        result += element.count * 1;
      });

      return result;
    },
    getMaxGrade(memberList) {
      let max = -1;
      memberList.forEach(element => {
        max = Math.max(max, element.grade);
      });
      return max;
    },
    getMinGrade(memberList) {
      let min = 9999999;
      memberList.forEach(element => {
        min = Math.min(min, element.grade);
      });
      return min;
    },
    reBasePlusMemberList(memberList, limit, expectPlus) {
      let i;
      let limitedPersons = 0;
      for (i = memberList.length - 1; i >= 0; i--) {
        if ((memberList[i].grade + expectPlus) * this.payUnit < limit) {
          break;
        }
        limitedPersons += memberList[i].count;
      }
      memberList.splice(i + 1, memberList.length - (i + 1));

      return limitedPersons * limit;
    },
    reBaseMinusMemberList(memberList, expectMinus) {
      let i;
      let result = 0;
      for (i = 0; i < memberList.length; i++) {
        if (memberList[i].grade - expectMinus >= 0) {
          break;
        }
        result += memberList[i].grade * memberList[i].count * this.payUnit;
      }
      memberList.splice(0, i);

      return result;
    },
    validateLimit(memberList, margin, limit) {
      let sum = 0;
      memberList.forEach(element => {
        sum += (limit - this.payUnit * element.grade) * element.count;
      });

      if (sum >= margin) return true;
      else return false;
    }
  }
};
</script>

<style>
</style>
