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

Student fun(){
    Student karim(2, 5, 4.98); // karim here working like an variable that's why it got return to the main without loosing data.
    return karim;
}

int main()
{
    Student obj = fun();
    cout << obj.roll << " " << obj.cls << " " << obj.gpa << endl;

    return 0;
}