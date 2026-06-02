#include <bits/stdc++.h>
#include <iostream>
using namespace std;

class Student{
    public:
    char name[100];
    int roll;
    float cgpa;
};


int main(){
    Student a, b;
    cin >> a.name >> a.roll >> a.cgpa; // input name without space
    cin >> b.name >> b.roll >> b.cgpa;
    
    cout << a.name << " " << a.roll << " " << a.cgpa << endl;
    cout << b.name << " " << b.roll << " " << b.cgpa << endl;

    return 0;
}