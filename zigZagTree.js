class Queue {
  constructor() {
    this.q = [];
  }

  push(node) {
    this.q.push(node);
  }

  pop() {
    if (this.q.length === 0) throw Error("Queue is empty");
    const val = this.q[0];
    this.q.splice(0, 1);
    return val;
  }

  length() {
    return this.q.length;
  }
}

var zigzagLevelOrder = function(root) {
  const q = new Queue();
  let leftToRight = true;
  root.level = 0;
  q.push(root);

  const results = [];

  while (q.length() > 0) {
    const cur = q.pop();
    console.log(cur.val, cur.level);

    if (leftToRight) {
      if (cur.left !== null && cur.left !== undefined) {
        cur.left.level = cur.level + 1;
        q.push(cur.left);
      }
      if (cur.right !== null && cur.right !== undefined) {
        cur.right.level = cur.level + 1;
        q.push(cur.right);
      }
    } else {
      if (cur.right !== null && cur.right !== undefined) {
        cur.right.level = cur.level + 1;
        q.push(cur.right);
      }
      if (cur.left !== null && cur.left !== undefined) {
        cur.left.level = cur.level + 1;
        q.push(cur.left);
      }
    }

    leftToRight = !leftToRight;
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
zigzagLevelOrder(root);
