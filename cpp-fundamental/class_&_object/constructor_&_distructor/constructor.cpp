#include <bits/stdc++.h>
#include <iostream>
using namespace std;

class Student{
    public:
    int roll;
    int cls;
    float gpa;

    // Constructor
    Student(int r, int c, double g){  
        roll = r;
        cls = c;
        gpa = g;
    }
};


int main(){
    Student rahim(45, 5, 3.2);
    Student karim(2, 5, 4.34);

    cout << rahim.roll << " " << rahim.cls << " " << rahim.gpa << endl;
    cout << karim.roll << " " << karim.cls << " " << karim.gpa << endl;
    

    return 0;
}