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

   // char array or string
   // ----------------------
    for(char c : s){
        cout << c << endl;
    }

    /* int array:
    --------------
    int a[5] = {1, 2, 3, 4, 5};
    for(int x : a){
        cout << x << endl;
    }
    */
    
    // NOTE: This method can be used for anyother datatype of array where we don't need to customize the index.

    return 0;
}