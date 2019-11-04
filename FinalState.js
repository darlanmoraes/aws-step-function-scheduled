"use strict";

module.exports.execute = async event => {
  console.log(`Final step function: ${JSON.stringify(event, null, 2)}`);
};
