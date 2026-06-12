class Bird
{
    fly()
    {
        return `Flying...`;
    }
}

class Penguine extends Bird
{
    fly()
    {
        return  `Can't fly`;
    }
}

let bird1 = new Bird();
let bird2 = new Penguine();

console.log(bird1.fly());
console.log(bird2.fly());
