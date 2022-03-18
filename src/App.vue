<template>
  <div class="container">
    <column-list :list="list"/>
  </div>
</template>
<script lang="ts">
 import { defineComponent } from "vue";
 import 'bootstrap/dist/css/bootstrap.min.css'
 import ColumnList,{ ColumnType } from "./components/ColumnList.vue";
 const data:ColumnType[] = [{
   id:'1', 
   description:'这是一条测试数据',
  title:'这是一个标题',
  avatar:'https://cdn.apifox.cn/app/project-icon/builtin/12.jpg'
 },
 {
   id:'2',
   description:'这是一条测试数据2',
  title:'这是一个标题2',
  avatar:'https://cdn.apifox.cn/app/project-icon/builtin/12.jpg'
 }
 
 ]
 export default defineComponent({
   components:{
     ColumnList
   },
   setup(){
     return{
       list:data
     }
   }
   
 })
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
