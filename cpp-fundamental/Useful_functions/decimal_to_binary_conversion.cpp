#include <bits/stdc++.h>
using namespace std;
int main(){
    long long decimalNum; // The number to convert
    cout << "Enter decimal number: ";
    cin >> decimalNum;

    vector<int> binaryNum;
    while(decimalNum > 0)
    {
        binaryNum.push_back(decimalNum % 2);
        decimalNum = decimalNum / 2;
    }

    cout << "Binary number is: ";
    for (int i = binaryNum.size()-1; i >= 0; i--)
    {
        cout << binaryNum[i];
    }
    cout << endl;

    return 0;
}

/* Test Case - 01
-------------------
input:
128

output:
10000000

Test Case-02
-------------------
input:
1000

output:
1111101000

*/