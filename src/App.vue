<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 ref="name">{{ name }}</h1>
  <!-- Click event modifiers -->
  <button @click.self="handleClick">Click me</button>
  <HelloWorld :msg="message" @log="log" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      name: 'Gideon Idoko',
      message: 'The name of the lord is as strong tower'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
    },
    log() {
      console.log('Some random logging');
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
