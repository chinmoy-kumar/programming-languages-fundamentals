
#include <bits/stdc++.h>
#include <iostream>
using namespace std;

class Student
{
public:
    int roll;
    int cls;
    float gpa;

    // Constructor
    Student(int roll, int cls, double gpa)
    {
        this->roll = roll;
        this->cls = cls;
        this->gpa = gpa;
    }
};

int main()
{
    Student *karim = new Student(10, 5, 4.99); // dynamic object
    cout << karim->roll << " " << karim->cls << " " << karim->gpa << endl;
    // this output can also print following this syntax:
    // cout << (*karim).roll << " " << (*karim).cls << " " << (*karim).gpa << endl;

    return 0;
}