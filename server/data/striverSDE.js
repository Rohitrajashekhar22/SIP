const striverSDE= [

  {
    title: "Set Matrix Zeroes",

    slug: "striversde-set-matrix-zeroes",

    description:
      "If an element is 0, set its entire row and column to 0.",

    difficulty: "Medium",

    topic: "Matrix",

    constraints: [
      "m == matrix.length",
      "n == matrix[0].length",
      "1 <= m, n <= 200"
    ],

    examples: [
      {
        input: "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        output: "[[1,0,1],[0,0,0],[1,0,1]]",
        explanation: "Rows and columns containing 0 become 0."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public void setZeroes(int[][] matrix) {

    }

}`,

      python:
`class Solution:

    def setZeroes(self, matrix):

        pass`,

      javascript:
`var setZeroes = function(matrix) {

};`,

      cpp:
`class Solution {
public:

    void setZeroes(vector<vector<int>>& matrix) {

    }

};`,

      c:
`void setZeroes(int** matrix, int matrixSize, int* matrixColSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[[1,1,1],[1,0,1],[1,1,1]]",
        output: "[[1,0,1],[0,0,0],[1,0,1]]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        output: "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"
      }
    ],

    sheet: "StriverSDE",

    leetCodeLink:
      "https://leetcode.com/problems/set-matrix-zeroes/",

    tags: ["Matrix", "Array"]
  },



  {
    title: "Pascal's Triangle",

    slug: "striversde-pascals-triangle",

    description:
      "Return the first numRows of Pascal's triangle.",

    difficulty: "Easy",

    topic: "Array",

    constraints: [
      "1 <= numRows <= 30"
    ],

    examples: [
      {
        input: "numRows = 5",
        output: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
        explanation: "Generate Pascal's triangle."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public List<List<Integer>> generate(int numRows) {

    }

}`,

      python:
`class Solution:

    def generate(self, numRows):

        pass`,

      javascript:
`var generate = function(numRows) {

};`,

      cpp:
`class Solution {
public:

    vector<vector<int>> generate(int numRows) {

    }

};`,

      c:
`int** generate(int numRows, int* returnSize, int** returnColumnSizes) {

}`
    },

    visibleTestCases: [
      {
        input: "5",
        output: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]"
      }
    ],

    hiddenTestCases: [
      {
        input: "1",
        output: "[[1]]"
      }
    ],

    sheet: "StriverSDE",

    leetCodeLink:
      "https://leetcode.com/problems/pascals-triangle/",

    tags: ["Array", "Dynamic Programming"]
  },



  {
    title: "Next Permutation",

    slug: "striversde-next-permutation",

    description:
      "Rearrange numbers into the lexicographically next greater permutation.",

    difficulty: "Medium",

    topic: "Array",

    constraints: [
      "1 <= nums.length <= 100",
      "0 <= nums[i] <= 100"
    ],

    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[1,3,2]",
        explanation: "Next greater permutation."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public void nextPermutation(int[] nums) {

    }

}`,

      python:
`class Solution:

    def nextPermutation(self, nums):

        pass`,

      javascript:
`var nextPermutation = function(nums) {

};`,

      cpp:
`class Solution {
public:

    void nextPermutation(vector<int>& nums) {

    }

};`,

      c:
`void nextPermutation(int* nums, int numsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,3]",
        output: "[1,3,2]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[3,2,1]",
        output: "[1,2,3]"
      }
    ],

    sheet: "StriverSDE",

    leetCodeLink:
      "https://leetcode.com/problems/next-permutation/",

    tags: ["Array", "Two Pointers"]
  },



  {
    title: "Maximum Subarray",

    slug: "striversde-maximum-subarray",

    description:
      "Find the contiguous subarray with the largest sum.",

    difficulty: "Medium",

    topic: "Greedy",

    constraints: [
      "1 <= nums.length <= 10^5"
    ],

    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "Subarray [4,-1,2,1] gives maximum sum."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int maxSubArray(int[] nums) {

    }

}`,

      python:
`class Solution:

    def maxSubArray(self, nums):

        pass`,

      javascript:
`var maxSubArray = function(nums) {

};`,

      cpp:
`class Solution {
public:

    int maxSubArray(vector<int>& nums) {

    }

};`,

      c:
`int maxSubArray(int* nums, int numsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[-2,1,-3,4,-1,2,1,-5,4]",
        output: "6"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1]",
        output: "1"
      }
    ],

    sheet: "StriverSDE",

    leetCodeLink:
      "https://leetcode.com/problems/maximum-subarray/",

    tags: ["Greedy", "Dynamic Programming"]
  },



  {
    title: "Sort Colors",

    slug: "striversde-sort-colors",

    description:
      "Sort an array containing 0s, 1s, and 2s in-place.",

    difficulty: "Medium",

    topic: "Sorting",

    constraints: [
      "1 <= nums.length <= 300",
      "nums[i] is 0, 1, or 2"
    ],

    examples: [
      {
        input: "nums = [2,0,2,1,1,0]",
        output: "[0,0,1,1,2,2]",
        explanation: "Sorted colors using Dutch National Flag algorithm."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public void sortColors(int[] nums) {

    }

}`,

      python:
`class Solution:

    def sortColors(self, nums):

        pass`,

      javascript:
`var sortColors = function(nums) {

};`,

      cpp:
`class Solution {
public:

    void sortColors(vector<int>& nums) {

    }

};`,

      c:
`void sortColors(int* nums, int numsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[2,0,2,1,1,0]",
        output: "[0,0,1,1,2,2]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[2,0,1]",
        output: "[0,1,2]"
      }
    ],

    sheet: "StriverSDE",

    leetCodeLink:
      "https://leetcode.com/problems/sort-colors/",

    tags: ["Sorting", "Array", "Two Pointers"]
  }

];

export default striverSDE;