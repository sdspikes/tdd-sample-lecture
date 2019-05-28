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

module.exports = TreeNode;
