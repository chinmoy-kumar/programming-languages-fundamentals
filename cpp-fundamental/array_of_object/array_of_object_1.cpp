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
        cin >> a[i].name >> a[i].roll >> a[i].marks; // string input without spaces
    }
    for (int i = 0; i < n; i++)
    {
        cout << a[i].name << " " << a[i].roll << " " << a[i].marks << endl;
    }
    

    return 0;
}

/* Sample Input 
        3
        sakib 15 89
        rakib 18 65
        akib 28 75

*/