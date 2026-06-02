/* NOTE:
1) In C++, variables are only accessible inside the region they are created. This is called scope.
2) A local variable cannot be used outside the function it belongs to.
*/

#include <bits/stdc++.h>
using namespace std;
void myFunction()
{
    // Local variable that belongs to myFunction
    int x = 5;

    // Print the variable x
    cout << x;
}

int main()
{
    myFunction();
    return 0;
}
