import { 
    OutputType,
    print
} from "../helpers/print.js"

const login =async ({email, password}) =>{
    print('login user in user repository haha', OutputType.INFORMATION)
}

const register =async ({
    name,
    email,
    password,
    phoneNumber,
    address
}) =>{

    print('register user with: name: '+name+'email'+email+'password'+password+'phone'+phoneNumber+'address'+address, OutputType.INFORMATION);
}

export default{
    login,
    register
}

