function TreeNode(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function equals(first, second) {
  if (!first && !second) return true;
  if (!first || !second || first.value != second.value)
    return false;
  return equals(first.left, second.left) && equals(first.right, second.right);
};

TreeNode.prototype.equals = function(otherNode) {
  return equals(this, otherNode)
};

TreeNode.createFromArray = function(arr, index = 0) {
  if (index >= arr.length) return null;
  const root = new TreeNode(arr[index]);
  root.left = TreeNode.createFromArray(arr, 2 * index + 1);
  root.right = TreeNode.createFromArray(arr, 2 * index + 2);
  return root;
};

function depth(node) {
  if (!node) return 0;
  return Math.max(depth(node.left), depth(node.right)) + 1;
}

TreeNode.prototype.depth = function() {
  return depth(this);
};

TreeNode.prototype.isBalanced = function() {
  return true;
};

module.exports = TreeNode;
