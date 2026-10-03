const topInterview150 = [

  {
    title: "Best Time to Buy and Sell Stock",

    slug: "top150-best-time-to-buy-and-sell-stock",

    description:
      "Find the maximum profit from buying and selling a stock once.",

    difficulty: "Easy",

    topic: "Array",

    constraints: [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4"
    ],

    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy at 1 and sell at 6."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int maxProfit(int[] prices) {

    }

}`,

      python:
`class Solution:

    def maxProfit(self, prices):

        pass`,

      javascript:
`var maxProfit = function(prices) {

};`,

      cpp:
`class Solution {
public:

    int maxProfit(vector<int>& prices) {

    }

};`,

      c:
`int maxProfit(int* prices, int pricesSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[7,1,5,3,6,4]",
        output: "5"
      }
    ],

    hiddenTestCases: [
      {
        input: "[7,6,4,3,1]",
        output: "0"
      }
    ],

    sheet: "TopInterview150",

    leetCodeLink:
      "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",

    tags: ["Array", "Dynamic Programming"]
  },



  {
    title: "Majority Element",

    slug: "top150-majority-element",

    description:
      "Return the element that appears more than n/2 times.",

    difficulty: "Easy",

    topic: "Array",

    constraints: [
      "n == nums.length",
      "1 <= n <= 5 * 10^4"
    ],

    examples: [
      {
        input: "nums = [3,2,3]",
        output: "3",
        explanation: "3 appears more than n/2 times."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int majorityElement(int[] nums) {

    }

}`,

      python:
`class Solution:

    def majorityElement(self, nums):

        pass`,

      javascript:
`var majorityElement = function(nums) {

};`,

      cpp:
`class Solution {
public:

    int majorityElement(vector<int>& nums) {

    }

};`,

      c:
`int majorityElement(int* nums, int numsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[3,2,3]",
        output: "3"
      }
    ],

    hiddenTestCases: [
      {
        input: "[2,2,1,1,1,2,2]",
        output: "2"
      }
    ],

    sheet: "TopInterview150",

    leetCodeLink:
      "https://leetcode.com/problems/majority-element/",

    tags: ["Array", "HashMap"]
  },



  {
    title: "Rotate Array",

    slug: "top150-rotate-array",

    description:
      "Rotate the array to the right by k steps.",

    difficulty: "Medium",

    topic: "Array",

    constraints: [
      "1 <= nums.length <= 10^5",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],

    examples: [
      {
        input: "nums = [1,2,3,4,5,6,7], k = 3",
        output: "[5,6,7,1,2,3,4]",
        explanation: "Rotate array by 3 positions."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public void rotate(int[] nums, int k) {

    }

}`,

      python:
`class Solution:

    def rotate(self, nums, k):

        pass`,

      javascript:
`var rotate = function(nums, k) {

};`,

      cpp:
`class Solution {
public:

    void rotate(vector<int>& nums, int k) {

    }

};`,

      c:
`void rotate(int* nums, int numsSize, int k) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,3,4,5,6,7], 3",
        output: "[5,6,7,1,2,3,4]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[-1,-100,3,99], 2",
        output: "[3,99,-1,-100]"
      }
    ],

    sheet: "TopInterview150",

    leetCodeLink:
      "https://leetcode.com/problems/rotate-array/",

    tags: ["Array", "Math"]
  },



  {
    title: "Product of Array Except Self",

    slug: "top150-product-of-array-except-self",

    description:
      "Return an array where answer[i] equals the product of all elements except nums[i].",

    difficulty: "Medium",

    topic: "Array",

    constraints: [
      "2 <= nums.length <= 10^5",
      "-30 <= nums[i] <= 30"
    ],

    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation: "Product except self for each index."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int[] productExceptSelf(int[] nums) {

    }

}`,

      python:
`class Solution:

    def productExceptSelf(self, nums):

        pass`,

      javascript:
`var productExceptSelf = function(nums) {

};`,

      cpp:
`class Solution {
public:

    vector<int> productExceptSelf(vector<int>& nums) {

    }

};`,

      c:
`int* productExceptSelf(int* nums, int numsSize, int* returnSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,3,4]",
        output: "[24,12,8,6]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[-1,1,0,-3,3]",
        output: "[0,0,9,0,0]"
      }
    ],

    sheet: "TopInterview150",

    leetCodeLink:
      "https://leetcode.com/problems/product-of-array-except-self/",

    tags: ["Array", "Prefix Sum"]
  },



  {
    title: "Gas Station",

    slug: "top150-gas-station",

    description:
      "Return the starting gas station index if you can travel around the circuit once.",

    difficulty: "Medium",

    topic: "Greedy",

    constraints: [
      "1 <= gas.length == cost.length <= 10^5"
    ],

    examples: [
      {
        input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        output: "3",
        explanation: "Start at index 3."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int canCompleteCircuit(int[] gas, int[] cost) {

    }

}`,

      python:
`class Solution:

    def canCompleteCircuit(self, gas, cost):

        pass`,

      javascript:
`var canCompleteCircuit = function(gas, cost) {

};`,

      cpp:
`class Solution {
public:

    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {

    }

};`,

      c:
`int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,3,4,5], [3,4,5,1,2]",
        output: "3"
      }
    ],

    hiddenTestCases: [
      {
        input: "[2,3,4], [3,4,3]",
        output: "-1"
      }
    ],

    sheet: "TopInterview150",

    leetCodeLink:
      "https://leetcode.com/problems/gas-station/",

    tags: ["Greedy", "Array"]
  }

];

export default topInterview150;