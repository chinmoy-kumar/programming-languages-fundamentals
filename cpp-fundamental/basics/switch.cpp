#include <iostream>
using namespace std;
int main(){
    // NOTE: Switch case is more applicable if there is a fixed condition. like == , not like <= or >= 
    int day;
    cout << "Enter a number: ";
    cin >> day;
    switch (day)
    {
    case 1:
        cout << "Saturday" << endl;
        break;
    case 2:
        cout << "Sunday" << endl;
        break;
    default:
        cout << "No day available" << endl;
        break;
    }   

    return 0;
}