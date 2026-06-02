/*
Constructor Overloading:
    - Overloaded constructors essentially have the same name (exact name of the class) and different by number and type of arguments.
    - A constructor is called depending upon the number and type of arguments passed.
    - While creating the object, arguments must be passed to let compiler know, which constructor needs to be called. 
*/

#include <bits/stdc++.h>
using namespace std;
class Complex{
    public:
        int a, b;

        Complex(){
            a = 0;
            b = 0;
        }
        Complex(int x, int y){
            a = x;
            b = y;
        }
        
        Complex(int x){
            a = x;
            b = 0;
        }

        void printNumber(){
            cout << "Your number is: " << a << "+" << b << "i" << endl;
        }
};

int main(){
    Complex c1(4, 6);
    c1.printNumber();

    Complex c2(5);
    c2.printNumber();

    Complex c3;
    c3.printNumber();

    return 0;
}