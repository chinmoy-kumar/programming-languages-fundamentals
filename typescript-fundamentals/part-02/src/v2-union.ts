//> Literal type
//- works as a seperate data type which only supports 'Pending' as an input
type Status = 'Pending';
const status : Status = 'Pending';

//> Basic Union
type identity = string | number;
// const id : identity = 'chinmoy'; // valid
const id : identity = 123;  // valid
console.log(id);

//> Literal Union
type Role = 'user' | 'admin' | 'manager';
const userRole : Role = 'manager';
console.log(userRole);

//> Object Union
type Admin = {id : number, role : 'admin', previlileges : string[]}
type Manager = {id: number, role : 'manager', plans : string[]}

type User = Admin | Manager;  // User type contains Admin and Manager types

const user : User = {id: 123, role: 'admin', previlileges: ['abc', 'def']};