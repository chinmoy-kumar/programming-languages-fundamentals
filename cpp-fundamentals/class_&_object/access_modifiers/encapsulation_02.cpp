#include <bits/stdc++.h>
using namespace std;
class Stove
{
    private:
        int temperature = 0;

    public:
        // constructor
        Stove(int t) 
        {
            setTemperature(t);
        }
        // setter 
        void setTemperature(int t){
            if(t < 0){
                temperature = 0;
            }
            else if(t >= 10){
                temperature = 10;
            }
            else{
                temperature = t;
            }
        }
        // getter
        int getTemperature(){
            return temperature;
        }
        
};
int main()
{   
    int tempe;
    cout << "Enter stove temperature: ";
    cin >> tempe;
    Stove stove1(tempe);
    cout << "The stove temperature is: " << stove1.getTemperature() << endl;

    return 0;
}