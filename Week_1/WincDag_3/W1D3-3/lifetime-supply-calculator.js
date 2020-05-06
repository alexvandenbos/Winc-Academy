/*Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/ 

const calculateSupply = (age, amountPerDay) => {
    const maxAge = 100;
    let amount = (maxAge - age) * 365 * Math.round(amountPerDay);
    console.log("You will need " + amount + " to last you until the ripe old age of X");
}
calculateSupply(20, 10);
calculateSupply(20, 10.5); 
calculateSupply(20, 11);