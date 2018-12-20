<template>
  <div>
    <ul>
      <li v-for="(member, index) in this.$store.state.memberList" v-bind:key="index" class="shadow">
        <input type="number" v-model="member.grade" class="inputBox"> 학년
        <input type="number" v-model="member.count" class="inputBox"> 명
        <span class="removeBtn" @click="removeMember(index)">
            <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    removeMember(index) {
        this.$store.commit('removeMember', index)
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
