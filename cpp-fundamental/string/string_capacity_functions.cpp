#include <bits/stdc++.h>
#include <iostream>
using namespace std;
int main(){
    string s = "Hello world";
    cout << s.size() << endl; // returns the size of a string
    cout << s.max_size() << endl; // returns the maximum size that a string can holdit depends on the machine)
    cout << s.capacity() << endl; // returns current available capacity of the string
    

    string s2 = "Hello This is me";
    s2.clear(); // clear the string content
    cout << s2; // Nothing will print because the string has been cleared

    if(s2.empty() == true){ // return true/false if the string is empty
        cout << "Empty" << endl;
    }
    else{
        cout << "Not Empty" << endl;
    }

    string s3 = "Hello World";
    s3.resize(7); // size decrease
    cout << s3 << endl;

    string s4 = "Hello World";
    s4.resize(15); // size increase
    s4.resize(15,'x'); // put  something in extra array 
    cout << s4 << endl;


    return 0;
}