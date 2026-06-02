#include <bits/stdc++.h>
using namespace std;

class Animal{
    public:
        bool alive = true;
    void eat(){
        cout << "This animal is eating" << endl;
    }
};

class Dog : public Animal{
    public:
    
    void bark(){
        cout << "The dog goes woof!" << endl;
    }
};

class Cat : public Dog{
    public:
    
    void meow(){
        cout << "The cat goes meow!" << endl;
    }
};

int main(){
    Cat tom;

    cout << tom.alive << endl;
    tom.eat();
    tom.meow();
    tom.bark();
}