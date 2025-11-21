document.getElementById("btnGet").addEventListener("click", () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const metodo = "GET";
  const inicio = performance.now();

  fetch(url)
    .then(response => {
      const tiempo = performance.now() - inicio;

      // Logs detallados:
      console.log("🌐 ----- PETICIÓN FETCH -----");
      console.log("📌 URL solicitada:", url);
      console.log("📌 Método usado:", metodo);
      console.log("⏱️ Tiempo de respuesta (ms):", tiempo.toFixed(2));
      console.log("📡 Código de estado:", response.status);
      console.log("📄 Tipo de contenido:", response.headers.get("content-type"));
      console.log("🔒 CORS permitido:", response.headers.get("access-control-allow-origin") || "❌ No especificado");

      return response.json().then(data => ({ data, tiempo, status: response.status }));
    })
    .then(respuesta => {
      document.getElementById("resultado").innerHTML = `
        <pre>${JSON.stringify(respuesta.data, null, 2)}</pre>
      `;
    })
    .catch(error => console.error("❌ Error en la petición:", error));
});


document.getElementById("btnGet404").addEventListener("click", () => {
  const url = "https://jsonplaceholder.typicode.com/posts/999999";
  const inicio = performance.now();

  fetch(url)
    .then(response => {
      const tiempo = performance.now() - inicio;

      console.log("🌐 ----- PETICIÓN 404 -----");
      console.log("📌 URL:", url);
      console.log("📌 Método: GET");
      console.log("⏱️ Tiempo:", tiempo.toFixed(2), "ms");
      console.log("📡 Código:", response.status);
      console.log("🔒 CORS permitido:", response.headers.get("access-control-allow-origin") || "❌ No especificado");

      if (!response.ok) {
        document.getElementById("resultado").innerHTML =
          `<p style="color:red">Error ${response.status}: Recurso no encontrado</p>`;
        return;
      }
      return response.json();
    })
    .catch(e => console.error("❌ Error:", e));
});
