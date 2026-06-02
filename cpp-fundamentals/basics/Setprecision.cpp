#include <iostream>
#include <iomanip> // For using setprecision need to add this library.
using namespace std;
int main(){
    double d = 23.79387498;
    cout << fixed << setprecision(3) << d << endl;

    return 0;
}

// NOTE: It defines how many numbers will be printed of a fraction number.