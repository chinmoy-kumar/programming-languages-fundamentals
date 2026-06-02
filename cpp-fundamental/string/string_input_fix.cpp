#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main()
{
    // NOTE: if there is any other data type's input taken before getline with an enter, then getline counts the enter also before taking the input of the string.

    int x;
    cin >> x;
    string s;
    cin.ignore(); // ignore the enter after int input
    getline(cin, s);
    
    cout << x << endl;
    cout << s << endl;

    return 0;
}