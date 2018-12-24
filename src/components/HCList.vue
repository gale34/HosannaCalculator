<template>
  <v-container align-center justify-center row fluid>
    <ul>
      <li v-for="(member, index) in this.$store.state.memberList" v-bind:key="index" class="shadow">
        <v-layout class="ma-0 pa-0" xs5>
          <v-flex class="mx-1">
            <v-text-field
                height="24px"
                hide-details v-model.number="member.grade" label="학년" outline type="number"></v-text-field>
          </v-flex>
          <v-flex class="mx-1" xs5>
            <v-text-field
                hide-details v-model.number="member.count" label="명" outline type="number"></v-text-field>
          </v-flex>
          <v-flex align-self-center xs1 style="text-align: center;">
            <v-icon x-large color="green darken-2" @click="removeMember(index)">
              delete
            </v-icon>
          </v-flex>
        </v-layout>
      </li>
    </ul>
    <v-fab-transition>
      <v-btn
          color="blue darken-3"
          dark
          fab
          right
          absolute
          @click="addMember"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
  function Member(grade, count) {
    this.grade = grade;
    this.count = count;
  }

  export default {
    data() {
      return {};
    },
    created() {
    },
    methods: {
      addMember() {
        const newMember = new Member(0, 0);
        this.$store.commit("addMember", newMember);
      },
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

</style>
