<template>
  <div class="home">
    
    <button @click="doubleClick">点击我</button>
  </div>
  
</template>

<script lang="ts">
import {defineComponent,watch} from 'vue'
import useUrlLoader from '../hooks/useUrlLoader'
import useMousePosition from '../hooks/useMousePosition'
import useKeyDown from '../hooks/useKeyDown'
interface Dog{
  message:string;
  status:string;
}
export default defineComponent({
  name: 'HomeView',
  emits:{
    'close-modal': null
  },
  setup(props,context){
    const {x,y} = useMousePosition()
    const {label} = useKeyDown()
    console.log(label)
    const doubleClick = () =>{
      context.emit('close-modal',11111)
      }
    const {result,error,loading,loaded} = useUrlLoader<Dog>('https://dog.ceo/api/breeds/image/random')
    watch(result,() =>{
      if(result.value){
        console.log(result.value.message)
      }
      
    }) 
    return{
     x,
     y,
     result,
     error,
     loading,
     loaded,
     doubleClick
    }
  }
});
</script>
