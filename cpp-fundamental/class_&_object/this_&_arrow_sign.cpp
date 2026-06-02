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
        // NOTE: In constructor, when element name and object element name are the same, at that time we use this and arrow         sign to clear the confusion about which one is for which elements.
        // Here this pointer points the rahim object.
        this->roll = roll;
        // (*this).roll = roll;  // alternative way to use this
        this->cls = cls;
        this->gpa = gpa;
    }
};

int main()
{
    Student rahim(45, 5, 3.2);
    cout << rahim.roll << " " << rahim.cls << " " << rahim.gpa << endl;

    return 0;
}