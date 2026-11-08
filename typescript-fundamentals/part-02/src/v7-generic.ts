//> Generic type function
const wrapInArray = <T>(val: T) => {
    return [val];
};

const stringArr = wrapInArray<string>("Chinmoy");
const numArr = wrapInArray<number>(123);

stringArr.map((item) => item.toUpperCase());

//> Generic interface

interface IUser {
    name: string;
    role: string;
}

interface IBlog {
    title: string;
    description: string;
    date: string;
}

interface IApiResponse<T> {
    data: T;
    response: boolean;
    statusCode: number;
}


const UserResponse: IApiResponse<IUser> = {
    data: {
        name: "Chinmoy",
        role: "admin",
    },
    response: true,
    statusCode: 200,
};

// or,

type BlogResponse = IApiResponse<IBlog>;

const blogRes: BlogResponse = {
    data:{
        title: "first blog",
        description: "welcome to this blog", 
        date: "22-10-2026",
    },
    response: false,
    statusCode: 300,
}
