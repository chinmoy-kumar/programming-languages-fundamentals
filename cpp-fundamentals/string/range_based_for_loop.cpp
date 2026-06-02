#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    string s;
    cin >> s;
    // for (int i = 0; i < s.size(); i++)
    // {
    //     cout << s[i] << endl;
    // }

    // we can do this in a shortcut way of loop
    /*syntax:
    ----------
    for (dataType new_variable_name : declared_variable_name)
    {
        code Here
    }
    */

    for(char c : s){
        cout << c << endl;
    }
    
    // NOTE: This method can be used for anyother datatype of array where we don't need to customize the index.

    return 0;
}