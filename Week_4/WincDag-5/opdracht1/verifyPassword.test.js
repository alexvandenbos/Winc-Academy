const password = require("./verifyPassword")

const testinput = 'Rw1993';
const inputLength = password.length;
const verifypasswordOutput = password(testinput);
// testinput overeen met testoutput
expect(testinput).toBeTruthy()
expect(testinput).toEqual(expect.any(String))

test("password is korter dan 9 karakters", function () {
    expect(inputLength).toBeLessThan(9)
});

test("password is niet `null`", function () {
    expect(password).toBeTruthy();
    expect(password).not.toEqual(null);
});

test("password heeft 1 of meer uppercase karakters", function () {
    const hasUpperCase = (password) => {
        let lowercasePassword = password.toLowerCase();
        if (password === lowercasePassword) {
            return false;
        } else {
            return true;
        }
    };
    expect(hasUpperCase(verifypasswordOutput)).toBe(true);
});
test("password heeft 1 of meer lowercase karakters", function () {
    const hasLowerCase = (password) => {
        let UppercasePassword = password.toUpperCase();
        if (password === UppercasePassword) {
            return false;
        } else {
            return true;
        }
    };
    expect(hasLowerCase(verifypasswordOutput)).toBe(true);
});
test("password heeft 1 of meer cijfers", function () {
    function hasNumbers(verifypasswordOutput) {
        return /\d/.test(verifypasswordOutput);
    }
    expect(hasNumbers(verifypasswordOutput)).toBe(true);
});





