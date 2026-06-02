#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    // int a[5]; Static array
    int *a = new int[5]; // Dynamic array
    // Here new return a heap memory location of the first array element which need to be store in a pointer.
    for (int i = 0; i < 5; i++)
    {
        cin >> a[i];
    }
    for (int i = 0; i < 5; i++)
    {
        cout << a[i] << " ";
    }
    cout <<  endl;

    return 0;
}

/*
Difference:
    Static Array:
        1) Array size cannot be changed.
        2) Array will be deleted automatically after function return.
    Dynamic Array:
        1) Array size can be changed.
        2) Array will not be deleted automatically after function return.
*/

