const grind169 = [

  {
    title: "Binary Search",

    slug: "grind169-binary-search",

    description:
      "Given a sorted array of integers nums and an integer target, return the index of target if it exists.",

    difficulty: "Easy",

    topic: "Binary Search",

    constraints: [
      "1 <= nums.length <= 10^4",
      "-10^4 < nums[i], target < 10^4",
      "nums is sorted in ascending order."
    ],

    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "9 exists at index 4."
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
        input: "[-1,0,3,5,9,12], 9",
        output: "4"
      }
    ],

    hiddenTestCases: [
      {
        input: "[-1,0,3,5,9,12], 2",
        output: "-1"
      }
    ],

    sheet: "Grind169",

    leetCodeLink:
      "https://leetcode.com/problems/binary-search/",

    tags: ["Binary Search", "Array"]
  },



  {
    title: "Flood Fill",

    slug: "grind169-flood-fill",

    description:
      "Perform a flood fill on the image starting from the given pixel.",

    difficulty: "Easy",

    topic: "Graph",

    constraints: [
      "1 <= image.length, image[i].length <= 50"
    ],

    examples: [
      {
        input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
        output: "[[2,2,2],[2,2,0],[2,0,1]]",
        explanation: "Flood fill all connected pixels."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public int[][] floodFill(int[][] image, int sr, int sc, int color) {

    }

}`,

      python:
`class Solution:

    def floodFill(self, image, sr, sc, color):

        pass`,

      javascript:
`var floodFill = function(image, sr, sc, color) {

};`,

      cpp:
`class Solution {
public:

    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {

    }

};`,

      c:
`int** floodFill(int** image, int imageSize, int* imageColSize, int sr, int sc, int color, int* returnSize, int** returnColumnSizes) {

}`
    },

    visibleTestCases: [
      {
        input: "[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2",
        output: "[[2,2,2],[2,2,0],[2,0,1]]"
      }
    ],

    hiddenTestCases: [
      {
        input: "[[0,0,0],[0,0,0]], 0, 0, 2",
        output: "[[2,2,2],[2,2,2]]"
      }
    ],

    sheet: "Grind169",

    leetCodeLink:
      "https://leetcode.com/problems/flood-fill/",

    tags: ["DFS", "BFS", "Matrix"]
  },



  {
    title: "Balanced Binary Tree",

    slug: "grind169-balanced-binary-tree",

    description:
      "Return true if the binary tree is height-balanced.",

    difficulty: "Easy",

    topic: "Tree",

    constraints: [
      "0 <= number of nodes <= 5000"
    ],

    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "true",
        explanation: "Tree is balanced."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public boolean isBalanced(TreeNode root) {

    }

}`,

      python:
`class Solution:

    def isBalanced(self, root):

        pass`,

      javascript:
`var isBalanced = function(root) {

};`,

      cpp:
`class Solution {
public:

    bool isBalanced(TreeNode* root) {

    }

};`,

      c:
`bool isBalanced(struct TreeNode* root) {

}`
    },

    visibleTestCases: [
      {
        input: "[3,9,20,null,null,15,7]",
        output: "true"
      }
    ],

    hiddenTestCases: [
      {
        input: "[1,2,2,3,3,null,null,4,4]",
        output: "false"
      }
    ],

    sheet: "Grind169",

    leetCodeLink:
      "https://leetcode.com/problems/balanced-binary-tree/",

    tags: ["Tree", "DFS"]
  },



  {
    title: "Lowest Common Ancestor of a Binary Search Tree",

    slug: "grind169-lowest-common-ancestor-of-a-bst",

    description:
      "Find the lowest common ancestor of two nodes in a BST.",

    difficulty: "Medium",

    topic: "Tree",

    constraints: [
      "2 <= number of nodes <= 10^5"
    ],

    examples: [
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        output: "6",
        explanation: "6 is the lowest common ancestor."
      }
    ],

    starterCode: {

      java:
`class Solution {

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {

    }

}`,

      python:
`class Solution:

    def lowestCommonAncestor(self, root, p, q):

        pass`,

      javascript:
`var lowestCommonAncestor = function(root, p, q) {

};`,

      cpp:
`class Solution {
public:

    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {

    }

};`,

      c:
`struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {

}`
    },

    visibleTestCases: [
      {
        input: "[6,2,8,0,4,7,9,null,null,3,5], 2, 8",
        output: "6"
      }
    ],

    hiddenTestCases: [
      {
        input: "[6,2,8,0,4,7,9,null,null,3,5], 2, 4",
        output: "2"
      }
    ],

    sheet: "Grind169",

    leetCodeLink:
      "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",

    tags: ["Tree", "BST"]
  },



  {
    title: "Linked List Cycle",

    slug: "grind169-linked-list-cycle",

    description:
      "Determine if the linked list has a cycle.",

    difficulty: "Easy",

    topic: "Linked List",

    constraints: [
      "0 <= number of nodes <= 10^4"
    ],

    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation: "Cycle exists in linked list."
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

    sheet: "Grind169",

    leetCodeLink:
      "https://leetcode.com/problems/linked-list-cycle/",

    tags: ["Linked List", "Two Pointers"]
  }

];

export default grind169;