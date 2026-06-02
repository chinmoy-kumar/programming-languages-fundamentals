#include <bits/stdc++.h>
using namespace std;
int power(int n, int p){
    if(p == 0){
        return 1;
    }

    int prevPower = power(n, p-1);
    return n * prevPower;
}   

int main(){
    int n, pow;
    cout << "Enter base number: ";
    cin >> n;
    cout << endl;
    cout << "Enter power: ";
    cin >> pow;
    cout << endl;

    int result = power(n, pow);

    cout << "The result is: " << result << endl;

    return 0;
}