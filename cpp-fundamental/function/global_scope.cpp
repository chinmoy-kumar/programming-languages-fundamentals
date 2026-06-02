/* NOTE:
1) A variable created outside of a function, is called a global variable and belongs to the global scope.
2) Global variables are available from within any scope, global and local:
*/

#include <bits/stdc++.h>
using namespace std;
// Global variable x
int x = 5;

void myFunction() {
  // We can use x here
    cout << x << "\n";
}

int main() {
    myFunction();

  // We can also use x here
    cout << x;
    return 0;
}