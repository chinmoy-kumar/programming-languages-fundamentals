#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    /*
    NOTE:
        condition is an expression that is evaluated first.
        If the result of the evaluation of condition  is TRUE (nonzero), then expression1
        is evaluated and the result of the evaluation becomes the result of the operation.
        If condition is FALSE (zero), then expression2 is evaluated and its result 
        becomes  the result of the operation
    */

    /* This is a shortcut way of writting if-else */

    /* Syntax: condition ? expression1 : expression2 */

    int maxValue, a, b;
    a = 6;
    b = 2;

    maxValue = (a > b) ? a : b;
    cout << maxValue << endl;

    /*  Equivalent to: 
        if(a > b)
            maxValue = a;
        else
            maxValue = b;
        
        cout << maxValue << endl;
    */


    return 0;
}