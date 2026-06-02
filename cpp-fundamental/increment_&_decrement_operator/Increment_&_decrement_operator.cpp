#include <bits/stdc++.h>
using namespace std;
int main()
{
/*
++a => pre increment
a++ => post increment

--a => pre decrement
a-- => post decrement
*/

int n = 4;   
int a = 0;
cout << "Pre-increment" << endl;
a = ++n;
cout <<"a is: " << a << endl << "n is: " << " " << n << endl;

n = 4;   
a = 0;
cout << "Post-increment" << endl;
a = n++;
cout << "a is: " << a << endl << "n is: " << " " << n << endl;

n = 4;   
a = 0;
cout << "Pre-decrement" << endl;
a = --n;
cout <<"a is: " << a << endl << "n is: " << " " << n << endl;

n = 4;   
a = 0;
cout << "Post-decrement" << endl;
a = n--;
cout << "a is: " << a << endl << "n is: " << " " << n << endl;

    return 0;
}