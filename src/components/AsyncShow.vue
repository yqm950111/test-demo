<template>
    <div>{{result}}</div>
</template>
<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name:'asyncShow',
        setup(){
            return new Promise((reslove) =>{
                setTimeout(() =>{
                    return reslove({
                        result:42
                    })
                },3000)
            })
        }
    })
</script>