package ArrayAndStrings.solution;

public class LC11_ContainerWithMostWater {
    public static void main(String[] args) {

    }

    public int maxArea(int[] heights) {
        int maxArea = 0;
        int aPointer = 0;
        int bPointer = heights.length -1;

        while (aPointer < bPointer){
            if(heights[aPointer] < heights[bPointer]){
                maxArea = Math.max(maxArea, heights[aPointer] * (bPointer - aPointer));
                aPointer += 1;
            }else {
                maxArea = Math.max(maxArea, heights[bPointer] * (bPointer - aPointer));
                bPointer -= 1;
            }
        }

        return maxArea;
    }

    /**
     * Time Complexity => O(n-squared)
     * Space Complexity => O(1)
     * @param heights
     * @return
     */
    public int maxAreaBruteForce(int[] heights) {
        int result = 0;

        for (int left = 0; left < heights.length; left++){
            for (int right = left + 1;right < heights.length; right++){
                int area = (left * right) * Math.min(heights[left], heights[right]);
                result = Math.max(result, area);
            }
        }

        return result;
    }
}
