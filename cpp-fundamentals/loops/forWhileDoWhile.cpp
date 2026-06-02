#include<iostream>
using namespace std;

int main(){

    // for(initialization; condition; update){ body }
    /*
        1. initialization
        2. condition
        3. if condition is true then go to for's body
        4. when for's body is completed control goes to update
        5. after update go to condition
        6. if condition is true go to step 3
        7. if condition is false loop is exited

    */

    int i,N;
    cin>>N;

    for(i=0;i<N;i++){
        if(i%2 == 0){
            cout<<i<<" is even"<<endl;
        }
        else{
            cout<<i<<" is odd"<<endl;
        }
    }

    // while(condition){ //body }
    i=0;
    while(i<N){
        if(i%2 == 0){
            cout<<i<<" is even"<<endl;
        }
        else{
            cout<<i<<" is odd"<<endl;
        }

        i++;
    }

    // do { body }while();
    i=0;
    do{
        if(i%2 == 0){
            cout<<i<<" is even"<<endl;
        }
        else{
            cout<<i<<" is odd"<<endl;
        }

        i++;
    }while(i<N);


return 0;
}
