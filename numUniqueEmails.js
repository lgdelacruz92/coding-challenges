let a = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
];

const numUniqueEmails = emails => {
  let result = new Set();

  emails.forEach(email => {
    let nameArr = [];
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@" || email[i] === "+") {
        break;
      }

      if (email[i] !== ".") {
        nameArr.push(email[i]);
      }
    }

    const indexOfAtSign = email.indexOf("@");
    const domain = email.substring(indexOfAtSign);
    result.add(nameArr.join("") + domain);
  });

  return Array.from(result);
};

console.log(numUniqueEmails(a));
