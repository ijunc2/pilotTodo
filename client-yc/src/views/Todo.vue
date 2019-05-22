<template>
    <div class="todo">
        <Pipeline></Pipeline>
    </div>
</template>

<script>
    import Pipeline from '../components/Pipeline';

    export default {
        components: {
          Pipeline
        },
        created() {
            this.$store.dispatch('');
        }
    }
</script>

<style>
    .todo {
        height: 100%;
        padding: 0px;
        background-color: #F6F6F6;
        overflow-x: hidden;
        overflow-x: hidden;
        display: flex;
        align-items: center;
        overflow-x: hidden;
        justify-content: center;
        margin-top: 10px;
    }
</style>