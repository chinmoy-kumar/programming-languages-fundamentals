#include <bits/stdc++.h>
#include <iostream>
using namespace std;
class Student{
    public:
        string name;
        int roll;
        int math;
        int english;
        
        Student(string name, int roll, int math, int english){
            this->name = name;        
            this->roll = roll;
            this->math = math;
            this->english = english;
        }

        void total(){
            cout << "Total Marks of " << name << " = " << math + english << endl;
        }
};
int main(){
    Student sakib("Sakib Ahmed", 23, 65, 90);
    sakib.total();
    Student rakib("Rakib Ahmed", 25, 78, 98);
    rakib.total();

    return 0;
}