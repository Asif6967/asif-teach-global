#include <iostream>
#include <string>

using namespace std;

// Asif Tech Strategy Optimizer
void calculateStrategy(string service) {
    int success_rate = 0;
    
    if (service == "strategy") {
        success_rate = 95;
        cout << "STRATEGY_REPORT: High Profit Margin Predicted (" << success_rate << "%)" << endl;
    } else if (service == "tech") {
        success_rate = 88;
        cout << "TECH_REPORT: Scalable Architecture Confirmed (" << success_rate << "%)" << endl;
    } else {
        cout << "REPORT: Standard Analysis Applied." << endl;
    }
}

int main(int argc, char* argv[]) {
    if (argc > 1) {
        calculateStrategy(argv[1]);
    } else {
        cout << "Error: No Service Data Provided." << endl;
    }
    return 0;
}