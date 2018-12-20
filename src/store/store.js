import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      memberList: [],
      total: 0,
      limit: 10000,
      isLimitUsed: true
    },
    getters: {
      getMemberList(state) {
        return state.memberList;
      },
      getTotal(state) {
        return state.total;
      },
      getLimit(state) {
        return state.limit;
      },
      getLimitUsed(state) {
        return state.isLimitUsed;
      }
    },
    mutations: {
      addMember (state, member) {
        member.grade *= 1;
        member.count *= 1;
        state.memberList.push(member);
      },
      changeTotal (state, total) {
        state.total = total;
      },
      changeLimit (state, limit) {
        state.limit = limit;
      },
      changeLimitUsed (state) {
        state.isLimitUsed = !state.isLimitUsed;
      },
      removeMember (state, index) {
        state.memberList.splice(index,1)
      }
    }
  })