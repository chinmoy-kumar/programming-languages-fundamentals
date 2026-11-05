//NOTE: Type assertion means change the type forcefully
//NOTE: Always use assertion carefully. Try to avoid using assertion unless you are
const someStatus = "pending";
const getStatus = (status) => {
    console.log(`Your application is: ${status}`);
};
getStatus(someStatus);
const config = {
    port: 5000,
};
//  const currentPort: number = config.port!;
//or, const currentPort: number = config.port as number;
//- '!' here means that it has no chance to get 'undefined' or 'null' here.
//> Constant assertion
//- this makes the object constant or readonly
const configuration = {
    port: 8080,
    prefix: "./api/v1",
};
export {};
// configuration.port = 8090;   //! invalid
