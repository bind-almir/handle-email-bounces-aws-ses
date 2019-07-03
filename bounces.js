const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const handler = async (event, context) => {
  const { notificationType, bounce }  = JSON.parse(event.Records[0].body);
  if(notificationType == 'Bounce' && bounce.bounceType == 'Permanent') {
    await asyncForEach(bounce.bouncedRecipients, async ({ emailAddress }) => {
      console.log(emailAddress);
    // here we have bounced emailAddress... do whatever you have to do 
    });
  }
}

module.exports = { handler }