#include <bits/stdc++.h>
using namespace std;
int main()
{
    string binary;
    cout << "Enter binary number: ";
    cin >> binary;
    int decimalNum;

    reverse(binary.begin(), binary.end());

    int sz = binary.size();
    for (int i = 0; i < sz; i++)
    {
        if(binary[i] == '1')
            decimalNum += pow(2, i);
    }
    cout << "Decimal number is: " << decimalNum << endl;

    return 0;
}

/* Test Case - 01
-------------------
input:
1111101000

output:
1000

*/