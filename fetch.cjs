const https = require('https');
const fs = require('fs');

https.get('https://bhaavyakapur.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('D:\\Dhariya Bhaiya\\homepage_text.html', data);
    console.log('Downloaded. Size:', data.length);
  });
}).on('error', (err) => {
  console.log('Error: ', err.message);
});
