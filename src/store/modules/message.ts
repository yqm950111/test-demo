const state = {
    token:'',
    name:'',
    id:''
}
const mutations = {
    SET_TOKEN1:(state:any,name:string) =>{
        state.name = name
    }
}

const action = {

}
export default {
    namespace:true,
    state,
    mutations,
    action
}