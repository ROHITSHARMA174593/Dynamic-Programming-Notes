/*
!       DP === Dynamic Programming
?       DP = Enhanced Recursion
?       Parent of DP = Recursion


*       How Identify DP
?       1. Choice  
?                  O          O          O          O          O          O
?                 / \        / \        / \        / \        / \        / \
?               ❌  ✅     ✅  ❌    ✅  ❌     ❌  ✅    ✅  ❌     ✅  ❌
todo    ===  Jaise yaha per only 1 option hi choose karna hota hai vha per hum ye assume kar sakte hai ki DP/Recursion ka apply hoga ya nahi 
?   
?       2. It the Question is ask Optimal value ======> like minimum, maximum, smallest, largest etc.

!       How to Write DP?
!           === Never Starts with Top-Down Approach first write down the Recursive Code
?           Recursive ---------> Memorize ------------> Top-Down(Matrix Table)
?           In Recursive we need 2 Approaches (what you can do)
?                 /               \
?           Memorize            Top-Down(Matrix)
?       (only in 2 line)


!                                        Dynamic Programming Topics 
!                                                    |
*                       0-1 Knapsack Problem                    --> in this topic we have 6 variations
*                       UnBounded Knapsack                      --> 5 Variations
*                       Fibonacci                               --> 7 Variations
*                       LCS (Longest Common SubSequence)        --> 15 Variations
*                       LIS (Longest Increasing Subsequence)    --> 10 Variations
*                       Kadane's Algorithm                      --> 6 Variations
*                       MCM (Matrix Chain Multiplication)       --> 7 Variations
*                       DP on Trees                             --> 4 Variations
*                       DP on Grid                              --> 14 Variations
*                       Others                                  --> 5 Variations
!                               Variations === Questions
*/

//! ====================================================================================================================================================================================================================================================
//! ------------1️⃣1️⃣1️⃣1️⃣------------
/*
!       1111 === 0-1 Knapsack Problem
!       6 Variations
?           I.      Subset Sum                               ___________
?           II.     Equal Some Partition                                |
?           III.    Count of Subset Sum                                 |   
?           IV.     Minimum Subset Sum Difference                       |   --------- These 6 Variations
?           V.      Target Sum                                          |
?           VI.     Number of Subset with Given Difference---------------
*/

//! ======================================================================================================================================================================================================================================================
/*
! Problem = 1:
        +------------+------------+------------+
        |  Rohit     |  22        |  India     |
        |  Alice     |  25        |  USA       |
        |  Bob       |  30        |  UK        |
        +------------+------------+------------+

        +-----------------------+
        |                       |
        |     Bag 🧱 Empty      |
        |     Capacity 10KG     |
        +-----------------------+

        +---------+--------+
        | Weight  | Price  |
        +---------+--------+
        |   2kg   |  ₹100  |
        |   5kg   |  ₹250  |
        |   1kg   |  ₹60   |
        |   3kg   |  ₹150  |
        +---------+--------+
* Rules : 
*       1.It is not necessary that the bag is full
*       2.Always look for Profit means jaise bag me 2 kg ki khali space bach rhi hai jaise hmaare pass 2 items hai same weight ki lekin price unki different hai to hum jyada price wali item ko bag me daalenge 


? Fraction Knapsack ::: agar bag me kuch jagah khali reh jaaye jaise humne maximum profit dekhte hue humne bag me continously items bhara aur uske baad 9KG tak vo bhar gaya, to 1 kg bhar gaya aur next item 2KGs ki hai aur prise 20Rup. hai, to hum uska half part hi daalenge aur fir hume profit bhi half hi hoga jaise 10Rup. 
? Fraction Knapsack is a greedy Approach and no need to DP


*/
//! ------------2️⃣2️⃣2️⃣2️⃣------------
/*
!       1111 === 0-1 UnBounded Knapsack Problem
*         ->  If we have a bag same as Previous
*              -> and if we have an item and we are including this item in our bag then we haven't limits we can add the same item multiple time 
*                   ->  We can fill this bag with same item
*/

/*
!                           KnapSack
!                      Three Types of it
!           1. Fractional Knapsack  --> Here we can add half item (0.5) in bag
!           2. 0-1 Knapsack         --> Here we have only 2 options, either put the item completely inside the bag or let it remain completely outside
!           3. UnBounded Knapsack   --> You Can add same item multiple times, there is not limits 
!               
!
*/