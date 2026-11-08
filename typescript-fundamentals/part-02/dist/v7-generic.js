//> Generic type function
const wrapInArray = (val) => {
    return [val];
};
const stringArr = wrapInArray("Chinmoy");
const numArr = wrapInArray(123);
stringArr.map((item) => item.toUpperCase());
const UserResponse = {
    data: {
        name: "Chinmoy",
        role: "admin",
    },
    response: true,
    statusCode: 200,
};
const blogRes = {
    data: {
        title: "first blog",
        description: "welcome to this blog",
        date: "22-10-2026",
    },
    response: false,
    statusCode: 300,
};
export {};
