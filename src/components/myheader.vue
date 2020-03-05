<template>
<div class="headder">
    <nav class="navbar">
        <router-link to="/">
          <img class="logo" src="../assets/image/logo.png" alt="ロゴ画像">
        </router-link>
      <!-- <% if logged_in? %> -->
      <ul class="nav-item">
        <li><a href="#">投稿一覧</a></li>
        <li><router-link to="/user/new">アカウント作成</router-link></li>
        <li><a href="#">ログイン</a></li>
      </ul>
      <!-- <% else %> -->
        <!-- <ul class="nav-item">
          <li><%= link_to "投稿を見る", posts_path %></li>
          <li><%= link_to "アカウント作成", new_user_path %></li>
          <li><%= link_to "ログイン", login_path %></li>
        </ul> -->
        <!-- <% end %> -->
    </nav>
</div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style scoped lang="scss">
.headder{
  width:100%;
  font-size:16px;
  .navbar{
    background-color:#444;
    height:75px;
    padding:0;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    border: 1px solid transparent;
    border-width: 0 0 1px;
    .logo{
      margin-top:10px;
    }
  }
  .nav-item{
    display:flex;
    list-style:none;
    float:right;
    margin:0;
    li{
      padding-right:15px;
      line-height:67px;
      a{
        display:inline-block;
        height:67px;
        text-decoration:none;
        color:white;
        &:hover{
          background-color:rgba(0,0,0,0.3);
        }
      }
    }
  }
}

</style>
