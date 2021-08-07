type User ={
    UserId:number | null;
    Username: string;
    UserRoleId:number | null;
    Name:string;
    age: number | null;
    ImagePath:string;
    MobileNumber:string;
    IsActive:boolean;
}

type Action<T> = {
    type: string
    data: T
}
