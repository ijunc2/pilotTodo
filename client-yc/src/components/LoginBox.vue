<template>
    <div class="loginbox">
        login
        <div>
            {{this.$store.state.user.name}}
        </div>
        <input v-model="user.name"/>
        <button @click="e => sign(e)">button Click</button>
    </div>
</template>

<script>
    import axios from 'axios';
  export default {
    data(){
      return {
        name: '',
        user: {
          name: 'useasdme'
        }
      }
    },
    methods: {
      clickAlert: function(e){
        axios.post('/api/login', {name: this.user.name})
          .then(res => {
            this.user = res.data.user
            // this.$router.push({
            //   path: 'todo'
            // });

          }).catch(err => {
        })
      },
      sign: function(){
        this.$store.dispatch('WHO_AM_I', {
          name: this.user.name,
          func: () => {
            this.$router.push({
              path: 'todo'
            });
          }
        })
      }

    }
  }
</script>

<style scoped>

</style>