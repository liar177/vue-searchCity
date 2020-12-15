<template >
  <div class="Login">
    <h1>请登录您的账号:</h1>
    {{msg}}------{{pwd}}
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
    return{
      msg:"Fazeclans1mple@qq.com",
      pwd:'123456'
    }

  }
}
</script>
<style lang="less" scoped>
  .Login{
    h1{
      color: rgb(183, 48, 236);
    }
  }
</style>
