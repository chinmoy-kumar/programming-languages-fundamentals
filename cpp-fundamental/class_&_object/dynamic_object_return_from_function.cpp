#include <bits/stdc++.h>
#include <iostream>
using namespace std;

class Student
{
public:
    int roll;
    int cls;
    float gpa;

    Student(int roll, int cls, double gpa)
    {

        this->roll = roll;
        this->cls = cls;
        this->gpa = gpa;
    }
};

Student *fun(){
    Student *karim = new Student(2, 5, 4.98); 
    // if we want to return in form of pointer , we need to use dynamic object. 
    return karim;
}

int main()
{
    Student *p = fun();
    cout << p->roll << " " << p->cls << " " << p->gpa << endl;

    return 0;
}