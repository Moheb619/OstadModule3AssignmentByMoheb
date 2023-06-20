// a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

function getBrowserInfo() {
  return `Browser Name: ${navigator.appName} \nBrowswer Version: ${navigator.appVersion}`;
}

// b. Implement the function to display the user's browser name and version.
console.log(getBrowserInfo());
