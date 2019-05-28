describe("TreeNode", function() {
  var TreeNode = require('../../lib/trees/TreeNode');

  describe("creation", function() {
    it("should be able to create a node with a given value", function() {
      var treeNode = new TreeNode(3);
      expect(treeNode.value).toEqual(3);
    });
  });

  describe("equals", function() {
    /**
     *    3
     *  /   \
     * 5     7
     *     /
     *    543
     */
    function multiLevel1 () {
      const root = new TreeNode(3);
      root.left = new TreeNode(5);;
      root.right = new TreeNode(7);
      root.right.left = new TreeNode(543);
      return root;
    }

    /**
     *    3
     *  /   \
     * 5     7
     *     /
     *    2
     */
    function multiLevel2 () {
      const root = new multiLevel1();
      root.right.left = new TreeNode(2);
      return root;
    }

    /**
     *    3
     *  /   \
     * 5     7
     *        \
     *        543
     */
    function multiLevel3 () {
      const root = new TreeNode(3);
      root.left = new TreeNode(5);;
      root.right = new TreeNode(7);
      root.right.right = new TreeNode(543);
      return root;
    }

    it("returns true for leaf node with same value", function() {
      expect(new TreeNode(6).equals(new TreeNode(6))).toBe(true);
    });

    it("returns false for leaf nodes with different value", function() {
      expect(new TreeNode(23).equals(new TreeNode(8))).toBe(false);
    });

    it("returns true for multi level node with a copy of itself", function() {
      expect(multiLevel1().equals(multiLevel1())).toBe(true);
    });

    it("returns false for same structure but one different number", function() {
      expect(multiLevel1().equals(multiLevel2())).toBe(false);
    });

    it("returns false for different structures", function() {
      expect(multiLevel1().equals(multiLevel3())).toBe(false);
    });
  });

  describe("Tree functions", function() {
    /* createFromArray - take in an array and return the root node of a binary tree with the values from the array filling each level of the tree in order.

     * e.g. [5, 2, 7, 1, 4, 6, 8]
     * should become
     *      5
     *    /   \
     *   2     7
     *  / \   / \
     * 1   4 6   8
     *
     */

    /**
     *      5
     *    /   \
     *   2     7
     *  / \   / \
     * 1   4 6   8
     */
    // var bst = TreeNode.createFromArray([5, 2, 7, 1, 4, 6, 8]);

  //   describe("createFromArray", function() {

  //     beforeEach(function() {
  //       this.root = new TreeNode(3);
  //       this.root.left = new TreeNode(5);
  //     });
  //   });

  //   describe("depth", function() {
  //     beforeAll(function() {
  //       this.root = new TreeNode(8);
  //     });
  //   });

  //   describe("isBalanced", function() {

  //     function allLeft() {
  //       var root = new TreeNode(4);
  //       root.left = new TreeNode(2);
  //       root.left.left = new TreeNode(7);
  //       return root;
  //     }
  //   });

  //   // isBST
  //   describe("isBST", function() {
  //     /**
  //      *      5
  //      *    /   \
  //      *   2     7
  //      *  / \   / \
  //      * 1   9 6   8
  //      */
  //     // var nonBST = TreeNode.createFromArray([5, 2, 7, 1, 9, 6, 8]);
  //   });
  });

});
