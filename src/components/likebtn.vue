<template>
  <img class="icon" src="../assets/image/heart-red.png" @click="likeDelete" v-if="postFav.filter(e => e.id == postId)[0]">
  <img class="icon" src="../assets/image/heart-black.png" @click="likePost" v-else>
</template>

<script>
import axios from 'axios'

const hostName = 'localhost:3000'
const path = '/api/favorites'
export default {
  name: 'likebtn',
  data: function () {
    return {
      change: 0
      // post: []
    }
  },
  props: {
    'logged_in': {
      type: String,
      default: ''
    },
    'postId': {
      type: Number,
      default: 0
    },
    'postFav': {
      type: Array,
      default: ''
    }
  },
  // mounted: function () {
  //   axios.get(`http://${hostName}${path}/userIndex/${this.logged_in}`).then(result => {
  //     this.post = result.data
  //     console.log(this.post)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // },
  watch: {
    change: function () {
      axios.get(`http://${hostName}${path}/userIndex/${this.logged_in}`).then(result => {
        this.postFav = result.data
        console.log(result.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  methods: {
    likePost () {
      axios.post(`http://${hostName}${path}`, {
        user_id: this.logged_in,
        post_id: this.postId
      }).then(result => {
        // this.$router.push('/post/index')
        this.change += 1
        this.$emit('sendURL')
        console.log(this.postId)
      }).catch(error => {
        console.log(error)
      })
    },
    likeDelete () {
      axios.delete(`http://${hostName}${path}/${this.postId}`, {
        data: {user_id: this.logged_in, post_id: this.postId}
      }).then(result => {
        // this.$router.push('/post/index')
        this.change += 1
        this.$emit('sendURL')
      }).catch(error => { console.log(error) })
    }
  }
}
</script>

<style>
.icon{
      width:40px;
      height:40px;
      margin-top:30px;
    }

button{
  background-color:white;
}
</style>
