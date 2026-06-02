#include <bits/stdc++.h>
using namespace std;
int main(){
    // Static Variable 
    // Static variables get deleted automatically after return from the function.
    int x = 10;
    cout << x << endl;

    // Dynamic Variable
    // Dynamic variables don't get deleted automatically after return from the function.
    int *p = new int; // Here new return a heap memory location which need to be store in a pointer.
    *p = 100;
    cout << *p << endl;

    //Delete a variable
    int *a = new int;
    *a = 10;
    cout << "before detele: " << *a << endl;
    delete a;
    cout << "after delete: " << *a << endl;

    return 0;
}