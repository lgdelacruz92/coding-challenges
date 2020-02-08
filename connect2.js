function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

const printTree = root => {
  const queue = [root];

  let count = 0;
  while (queue.length > 0) {
    const cur = queue.splice(0, 1);
    const top = cur[0];
    console.log(count, top.val);
    count += 1;

    if (top.left !== null) {
      queue.push(top.left);
    }

    if (top.right !== null) {
      queue.push(top.right);
    }
  }
};

var connect = function(root) {
  const queue = [];
  queue.push(root);

  let count = 0;
  while (queue.length > 0) {
    const cur = queue.splice(0, 1)[0];
    console.log(count, cur.val);
    count += 1;
    if (cur.left !== null) {
      if (cur.right === null) {
        let newCur = cur.right;
        let foundSomething = false;
        while (newCur !== null) {
          if (newCur.left !== null) {
            cur.left.next = newCur.left;
            foundSomething = true;
            break;
          }

          if (newCur.right !== null) {
            cur.left.next = newCur.right;
            foundSomething = true;
            break;
          }
          newCur = newCur.next;
        }

        if (!foundSomething) {
          cur.left.next = null;
        }
      } else {
        cur.left.next = cur.right;
      }
    }

    if (cur.right !== null) {
      if (cur.next !== null) {
        let newCur = cur.next;
        let foundSomething = false;
        while (newCur !== null) {
          if (newCur.left !== null) {
            cur.right.next = newCur.left;
            foundSomething = true;
            break;
          }
          if (newCur.right !== null) {
            cur.right.next = newCur.right;
            foundSomething = true;
            break;
          }
          newCur = newCur.next;
        }

        if (!foundSomething) {
          cur.right.next = null;
        }
      } else {
        cur.right.next = null;
      }
    }

    if (cur.left !== null) {
      queue.push(cur.left);
    }

    if (cur.right !== null) {
      queue.push(cur.right);
    }
  }
  return root;
};

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.right = new Node(7);

connect(root);
// console.log(root);
// printTree(root);
