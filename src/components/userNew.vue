<template>
  <div class="user-new-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-md-offset-4 col-md-4 form_box">
        <h1>アカウント作成</h1>
        <form @submit.prevent="userCreate">
        <div class="form-group">
          <label for="name">名前</label>
          <input type="text" id="name" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input type="text" id="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label for="password">パスワード</label>
          <input type="password" id="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label for="password_confirmation">パスワード再入力</label>
          <input type="password" id="password_confirmation" class="form-control" v-model="password_confirmation">
        </div>
        <input type="submit" value="登録" class="btn-block btn-white">
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

const hostName = 'localhost:3000'
const path = '/api/users'

export default {
  name: 'userNew',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    userCreate() {
      api.post(`http://${hostName}${path}`, {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(result => {
        this.$router.push('/')
      }).catch(function (error) {
        console.log(error)
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

    .hidden-text{
  color:#555;
  font-size:12px;
  margin-top:20px;
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
