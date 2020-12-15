<template>
  <div id="app">
    <header>
      <input type="text"  v-model="in1">
    </header>
  <div class="content">
      <sidebar :isclick='c' id="sidebar"></sidebar>
      <mainList :input='in1'></mainList>
      
    
    </div>
  </div> 
</template>

<script>

import mainList from './MainList.vue'
import sidebar from '@/SideBar'

export default {

  data(){
    return{
      in1:null,
      c:false
    }
  },
  components:{
    mainList,
    sidebar
  },
  mounted:function(){
    console.log(this.$children[0])//sidebar
  }
}
</script>
<style lang="less">
 *{
  padding: 0;
  margin:0;
} 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
  width: 100%;
  height: 50px;
  background-color: rgb(53, 156, 240);
  display: flex;justify-content: center;align-items: center;
  /* position: fixed;left: 0;top:0; */
  input{
    width: 200px;
    height: 30px;
    outline: none;
    border:1px solid rgb(250, 158, 37);
    font-size: 14px;
    border-radius: 5px;
  }
}
.content{
  margin-top: 50px;
  width: 100%;
  #sidebar{
    position: fixed;
    right: 10px;
    top: 100px;
  }
  
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.my-enter-active,
.my-leave-active{

  transition: opacity .5s;

}
.my-enter, 
.my-leave-to  {
  opacity: 0;
}
</style>
