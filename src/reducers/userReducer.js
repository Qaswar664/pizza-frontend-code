export const registerUserReducer =(state={},action)=>{
switch (action.type) {
    case "USER_REGISTER_REQUES":
        return{
            loading:true
        }
        
    case "USER_REGISTER_SUCCESS":
        return{
            loading:false,
            success:true
        }
        case "USER_REGISTER_Fail":
        return{
            loading:false,
            error:action.payload
        }

    default:
        return{
            state
        }
}
}