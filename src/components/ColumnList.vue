<template>
    <div class="row" ref="divs">
        <div v-for="(column,index) in list" :key="index" class="col-4">
            <img :src="column.avatar" alt="" style="width:30px;height:30px;">
            <h5>{{column.title}}</h5>
            <p>{{column.description}}</p>
            <a href="#">进入专栏</a>
            <button @click="handles"></button>
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent,PropType,ref ,computed,onMounted,onUnmounted} from "vue";
    import {useStore} from 'vuex'
    

    export interface ColumnType {
        id: string,
        avatar:string,
        description:string,
        title:string
    }

    export default defineComponent({
        name:'columnList',
        props:{
            list:{
                type:Array as PropType<ColumnType[]>,
                required:true
            }
        },
        setup(props){
            const store = useStore();
            let name = computed( () => 
                store.state.user.token
            )
            const handles = () =>{
                store.commit('SET_TOKEN','22222')
                console.log(name.value)
            }
            console.log(name.value)
            const divs = ref<null | HTMLElement>(null)
            const handle = (e:MouseEvent) =>{
                if(divs.value){
                    if(!divs.value.contains(e.target as HTMLElement)){
                        console.log(11111)
                    }
                }
            }
            onMounted( () =>{
                document.addEventListener('click',handle)
            })
            onUnmounted( () =>{
                document.removeEventListener('click',handle)
            })
            return{
                divs,
                handle,
                handles,
                setToken: () => store.commit('SET_TOKEN', new Date().getTime() / 1000),
            }
        }

    })
</script>