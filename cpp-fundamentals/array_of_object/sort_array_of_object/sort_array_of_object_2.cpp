// If all marks are same then this program will short the data based on roll numbers.

#include <bits/stdc++.h>
#include <iostream>
using namespace std;

class Student{
    public:
    string name;
    int roll;
    int marks;
};

bool cmp(Student l, Student r){ 
    /*
    if(l.marks < r.marks){ // ascending order
        return true;
    }
    else if(l.marks > l.marks){
        return false;
    }
    else{
        if(l.roll < r.roll){
            return true;
        }
        else{
            return false;
        }
    }
    */

    // shortcut way:
    //---------------
    if (l.marks == r.marks)
    {
        return l.roll < r.roll;
    }
    else{
        return l.marks < r.marks;
    }
    

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

/* sample input 1
        6
        sakib 16 97
        rakib 25 97
        akib 1 97
        sifat 30 97
        rifat 3 97
        ifat 39 97
*/

/* sample output 1
        akib 1 97
        rifat 3 97
        sakib 16 97
        rakib 25 97
        sifat 30 97
        ifat 39 97
*/

/* sample input 2
        6
        sakib 5 92
        rakib 1 97
        akib 7 90
        sifat 6 92
        rifat 2 97
        ifat 3 97
*/

/* sample output 2
        akib 7 90
        sakib 5 92
        sifat 6 92
        rakib 1 97
        rifat 2 97
        ifat 3 97

NOTE: (For sample 2)
First it got sorted by marks low to high, then when it found some marks were the same, it again sorted the roll numbers among those same marks.

*/