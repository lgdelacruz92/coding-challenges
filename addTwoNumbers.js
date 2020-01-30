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

const addTwoNumbers = (l1, l2) => {
  let cur1 = l1;
  let cur2 = l2;

  let carry = 0;
  let resultArr = [];
  while (cur1 !== null || cur2 !== null) {
    let val1 = cur1 !== null ? cur1.val : 0;
    let val2 = cur2 !== null ? cur2.val : 0;

    let stepResult = val1 + val2 + carry;
    if (9 < stepResult && stepResult < 20) {
      carry = 1;
      stepResult = stepResult % 10;
    } else if (stepResult > 20 || stepResult < 0) {
      throw Error("This should never happen");
    } else {
      carry = 0;
    }
    if (cur1 !== null) {
      cur1 = cur1.next;
    }
    if (cur2 !== null) {
      cur2 = cur2.next;
    }
    resultArr.push(new ListNode(stepResult));
  }

  if (carry === 1) {
    resultArr.push(new ListNode(carry));
  }

  for (let i = 0; i < resultArr.length - 1; i++) {
    resultArr[i].next = resultArr[i + 1];
  }
  return resultArr[0];
};

const l1 = encode(5);
const l2 = encode(5);
const result = addTwoNumbers(l1, l2);
printListNode(result);
