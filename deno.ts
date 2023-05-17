import { send } from 'https://deno.land/std/http/mod.ts';

 
async function makeRequest() {
  
  const now = new Date();
  console.log(`[${now.toLocaleString()}] Making request...`);
  const res = await fetch('https://pabbackend.onrender.com');
  console.log(`[${now.toLocaleString()}] Status code: ${res.status}`);
  if (res.status === 200) {
    console.log(`[${now.toLocaleString()}] Request successful!`);
    // Aquí puedes procesar la respuesta de la petición
  } else {
    console.error(`[${now.toLocaleString()}] Error: ${res.statusText}`);
  }
}

setInterval(makeRequest, 14 * 60 * 1000); // 14 minutos en milisegundos

