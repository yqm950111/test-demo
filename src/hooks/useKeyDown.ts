import {reactive,onMounted,toRefs} from 'vue'
function useKeyDown(){
    const keyWord = reactive({
        label:''
    })
    const keydown = (e:KeyboardEvent) =>{
        keyWord.label = e.key
        console.log(e.key)
    }
    const data = toRefs(keyWord)
    onMounted(() =>{
        document.addEventListener('keydown',keydown)
    })
    return {
        ...data
    }
}
export default useKeyDown