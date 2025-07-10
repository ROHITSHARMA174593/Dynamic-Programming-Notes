/*
? 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣ First Problem 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣


! Remember 3 Things
*           1. Problem Statement
*           2. Similarity with Knapsack
*           3. Code Variations === in this we have 2 things 1️⃣Initialization and 2️⃣Code 
?------------------------------------------------- Subset Sum Problem ----------------------------------------------------------------------------------
todo            I/P  arr[] = {2,3,7,8,9,4}, sum = 11 (use any value);
todo Description === which two elements some is = 11 === W(capacity)
todo ===  For Every number we have choice

! --------------------------------------------------------- Code Analysis -----------------------------------------------------------
?   1️⃣ Initialization
*    t[n+1][W+1]    ===    t[7][12] ----->>---->> ----->------>----> arr[n+1][W+1]
! Just for clarification we are use True and False values to fill in matrix and this is Initialization



              0  |   1   |   2    |    3    |    4  |    5     ---------------------------->>            arr[j]
        +--------|-------|--------|---------|-------|-----------------------------------------------------------------+
       0 | True  | False |        |         |       |                                                                   |
       1 | True  |       |        |         |       |                                                                   |
       2 | True  |       |        |         |       |                                                                   |
       3 | True  |       |        |         |       |                                                                   |
       4 | True  |       |        |         |       |                                                                   |
       5 | True  |       |        |         |       |                                                                   |
         |                                                                                                        |
 arr[i]  |                                                                                                        |
    |
  Size
   of 
  Array


! Return Answer in True or False (T/F)
! For First Column or iteration
for (0,0) ==> Yaha per array ke size 0 ke liye aur Sum bhi 0 ke liye dekhenge to agar answer dono ka 0 hai to empty subset possible hota hai  |||  subset possible {} ✅ Yes here is Empty Subset is Possible True(T)
for(1,0) ==> Yaha per array ke size 0 ke liye aur Sum bhi 0 ke liye dekhenge to agar answer dono ka 0 hai to empty subset possible hota hai  |||  subset possible  {} ✅ Yes here is Empty Subset is Possible True(T)
* for (2,0), for(3,0), for(4,0), for(5,0) for these all here is Subset Possible === {} ✅ Yes here is Empty Subset is Possible True(T)

! For Second Column or iteration
for(0,1) ==> Yaha per array ka size 0 lekin sum=1 hai to humaare pass subset me put karne ke liye koi value hi nahi hai to iss condition me ❌ False ho jaayega kyuki hum subset me kuch nahi daal sakte(because array is empty)
! Note === Jaha jaha array ka size 0 rhe lekin sum ke ander value aa rhi hai vha per hum hmaari matrix me False(0) fill kar sakte hai  (for more read previous line and why we cannot put false in matrix where array size is 0 and sum is 0 read first line of first iteration)

!This is just an initialization no need to fill the complete matrix because it consume more time and this is enought for base conditions and start writing our code



! --------------------------------------------------------- Code Analysis -----------------------------------------------------------
?   !!! 2️⃣ Code !!!
? Here we have some time only a single given array and as per previous study we accept this single array as a weight array

* in this scenario we have some different things
                wt[]          === arr[]   // wt array is give 
                W(capacity)   === sum     // this




  Knapsack and Subset Problem Both Code

?            Knapsack
  if(wt[i-1] <= j){
    t[i][j]  = max(value[n-1]+t[i-1][j-wt[i+1]], t[i-1][j]) //// it returns any one in these two values that is greter than another
  }else{
    t[i][j] = t[i-1][j]
  }
\
? Same Scennarion in Subset Problem 
* read === ignore value array everywhere
* read === and here we are not use maximum because we want answer in true and false so we use ||(OR) operator
  if(arr[i-1] <= j){
    t[i]j[j] = t[i][j-arr[i+1]] || t[i-1][j];
  }else {
    t[i][j] = t[i-1][j];
  }


*/