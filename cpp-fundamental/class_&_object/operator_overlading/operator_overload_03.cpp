/*
Operation Overloading for ==, !=, ||
*/

#include <iostream>
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

     // Overloading == operator to compare two three_d objects
    bool operator==(const three_d &demo)
    {
        return (x == demo.x && y == demo.y && z == demo.z);
    }

    // Overloading != operator to check if two three_d objects are not equal
    bool operator!=(const three_d &demo)
    {
        return !(*this == demo);
    }

    // Overloading || operator (logical OR) to return true if at least one coordinate is non-zero
    bool operator||(const three_d &demo)
    {
        return (x != 0 || y != 0 || z != 0 || demo.x != 0 || demo.y != 0 || demo.z != 0);
    }
};

int main()
{
    three_d a1(1, 2, 3);
    three_d a2(1, 2, 3);
    three_d a3(0, 0, 0);
    three_d a4(0, 0, 0);

    // == operator
    if (a1 == a2)
    {
        cout << "a1 == a2: True" << endl;
    }
    else
    {
        cout << "a1 == a2: False" << endl;
    }

    // != operator
    if (a1 != a3)
    {
        cout << "a1 != a3: True" << endl;
    }
    else
    {
        cout << "a1 != a3: False" << endl;
    }

    // || operator (Logical OR)
    if (a1 || a4)
    {
        cout << "a1 || a4: True" << endl;
    }
    else
    {
        cout << "a1 || a4: False" << endl;
    }

    if (a4 || a3)
    {
        cout << "a4 || a3: True" << endl;
    }
    else
    {
        cout << "a4 || a3: False" << endl;
    }

    return 0;
}
