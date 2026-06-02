#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main()
{
    int a[5];
    for (int i = 0; i < 5; i++)
    {
        cin >> a[i];        
    }
    /*
    Syntax: sort(starting, ending);

    NOTE: ending point should be one more than the real ending point.
    e.g. if the ending point is index 5, then we will give 6 to the ending point.
    */

    // sort(a, a+5); // ascending order
    sort(a, a+5, greater<int>()); //decending order

    for (int i = 0; i < 5; i++)
    {
        cout << a[i] << " ";
    }

    return 0;
}