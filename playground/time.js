// jan 1st 1970 00:00:00 am utc
// get actual date newDate().getTime()

var moment = require('moment');
var createdAt = 1234;
var date = moment(createdAt);

var someTimestamp = moment().valueOf();
console.log(someTimestamp);


// console.log(date.format('MMM Do, YYYY'))
console.log(date.format('h:mm a'))
