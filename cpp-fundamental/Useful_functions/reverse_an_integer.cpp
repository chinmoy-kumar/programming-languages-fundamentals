#include <bits/stdc++.h>
#define ll long long int
#define nl '\n'
using namespace std;

int reverseInteger(int n)
{
    int ans = 0, digit = 0;
    while (n != 0)
    {
        digit = n % 10;
        ans = ans * 10 + digit;
        n = n / 10;
    }
    return ans;
}

int main()
{
    int n;
    cout << "Enter a number to reverse: ";
    cin >> n;
    cout << "Reverse Integer is: " << reverseInteger(n) << nl;

    return 0;
}