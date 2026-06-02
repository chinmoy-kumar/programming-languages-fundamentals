#include <bits/stdc++.h>
using namespace std;
class Shape{
    public:
        double area;
        double volume;
};
class Cube : public Shape{
    public:
        double side;
    Cube(double x){
        side = x;
        area = side * side * side;
        volume = side * side * side;
    }
};
class Sphere : public Shape{
    public:
        double radius;
    Sphere(double y){
        radius = y;
        area = 4 * 3.1416 * (radius * radius);
        volume = (4/3.0) * 3.1416 * (radius * radius * radius);
    }
};
int main(){
    Cube cube1(10);
    Sphere sphere1(5);

    cout << "Area of cube: " << cube1.area << endl;
    cout << "Volume of cube: " << cube1.volume << endl;
    
    cout << "Area of sphere: " << sphere1.area << endl;
    cout << "Volume of sphere: " << sphere1.volume << endl;

    return 0;
}