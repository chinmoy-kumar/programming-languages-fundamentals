#include <bits/stdc++.h>
#include <iostream>
using namespace std;

class Student // Here Student is the class name
{
public: // a type of access modifier
    char name[100];
    int roll;
    float cgpa;
};

int main() 
{
    Student p; // Here a is the object name
    p.roll = 23; // roll, cgpa these are the elements of p object
    p.cgpa = 3.7;

    // way of char array data initialization
    char temp[100] = "Sakib";
    strcpy(p.name, temp);

    cout << p.name << " " << p.roll << " " << p.cgpa << " " << endl;

    return 0;
}