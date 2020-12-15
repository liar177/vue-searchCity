<template>
  <div id="app">
    <header>
      <input type="text"  v-model="in1">
    </header>
  <div class="content">
      <ul class="side-bar" >
        <li v-for="(it,suoyin) in jsonData" :key="suoyin"><a :href="'#'+suoyin">{{suoyin}}</a></li>
      </ul>

      
      <ul v-if='isShow'>
        <li class="item" v-for="(item,index) in jsonData" :key="index+'1'">
          <div :id="index" class="header-letter">{{index}}</div>
          <ul>
            <li  class="place" v-for='info in item' :key="info.id" :id="info.id">{{info.name}}</li>
          </ul>
        </li>
      </ul>
      <ul v-else>
        <li class="place" v-for='(i,s) in ids' :key="s">{{i.name}}</li>
      </ul>
    </div>
   <!--  <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <transition name="my" mode="out-in"><router-view /></transition>-->
  </div> 
</template>

<script>
export default {
   mounted:
  function () {
    this.$axios.get('city.json').then((res) => {
      // console.log(res.data)
      this.jsonData = res.data;
    })
  },
  watch: {
        in1: function (newval) {
          var arr = [];
          var test = [];
          console.log(newval)
          if (newval == 0) {
            this.ids = [];
            this.isShow = true;
          } else {
            for (var a in this.jsonData) {
              test = this.jsonData[a].filter(el => {
                //console.log(el.name)
                var exist = el.name.includes(newval);
                return exist;
              });
              test.length > 0 ? arr = arr.concat(test) : test = [];
            }
            this.ids = arr;
            this.ids.length > 0 ? this.isShow = false : this.isShow = true;
          }
          console.log(arr);
        }
      },
  data(){
    return{
      jsonData: null,
      ids:null,
      in1:null,
      isShow:true
    }
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
  .side-bar{
    position: fixed;
    right: 10px;
    top: 100px;
    li{
      list-style-type: none;
      font-size: 18px;
    }
  }
  .item{
    margin-bottom: 15px;
  }
  li.place{
    display: flex;justify-content: flex-start;align-items: center;
    margin-left: 50px;
    height: 30px;
    border-bottom:1px solid rgb(180, 179, 179)
  }
  .header-letter{
    display: flex;justify-content: flex-start;align-items: center;
    margin-left: 15px;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
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
