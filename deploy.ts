import * as https from "https";

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {


    function makeRequest() {
        const now = new Date();
        console.log(`[${now.toLocaleString()}] Making request...`);
        https.get('https://pabbackend.onrender.com', (res) => {
            console.log(`[${now.toLocaleString()}] Status code: ${res.statusCode}`);
            if (res.statusCode === 200) {
                console.log(`[${now.toLocaleString()}] Request successful!`);
                // Aquí puedes procesar la respuesta de la petición
            }
        }).on('error', (err) => {
            console.error(`[${now.toLocaleString()}] Error: ${err.message}`);
        });
    }

    setInterval(makeRequest, 14 * 60 * 1000); // 14 minutos en milisegundos
}