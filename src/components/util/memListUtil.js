export const memUtil = {
  sort(memberList) {
    memberList.sort(this.compare);
  },
  getNumOfPerson(memberList) {
    let result = 0;
    memberList.forEach(element => {
      result += element.count;
    });
    return result;
  },
  getMaxGrade(memberList) {
    let max = Number.MIN_SAFE_INTEGER;
    memberList.forEach(element => {
      max = Math.max(max, element.grade);
    });
    return max;
  },
  getMinGrade(memberList) {
    let min = Number.MAX_SAFE_INTEGER;
    memberList.forEach(element => {
      min = Math.min(min, element.grade);
    });
    return min;
  },
  compare(a, b) {
    if (a.grade < b.grade) return -1;
    else if (a.grade > b.grade) return 1;
    else return 0;
  },
}