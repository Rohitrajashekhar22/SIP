const blind75 = [

  {
    title: "Two Sum",

    slug: "blind75-two-sum",

    description:
      "Return indices of the two numbers such that they add up to the target.",

    difficulty: "Easy",

    topic: "Array",

    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],

    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "nums[0] + nums[1] = 9"
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int[] twoSum(int[] nums, int target) {

    }

}`,

      python:
`class Solution:

    def twoSum(self, nums, target):

        pass`,

      javascript:
`var twoSum = function(nums, target) {

};`,

      cpp:
`class Solution {
public:

    vector<int> twoSum(vector<int>& nums, int target) {

    }

};`,

      c:
`int* twoSum(int* nums, int numsSize, int target, int* returnSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[2,7,11,15], 9",
        output: "[0,1]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[3,2,4], 6",
        output: "[1,2]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/two-sum/",

    tags: ["Array", "HashMap"]
  },
{
    title: "Contains Duplicate",

    slug: "blind75-contains-duplicate",

    description:
      "Return true if any value appears at least twice in the array.",

    difficulty: "Easy",

    topic: "Array",

    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],

    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
        explanation: "1 appears twice."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public boolean containsDuplicate(int[] nums) {

    }

}`,

      python:
`class Solution:

    def containsDuplicate(self, nums):

        pass`,

      javascript:
`var containsDuplicate = function(nums) {

};`,

      cpp:
`class Solution {
public:

    bool containsDuplicate(vector<int>& nums) {

    }

};`,

      c:
`bool containsDuplicate(int* nums, int numsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,3,1]",
        output: "true"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1,2,3,4]",
        output: "false"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/contains-duplicate/",

    tags: ["Array", "HashSet"]
  },



  {
    title: "Valid Anagram",

    slug: "blind75-valid-anagram",

    description:
      "Return true if t is an anagram of s.",

    difficulty: "Easy",

    topic: "String",

    constraints: [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters."
    ],

    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
        explanation: "Both strings contain same characters."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public boolean isAnagram(String s, String t) {

    }

}`,

      python:
`class Solution:

    def isAnagram(self, s, t):

        pass`,

      javascript:
`var isAnagram = function(s, t) {

};`,

      cpp:
`class Solution {
public:

    bool isAnagram(string s, string t) {

    }

};`,

      c:
`bool isAnagram(char* s, char* t) {

}`
    },

    visibleTestCases: [
      {
        input: '"anagram", "nagaram"',
        output: "true"
      }
    ],

    hiddenTestCases: [
      {
        input: '"rat", "car"',
        output: "false"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/valid-anagram/",

    tags: ["HashMap", "Sorting", "String"]
  },



  {
    title: "Group Anagrams",

    slug: "blind75-group-anagrams",

    description:
      "Group the anagrams together.",

    difficulty: "Medium",

    topic: "Array",

    constraints: [
      "1 <= strs.length <= 10^4",
      "0 <= strs[i].length <= 100"
    ],

    examples: [
      {
        input: '["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
        explanation: "Strings are grouped by sorted characters."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public List<List<String>> groupAnagrams(String[] strs) {

    }

}`,

      python:
`class Solution:

    def groupAnagrams(self, strs):

        pass`,

      javascript:
`var groupAnagrams = function(strs) {

};`,

      cpp:
`class Solution {
public:

    vector<vector<string>> groupAnagrams(vector<string>& strs) {

    }

};`,

      c:
`char*** groupAnagrams(char** strs, int strsSize, int* returnSize, int** returnColumnSizes) {

}`
    },

    visibleTestCases: [
      {
        input: '["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]'
      }
    ],

    hiddenTestCases: [
      {
        input: '[""]',
        output: '[[""]]'
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/group-anagrams/",

    tags: ["HashMap", "String", "Sorting"]
  },



  {
    title: "Top K Frequent Elements",

    slug: "blind75-top-k-frequent-elements",

    description:
      "Return the k most frequent elements.",

    difficulty: "Medium",

    topic: "Heap",

    constraints: [
      "1 <= nums.length <= 10^5",
      "k is in the range [1, number of unique elements]"
    ],

    examples: [
      {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]",
        explanation: "1 and 2 are most frequent."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int[] topKFrequent(int[] nums, int k) {

    }

}`,

      python:
`class Solution:

    def topKFrequent(self, nums, k):

        pass`,

      javascript:
`var topKFrequent = function(nums, k) {

};`,

      cpp:
`class Solution {
public:

    vector<int> topKFrequent(vector<int>& nums, int k) {

    }

};`,

      c:
`int* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,1,1,2,2,3], 2",
        output: "[1,2]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1], 1",
        output: "[1]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/top-k-frequent-elements/",

    tags: ["Heap", "Bucket Sort", "HashMap"]
  },
{
    title: "Product of Array Except Self",

    slug: "blind75-product-of-array-except-self",

    description:
      "Return an array answer such that answer[i] is equal to the product of all elements except nums[i].",

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
        explanation: "Product of all elements except self."
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

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/product-of-array-except-self/",

    tags: ["Array", "Prefix Sum"]
  },



  {
    title: "Valid Sudoku",

    slug: "blind75-valid-sudoku",

    description:
      "Determine if a 9x9 Sudoku board is valid.",

    difficulty: "Medium",

    topic: "Matrix",

    constraints: [
      "board.length == 9",
      "board[i].length == 9"
    ],

    examples: [
      {
        input: "Valid Sudoku Board",
        output: "true",
        explanation: "Board follows Sudoku rules."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public boolean isValidSudoku(char[][] board) {

    }

}`,

      python:
`class Solution:

    def isValidSudoku(self, board):

        pass`,

      javascript:
`var isValidSudoku = function(board) {

};`,

      cpp:
`class Solution {
public:

    bool isValidSudoku(vector<vector<char>>& board) {

    }

};`,

      c:
`bool isValidSudoku(char** board, int boardSize, int* boardColSize) {

}`
    },

    visibleTestCases: [
      {
        input: "Valid Board",
        output: "true"
      }
    ],

    hiddenTestCases: [
      {
        input: "Invalid Board",
        output: "false"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/valid-sudoku/",

    tags: ["Matrix", "HashSet"]
  },



  {
    title: "Encode and Decode Strings",

    slug: "blind75-encode-and-decode-strings",

    description:
      "Design an algorithm to encode a list of strings to a string.",

    difficulty: "Medium",

    topic: "String",

    constraints: [
      "1 <= strs.length <= 200",
      "0 <= strs[i].length <= 200"
    ],

    examples: [
      {
        input: '["neet","code","love","you"]',
        output: '"4#neet4#code4#love3#you"',
        explanation: "Length-prefixed encoding."
      }
    ],

    starterCode: {

      java:
`public class Codec {

    public String encode(List<String> strs) {

    }

    public List<String> decode(String s) {

    }

}`,

      python:
`class Codec:

    def encode(self, strs):

        pass

    def decode(self, s):

        pass`,

      javascript:
`var encode = function(strs) {

};

var decode = function(s) {

};`,

      cpp:
`class Codec {
public:

    string encode(vector<string>& strs) {

    }

    vector<string> decode(string s) {

    }

};`,

      c:
`char* encode(char** strs, int strsSize) {

}

char** decode(char* s, int* returnSize) {

}`
    },

    visibleTestCases: [
      {
        input: '["neet","code"]',
        output: '"4#neet4#code"'
      }
    ],

    hiddenTestCases: [
      {
        input: '["hello","world"]',
        output: '"5#hello5#world"'
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/encode-and-decode-strings/",

    tags: ["String", "Design"]
  },



  {
    title: "Longest Consecutive Sequence",

    slug: "blind75-longest-consecutive-sequence",

    description:
      "Find the length of the longest consecutive elements sequence.",

    difficulty: "Medium",

    topic: "Array",

    constraints: [
      "0 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],

    examples: [
      {
        input: "[100,4,200,1,3,2]",
        output: "4",
        explanation: "Longest consecutive sequence is [1,2,3,4]."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int longestConsecutive(int[] nums) {

    }

}`,

      python:
`class Solution:

    def longestConsecutive(self, nums):

        pass`,

      javascript:
`var longestConsecutive = function(nums) {

};`,

      cpp:
`class Solution {
public:

    int longestConsecutive(vector<int>& nums) {

    }

};`,

      c:
`int longestConsecutive(int* nums, int numsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[100,4,200,1,3,2]",
        output: "4"
      }
    ],

    hiddenTestCases: [
      {
        input: "[0,3,7,2,5,8,4,6,0,1]",
        output: "9"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/longest-consecutive-sequence/",

    tags: ["Array", "HashSet"]
  },



  {
    title: "Two Sum II - Input Array Is Sorted",

    slug: "blind75-two-sum-ii-input-array-is-sorted",

    description:
      "Find two numbers such that they add up to target.",

    difficulty: "Medium",

    topic: "Two Pointers",

    constraints: [
      "2 <= numbers.length <= 3 * 10^4",
      "-1000 <= numbers[i] <= 1000"
    ],

    examples: [
      {
        input: "numbers = [2,7,11,15], target = 9",
        output: "[1,2]",
        explanation: "2 + 7 = 9"
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int[] twoSum(int[] numbers, int target) {

    }

}`,

      python:
`class Solution:

    def twoSum(self, numbers, target):

        pass`,

      javascript:
`var twoSum = function(numbers, target) {

};`,

      cpp:
`class Solution {
public:

    vector<int> twoSum(vector<int>& numbers, int target) {

    }

};`,

      c:
`int* twoSum(int* numbers, int numbersSize, int target, int* returnSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[2,7,11,15], 9",
        output: "[1,2]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[2,3,4], 6",
        output: "[1,3]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",

    tags: ["Two Pointers", "Binary Search"]
  },
  {
    title: "3Sum",

    slug: "blind75-3sum",

    description:
      "Return all the triplets such that their sum equals zero.",

    difficulty: "Medium",

    topic: "Two Pointers",

    constraints: [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5"
    ],

    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "Triplets sum to zero."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public List<List<Integer>> threeSum(int[] nums) {

    }

}`,

      python:
`class Solution:

    def threeSum(self, nums):

        pass`,

      javascript:
`var threeSum = function(nums) {

};`,

      cpp:
`class Solution {
public:

    vector<vector<int>> threeSum(vector<int>& nums) {

    }

};`,

      c:
`int** threeSum(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {

}`
    },

    visibleTestCases: [
      {
        input: "[-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[0,0,0]",
        output: "[[0,0,0]]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/3sum/",

    tags: ["Array", "Two Pointers", "Sorting"]
  },



  {
    title: "Container With Most Water",

    slug: "blind75-container-with-most-water",

    description:
      "Find two lines that together with the x-axis form a container holding the most water.",

    difficulty: "Medium",

    topic: "Two Pointers",

    constraints: [
      "2 <= height.length <= 10^5",
      "0 <= height[i] <= 10^4"
    ],

    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation: "Maximum area is formed between heights 8 and 7."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int maxArea(int[] height) {

    }

}`,

      python:
`class Solution:

    def maxArea(self, height):

        pass`,

      javascript:
`var maxArea = function(height) {

};`,

      cpp:
`class Solution {
public:

    int maxArea(vector<int>& height) {

    }

};`,

      c:
`int maxArea(int* height, int heightSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,8,6,2,5,4,8,3,7]",
        output: "49"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1,1]",
        output: "1"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/container-with-most-water/",

    tags: ["Array", "Greedy", "Two Pointers"]
  },



  {
    title: "Best Time to Buy and Sell Stock",

    slug: "blind75-best-time-to-buy-and-sell-stock",

    description:
      "Find the maximum profit you can achieve from one transaction.",

    difficulty: "Easy",

    topic: "Sliding Window",

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

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",

    tags: ["Array", "Sliding Window"]
  },



  {
    title: "Longest Substring Without Repeating Characters",

    slug: "blind75-longest-substring-without-repeating-characters",

    description:
      "Find the length of the longest substring without repeating characters.",

    difficulty: "Medium",

    topic: "Sliding Window",

    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],

    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: "The answer is 'abc'."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int lengthOfLongestSubstring(String s) {

    }

}`,

      python:
`class Solution:

    def lengthOfLongestSubstring(self, s):

        pass`,

      javascript:
`var lengthOfLongestSubstring = function(s) {

};`,

      cpp:
`class Solution {
public:

    int lengthOfLongestSubstring(string s) {

    }

};`,

      c:
`int lengthOfLongestSubstring(char* s) {

}`
    },

    visibleTestCases: [
      {
        input: '"abcabcbb"',
        output: "3"
      }
    ],

    hiddenTestCases: [
      {
        input: '"bbbbb"',
        output: "1"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters/",

    tags: ["HashMap", "Sliding Window", "String"]
  },



  {
    title: "Longest Repeating Character Replacement",

    slug: "blind75-longest-repeating-character-replacement",

    description:
      "Return the length of the longest substring containing the same letter after replacement.",

    difficulty: "Medium",

    topic: "Sliding Window",

    constraints: [
      "1 <= s.length <= 10^5",
      "s consists of only uppercase English letters."
    ],

    examples: [
      {
        input: 's = "ABAB", k = 2',
        output: "4",
        explanation: "Replace two A's or B's."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int characterReplacement(String s, int k) {

    }

}`,

      python:
`class Solution:

    def characterReplacement(self, s, k):

        pass`,

      javascript:
`var characterReplacement = function(s, k) {

};`,

      cpp:
`class Solution {
public:

    int characterReplacement(string s, int k) {

    }

};`,

      c:
`int characterReplacement(char* s, int k) {

}`
    },

    visibleTestCases: [
      {
        input: '"ABAB", 2',
        output: "4"
      }
    ],

    hiddenTestCases: [
      {
        input: '"AABABBA", 1',
        output: "4"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/longest-repeating-character-replacement/",

    tags: ["Sliding Window", "HashMap"]
  },
  {
    title: "Minimum Window Substring",

    slug: "blind75-minimum-window-substring",

    description:
      "Return the minimum window substring of s such that every character in t is included.",

    difficulty: "Hard",

    topic: "Sliding Window",

    constraints: [
      "1 <= s.length, t.length <= 10^5",
      "s and t consist of English letters."
    ],

    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation: "Smallest substring containing A, B and C."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public String minWindow(String s, String t) {

    }

}`,

      python:
`class Solution:

    def minWindow(self, s, t):

        pass`,

      javascript:
`var minWindow = function(s, t) {

};`,

      cpp:
`class Solution {
public:

    string minWindow(string s, string t) {

    }

};`,

      c:
`char* minWindow(char* s, char* t) {

}`
    },

    visibleTestCases: [
      {
        input: '"ADOBECODEBANC", "ABC"',
        output: '"BANC"'
      }
    ],

    hiddenTestCases: [
      {
        input: '"a", "a"',
        output: '"a"'
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/minimum-window-substring/",

    tags: ["Sliding Window", "HashMap", "String"]
  },



  {
    title: "Valid Palindrome",

    slug: "blind75-valid-palindrome",

    description:
      "Return true if the string is a palindrome after removing non-alphanumeric characters.",

    difficulty: "Easy",

    topic: "Two Pointers",

    constraints: [
      "1 <= s.length <= 2 * 10^5"
    ],

    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: "String becomes amanaplanacanalpanama."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public boolean isPalindrome(String s) {

    }

}`,

      python:
`class Solution:

    def isPalindrome(self, s):

        pass`,

      javascript:
`var isPalindrome = function(s) {

};`,

      cpp:
`class Solution {
public:

    bool isPalindrome(string s) {

    }

};`,

      c:
`bool isPalindrome(char* s) {

}`
    },

    visibleTestCases: [
      {
        input: '"A man, a plan, a canal: Panama"',
        output: "true"
      }
    ],

    hiddenTestCases: [
      {
        input: '"race a car"',
        output: "false"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/valid-palindrome/",

    tags: ["Two Pointers", "String"]
  },



  {
    title: "Palindromic Substrings",

    slug: "blind75-palindromic-substrings",

    description:
      "Return the number of palindromic substrings in the string.",

    difficulty: "Medium",

    topic: "Dynamic Programming",

    constraints: [
      "1 <= s.length <= 1000"
    ],

    examples: [
      {
        input: 's = "abc"',
        output: "3",
        explanation: "a, b, c"
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int countSubstrings(String s) {

    }

}`,

      python:
`class Solution:

    def countSubstrings(self, s):

        pass`,

      javascript:
`var countSubstrings = function(s) {

};`,

      cpp:
`class Solution {
public:

    int countSubstrings(string s) {

    }

};`,

      c:
`int countSubstrings(char* s) {

}`
    },

    visibleTestCases: [
      {
        input: '"abc"',
        output: "3"
      }
    ],

    hiddenTestCases: [
      {
        input: '"aaa"',
        output: "6"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/palindromic-substrings/",

    tags: ["Dynamic Programming", "String"]
  },



  {
    title: "Longest Palindromic Substring",

    slug: "blind75-longest-palindromic-substring",

    description:
      "Return the longest palindromic substring in s.",

    difficulty: "Medium",

    topic: "Dynamic Programming",

    constraints: [
      "1 <= s.length <= 1000"
    ],

    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: "bab is a valid palindrome."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public String longestPalindrome(String s) {

    }

}`,

      python:
`class Solution:

    def longestPalindrome(self, s):

        pass`,

      javascript:
`var longestPalindrome = function(s) {

};`,

      cpp:
`class Solution {
public:

    string longestPalindrome(string s) {

    }

};`,

      c:
`char* longestPalindrome(char* s) {

}`
    },

    visibleTestCases: [
      {
        input: '"babad"',
        output: '"bab"'
      }
    ],

    hiddenTestCases: [
      {
        input: '"cbbd"',
        output: '"bb"'
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/longest-palindromic-substring/",

    tags: ["Dynamic Programming", "String"]
  },



  {
    title: "Maximum Subarray",

    slug: "blind75-maximum-subarray",

    description:
      "Find the contiguous subarray with the largest sum.",

    difficulty: "Medium",

    topic: "Greedy",

    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],

    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "Subarray [4,-1,2,1] has largest sum."
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

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/maximum-subarray/",

    tags: ["Greedy", "Dynamic Programming", "Array"]
  },
  {
    title: "Jump Game",

    slug: "blind75-jump-game",

    description:
      "Determine if you can reach the last index starting from the first index.",

    difficulty: "Medium",

    topic: "Greedy",

    constraints: [
      "1 <= nums.length <= 10^4",
      "0 <= nums[i] <= 10^5"
    ],

    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "true",
        explanation: "Jump 1 step from index 0 to 1, then 3 steps to last index."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public boolean canJump(int[] nums) {

    }

}`,

      python:
`class Solution:

    def canJump(self, nums):

        pass`,

      javascript:
`var canJump = function(nums) {

};`,

      cpp:
`class Solution {
public:

    bool canJump(vector<int>& nums) {

    }

};`,

      c:
`bool canJump(int* nums, int numsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[2,3,1,1,4]",
        output: "true"
      }
    ],

    hiddenTestCases: [
      {
        input: "[3,2,1,0,4]",
        output: "false"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/jump-game/",

    tags: ["Greedy", "Array"]
  },



  {
    title: "Merge Intervals",

    slug: "blind75-merge-intervals",

    description:
      "Merge all overlapping intervals.",

    difficulty: "Medium",

    topic: "Intervals",

    constraints: [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2"
    ],

    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation: "Intervals [1,3] and [2,6] overlap."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int[][] merge(int[][] intervals) {

    }

}`,

      python:
`class Solution:

    def merge(self, intervals):

        pass`,

      javascript:
`var merge = function(intervals) {

};`,

      cpp:
`class Solution {
public:

    vector<vector<int>> merge(vector<vector<int>>& intervals) {

    }

};`,

      c:
`int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {

}`
    },

    visibleTestCases: [
      {
        input: "[[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[[1,4],[4,5]]",
        output: "[[1,5]]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/merge-intervals/",

    tags: ["Intervals", "Sorting"]
  },



  {
    title: "Insert Interval",

    slug: "blind75-insert-interval",

    description:
      "Insert a new interval into intervals and merge if necessary.",

    difficulty: "Medium",

    topic: "Intervals",

    constraints: [
      "0 <= intervals.length <= 10^4",
      "intervals[i].length == 2"
    ],

    examples: [
      {
        input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        output: "[[1,5],[6,9]]",
        explanation: "Merged overlapping intervals."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int[][] insert(int[][] intervals, int[] newInterval) {

    }

}`,

      python:
`class Solution:

    def insert(self, intervals, newInterval):

        pass`,

      javascript:
`var insert = function(intervals, newInterval) {

};`,

      cpp:
`class Solution {
public:

    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {

    }

};`,

      c:
`int** insert(int** intervals, int intervalsSize, int* intervalsColSize, int* newInterval, int newIntervalSize, int* returnSize, int** returnColumnSizes) {

}`
    },

    visibleTestCases: [
      {
        input: "[[1,3],[6,9]], [2,5]",
        output: "[[1,5],[6,9]]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]",
        output: "[[1,2],[3,10],[12,16]]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/insert-interval/",

    tags: ["Intervals", "Array"]
  },



  {
    title: "Non-overlapping Intervals",

    slug: "blind75-non-overlapping-intervals",

    description:
      "Return the minimum number of intervals to remove to make the rest non-overlapping.",

    difficulty: "Medium",

    topic: "Greedy",

    constraints: [
      "1 <= intervals.length <= 10^5"
    ],

    examples: [
      {
        input: "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        output: "1",
        explanation: "Remove [1,3]."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int eraseOverlapIntervals(int[][] intervals) {

    }

}`,

      python:
`class Solution:

    def eraseOverlapIntervals(self, intervals):

        pass`,

      javascript:
`var eraseOverlapIntervals = function(intervals) {

};`,

      cpp:
`class Solution {
public:

    int eraseOverlapIntervals(vector<vector<int>>& intervals) {

    }

};`,

      c:
`int eraseOverlapIntervals(int** intervals, int intervalsSize, int* intervalsColSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[[1,2],[2,3],[3,4],[1,3]]",
        output: "1"
      }
    ],

    hiddenTestCases: [
      {
        input: "[[1,2],[1,2],[1,2]]",
        output: "2"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/non-overlapping-intervals/",

    tags: ["Greedy", "Intervals"]
  },



  {
    title: "Meeting Rooms",

    slug: "blind75-meeting-rooms",

    description:
      "Determine if a person can attend all meetings.",

    difficulty: "Easy",

    topic: "Intervals",

    constraints: [
      "0 <= intervals.length <= 10^4"
    ],

    examples: [
      {
        input: "intervals = [[0,30],[5,10],[15,20]]",
        output: "false",
        explanation: "Meetings overlap."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public boolean canAttendMeetings(int[][] intervals) {

    }

}`,

      python:
`class Solution:

    def canAttendMeetings(self, intervals):

        pass`,

      javascript:
`var canAttendMeetings = function(intervals) {

};`,

      cpp:
`class Solution {
public:

    bool canAttendMeetings(vector<vector<int>>& intervals) {

    }

};`,

      c:
`bool canAttendMeetings(int** intervals, int intervalsSize, int* intervalsColSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[[0,30],[5,10],[15,20]]",
        output: "false"
      }
    ],

    hiddenTestCases: [
      {
        input: "[[7,10],[2,4]]",
        output: "true"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/meeting-rooms/",

    tags: ["Intervals", "Sorting"]
  },
  {
    title: "Meeting Rooms II",

    slug: "blind75-meeting-rooms-ii",

    description:
      "Find the minimum number of conference rooms required.",

    difficulty: "Medium",

    topic: "Heap",

    constraints: [
      "1 <= intervals.length <= 10^4",
      "0 <= start < end <= 10^6"
    ],

    examples: [
      {
        input: "intervals = [[0,30],[5,10],[15,20]]",
        output: "2",
        explanation: "Two meeting rooms are needed."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int minMeetingRooms(int[][] intervals) {

    }

}`,

      python:
`class Solution:

    def minMeetingRooms(self, intervals):

        pass`,

      javascript:
`var minMeetingRooms = function(intervals) {

};`,

      cpp:
`class Solution {
public:

    int minMeetingRooms(vector<vector<int>>& intervals) {

    }

};`,

      c:
`int minMeetingRooms(int** intervals, int intervalsSize, int* intervalsColSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[[0,30],[5,10],[15,20]]",
        output: "2"
      }
    ],

    hiddenTestCases: [
      {
        input: "[[7,10],[2,4]]",
        output: "1"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/meeting-rooms-ii/",

    tags: ["Heap", "Intervals", "Sorting"]
  },



  {
    title: "Reverse Linked List",

    slug: "blind75-reverse-linked-list",

    description:
      "Reverse a singly linked list.",

    difficulty: "Easy",

    topic: "Linked List",

    constraints: [
      "0 <= number of nodes <= 5000",
      "-5000 <= Node.val <= 5000"
    ],

    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
        explanation: "Reverse the linked list."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public ListNode reverseList(ListNode head) {

    }

}`,

      python:
`class Solution:

    def reverseList(self, head):

        pass`,

      javascript:
`var reverseList = function(head) {

};`,

      cpp:
`class Solution {
public:

    ListNode* reverseList(ListNode* head) {

    }

};`,

      c:
`struct ListNode* reverseList(struct ListNode* head) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,3,4,5]",
        output: "[5,4,3,2,1]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1,2]",
        output: "[2,1]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/reverse-linked-list/",

    tags: ["Linked List", "Recursion"]
  },



  {
    title: "Linked List Cycle",

    slug: "blind75-linked-list-cycle",

    description:
      "Determine if a linked list has a cycle.",

    difficulty: "Easy",

    topic: "Linked List",

    constraints: [
      "0 <= number of nodes <= 10^4"
    ],

    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation: "Tail connects to node index 1."
      }
    ],

    starterCode: {

      java:
`public class Solution {

    public boolean hasCycle(ListNode head) {

    }

}`,

      python:
`class Solution:

    def hasCycle(self, head):

        pass`,

      javascript:
`var hasCycle = function(head) {

};`,

      cpp:
`class Solution {
public:

    bool hasCycle(ListNode *head) {

    }

};`,

      c:
`bool hasCycle(struct ListNode *head) {

}`
    },

    visibleTestCases: [
      {
        input: "[3,2,0,-4], pos = 1",
        output: "true"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1], pos = -1",
        output: "false"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/linked-list-cycle/",

    tags: ["Linked List", "Two Pointers"]
  },



  {
    title: "Merge Two Sorted Lists",

    slug: "blind75-merge-two-sorted-lists",

    description:
      "Merge two sorted linked lists and return it as one sorted list.",

    difficulty: "Easy",

    topic: "Linked List",

    constraints: [
      "The number of nodes in both lists is in the range [0, 50]."
    ],

    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
        explanation: "Merged sorted linked lists."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

    }

}`,

      python:
`class Solution:

    def mergeTwoLists(self, list1, list2):

        pass`,

      javascript:
`var mergeTwoLists = function(list1, list2) {

};`,

      cpp:
`class Solution {
public:

    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {

    }

};`,

      c:
`struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,4], [1,3,4]",
        output: "[1,1,2,3,4,4]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[], []",
        output: "[]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/merge-two-sorted-lists/",

    tags: ["Linked List", "Recursion"]
  },



  {
    title: "Merge K Sorted Lists",

    slug: "blind75-merge-k-sorted-lists",

    description:
      "Merge k sorted linked lists and return one sorted linked list.",

    difficulty: "Hard",

    topic: "Heap",

    constraints: [
      "k == lists.length",
      "0 <= k <= 10^4"
    ],

    examples: [
      {
        input: "[[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "Merged all linked lists."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public ListNode mergeKLists(ListNode[] lists) {

    }

}`,

      python:
`class Solution:

    def mergeKLists(self, lists):

        pass`,

      javascript:
`var mergeKLists = function(lists) {

};`,

      cpp:
`class Solution {
public:

    ListNode* mergeKLists(vector<ListNode*>& lists) {

    }

};`,

      c:
`struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[]",
        output: "[]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/merge-k-sorted-lists/",

    tags: ["Linked List", "Heap", "Divide and Conquer"]
  },
  {
    title: "Remove Nth Node From End of List",

    slug: "blind75-remove-nth-node-from-end-of-list",

    description:
      "Remove the nth node from the end of the linked list and return its head.",

    difficulty: "Medium",

    topic: "Linked List",

    constraints: [
      "The number of nodes in the list is sz.",
      "1 <= sz <= 30",
      "0 <= Node.val <= 100",
      "1 <= n <= sz"
    ],

    examples: [
      {
        input: "head = [1,2,3,4,5], n = 2",
        output: "[1,2,3,5]",
        explanation: "Remove the 2nd node from the end."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public ListNode removeNthFromEnd(ListNode head, int n) {

    }

}`,

      python:
`class Solution:

    def removeNthFromEnd(self, head, n):

        pass`,

      javascript:
`var removeNthFromEnd = function(head, n) {

};`,

      cpp:
`class Solution {
public:

    ListNode* removeNthFromEnd(ListNode* head, int n) {

    }

};`,

      c:
`struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,3,4,5], 2",
        output: "[1,2,3,5]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1], 1",
        output: "[]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",

    tags: ["Linked List", "Two Pointers"]
  },



  {
    title: "Reorder List",

    slug: "blind75-reorder-list",

    description:
      "Reorder the linked list in the specific pattern L0 → Ln → L1 → Ln-1.",

    difficulty: "Medium",

    topic: "Linked List",

    constraints: [
      "1 <= number of nodes <= 5 * 10^4"
    ],

    examples: [
      {
        input: "head = [1,2,3,4]",
        output: "[1,4,2,3]",
        explanation: "Reordered list."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public void reorderList(ListNode head) {

    }

}`,

      python:
`class Solution:

    def reorderList(self, head):

        pass`,

      javascript:
`var reorderList = function(head) {

};`,

      cpp:
`class Solution {
public:

    void reorderList(ListNode* head) {

    }

};`,

      c:
`void reorderList(struct ListNode* head) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,3,4]",
        output: "[1,4,2,3]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1,2,3,4,5]",
        output: "[1,5,2,4,3]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/reorder-list/",

    tags: ["Linked List", "Two Pointers"]
  },



  {
    title: "Set Matrix Zeroes",

    slug: "blind75-set-matrix-zeroes",

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
        explanation: "Row and column containing 0 become 0."
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

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/set-matrix-zeroes/",

    tags: ["Matrix", "Array"]
  },



  {
    title: "Spiral Matrix",

    slug: "blind75-spiral-matrix",

    description:
      "Return all elements of the matrix in spiral order.",

    difficulty: "Medium",

    topic: "Matrix",

    constraints: [
      "1 <= m, n <= 10"
    ],

    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[1,2,3,6,9,8,7,4,5]",
        explanation: "Traverse matrix in spiral order."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public List<Integer> spiralOrder(int[][] matrix) {

    }

}`,

      python:
`class Solution:

    def spiralOrder(self, matrix):

        pass`,

      javascript:
`var spiralOrder = function(matrix) {

};`,

      cpp:
`class Solution {
public:

    vector<int> spiralOrder(vector<vector<int>>& matrix) {

    }

};`,

      c:
`int* spiralOrder(int** matrix, int matrixSize, int* matrixColSize, int* returnSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[[1,2,3],[4,5,6],[7,8,9]]",
        output: "[1,2,3,6,9,8,7,4,5]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[[1,2,3,4]]",
        output: "[1,2,3,4]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/spiral-matrix/",

    tags: ["Matrix", "Simulation"]
  },



  {
    title: "Rotate Image",

    slug: "blind75-rotate-image",

    description:
      "Rotate the matrix by 90 degrees clockwise in-place.",

    difficulty: "Medium",

    topic: "Matrix",

    constraints: [
      "n == matrix.length == matrix[i].length",
      "1 <= n <= 20"
    ],

    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[7,4,1],[8,5,2],[9,6,3]]",
        explanation: "Rotate matrix clockwise."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public void rotate(int[][] matrix) {

    }

}`,

      python:
`class Solution:

    def rotate(self, matrix):

        pass`,

      javascript:
`var rotate = function(matrix) {

};`,

      cpp:
`class Solution {
public:

    void rotate(vector<vector<int>>& matrix) {

    }

};`,

      c:
`void rotate(int** matrix, int matrixSize, int* matrixColSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[7,4,1],[8,5,2],[9,6,3]]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        output: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/rotate-image/",

    tags: ["Matrix", "Math"]
  },
  {
    title: "Word Search",

    slug: "blind75-word-search",

    description:
      "Return true if the word exists in the grid.",

    difficulty: "Medium",

    topic: "Backtracking",

    constraints: [
      "1 <= board.length, board[i].length <= 6",
      "1 <= word.length <= 15"
    ],

    examples: [
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
        explanation: "Word exists in the board."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public boolean exist(char[][] board, String word) {

    }

}`,

      python:
`class Solution:

    def exist(self, board, word):

        pass`,

      javascript:
`var exist = function(board, word) {

};`,

      cpp:
`class Solution {
public:

    bool exist(vector<vector<char>>& board, string word) {

    }

};`,

      c:
`bool exist(char** board, int boardSize, int* boardColSize, char* word) {

}`
    },

    visibleTestCases: [
      {
        input: '[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], \"ABCCED\"',
        output: "true"
      }
    ],

    hiddenTestCases: [
      {
        input: '[[\"A\",\"B\"],[\"C\",\"D\"]], \"ABCD\"',
        output: "false"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/word-search/",

    tags: ["Backtracking", "Matrix"]
  },



  {
    title: "Climbing Stairs",

    slug: "blind75-climbing-stairs",

    description:
      "Return the number of distinct ways to climb to the top.",

    difficulty: "Easy",

    topic: "Dynamic Programming",

    constraints: [
      "1 <= n <= 45"
    ],

    examples: [
      {
        input: "n = 3",
        output: "3",
        explanation: "1+1+1, 1+2, 2+1"
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int climbStairs(int n) {

    }

}`,

      python:
`class Solution:

    def climbStairs(self, n):

        pass`,

      javascript:
`var climbStairs = function(n) {

};`,

      cpp:
`class Solution {
public:

    int climbStairs(int n) {

    }

};`,

      c:
`int climbStairs(int n) {

}`
    },

    visibleTestCases: [
      {
        input: "3",
        output: "3"
      }
    ],

    hiddenTestCases: [
      {
        input: "5",
        output: "8"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/climbing-stairs/",

    tags: ["Dynamic Programming", "Math"]
  },



  {
    title: "Coin Change",

    slug: "blind75-coin-change",

    description:
      "Return the fewest number of coins needed to make up the amount.",

    difficulty: "Medium",

    topic: "Dynamic Programming",

    constraints: [
      "1 <= coins.length <= 12",
      "0 <= amount <= 10^4"
    ],

    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1"
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int coinChange(int[] coins, int amount) {

    }

}`,

      python:
`class Solution:

    def coinChange(self, coins, amount):

        pass`,

      javascript:
`var coinChange = function(coins, amount) {

};`,

      cpp:
`class Solution {
public:

    int coinChange(vector<int>& coins, int amount) {

    }

};`,

      c:
`int coinChange(int* coins, int coinsSize, int amount) {

}`
    },

    visibleTestCases: [
      {
        input: "[1,2,5], 11",
        output: "3"
      }
    ],

    hiddenTestCases: [
      {
        input: "[2], 3",
        output: "-1"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/coin-change/",

    tags: ["Dynamic Programming", "Breadth-First Search"]
  },



  {
    title: "Longest Increasing Subsequence",

    slug: "blind75-longest-increasing-subsequence",

    description:
      "Return the length of the longest strictly increasing subsequence.",

    difficulty: "Medium",

    topic: "Dynamic Programming",

    constraints: [
      "1 <= nums.length <= 2500",
      "-10^4 <= nums[i] <= 10^4"
    ],

    examples: [
      {
        input: "nums = [10,9,2,5,3,7,101,18]",
        output: "4",
        explanation: "Longest increasing subsequence is [2,3,7,101]."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int lengthOfLIS(int[] nums) {

    }

}`,

      python:
`class Solution:

    def lengthOfLIS(self, nums):

        pass`,

      javascript:
`var lengthOfLIS = function(nums) {

};`,

      cpp:
`class Solution {
public:

    int lengthOfLIS(vector<int>& nums) {

    }

};`,

      c:
`int lengthOfLIS(int* nums, int numsSize) {

}`
    },

    visibleTestCases: [
      {
        input: "[10,9,2,5,3,7,101,18]",
        output: "4"
      }
    ],

    hiddenTestCases: [
      {
        input: "[0,1,0,3,2,3]",
        output: "4"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/longest-increasing-subsequence/",

    tags: ["Dynamic Programming", "Binary Search"]
  },



  {
    title: "Longest Common Subsequence",

    slug: "blind75-longest-common-subsequence",

    description:
      "Return the length of the longest common subsequence between two strings.",

    difficulty: "Medium",

    topic: "Dynamic Programming",

    constraints: [
      "1 <= text1.length, text2.length <= 1000"
    ],

    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
        explanation: "ace is the longest common subsequence."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int longestCommonSubsequence(String text1, String text2) {

    }

}`,

      python:
`class Solution:

    def longestCommonSubsequence(self, text1, text2):

        pass`,

      javascript:
`var longestCommonSubsequence = function(text1, text2) {

};`,

      cpp:
`class Solution {
public:

    int longestCommonSubsequence(string text1, string text2) {

    }

};`,

      c:
`int longestCommonSubsequence(char* text1, char* text2) {

}`
    },

    visibleTestCases: [
      {
        input: '"abcde", "ace"',
        output: "3"
      }
    ],

    hiddenTestCases: [
      {
        input: '"abc", "abc"',
        output: "3"
      }
    ],

    sheet: "Blind75",

    leetCodeLink:
      "https://leetcode.com/problems/longest-common-subsequence/",

    tags: ["Dynamic Programming", "String"]
  }
];


export default blind75;