// const https = require('https');

// function makeRequest() {
//   const now = new Date();
//   console.log(`[${now.toLocaleString()}] Making request...`);
//   https.get('https://pabbackend.onrender.com', (res) => {
//     console.log(`[${now.toLocaleString()}] Status code: ${res.statusCode}`);
//     if (res.statusCode === 200) {
//       console.log(`[${now.toLocaleString()}] Request successful!`);
//       // Aquí puedes procesar la respuesta de la petición
//     } 
//   }).on('error', (err) => {
//     console.error(`[${now.toLocaleString()}] Error: ${err.message}`);
//   });
// }

// setInterval(makeRequest, 14 * 60 * 1000); // 14 minutos en milisegundos



const resultElement = document.getElementById('result');

if (resultElement) {
  async function makeRequest() {
    const now = new Date();
    const message = `[${now.toLocaleString()}] Making request...\n`;
    console.log(message);
    resultElement.innerHTML += message;

    const res = await fetch('https://pabbackend.onrender.com');
    const statusMessage = `[${now.toLocaleString()}] Status code: ${res.status}\n`;
    console.log(statusMessage);
    resultElement.innerHTML += statusMessage;

    if (res.status === 200) {
      const successMessage = `[${now.toLocaleString()}] Request successful!\n`;
      console.log(successMessage);
      resultElement.innerHTML += successMessage;

      // Aquí puedes procesar la respuesta de la petición
    } else {
      const errorMessage = `[${now.toLocaleString()}] Error: ${res.statusText}\n`;
      console.error(errorMessage);
      resultElement.innerHTML += errorMessage;
    }
  }

  setInterval(makeRequest, 1 * 60 * 1000); // 14 minutos en milisegundos
} else {
  console.error('Element with ID "result" not found in document');
}
