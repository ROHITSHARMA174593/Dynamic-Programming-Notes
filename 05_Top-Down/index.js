/*
! Top-Down Approach
? Step of Filling the Matrix Table

            |   n/W |   0 |   1 |   2 |   3 |   4 |   5 |
            |-------|-----|-----|-----|-----|-----|-----|
            |   0   |  0  |  0  |  0  |  0  |  0  |  0  |
            |   1   |  0  |     |     |     |     |     |
            |   2   |  0  |     |     |     |     |     |
            |   3   |  0  |     |     |     |     |     |
            |   4   |  0  |     |     |     |     |     |
            |   5   |  0  |     |     |     |     |     |





?       Step 1 === Initialization
!           important=== in this approach our counting start from 1 not 0 because first row and first column is only for initializing         

?       Step 2 === In Top-Down approach we are convert our base conditioni into matrix
*       Base Condition
                if(n == 0 || W == 0){
                    return 0;
                }



            |   n/W |  0 |   1 |   2 |   3 |   4 |   5 |
            |-------|----|-----|-----|-----|-----|-----|
            |   0   |    |     |     |     |     |     |
            |   1   |    |     |     |     |     |     |
            |   2   |    |     |     |     |     |     |
            |   3   |    |     |     |     |     |     |
            |   4   |    |     |     |     |     |     |
            |   5   |    |     |     |     |     |     |

!           Recursive Code Base condition when comes to in Top-Down approach than it will change 
!           We can say in Matrix we are apply code one by one (like Debugging)


todo === Main Steps
?       Step 1️⃣ 👇🏻👇🏻👇🏻⬇️⬇️⬇️ === 
            According to base condition when the n == 0 and W == 0 it return 0 so initialize first row and first column with 0

            |   n/W |  0  |   1  |   2  |   3  |   4  |   5  |
            |-------|-----|------|------|------|------|------|
            |   0   |  0  |  0   |  0   |  0   |  0   |  0   | // Add This & 
            |   1   |  0  |      |      |      |      |      |
            |   2   |  0  |      |      |      |      |      |
            |   3   |  0  |      |      |      |      |      |
            |   4   |  0  |      |      |      |      |      |
            |   5   |  0  |      |      |      |      |      |
                     This

    * Write the Recursive Code of This Matrix Accordint to Recursive Code Base Condition
*                              | 
*       Base Condition         |     Condition According to Top Down Approach     
*            |                 |                    |     
*                              | 
*                              |        for(int i=0;i<n+1;i++){ 
*                             |             for(int j=0;j<W+1;j++){
*   if(n == 0 || W == 0){      |                if(i == 0 || j == 0){
*       return 0;              |                    t[i][j] = 0;
*   }                          |                }
*                              |            }
*                              |        }
*                              |    
?       ✅✅ Base Condition Top-Down Code is Done✅✅ 



?       Step 2️⃣ 👇🏻👇🏻👇🏻⬇️⬇️⬇️ === 
! Knapsack Function === static int KnapSack(int[][] t, int[] weight, int[] profit, int W, int n) {
*                                                               
*       Recursive Code                                      |           Iterative Code (TopDownApproach)                                                   
*                                                           |                            
*    if(weight[n-1] <= W)                                   |         if(weight[n-1] <= W)   Condition is same                    
*     return Math.max(profit[n-1])                          |          t[n][W] = max(val[n-1]+t[W-weight[n-1]],n-1), t[n-1][W]                  
*         +Knapsack(t,weight,profit,W-weight[n-1],n-1),     |                            
*            Knapsack(t,weight,profit,W, n-1)               |                            
*                                                           |         else if(weight[n-1] > W)                   
*                                                           |                 simple decrease the weight array as code          
*                                                           |                            
*                                                           |         else                   
*                                                           |             t[n][W] = t[n-1][W]               
*                                                           |                            
*                                                           |  This is Just for How Things are work Iterative code in step 3️⃣                          


?       Step 3️⃣ 👇🏻👇🏻👇🏻⬇️⬇️⬇️ ===
*           Now fill the Matrix using Code

* #️⃣ Code :::
        for(int i=1;i<n+1;i++){
            for(int j=1;j<W+1;j++){
                if(weight[n-1] < W){
                    ! Remember This === n = i and W = j in iterative code (n ko i se replace kar do and W ko j se aur code same as Step 2️⃣ Iterative code)
                    t[i][j] = Math.max(val[i-1] + t[i-1][J-weight[i-1] , t[i-1][j]]; 
                }else{
                    t[i][j] = t[i-1][j]
                }
            }
        }
! Last index of i and j is return if the matrix is 4X4 then it return 3X3 shell value






 */