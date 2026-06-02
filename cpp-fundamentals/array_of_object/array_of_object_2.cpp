#include <bits/stdc++.h>
#include <iostream>
using namespace std;
class Student{
    public:
    string name;
    int roll;
    int marks;
};
int main(){
    int n;
    cin >> n;

    Student a[n];
    for (int i = 0; i < n; i++)
    {
        cin.ignore();
        getline(cin, a[i].name); // input strings with space
        cin >> a[i].roll >> a[i].marks;
    }
    for (int i = 0; i < n; i++)
    {
        cout << a[i].name << " " << a[i].roll << " " << a[i].marks << endl;
    }
    

    return 0;
}

/* Sample Input 
        3
        Sakib Ahmed 
        15 89
        Rakib Ahemd 
        18 65
        Akib Ahmed 
        28 75

*/