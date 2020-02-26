describe("FizzBuzz", function() {
    describe("Division Tests", function() {
        it("should return FizzBuzz If the number is divisible by 3 and 5", function () {
            expect(FizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return FizzBuzz If the number is divisible by 3", function () {
            expect(FizzBuzz(18)).toBe("Fizz");
        });
        it("should return FizzBuzz If the number is divisible by 5", function () {
            expect(FizzBuzz(10)).toBe("Buzz");
        });
        it("should return 22 if it is not divisible by either 3 or 5", function () {
            expect(FizzBuzz(22)).toBe(22);
        });
    });
});