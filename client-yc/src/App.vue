<template>
  <div id="app" style="height: 100%; padding: 0px; background-color: #F6F6F6; margin: 0; overflow-x: hidden;overflow-x: hidden; ">
    <Toolbar></Toolbar>
    <router-view></router-view>
  </div>
</template>
<style>
  html {
    height: 100%; overflow: hidden;
  }
</style>
<script>
import Toolbar from './components/Toolbar.vue'
export default {
  components: {
    Toolbar
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
</style>
