<template>
  <div id="app">
    <flashMsg :msg="msg" v-if="show"></flashMsg>
    <myheader @flash="emitEvent"></myheader>
    <router-view @flash="emitEvent"/>
  </div>
</template>

<script>
import myheader from './components/myheader'
import flashMsg from './components/flashMsg'

export default {
  name: 'App',
  components: {
    myheader,
    flashMsg
  },
  data () {
    return {
      msg: '',
      show: false
    }
  },
  methods: {
    emitEvent (msg) {
      this.msg = msg
      this.show = true
      setTimeout(() => {
        this.show = false }
        , 3000)
    }
  }
}
</script>

<style>
body{
  font-family: monospace, san-selif;
  font-size: 18px;
}
</style>
