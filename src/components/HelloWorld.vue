<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button>点击发送</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
    
  props: {
    msg: {
      type:String,
      required:true
    }

  },
  setup(props,context){
    console.log(props)
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
