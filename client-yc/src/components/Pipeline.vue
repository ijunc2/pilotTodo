<template>
  <div class="pipeline">
    <Card ></Card>
    <Card ></Card>
  </div>
</template>

<script>
  import Card from '../components/Card';
  export default {
    components: {
      Card
    }
  }
</script>

<style scoped>
  .pipeline {
    background-color: #EAEAEA;
    height: 80%;
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>