/*
? Recursive Problem (0-1 Knapsack)
*       First we need to write a Recursive Program than solve with top-down or memorization

!       Input Values
            +---------------------------+
            |   weight[] : {1,3,4,5}    |
            |   value[] : {1,4,5,7}     |
            |   capacity(W) : 7         |
            +----------------------------

!       Make a Choice Table
?                   1. Here we know the Bag Capacity is = 7
*                                                           Item1 == w1
                                                                ||
                -----------------------------------------------    -----------------------------------------------   
              |                                                                                                     |
*   if(w1 <= capacity) :                                                                                        if(w1 > capacity):
           Here we have 2 options Include or Not in bag                                                                iss wale option me to  clear hai ki hum nahi add kar sakte bag me kyuki item ka size bag se jyada ho jaayega


?       Knapsack Function
*            1. Make a Function of Knapsack
*            2. Return Type int
*            3. int weight[], int value[], int capacity(capacity is called W), int n(array size (weight))
*
*            Code : 
*                int knapsack(int[] weight, int[] value, int W, int n){
*                    1. Base Condition
*                    2. Choice Diagram
*                }
*
*                1. How to think about Base Condition >> Think of the smallest valid input(make sure value not invalid)
*                    >> we have weight array value array and capacity(W)
                    >> here is our both arrays and capacity can be 0  because array size in in the starting is n and after that when we are start Recursion than our condition is like func(arr, n:ind-1) and what is n arr.length-1 
*                    Base Condition is : 
*                            if(n == 0 || W == 0):
*                                    return 0
*                    Now Write the Choice Diagram Code(else)
*                            else:
*                                ? here n-1 is last element of our weight array 
*                                if(weight[n-1] < W(capacity of our knapsack)):
*                                    RecursionCall start from here
                                    knapsack(weight, value, W-weight[n-1], n-1) W = capacity === ab hume yaha per knapsack ki capacity ko bhi kam karna padega isliye W-weight[n-1] jaise agar W=10 hai aur weight array ka last element ki 4 hai to ab hmaari capacity(W) ho jaayegi === 6 aur fir se Recursion Call Start ho jaayegi
*
*                                else if(weight[n-1] > W(capacity)):
*                                    yaha per bus hume ek simple Recursion call karni hai aur next element ko check karna hai 
*                                    knapsack(weight, value, W(capacity), n-1) // ab ye next value ko check karega mtlb backward
*

! Abhi tak ka jo knapsack() function  hai isme fully explination ke saath hai 
! Abhi neeche jo code hai vo clear code hai Knapsack ka with the input
        weight[] = {1,2,3,4,5}, value[] = {3,1,5,4,2}, int W = 12, int n = weight.length -1

        int knapsack(int[] weight, int[] value, int W(capacity), int n){
            Base Condition
            if(n == 0 || w == 0){
                return 0;
            }
            if(weight[n-1] <= W){
                value[n-1] jo hmaare value array ki last value hai usko hum ab add karva denge hmaari knapsack ke ander
                return (value[n-1] + knapsack(weight, value, W-weight[n-1], n-1));
            }else if(weight[n-1] > W){
                return knapsack(weight, value, W, n-1);
            }
        }
! knapsack ke ander hum weightm ko add karenge aur kyuki hu knapsack ki capacity me se W(capacity) ko remove karenge (agar element add karte hai to hi capacity me se remove karenge weight ko)         
                                    
*/