/*
! Abhi neeche jo code hai vo clear code hai Knapsack ka with the input
*        weight[] = {1,2,3,4,5}, value[] = {3,1,5,4,2}, int W = 12, int n = weight.length -1
*
*        int knapsack(int[] weight, int[] value, int W(capacity), int n){
*            Base Condition
*            if(n == 0 || w == 0){ 
*                return 0;
*            }
*            if(weight[n-1] <= W){
*                value[n-1] jo hmaare value array ki last value hai usko hum ab add karva denge hmaari knapsack ke ander
*                return (value[n-1] + knapsack(weight, value, W-weight[n-1], n-1));
*            }else if(weight[n-1] > W){
*                return knapsack(weight, value, W, n-1);
*            }
*        }

!         Memoization is a alternative process of Top-Down Process(matrix wali)
        Recursive + 2 lines(I am writing these two lines below) === Dynamic Programming (Complexity and everything is same)

        in our complete Recursion Call only two things are change so matrix of these two variables will be formed
        First                           Second
        W-weight[n-1]       &&             n-1

        If you want to dry this matrix with pen and paper than follow these steps
            1.  We are creating the matrix this size
                        int mtrx[n+1] and [w+1]
            2.  Fill the complete matrix with -1(i mean initialize with -1)
              
            int[][] t ===

                            +---------------------------------------+
                            |  -1   |  -1   |  -1   |  -1   |  -1   |
                            |  -1   |  -1   |  -1   |  -1   |  -1   |
            [N+1]           |  -1   |  -1   |  -1   |  -1   |  -1   |
                            |  -1   |  -1   |  -1   |  -1   |  -1   |
                            |  -1   |  -1   |  -1   |  -1   |  -1   |
                            +---------------------------------------+
                                    [W+1] here W is Capacity 
        
?               How Initialize with 0 === memset(t, -1, sizeof(t)); this is work in C & C++
?               In Java === Arrays.fill(t,0)


!        We need to add one more thing in our Knapsack Function before the logic and after the base condition\
        int knapsack(int[] weight, int[] value, int W(capacity), int n){
                if(n == 0 || W == 0){
                        return 0;
                }

                ! Here is add one more condition to improve this code if a shell of matrix is not initialize with -1 then return the same value as previous value
                if(t[n][W] != -1){
                        return t[n][W];
                }
                ? is condition ka mtlb hai ki agar usme -1 hai hi nahi to usme already value hai aur ab hum usko replace nahi karenge
                
                ! Now change something small things in main conditions
                if(weight[n-1] < W){
                        return t[n][W] = max(value[n-1] + knapsack(weight, value, W-weight[n-1], n-1));
                }
                else if(weight[n-1] > W){
                        return t[n][W] = knapsack(weight, value, W, n-1);
                }
        }
                ? Ye jo abhi jo bhi changes kiya hai t[][] wala to iska mtlb hai ki hum hmaari matrix me value bhi daal rhe hai saath ke saath and jo vo condition lagayi hai base condition ke just baad vo check karegi ki vha per -1 hai ya nahi agar nahi hai to return kar degi function ko aur fir se function call hoga kyuki vha per already value hai (agar -1 nahi hai to ofcourse koi value hogi vha per) and fir se check karegi and agar -1 hai iska mtlb hai ki vo space empty hai to hum hmaare function ko continue chalayenge


! This is the complete DP Knapsack Code

! ReadMe::: 
        !Top-Down approach and Memoization approach both Time Complexity is same You can Complete all the test cases of leetcode with this memoization it is an easy approach then top-down approach 
        

*/


/*
! This is the Complete code of 0-1 Knapsack with Memoization
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        int[] weight = {1, 2, 3, 4, 5};
        int[] profit =  {3, 2, 5, 7, 4};
        int W = 12;
        int n = weight.length;

        int[][] t = new int[n + 1][W + 1];
        
        // Initialize with -1 (like memset in C++)
        for (int[] row : t) {
            Arrays.fill(row, -1);
        }

        System.out.println("Maximum Profit: " + KnapSack(t, weight, profit, W, n));
    }

    static int KnapSack(int[][] t, int[] weight, int[] profit, int W, int n) {
        if (n == 0 || W == 0) return 0;

        if (t[n][W] != -1) return t[n][W];

        if (weight[n - 1] <= W) {
            return t[n][W] = Math.max(
                profit[n - 1] + KnapSack(t, weight, profit, W - weight[n - 1], n - 1),
                KnapSack(t, weight, profit, W, n - 1)
            );
        } else {
            return t[n][W] = KnapSack(t, weight, profit, W, n - 1);
        }
    }
}



*/