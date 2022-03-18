import {ref} from 'vue'
import axios from 'axios'
function useUrlLoader<T> (url:string){
    const result = ref< T|null>(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)
    axios.get(url).then((rawData) =>{
        result.value = rawData.data
        loaded.value = true
        loading.value = false
    }).catch(e =>{
        error.value = e
        loading.value = false
    })
    return{
        result,
        loaded,
        loading,
        error
    }
}
export default useUrlLoader