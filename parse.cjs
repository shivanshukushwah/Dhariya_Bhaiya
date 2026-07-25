const fs = require('fs');
const html = fs.readFileSync('D:\\Dhariya Bhaiya\\homepage_text.html', 'utf8');

const paragraphs = html.match(/<(p|h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi) || [];
const cleanText = paragraphs.map(p => p.replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 50 && !t.includes('{'));

fs.writeFileSync('D:\\Dhariya Bhaiya\\parsed_text.txt', cleanText.join('\n\n'));
console.log('Saved parsed text.');
