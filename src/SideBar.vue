<template>
  <div>
    <ul class="side-bar" >
        <li  @click='getclicked(suoyin)' v-for="(it,suoyin) in jd" :key="suoyin"><a :class="suoyin" :href="'#'+suoyin">{{suoyin}}</a></li>
      </ul>
  </div>
</template>
<script>

export default {
  name:'sidebar',
 // props:['isclick'],
  created() {
        this._Observer.$on('getjd', (arg) => {
          this.jd = arg   //接受jsonData
        })
      },
  data(){
    return{
      jd:null,
      isclick:false
    }
  
  },
  methods:{
    getclicked(suoyin){
      var a=document.getElementsByTagName("a");
      for(var i=0;i<a.length;i++){
        a[i].style.color=''
        document.getElementsByClassName(suoyin)[0].style.fontSize='18px'
      }
      
      document.getElementsByClassName(suoyin)[0].style.color='rgb(240, 6, 6)'
      document.getElementsByClassName(suoyin)[0].style.fontSize='22px'
    }
  }
}
</script>
<style lang="less">
    li{
      list-style-type: none;
      font-size: 18px;
    }

    a{
      text-decoration: none;
      font-size: 18px;
    }
</style>