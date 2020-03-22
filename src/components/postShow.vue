<template>
  <div class="posts-index-wrapper">
    <div class="container">
      <div class="post-parts">
        <h2 class="user-name"><a href="#" class="text">{{ res.user }}</a></h2>
        <img :src="res.picture.image.url" v-show="res.picture.image.url" width="80%" height="80%">
        <video width="80%" height="80%" controls autobuffer="true" :src="res.picture.video.url" v-show="res.picture.video.url"></video>
        <p class="text text-body">{{ res.post.text }}</p>
        <ul class="public">
              <li><likebtn :post-id="res.post.id" :logged_in="logged_in" :post-fav="postFav"></likebtn></li>
              <li></li>
            </ul>
        <div v-if="logged_in == res.post.user_id">
            <ul class="user-only">
              <li><router-link :to="{name: 'postEdit', params: {id: res.post.id}}">編集</router-link></li>
              <li><deletebtn :post-id="res.post.id" @deletepost="deletePost"></deletebtn></li>
            </ul>
          </div>
          <div class="comment-t">
          <h1 class="comment-title">コメント</h1>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import likebtn from './likebtn'
import deletebtn from './deletebtn'

const hostName = 'localhost:3000'
const path = '/api/posts'
const path1 = '/api/favorites'

export default {
  name: 'postShow',
  components: {
    'likebtn': likebtn,
    'deletebtn': deletebtn
  },
  data: function () {
    return {
      logged_in: 0,
      id: 0,
      postFav: [],
      res: {
        post: {},
        picture: {},
        user: ''
      },
      response: {
        message: ''
      }
    }
  },
  mounted: function () {
    this.logged_in = this.$localStorage.get('loginUser')
    this.id = this.$route.params['id']
    console.log(this.id)
    axios.get(`http://${hostName}${path}/${this.id}`).then(result => {
      this.res = result.data
      console.log(result.data)
    }).catch(error => {
      console.log(error)
    })
    axios.get(`http://${hostName}${path1}/userIndex/${this.logged_in}`).then(result => {
      this.postFav = result.data
      console.log(result.data)
    }).catch(error => {
      console.log(error)
    })
  },

  methods: {
    postDelete (id) {
      axios.delete(`http://${hostName}${path}/${id}`).then(result => {
        this.$router.push('/post/index')
        this.response = result.data
        this.$emit('flash', (this.response.message))
      }).catch(error => {
        console.log(error)
      })
    },
    deletePost (msg) {
      this.response.message = msg
      this.$emit('flash', (this.response.message))
    }
  }
}
</script>

<style scoped lang="scss">
.posts-index-wrapper{
  background-color:#ddd;
  padding-top:80px;

  h1{
    font-size:38px;
  }
  .text-center{
    text-align:center;
  }
  .post-parts{
    margin:20px auto 0 auto;

    background-color:white;
    padding-bottom: 20px;
    padding-top:20px;
    // border: 3px solid #777;
    border-radius:5px;
    text-align:center;
    width: 80%;

    img {
      margin-top: 10px;
      margin-bottom: 20px;
      // width: 80%;
    }
  }
  ul{
    list-style:none;
    display:flex;

    .icon{
      width:40px;
      height:40px;
      margin-top:30px;
    }
  }
  .user-only{
    justify-content:flex-end;
    li {
      margin-right: 18px;
      font-size: 15px;
    }
  }

  .public{
    justify-content:space-around;
  }

  .text{
    text-decoration:none;
    color:#000;
  }

  .none{
    text-decoration:none;
  }

  .image{
    width:90%;
    height:auto;
  }

  .comment-title{
    border-bottom: 2px solid #ddd;
    padding-bottom:10px;
    width:930px;
    margin:0 auto;
  }
  .text-body{
    font-size: 25px;
  }

  .comment{
    width:460px;
    h2{
      font-size:24px;
    }
    p{
      font-size:20px;
    }
  }
  .border{
    height:3px;
    width:930px;
    margin:0 auto;
     border-bottom: 2px double #999;
  }
  .comment-t{
    display: flex;
    justify-content: space-around;
  }
}

</style>
