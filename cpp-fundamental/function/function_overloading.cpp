/* NOTE:
    1) With function overloading, multiple functions can have the same name with different parameters.
    2) Multiple functions can have the same name as long as the number and/or type of parameters are different.
*/

#include <bits/stdc++.h>
using namespace std;

int plusFunc(int x, int y)
{
    return x + y;
}

double plusFunc(double x, double y)
{
    return x + y;
}

int main()
{
    int myNum1 = plusFunc(8, 5);
    double myNum2 = plusFunc(4.3, 6.26);
    cout << "Int: " << myNum1 << "\n";
    cout << "Double: " << myNum2 << "\n";
    return 0;
}