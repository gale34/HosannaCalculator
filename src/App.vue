<template>
  <div id="app">
    <HCHeader></HCHeader>
    <HCDefaultInput></HCDefaultInput>
    <HCList></HCList>
    <HCInput></HCInput>
    <HCFooter></HCFooter>
  </div>
</template>

<script>
import HCHeader from './components/HCHeader.vue'
import HCDefaultInput from './components/HCDefaultInput.vue'
import HCInput from './components/HCInput.vue'
import HCList from './components/HCList.vue'
import HCFooter from './components/HCFooter.vue'

export default {
  name: 'app',
  components: {
    HCHeader,
    HCDefaultInput,
    HCInput,
    HCList,
    HCFooter
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

.inputBox {
  background: white;
  height: 20px;
  line-height: 20px;
  width: 25%;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
</style>
