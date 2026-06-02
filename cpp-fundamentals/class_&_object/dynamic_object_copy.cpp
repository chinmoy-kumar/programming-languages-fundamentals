#include <bits/stdc++.h>
#include <iostream>
using namespace std;
class Cricketer{
    public:
        string country;
        int jersey;
    
    Cricketer(string country, int jersey){
        this->country = country;
        this->jersey = jersey;
    }
};
int main(){
    Cricketer *dhoni = new Cricketer("India", 90);
    Cricketer *koholi = new Cricketer("India", 18);
    // koholi->country = dhoni->country;
    // koholi->jersey = koholi->jersey;
    // shorcut way of this two line:
    *koholi = *dhoni;
    
    cout << koholi->country << " " << koholi->jersey << endl;

    return 0;
}