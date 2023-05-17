
import { serve } from "https://deno.land/std@0.187.0/http/server.ts";



import { send } from 'https://deno.land/std/http/mod.ts';

let statusMessage = "Hola Mundo"

async function makeRequest() {
  const now = new Date();
  const message = `[${now.toLocaleString()}] Making request...\n`;
  console.log(message);


  const res = await fetch('https://pabbackend.onrender.com');
  statusMessage = `[${now.toLocaleString()}] Status code: ${res.status}\n`;
  console.log(statusMessage);


  if (res.status === 200) {
    const successMessage = `[${now.toLocaleString()}] Request successful!\n`;
    console.log(successMessage);


    // Aquí puedes procesar la respuesta de la petición
  } else {
    const errorMessage = `[${now.toLocaleString()}] Error: ${res.statusText}\n`;
    console.error(errorMessage);

  }
}

setInterval(makeRequest, 14 * 60 * 1000); // 14 minutos en milisegundos


serve((_req)=> {
    return new Response(statusMessage, {
      headers: { "content-type": "text/plain" },
    });
    
  });
