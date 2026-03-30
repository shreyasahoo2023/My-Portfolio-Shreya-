const fs = require('fs');
const { execSync } = require('child_process');

try {
  if (!fs.existsSync('./node_modules/pdf-parse')) {
    console.log("Installing pdf-parse temporarily...");
    execSync('npm install --no-save pdf-parse', {stdio: 'inherit'});
  }
  
  const pdf = require('pdf-parse');
  const buffer = fs.readFileSync('public/Shreya sahoo_resume.pdf');
  
  pdf(buffer).then(data => {
    fs.writeFileSync('resume_text.txt', data.text);
    console.log('Extracted successfully to resume_text.txt');
  }).catch(err => {
    console.error("Error parsing PDF:", err);
  });
} catch (e) {
  console.error("Script failed:", e);
}
