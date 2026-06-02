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
    int r;
    int c;
    double g;
    cin >> r >> c >> g;
    Student rahim(r, c, g);

    cout << rahim.roll << " " << rahim.cls << " " << rahim.gpa << endl;    

    return 0;
}