import {reactive,onMounted,onUnmounted,toRefs} from 'vue'

function useMousePosition (){
    const positionData = reactive({
        x:0,
        y:0
    })
    

    const mouse = (e:MouseEvent) =>{
        positionData.x = e.pageX
        positionData.y = e.pageY
    }
    onMounted( () =>{
      document.addEventListener('click',mouse)
    })
    onUnmounted( () =>{
      document.removeEventListener('click',mouse)
    })
    const data = toRefs(positionData)
    return {
        ...data
    }
}
export default useMousePosition