 
import BaseService from "./BaseService.js";
 export class UserServiceImp extends BaseService {

    static ins;

    users = [
        {
            "firstName":"Jean",
            "lastName":"Max",
            "age":18
        }
       ];

    constructor(){ }

    static builder(){
        if(this.ins == undefined){
            this.ins = new UserServiceImp();
        }
       return this.ins;
    }

    all(){
       return this.users;
    }

    add(data){
       this.users.push(data); 
       return 
     }
 }