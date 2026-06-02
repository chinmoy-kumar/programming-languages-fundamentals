#include <iostream>
#include <algorithm> // for max min function
using namespace std;
int main(){
    int a, b;
    cin >> a >> b;

    cout << min(a, b) << endl; // double inputs
    cout << max(a, b) << endl; // double inputs

    cout << min({1, 4 , 6 , 8 ,3 , 2}) << endl; // multiple inputs
    cout << max({1, 4, 6, 8, 3, 2}); // multiple inputs


    return 0;
}