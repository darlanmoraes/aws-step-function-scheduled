"use strict";

const AWS = require("aws-sdk");
const uuid = require("uuid/v4");
const stepFunctions = new AWS.StepFunctions();
const { STATE_MACHINE } = process.env;
const HTTP_OK = 200;

async function sendEvent() {
  const delay = new Date();
  delay.setMinutes(delay.getMinutes() + 1);
  return stepFunctions.startExecution({
    stateMachineArn: STATE_MACHINE,
    name: uuid(),
    input: JSON.stringify({
      timestamp: delay.toISOString(),
      random: uuid(),
    }),
  }).promise();
}

module.exports.execute = async (event) => {
  console.log("Call to step function start...");
  const output = await sendEvent();
  console.log("Sent to step function final...");
  return {
    statusCode: HTTP_OK,
    body: JSON.stringify({
      output: output.$response.data
    }, null, 2),
  };
};
