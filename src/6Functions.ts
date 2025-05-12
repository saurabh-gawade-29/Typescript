//! Defined type of return value after () eg: function name(): number {}
function calculateTax(income: number): number {
    if (income > 50_000) {
        return 500;
    } else {
        return 0;
    }
}

calculateTax(60000);