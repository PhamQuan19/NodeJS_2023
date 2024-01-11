const login =async ({email, password}) =>{
    console.log('login user in user repository haha')
}

const register =async ({
    name,
    email,
    password,
    phoneNumber,
    address
}) =>{

    console.log('register user with: name: '+name+'email'+email+'password'+password+'phone'+phoneNumber+'address'+address);
}

export default{
    login,
    register
}

