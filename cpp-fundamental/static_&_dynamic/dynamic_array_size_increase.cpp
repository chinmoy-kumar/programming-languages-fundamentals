#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    // initial array
    int *a = new int[3];
    for (int i = 0; i < 3; i++)
    {
        cin >> a[i];
    }

    // increase size of array
    int *b = new int[5];
    for (int i = 0; i < 5; i++)
    {
        b[i] = a[i];
    }
    b[3] = 40;
    b[4] = 50;

    // delete initial array
    delete[] a;
    
    for (int i = 0; i < 5; i++)
    {
        cout << b[i] << " ";
    }

    return 0;
}
