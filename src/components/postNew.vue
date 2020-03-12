<template>
  <div class="user-new-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-md-offset-4 col-md-4 form_box">
        <h1>投稿する</h1>
      <form @submit.prevent="createPost">
        <div class="form-group">
          <label for="image">画像</label>
          <input type="file" name="image" id="image" accept=".jpg, .jpeg, .gif, .png" @change="selectedImage">
        </div>
        <div class="form-group">
          <label for="video">動画</label>
          <input type="file" name="video" id="video" accept=".mp4" @change="selectedVideo">
        </div>
        <div class="form-group">
          <label for="text">テキスト</label>
          <textarea rows="6" cols="18" id="text" name="text" class="form-control form-text" v-model='text'></textarea>
        </div>
        <input type="submit" value="投稿" class="btn-block btn-white" v-if="logged_in > 0">
      </form>
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
  name: 'postNew',
  data: function () {
    return {
      uploadImage: null,
      uploadVideo: null,
      text: '',
      logged_in: 0,
      res: {
        message: ''
      }
    }
  },
  created: function () {
    this.logged_in = this.$localStorage.get('loginUser')
  },
  methods: {
    selectedImage (e) {
      e.preventDefault()
      let files = e.target.files
      this.uploadImage = files[0]
      console.log(this.uploadImage)
    },
    selectedVideo (e) {
      e.preventDefault()
      let files = e.target.files
      this.uploadVideo = files[0]
      console.log(this.uploadVideo)
    },
    createPost () {
      console.log(this.text)
      let formdata = new FormData()
      formdata.append('image', this.uploadImage)
      formdata.append('video', this.uploadVideo)
      formdata.append('text', this.text)
      console.log()
      // let config = {
      //   headders: {
      //     'content-type': 'multipart/form-data'
      //   }
      // }
      axios.post(`http://${hostName}${path}`, {
        formdata
      }).then((result) => {
        this.$router.push('/')
        this.res = result.data
        this.$emit('flash', (this.res.message))
      }).catch((result) => {
        this.$router.push('/post/new')
        this.res = result.data
        this.$emit('flash', (this.res.message))
      })
    }
  }
}
</script>

<style lang="scss">
.user-new-wrapper{
  background-color:#ddd;
  height:780px;

.form_box{
  margin-top:150px;
  margin-left:350px;

  .form-control{
    height:35px;
  }
  .form-group{
    margin-bottom:20px;
    p{
      font-size:12px;
      color:red;
    }

  }
  .btn-block{
    height:35px;
    margin-top:50px;
  }
  h1{
    margin-bottom:45px;
  }
  .form-text{
    resize:vertical;
    max-height:300px;
    min-height:80px;
  }
}

}
</style>
