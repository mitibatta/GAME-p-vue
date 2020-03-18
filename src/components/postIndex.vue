<template>
  <div class="posts-index-wrapper">
    <div class="container" v-for="post in res.posts" :key="post.id">
          <div class="post-parts">
            <h2 class="user-name"><a href="#" class="text">{{ res.users[post.user_id - 1].name }}</a></h2>
            <img :src="res.pictures[post.id - 1].image.url" v-show="res.pictures[post.id - 1].image.url" width="80%" height="80%">
            <video width="80%" height="80%" controls autobuffer="true" :src="res.pictures[post.id - 1].video.url" v-show="res.pictures[post.id - 1].video.url"></video>
            <p><a href="#" class="text">{{ post.text }}</a></p>
            <div v-if="logged_in == post.user_id">
              <ul class="user-only">
                <li><router-link :to="{name: 'postEdit', params: {id: post.id}}">編集</router-link></li>
                <li><a href="#" class="btn">削除</a></li>
              </ul>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const hostName = 'localhost:3000'
const path = '/api/posts'

export default {
  name: 'postIndex',
  data: function () {
    return {
      logged_in: 0,
      res: {
        posts: [],
        users: [],
        pictures: []
      }
    }
  },
  mounted: function () {
    axios.get(`http://${hostName}${path}`).then(result => {
      this.res = result.data
      console.log(result.data)
    }).catch(error => {
      console.log(error)
    })
    this.logged_in = this.$localStorage.get('loginUser')
    console.log(this.logged_in)
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

  .comment{
    width:460px;
    margin:0 auto;
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
}

</style>
