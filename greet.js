function greet(name) {
  if (Array.isArray(name)) {
    const sanitizedNames = sanitizeNames(name);
    return handleArray(sanitizedNames);
  }

  if (!name) {
    return standin();
  }

  if (name == name.toUpperCase()) {
    return shout(name);
  }

  return "Hello, " + name + ".";;
}

function standin() {
  return "Hello, my friend.";
}

function shout(name) {
  return "HELLO " + name + "!";
}

function handleArray(names) {
  const len = names.length;
  let normalNames = [];
  let shoutingNames = [];
  for (let i = 0; i < len; i++) {
    if (names[i] != names[i].toUpperCase()) {
      normalNames.push(names[i]);
    } else {
      shoutingNames.push(names[i]);
    }
  }

  let greetings = greetNormalNames(normalNames);
  if (shoutingNames.length != 0) {
    greetings += " AND " + shout(shoutingNames);
  }
  return greetings;
}

function greetNormalNames(names) {
  const len = names.length;
  if (len == 2) {
    return "Hello, " + names[0] + " and " + names[1] + ".";
  }

  let greeting = "Hello, ";
  for (let i = 0; i < len; i++) {
    if (i == len - 1) {
      greeting += "and " + names[i] + ".";
    } else {
      greeting += names[i] + ", ";
    }
  }

  return greeting;
}

function sanitizeNames(names) {
  const len = names.length;
  const regex = /^\\"(.*)\\"$/;
  let tmpNames = [];
  for (let i = 0; i < len; i++) {
    const found = names[i].match(regex);
    if (found != null) {
      tmpNames.push(found[1]);
    } else {
      const newNames = names[i].split(", ");
      tmpNames = tmpNames.concat(newNames);
    }
  }
  return tmpNames;
}

module.exports = greet;
