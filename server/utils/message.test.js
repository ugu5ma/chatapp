var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
 it('should generate correct message object', () => {
   //store response in variable
   //assert from match
   //assert text match
   //assert createAt is number
   var from  = 'Uli';
   var text  = 'Something relevant';
   var message  = generateMessage(from, text);

   expect(message.createdAt).toBeA('number');
   expect(message).toInclude({from, text});


 });
});

describe('generateLocationMessage', () => {
 it('should generate correct location object', () => {
   //store response in variable
   //assert from match
   //assert text match
   //assert createAt is number
   var from  = 'Uli_dev_test';
   var latitude  = 11;
   var longitude  = 12;
   var url = 'https://www.google.com/maps?q=11,12';
   var message = generateLocationMessage(from, latitude, longitude);

   expect(message.createdAt).toBeA('number');
   expect(message).toInclude({from, url});
 });
});
