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
*           Here we have 2 options Include or Not in bag                                                                iss wale option me to  clear hai ki hum nahi add kar sakte bag me kyuki item ka size bag se jyada ho jaayega


?       Knapsack Function
            1. Make a Function of Knapsack
            2. Return Type int
            3. int weight[], int value[], int capacity(capacity is called W), int n(array size (weight))

            Code : 
                int knapsack(int[] weight, int[] value, int W, int n){
                    1. Base Condition
                    2. Choice Diagram
                }

                1. How to think about Base Condition >> Think of the smallest valid input(make sure valie not invalid)
                    >> we have weight array value array and capacity(W)
                    >> here is our both arrays and capacity can be 0  because array size in in the starting is n and after that when we are start Recursion than our condition is like func(arr, n:ind-1) and what is n arr.length-1 
                    Base Condition is : 
                            if(n == 0 || W == 0):

*/