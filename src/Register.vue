<template>
  <div class="Register">
    <h1>请注册您的账号:</h1>
    {{msg}}------{{pwd}}
  </div>
</template>

<script>
export default {
  name:'Register',
  data(){
    return{
      msg:"936633856",
      pwd:'123456'
    }

  }
}
</script>
<style lang="less" scoped>
  .Register{
    h1{
      color: rgb(5, 114, 114);
    }
  }
</style>