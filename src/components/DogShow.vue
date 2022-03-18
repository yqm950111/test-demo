<template>
    <img :src="result && result.message"/>
</template>
<script lang="ts">
    import { defineComponent } from "vue";
    import axios from 'axios'
    export default defineComponent({
        name:'dogShow',
        async setup(){
            const rowData = await axios.get('https://dog.ceo/api/breeds/image/random')
            return {
                result:rowData.data
            }
        }
    })
</script>