export class User {
    id:number;
    email:String;
    first_name:String;
    last_name:String;
    avatar:String;

    constructor(id:number,email:String,first_name:String,last_name:String,avatar:String) {
        this.id=id;
        this.email=email;
        this.first_name=first_name;
        this.last_name=last_name;
        this.avatar=avatar;
    }
}

// export class User {
//     _id:String;
//     username:String;
//     firstname:String;
//     lastname:String;
//     avatar:String;
//     password:String

//     constructor(_id:String,username:String,firstname:String,lastname:String,avatar:String,password:String) {
//         this._id=_id;
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.avatar=avatar;
//         this.avatar=avatar;
//     }
// }