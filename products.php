<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="description" content="Software de punto de venta y gestión de inventario basado en la nube, especialmente diseñado para minoristas y empresas de e-commerce.">
    <title>Sky Inventory</title>
    <!-- Inter Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          fontFamily: {
            inter: ["Inter", "sans-serif"],
          },
        }
      }
      </script>
  <!-- Ionicons -->
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</head>
<body>
  <?php include "header.php";?>
    <section class="m-4">
      <h1 class="text-4xl my-8 text-center">Nuestros Planes</h1>
      <div id="products" class="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-6"></div>
    </section>
    <!-- <br><hr> -->
    <!-- <footer>
      <p>Copyright © 2023 Sky Inventory. Todos los derechos reservados.</p>
  </footer> -->
  <script>
    const section = document.querySelector('#products');
    document.addEventListener('DOMContentLoaded', () => {
      fetch('./scripts/getPlanes.php')
      .then(response => response.json())
      .then(data => {
        data.forEach(plan => {
          let caracteristicas = plan.caracteristicas.split(',').map(car => `<li>${car}</li>`).join('');
          section.innerHTML += `
          <div class="border rounded-lg overflow-hidden shadow-lg flex flex-col">
               <div class="bg-teal-500 text-white text-center py-4">
                  <h2 class="text-2xl">${plan.nombre}</h2>
               </div>
               <div class="p-4 flex-grow">
                  <h1 class="text-4xl mb-4">${plan.precio}</h1>
                  <ul class="list-disc pl-5">
                     ${caracteristicas}
                  </ul>
               </div>
               <div class="flex justifiy-end m-2">
               <button class="bg-teal-500 text-white py-1 rounded-lg w-full hover:bg-blue-600">Contratar</button>
               </div>
            </div>
          `
        })
      })
    })
  </script>
</body>
</html>