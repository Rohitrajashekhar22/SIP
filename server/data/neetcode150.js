const neetcode150 = [

  {
    title: "Koko Eating Bananas",

    slug: "neetcode150-koko-eating-bananas",

    description:
      "Return the minimum integer eating speed such that Koko can eat all bananas within h hours.",

    difficulty: "Medium",

    topic: "Binary Search",

    constraints: [
      "1 <= piles.length <= 10^4",
      "piles.length <= h <= 10^9",
      "1 <= piles[i] <= 10^9"
    ],

    examples: [
      {
        input: "piles = [3,6,7,11], h = 8",
        output: "4",
        explanation: "Koko can finish all bananas at speed 4."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int minEatingSpeed(int[] piles, int h) {

    }

}`,

      python:
`class Solution:

    def minEatingSpeed(self, piles, h):

        pass`,

      javascript:
`var minEatingSpeed = function(piles, h) {

};`,

      cpp:
`class Solution {
public:

    int minEatingSpeed(vector<int>& piles, int h) {

    }

};`,

      c:
`int minEatingSpeed(int* piles, int pilesSize, int h) {

}`
    },

    visibleTestCases: [
      {
        input: "[3,6,7,11], 8",
        output: "4"
      }
    ],

    hiddenTestCases: [
      {
        input: "[30,11,23,4,20], 5",
        output: "30"
      }
    ],

    sheet: "NeetCode150",

    leetCodeLink:
      "https://leetcode.com/problems/koko-eating-bananas/",

    tags: ["Binary Search", "Array"]
  },



  {
    title: "Search in Rotated Sorted Array",

    slug: "neetcode150-search-in-rotated-sorted-array",

    description:
      "Search target in rotated sorted array.",

    difficulty: "Medium",

    topic: "Binary Search",

    constraints: [
      "1 <= nums.length <= 5000",
      "-10^4 <= nums[i], target <= 10^4"
    ],

    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
        explanation: "Target exists at index 4."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int search(int[] nums, int target) {

    }

}`,

      python:
`class Solution:

    def search(self, nums, target):

        pass`,

      javascript:
`var search = function(nums, target) {

};`,

      cpp:
`class Solution {
public:

    int search(vector<int>& nums, int target) {

    }

};`,

      c:
`int search(int* nums, int numsSize, int target) {

}`
    },

    visibleTestCases: [
      {
        input: "[4,5,6,7,0,1,2], 0",
        output: "4"
      }
    ],

    hiddenTestCases: [
      {
        input: "[4,5,6,7,0,1,2], 3",
        output: "-1"
      }
    ],

    sheet: "NeetCode150",

    leetCodeLink:
      "https://leetcode.com/problems/search-in-rotated-sorted-array/",

    tags: ["Binary Search", "Array"]
  },



  {
    title: "Find Minimum in Rotated Sorted Array",

    slug: "neetcode150-find-minimum-in-rotated-sorted-array",

    description:
      "Find the minimum element in a rotated sorted array.",

    difficulty: "Medium",

    topic: "Binary Search",

    constraints: [
      "1 <= nums.length <= 5000",
      "-5000 <= nums[i] <= 5000"
    ],

    examples: [
      {
        input: "nums = [3,4,5,1,2]",
        output: "1",
        explanation: "1 is the minimum element."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int findMin(int[] nums) {

    }

}`,

      python:
`class Solution:

    def findMin(self, nums):

        pass`,

      javascript:
`var findMin = function(nums) {

};`,

      cpp:
`class Solution {
public:

    int findMin(vector<int>& nums) {

    }

};`,

      c:
`int findMin(int* nums, int numsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[3,4,5,1,2]",
        output: "1"
      }
    ],

    hiddenTestCases: [
      {
        input: "[4,5,6,7,0,1,2]",
        output: "0"
      }
    ],

    sheet: "NeetCode150",

    leetCodeLink:
      "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",

    tags: ["Binary Search", "Array"]
  },



  {
    title: "Time Based Key-Value Store",

    slug: "neetcode150-time-based-key-value-store",

    description:
      "Design a time-based key-value data structure.",

    difficulty: "Medium",

    topic: "Design",

    constraints: [
      "1 <= key.length, value.length <= 100",
      "1 <= timestamp <= 10^7"
    ],

    examples: [
      {
        input: 'set("foo","bar",1), get("foo",1)',
        output: '"bar"',
        explanation: "Returns value at timestamp 1."
      }
    ],

    starterCode: {

      java:
`class TimeMap {

    public TimeMap() {

    }

    public void set(String key, String value, int timestamp) {

    }

    public String get(String key, int timestamp) {

    }

}`,

      python:
`class TimeMap:

    def __init__(self):

        pass

    def set(self, key, value, timestamp):

        pass

    def get(self, key, timestamp):

        pass`,

      javascript:
`var TimeMap = function() {

};

TimeMap.prototype.set = function(key, value, timestamp) {

};

TimeMap.prototype.get = function(key, timestamp) {

};`,

      cpp:
`class TimeMap {
public:

    TimeMap() {

    }

    void set(string key, string value, int timestamp) {

    }

    string get(string key, int timestamp) {

    }

};`,

      c:
`// Design based implementation`
    },

    visibleTestCases: [
      {
        input: 'set("foo","bar",1), get("foo",1)',
        output: '"bar"'
      }
    ],

    hiddenTestCases: [
      {
        input: 'get("foo",3)',
        output: '"bar"'
      }
    ],

    sheet: "NeetCode150",

    leetCodeLink:
      "https://leetcode.com/problems/time-based-key-value-store/",

    tags: ["HashMap", "Binary Search", "Design"]
  },



  {
    title: "Median of Two Sorted Arrays",

    slug: "neetcode150-median-of-two-sorted-arrays",

    description:
      "Return the median of two sorted arrays.",

    difficulty: "Hard",

    topic: "Binary Search",

    constraints: [
      "0 <= nums1.length, nums2.length <= 1000",
      "1 <= nums1.length + nums2.length <= 2000"
    ],

    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0",
        explanation: "Merged array is [1,2,3]."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public double findMedianSortedArrays(int[] nums1, int[] nums2) {

    }

}`,

      python:
`class Solution:

    def findMedianSortedArrays(self, nums1, nums2):

        pass`,

      javascript:
`var findMedianSortedArrays = function(nums1, nums2) {

};`,

      cpp:
`class Solution {
public:

    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {

    }

};`,

      c:
`double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,3], [2]",
        output: "2.0"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1,2], [3,4]",
        output: "2.5"
      }
    ],

    sheet: "NeetCode150",

    leetCodeLink:
      "https://leetcode.com/problems/median-of-two-sorted-arrays/",

    tags: ["Binary Search", "Array"]
  }

];

export default neetcode150;