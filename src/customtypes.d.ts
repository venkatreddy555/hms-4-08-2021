type User ={
    UserId:number;
    Username: string;
    UserRoleId:number;
    Name:string;
    age: number;
    ImagePath:string;
    MobileNumber:string;
    IsActive:boolean;
}

type Action<T> = {
    type: string
    data: T
}
