#include <iostream>
#include <vector>
#include <numeric>

class RevenueEngine {
public:
    static double calculateGrowth(const std::vector<double>& revenue) {
        if (revenue.size() < 2) return 0.0;
        return ((revenue.back() - revenue.front()) / revenue.front()) * 100;
    }
};

int main() {
    std::vector<double> revenue = {10000, 12000, 15000, 20000};
    std::cout << "Revenue Growth (%): "
              << RevenueEngine::calculateGrowth(revenue) << std::endl;
    return 0;
}
logic.cpp
string encryptData(string data) {
    for(int i = 0; i < data.length(); i++)
        data[i] = data[i] + 5; // Simple Caesar Cipher for security
    return data;
}