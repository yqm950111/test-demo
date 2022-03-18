const state = {
    token:'1111',
    name:'',
    id:''
}
const mutations = {
    SET_TOKEN:(state:any,token:string) =>{
        state.token = token
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