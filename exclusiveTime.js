const getProps = log => {
  const splittedLog = log.split(":");
  return {
    id: splittedLog[0],
    action: splittedLog[1],
    time: parseInt(splittedLog[2])
  };
};

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    const val = this.stack[this.stack.length - 1];
    this.stack.splice(this.stack.length - 1, 1);
    return val;
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    } else {
      return -1;
    }
  }

  get() {
    return this.stack;
  }
}

var exclusiveTime = function(n, logs) {
  const times = [];
  for (let i = 0; i < n; i++) {
    times.push(0);
  }

  const stack = new Stack();
  let lastTime = 0;

  for (let i = 0; i < logs.length; i++) {
    const log = getProps(logs[i]);
    if (log.action === "start") {
      if (stack.peek() !== -1) {
        const top = stack.peek();
        const duration = log.time - lastTime;
        times[top.id] += duration;
      }
      lastTime = log.time;
      stack.push(log);
    } else {
      stack.pop();
      const duration = log.time + 1 - lastTime;
      console.log(duration, lastTime, log.id);
      times[log.id] += duration;
    }
  }

  console.log(stack);

  return times;
};

// console.log(exclusiveTime(2, ["0:start:2", "1:start:4", "1:end:7", "0:end:8"]));
// console.log(
//   exclusiveTime(3, [
//     "0:start:2",
//     "1:start:4",
//     "2:start:10",
//     "2:end:13",
//     "1:end:15",
//     "0:end:16"
//   ])
// );

console.log(
  exclusiveTime(2, [
    "0:start:0",
    "0:start:2",
    "0:end:5",
    "1:start:7",
    "1:end:7",
    "0:end:8"
  ])
);
