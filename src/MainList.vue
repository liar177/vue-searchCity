<template>
  <div class="main-list"><!-- 显示主要的地名和大写字母列表 -->
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
</template>
<script>

export default {
  name:'mainList',
  mounted:
  function () {
    this.$axios.get('city.json').then((res) => {
      // console.log(res.data)
      this.jsonData = res.data;
      this._Observer.$emit('getjd', this.jsonData)
    })
  },
  watch: {
        input: function (newval) {
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
  props:['input'],
  data(){
    return{
      jsonData:null,
      ids:null,
      isShow:true
    }
  },
}
</script>
<style lang="less">
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
</style>