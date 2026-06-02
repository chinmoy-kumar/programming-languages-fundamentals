#include <bits/stdc++.h>
#include <iostream>
using namespace std;

class Student{
    public:
    string name;
    int roll;
    int marks;
};

/*
bool cmp(Student l, Student r){ 
    if(l.marks < r.marks){ // ascending order
    // if(l.marks <= r.marks)  // if there is any equal numbers 
    // if(l.marks > r.marks)  // descending order
    // if(l.marks >= r.marks)  // if there is any equal numbers 
        return true;
    }
    else{
        return false;
    }

    // shortcut way:
    //----------------
    return l.marks <= r.marks;
}
*/

// shortcut way:
//----------------
bool cmp(Student l, Student r){

    return l.marks <= r.marks;
}

int main(){
    int n;
    cin >> n;
    Student a[n];
    for (int i = 0; i < n; i++)
    {
        cin >> a[i].name >> a[i].roll >> a[i].marks;
    }
    sort(a, a+n, cmp);

    for (int i = 0; i < n; i++)
    {
        cout << a[i].name << " " << a[i].roll << " " << a[i].marks << endl;
    }
    

    return 0;
}

/* sample input
        6
        sakib 16 89
        rakib 25 98
        akib 12 85
        sifat 14 24
        rifat 13 66
        ifat 39 85
*/

/* sample output
        sifat 14 24
        rifat 13 66
        ifat 39 85
        akib 12 85
        sakib 16 89
        rakib 25 98
*/