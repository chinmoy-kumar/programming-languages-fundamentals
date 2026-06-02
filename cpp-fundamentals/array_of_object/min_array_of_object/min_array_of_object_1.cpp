// This program prints the minimum mark among the students.

#include <bits/stdc++.h>
#include <iostream>
using namespace std;
class Student{
    public:
    string name;
    int roll;
    int marks;
};
int main(){
    int n;
    cin >> n;
    Student a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i].name >> a[i].roll >> a[i].marks;
    }

    int minMark = INT_MAX;
    for (int i = 0; i < n; i++)
    {
        minMark = min(a[i].marks, minMark);
    }
    cout << minMark << endl;

    
    return 0;
}

/* Sample Input 
        6
        sakib 16 89
        rakib 25 98
        akib 12 53
        sifat 14 63
        rifat 13 66
        ifat 39 86

*/