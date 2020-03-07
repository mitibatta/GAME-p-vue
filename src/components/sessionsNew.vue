<template>
  <div class="user-new-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-md-offset-4 col-md-4 form_box">
        <h1>サインイン</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">メールアドレス</label>
            <input type="text" id="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label for="password">パスワード</label>
            <input type="password" id="password" class="form-control" v-model="password">
          </div>
          <input type="submit" value="ログイン" class="btn-block btn-white">
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

const hostName = 'localhost:3000'
const path = '/api/sessions'

export default {
  name: 'sessionNew',
  data () {
    return {
      email: '',
      password: '',
      msg: '',
      userId: 0
    }
  },
  localStorage: {
    loginUser: {
      type: Number
    }
  },

  methods: {
    login () {
      axios.post(`http://${hostName}${path}`, {
        email: this.email,
        password: this.password
      }).then((result) => {
        this.$router.push('/')
        this.$emit('flash', (this.msg = result.statusText))
        this.userId = result.data
        this.$localStorage.set('loginUser', this.userId)
      }).catch(function (result) {
        this.$emit('flash', (this.msg = result.statusText))
      })
    }
  }

}
</script>

<style scoped lang="scss">
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
