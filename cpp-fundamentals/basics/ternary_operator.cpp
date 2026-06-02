#include <iostream>
using namespace std;
int main(){
    int x = 22; 
    // NOTE: Ternary actually a shortcut of if else.
    // N.B: This is only  aplicalble if the if and else has one statement and there is no else if.
    // Syntax: (condition) ? Ture : False
    
    (x % 2 == 0) ? cout << "Even\n" : cout << "Odd\n"; 

    return 0;
}

