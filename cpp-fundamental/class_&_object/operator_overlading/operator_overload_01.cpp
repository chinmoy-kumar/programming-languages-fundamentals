/*
Operator overloding of +, -, prefix ++, prefix --, postfix ++, postfix --
*/

#include <bits/stdc++.h>
using namespace std;

class three_d
{
    int x, y, z;

public:
    three_d(int i, int j, int k)
    {
        x = i;
        y = j;
        z = k;
    }

    three_d()
    {
        x = 0;
        y = 0;
        z = 0;
    }

    void get(int &i, int &j, int &k)
    {
        i = x;
        j = y;
        k = z;
    }

    // Operator overload for +
    three_d operator+(three_d &demo)
    {
        three_d a3;
        a3.x = x + demo.x;
        a3.y = y + demo.y;
        a3.z = z + demo.z;
        return a3;
    }

    // Operator overload for -
    three_d operator-(three_d &demo)
    {
        three_d a3;
        a3.x = x - demo.x;
        a3.y = y - demo.y;
        a3.z = z - demo.z;
        return a3;
    }

    // Operator overload for prefix ++
    three_d operator++() 
    {
        ++x;
        ++y;
        ++z;
        return *this;
    }

    // Operator overload for postfix ++
    three_d operator++(int) 
    {
        three_d temp(x, y, z);
        x++;
        y++;
        z++;
        return temp;
    }

    // Operator overload for prefix --
    three_d operator--() 
    {
        --x;
        --y;
        --z;
        return *this;
    }

    // Operator overload for postfix --
    three_d operator--(int) 
    {
        three_d temp(x, y, z);
        x--;
        y--;
        z--;
        return temp;
    }
};

int main()
{
    three_d a1(1, 2, 5);
    three_d a2(4, 7, 6);
    int x, y, z;

    // + operator
    three_d a3 = a1 + a2;
    a3.get(x, y, z);
    cout << "a1 + a2 = " << x << ", " << y << ", " << z << endl;

    // - operator
    a3 = a2 - a1;
    a3.get(x, y, z);
    cout << "a2 - a1 = " << x << ", " << y << ", " << z << endl;
    cout << endl;

    // prefix ++
    cout << "Before prefix ++:  ";
    a3.get(x, y, z);
    cout << x << ", " << y << ", " << z << endl;
    ++a3; // Increment
    cout << "After prefix ++:  ";
    a3.get(x, y, z);
    cout << x << ", " << y << ", " << z << endl;

    // prefix --
    cout << "Before prefix --:  ";
    a3.get(x, y, z);
    cout << x << ", " << y << ", " << z << endl;
    --a3; // Decrement
    cout << "After prefix --:  ";
    a3.get(x, y, z);
    cout << x << ", " << y << ", " << z << endl;
    cout << endl;

    // postfix ++
    cout << "Before postfix ++:  ";
    a3.get(x, y, z);
    cout << x << ", " << y << ", " << z << endl;
    a3++; // Increment
    cout << "After postfix ++:  ";
    a3.get(x, y, z);
    cout << x << ", " << y << ", " << z << endl;
    cout << endl;

    // postfix --
    cout << "Before postfix --:  ";
    a3.get(x, y, z);
    cout << x << ", " << y << ", " << z << endl;
    a3--; // Decrement
    cout << "After postfix --:  ";
    a3.get(x, y, z);
    cout << x << ", " << y << ", " << z << endl;
    cout << endl;

    return 0;
}
