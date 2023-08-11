const DOM = process.env.DOMAIN;

export const getUsers = async() => {
    const res = await fetch(`${DOM}/api/users/allusers`);
     return res.json(); 
}