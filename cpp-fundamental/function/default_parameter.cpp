/* NOTE:
    1) You can also use a default parameter value, by using the equals sign (=). If we call the function without an argument, it uses the default value.
    2) A parameter with a default value, is often known as an "optional parameter". From the example above, country is an optional parameter and "Bangladesh" is the default value.
*/

#include <bits/stdc++.h>
using namespace std;
void myFunction(string country = "Bangladesh")
{
    cout << country << "\n";
}

int main()
{
    myFunction("Sweden");
    myFunction("India");
    myFunction(); // here default value will be print
    myFunction("USA");
    return 0;
}

// OUTPUT:
// Sweden
// India
// Bangladesh
// USA