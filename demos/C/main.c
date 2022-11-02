#include <stdio.h>

void main(){
    char* name = "Kevin";

    if(name == "Kevin"){
        printf("Greetings, %s!", name);
    }else{    
        printf("Hello, %s.", name);
    }
    
    for(int i =0; i < 5; i++){
        printf("%i", i);
    }
}

/* went to linux terminal can compiled using gcc and the executed a.out

gcc main.c
./a.out 

*/