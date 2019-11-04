### Scheduled AWS Step Function
Project using step functions with `Serverless` framework to show how to deploy scheduled functions, using custom timestamps. You can change it to support cron definitions too.
The main goal for this project is to show how to configure functions that need to executed ate some time in the future without creating `CloudWatch` alarms or `TTL` events on `DynamoDb`.

#### Deploy
You will need an `AWS` account configured, with the `SECRET` and `ACCESS` keys on your local machine.
```
ENV=<YOUR-ENVIRONMENT> \
SERVICE_NAME=<YOUR_SERVICE_NAME> \
sls deploy
```

#### Running
After the deploy, the `Serverless` framework will return an `URL` for you. Somehting like the following:
```
endpoints:
  GET - https://twqkm3lplb.execute-api.sa-east-1.amazonaws.com/dev/states/start
```

You can call this `URL` from your browser. The function that will be executed can be found in the file `StartState.js`. This function will call the state machine created by `Serverless` and schedule it to one minute in the future. After one minute, the function in the file `FinalState.js` will be called. You can see these steps on `CloudWatch` logs.

All of the resources are created using `Cloudformation`, so you just need to delete the `Stack` to get rid of everything.