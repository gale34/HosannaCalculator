<template>
  <div id="app">
    <v-app>
      <HCHeader></HCHeader>
      <v-content>
        <HCDefaultInput></HCDefaultInput>
        <v-divider></v-divider>
        <HCList></HCList>
        <v-divider></v-divider>
        <HCFooter></HCFooter>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import HCHeader from './components/HCHeader.vue'
  import HCDefaultInput from './components/HCDefaultInput.vue'
  import HCList from './components/HCList.vue'
  import HCFooter from './components/HCFooter.vue'

  export default {
    name: 'app',
    components: {
      HCHeader,
      HCDefaultInput,
      HCList,
      HCFooter
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }


</style>
