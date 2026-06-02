/*NOTE:
Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.
*/

#include <bits/stdc++.h>
using namespace std;
int sum(int n)
{
    if (n == 0){ // base case
        return 0;
    }

    int prevSum = sum(n-1); // recursion
    return n + prevSum;
}

int main()
{
    int n;
    cin >> n;
    
    cout << "All numbers till n is: " << sum(n) << endl;

    return 0;
}