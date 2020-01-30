function ListNode(val) {
  this.val = val;
  this.next = null;
}

const printListNode = l => {
  let cur = l;
  while (cur !== null) {
    console.log(cur.val);
    cur = cur.next;
  }
};

/**
 * converts a value to linked list
 * 123 => 3 -> 2 -> 1
 * input positive number
 */
const encode = val => {
  if (val === undefined || val === null || val < 0) {
    throw Error("invalid val");
  }
  // convert to string
  let varString = `${val}`;

  // varString is assumed to always be a number
  let numDeconstructed = [];
  for (let i = varString.length - 1; i >= 0; i--) {
    numDeconstructed.push(new ListNode(parseInt(varString[i])));
  }

  if (numDeconstructed.length > 0) {
    for (let i = 0; i < numDeconstructed.length - 1; i++) {
      numDeconstructed[i].next = numDeconstructed[i + 1];
    }
    return numDeconstructed[0];
  } else {
    throw Error("This is not possible");
  }
};

const decode = l => {
  let numArray = [];
  let cur = l;
  while (cur !== null) {
    numArray.push(cur.val);
    cur = cur.next;
  }

  let result = 0;
  for (let i = 0; i < numArray.length; i++) {
    let base = Math.pow(10, i);
    result += numArray[i] * base;
  }
  return result;
};

const addTwoNumbers = (l1, l2) => {};
