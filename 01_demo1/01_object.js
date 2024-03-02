let user={
    id:1,
    userName:{
         firstName:"Anirban",
         lastName:"Pramanik"
    },
    email:"ap@git.com",
    password:1234
}
console.log("all details of users : "+user.userName);
console.log("Full name of user : "+user.userName.firstName+"  "+user.userName.lastName);
 console.log(`all details of users---->>> id: ${user.id}  username : ${user.firstName,user.lastName}  email : ${user.email}  password : ${user.password}`);