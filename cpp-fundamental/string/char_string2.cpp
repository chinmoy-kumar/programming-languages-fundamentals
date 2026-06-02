// Sometimes getline() function create problems when there is another data type 
// To fix this problem we use ignore() fucntion

#include <iostream>
using namespace std;

int main(){
    int x;
    cin >> x;
    cin.ignore();  // to ignore the enter as a string after int input
    

    char s[100];
    cin.getline(s, 100);
    cout << x << endl << s << endl;

    return 0;
}