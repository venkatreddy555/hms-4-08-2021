
const initialState:User = {
    UserId:0,
    Username: '',
    UserRoleId:0,
    Name:'',
    age: 0,
    ImagePath:'',
    MobileNumber:'',
    IsActive:false
}

export const userReducer = (state:User = initialState, action:Action<User>) => {
    if(action.type === 'RANDOM'){
        
    }
    return state;
}