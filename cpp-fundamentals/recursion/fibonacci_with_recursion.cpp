#include <bits/stdc++.h>
using namespace std;\
int fib(int n){
    /* if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }*/

    // or, 
    if(n == 0 || n == 1){
        return n;
    }

    return fib(n-1) +  fib(n-2);
}
int main(){
    int n;
    cout << "Enter a number: ";
    cin >> n;

    int result = fib(n);
    cout << "The result is: " << result << endl;

    return 0;
}