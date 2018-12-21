import {memUtil} from './memListUtil'

export const calculator = {
  payUnit : 1000,
  calculateRecur(memberList, total, limit) {
    memUtil.sort(memberList);
    let subTotal = this.getSubTotal(memberList, limit);
    let numOfPerson = memUtil.getNumOfPerson(memberList);
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
        (expectPlus + memUtil.getMaxGrade(memberList)) * this.payUnit <=
        limit
      ) {
        return {
          plus: expectPlus,
          balance: expectBalance
        };
      } else {
        let overflow = this.reBasePlusMember(memberList, limit, expectPlus);
        total -= overflow;
        return this.calculateRecur(memberList, total, limit);
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

      if ((memUtil.getMinGrade(memberList) - expectMinus) * this.payUnit >= 0) {
        return {
          plus: expectMinus * -1,
          balance: expectBalance
        };
      } else {
        let underflow = this.reBaseMinusMember(memberList, expectMinus);
        total -= underflow;

        return this.calculateRecur(memberList, total, limit);
      }
    }
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
  reBasePlusMember(memberList, limit, expectPlus) {
    let i;
    let result = 0;
    let limitedPersons = 0;
    for (i = memberList.length - 1; i >= 0; i--) {
      if ((memberList[i].grade + expectPlus) * this.payUnit < limit) {
        break;
      }
      limitedPersons += memberList[i].count;
    }
    memberList.splice(i + 1, memberList.length - (i + 1));
    result = limitedPersons * limit;

    return result;
  },
  reBaseMinusMember(memberList, expectMinus) {
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