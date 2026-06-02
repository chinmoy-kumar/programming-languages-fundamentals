#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main()
{
    int arr[6] = {1, 2, 3, 4, 5, 6};
    reverse(arr, arr + 6);
    // it will count till arr+5
    for (int i = 0; i < 6; i++)
    {
        cout << arr[i] << endl;
    }

    string s = "Hello world";
    reverse(s.begin(), s.end());
    
    cout << s << endl;

    return 0;
}