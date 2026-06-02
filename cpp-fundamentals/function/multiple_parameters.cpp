/* NOTE: 
Note that when you are working with multiple parameters, the function call must have the same number of arguments as there are parameters, and the arguments must be passed in the same order.
*/

#include <bits/stdc++.h>
using namespace std;
void myFunction(string fname, int age)
{
    cout << fname << " Refsnes. " << age << " years old. \n";
}

int main()
{
    myFunction("Liam", 3);
    myFunction("Jenny", 14);
    myFunction("Anja", 30);
    return 0;
}
