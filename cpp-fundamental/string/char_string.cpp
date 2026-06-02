#include <iostream>
using namespace std;

int main(){
    char s[100];
    /*
    cin >> s; // single word input
    cout << s << endl;
    */

    // To take input with space we use getline fuction
    // cin.getline(variable_name, size) 

    cin.getline(s, 100);
    cout << s << endl;

    return 0;
}