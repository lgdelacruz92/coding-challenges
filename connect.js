function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

let root = new Node(1, new Node(0), new Node(2));

const connect = root => {
  if (root === null) {
    return root;
  }
  if (root.left === null || root.right === null) {
    return;
  }
  root.left.next = root.right;
  if (root.next !== null) {
    root.right.next = root.next.left;
  }
  connect(root.left);
  connect(root.right);
};
const printNodes = root => {
  if (root === null) {
    return;
  }
  printNodes(root.left);
  printNodes(root.right);
};

const printRow = root => {
  if (root === null) {
    return;
  }
  let cur = root;
  while (cur !== null) {
    console.log(cur.val);
    cur = cur.next;
  }
  printRow(root.left);
};

// printNodes(root);
connect(root);
printRow(root);
