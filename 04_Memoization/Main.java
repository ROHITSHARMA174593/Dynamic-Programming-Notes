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

