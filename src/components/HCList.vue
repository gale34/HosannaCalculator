<template>
  <v-container>
    <ul>
      <li v-for="(member, index) in this.$store.state.memberList" v-bind:key="index" class="shadow">
        <v-layout class="ma-0 pa-0">
          <v-flex class="mx-1">
            <v-text-field
                height="24px"
                hide-details v-model.number="member.grade" label="학년" outline type="number"></v-text-field>
          </v-flex>
          <v-flex class="mx-1">
            <v-text-field
                hide-details v-model.number="member.count" label="명" outline type="number"></v-text-field>
          </v-flex>
          <v-flex align-self-center>
            <v-icon x-large color="green darken-2" @click="removeMember(index)">
              delete
            </v-icon>
          </v-flex>
        </v-layout>
      </li>
    </ul>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {};
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

</style>
