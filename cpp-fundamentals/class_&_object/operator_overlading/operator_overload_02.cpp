/* Operation overloading for
        obj + int
        int + obj
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

    // Operator overload for obj + int
    three_d operator+(int demoVal)
    {
        three_d temp;
        temp.x = x + demoVal;
        temp.y = y + demoVal;
        temp.z = z + demoVal;
        return temp;
    }

    // Operator overload for int + obj
    friend three_d operator+(int demoVal, three_d &demo)
    {
        three_d temp;
        temp.x = demo.x + demoVal;
        temp.y = demo.y + demoVal;
        temp.z = demo.z + demoVal;
        return temp;
    }
};

int main()
{
    three_d a1(1, 6, 5);
    int x, y, z;

    // obj + int
    three_d a2 = a1 + 3; // Adds 3 to all members of a1
    a2.get(x, y, z);
    cout << "a1 + 3 = " << x << ", " << y << ", " << z << endl;

    // int + obj
    three_d a3 = 2 + a1; // Adds 2 to all members of a1
    a3.get(x, y, z);
    cout << "3 + a1 = " << x << ", " << y << ", " << z << endl;

    return 0;
}
