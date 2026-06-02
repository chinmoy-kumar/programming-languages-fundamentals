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
    cin.getline(a.name, 100); // input for name with space
    cin >> a.roll >> a.cgpa;
    cin.ignore(); // to ignoer the enter input after the before b.name input
    cin.getline(b.name, 100);
    cin >> b.roll >> b.cgpa;

    cout << a.name << " " << a.roll << " " << a.cgpa << endl;
    cout << b.name << " " << b.roll << " " << b.cgpa << endl;


    return 0;
}