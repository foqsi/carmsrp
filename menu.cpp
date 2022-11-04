#include <iostream>
#include <iomanip>
#include <string>
#include <vector> //try later

const int COL = 4;
const int ROW = 14;

void showMakeMenu(std::string[][COL], int);
void makeSelection(int);
void verifyInput(int);
void Abarth();
void AbarthYear(int);
void Acura();
void Alfa_Romeo();
void Aston_Martin();
void Audi();
void Bentley();

int main(){
    std::string carTable1[ROW][COL] = {{"Abarth     ", "Acura     ", "Alfa Romeo   ", "Aston Martin"},
                                       {"Audi       ", "Bentley   ", "BMW          ", "Buick       "},
                                       {"Cadillac   ", "Chevrolet ", "Chrysler     ", "Datsun      "},
                                       {"Dodge      ", "Ferrari   ", "FIAT         ", "Ford        "},
                                       {"Genesis    ", "Geo       ", "GMC          ", "Honda       "},
                                       {"Hyundai    ", "INFINITI  ", "Isuzu        ", "Jaguar      "},
                                       {"Jeep       ", "Kia       ", "Lamborghini  ", "Land Rover  "},
                                       {"Lexus      ", "Lincoln   ", "Lotus        ", "Maserati    "},
                                       {"MAZDA      ", "McLaren   ", "Mercedes-Benz", "Mercury     "},
                                       {"MINI       ", "Mitsubishi", "Nissan       ", "Oldsmobile  "},
                                       {"Plymouth   ", "Pontiac   ", "Porsche      ", "RAM         "},
                                       {"Rolls-Royce", "Saab      ", "Saleen       ", "Saturn      "},
                                       {"Scion      ", "Smart     ", "Subaru       ", "Suzuki      "},
                                       {"Tesla      ", "Toyota    ", "Volkswagen   ", "Volvo       "}};

    int makeSelectionInput;
    std::cout << "----Select Car Make----" << std::endl;
    showMakeMenu(carTable1, ROW);
    std::cout << "Enter number to select make: ";
    std::cin >> makeSelectionInput;
    makeSelection(makeSelectionInput);
}
void showMakeMenu(std::string cars[][COL], int rows){
    for(int r = 0; r < rows; r++){
        for(int c = 0; c < COL; c++){
            std::cout << std::setfill('0') << std::setw(2) << (r*4) + c + 1 << ": " << cars[r][c] << "\t\t";
        }
        std::cout << std::endl;
    }
}
/*                       ***
**     Verify Input      *** doesn't work properly
**                       **/
void verifyInput(int makeSelectionInput){
    while(makeSelectionInput == 0 || makeSelectionInput == ' ' || !makeSelectionInput){
        std::cout << "\n----Invalid Input----";
        std::cout << "\nSelect a make: ";
        std::cin >> makeSelectionInput;
    }
}
/*                       ***
**  Abarth Information   ***
**                       **/
void AbarthModel(){
    //11 models since 2008, 2 recurring
    //menu selection test
    int selection;
    const int NUM = 9;
    std::string model[NUM] = { "FIAT 500 Abarth",           "FIAT 500 Abarth 695 Tributo Ferrari",  "FIAT 500 Abarthe esseesse",
                               "FIAT 500C Abarth esseesse", "FIAT 500C Abarth", "FIAT 595C Abarth", "FIAT 595 Abarth",
                               "FIAT 695 Abarth Biposto",   "FIAT F595 Abarth"};
    std::cout << std::endl;
    std::cout << "----Choose Model----" << std::endl;
    for(int i = 0; i < NUM; i++){
        std::cout << std::setfill('0') << std::setw(2) << i+1 << ": " << model[i] << std::endl;
    }
    std::cout << "Select model: ";
    std::cin >> selection;
    AbarthYear(selection); //this won't work, unless I create a function for each model selection which would be a pain
}
void AbarthYear(int selection){
    std::cout << "\n----Select Year----";
    std::cout << std::endl;
    for(int i = 2008; i < 2023; i++)
        std::cout << i << std::endl;
}
/*                       ***
**  Make Select options  ***
**                       **/
void makeSelection(int makeSelectionInput){
    if (makeSelectionInput == 1){
        std::cout << "-------Abarth-------";
        AbarthModel();

    }
    else if (makeSelectionInput == 2){
        std::cout << "----Acura----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 3){
        std::cout << "----Alfa Romeo----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 4){
        std::cout << "----Aston Martin----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 5){
        std::cout << "----Audi----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 6){
        std::cout << "----Bentley----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 7){
        std::cout << "----BMW----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 8){
        std::cout << "----Buick----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 9){
        std::cout << "----Cadillac----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 10){
        std::cout << "----Chevrolet----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 11){
        std::cout << "----Chrysler----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 12){
        std::cout << "----Datsu----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 13){
        std::cout << "----Dodge----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 14){
        std::cout << "----Ferrari----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 15){
        std::cout << "----FIAT----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 16){
        std::cout << "----Ford----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 17){
        std::cout << "----Genesis----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 18){
        std::cout << "----Geo----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 19){
        std::cout << "----GMC----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 20){
        std::cout << "----Honda----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 21){
        std::cout << "----Hyundai----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 22){
        std::cout << "----INFINITI----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 23){
        std::cout << "----Isuzu----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 24){
        std::cout << "----Jaguar----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 25){
        std::cout << "----Jeep----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 26){
        std::cout << "----Kia----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 27){
        std::cout << "----Lamborghini----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 28){
        std::cout << "----Land Rover----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 29){
        std::cout << "----Lexus----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 30){
        std::cout << "----Lincoln----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 31){
        std::cout << "----Lotus----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 32){
        std::cout << "----Maserati----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 33){
        std::cout << "----MAZDA----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 34){
        std::cout << "----McLaren----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 35){
        std::cout << "----Mercedes-Benz----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 36){
        std::cout << "----Mercury----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 37){
        std::cout << "----MINI----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 38){
        std::cout << "----Mitsubishi----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 39){
        std::cout << "----Nissan----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 40){
        std::cout << "----Oldsmobile----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 41){
        std::cout << "----Plymouth----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 42){
        std::cout << "----Pontiac----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 43){
        std::cout << "----Porsche----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 44){
        std::cout << "----RAM----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 45){
        std::cout << "----Rolls-Royce----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 46){
        std::cout << "----Saab----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 47){
        std::cout << "----Saleen----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 48){
        std::cout << "----Saturn----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 49){
        std::cout << "----Scion----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 50){
        std::cout << "----Smart----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 51){
        std::cout << "----Subaru----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 52){
        std::cout << "----Suzuki----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 53){
        std::cout << "----Tesla----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 54){
        std::cout << "----Toyota----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 55){
        std::cout << "----Volkswagen----";
        std::cout <<"\nNot completed\n";
    }
    else if (makeSelectionInput == 56){
        std::cout << "----Volvo----";
        std::cout <<"\nNot completed\n";
    }
    else{
        std::cout << "----No Selection----";
        verifyInput(makeSelectionInput);

    }
}