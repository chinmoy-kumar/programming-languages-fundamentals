// This program finds the minimum mark among the students and print that with the full object info of that student.

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

    Student minStu;

    minStu.marks = INT_MAX; 

    for (int i = 0; i < n; i++)
    {
        if(a[i].marks < minStu.marks){
            minStu = a[i];
        }
    }
    cout << minStu.name << " " << minStu.roll << " " << minStu.marks << " " << endl;

    
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