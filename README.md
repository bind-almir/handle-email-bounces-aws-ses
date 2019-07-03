**How to handle email bounces on AWS SES.**

Read more [here](https://www.almirzulic.com/2019/07/03/how-to-handle-email-bounces-on-aws-ses/).


### Instructions 

You'll need an Amazon Web Services account and credentials set up on your development machine. If you haven't done it before, here's a useful guide for [Configuring the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

[Configure AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/) to use with serverless framework.

- Install [NodeJS](https://nodejs.org) 
- Install [serverless](https://serverless.com/) framework using `npm i -g serverless`
- Clone this repository `git clone https://github.com/bind-almir/handle-email-bounces-aws-ses.git`
- Deploy service `serverless deploy --stage dev --region YOUR_REGION --aws-profile YOUR_PROFILE`
- Configure [AWS SES notifications](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-sns-notifications.html#configure-feedback-notifications-console)

![AWS SES Console](https://www.almirzulic.com/wp-content/uploads/2019/07/aws-ses-sns-topic-config-redacted.jpg)

- Test your service using [AWS Mailbox Simulator](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html)

