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
  <!-- Mi js -->
  <script src="scripts/index.js" defer></script>
</head>
<body class="font-inter h-screen overflow-y-hidden">
    <main 
    class="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth bg-teal-500 text-white">
    <?php include 'header.php'; ?>
      <section class="landing-section snap-center h-screen" data-header-color="white">
        <div class="h-screen p-24 flex flex-col items-center justify-center">
            <h2 class="text-3xl font-semibold">Sky Inventory</h2>
            <p class="text-slate-100">Inventario Optimizado, Éxito Multiplicado: Tus ventas en Buenas Manos</p>
            <img id="logo" src="./img/logo-main.png" alt="logoPrincipal" width="342" height="330">
        </div>
      </section>
      <section class="landing-section snap-center h-screen bg-white text-black" data-header-color="black">
        <div class="h-screen p-24 grid grid-rows-[1fr,4fr] justify-center items-center">
          <h2 class="text-2xl font-semibold text-center">Gestiona, Optimiza, Crece: Todo es posible con SkyInventory.</h2>
          <div class="grid grid-cols-2 justify-center mx-auto">
                    <div class="mx-4">
                      <h4 class="text-2xl font-normal mb-4">¿Qué Hacemos?</h4>
                      <p>SkyInventory es una solución integral basada en la nube, creada específicamente para gestionar inventarios y puntos de venta de minoristas y negocios e-commerce. Nuestra misión es simplificar la administración de tus inventarios y ventas, optimizando tus operaciones y ayudándote a enfocarte en lo que realmente importa: hacer crecer tu negocio.</p>
                    </div>
                    <aside class="flex justify-end">
                      <img src="img/asideImg1.png" alt="img1" class="object-cover alig">
                    </aside>
          </div>
        </div>
      </section>      
      <section class="landing-section snap-center h-screen bg-white text-black" data-header-color="black">
        <div class="h-screen p-24 grid grid-rows-[1fr,2fr,10fr,1fr] items-center gap-2">
          <h1 class="text-3xl">¿Como lo hacemos?</h1>
            <div class="grid grid-cols-2">
              <ul class="ml-4 list-disc">
                    <li>Gestión de Inventario en Tiempo Real</li>
                    <li>Integración con Plataformas e-commerce</li>
                    <li>Herramientas Analíticas Avanzadas</li>
              </ul>
              <ul class="ml-4 list-disc">
                    <li>Gestión de Multiples Ubicaciones</li>
                    <li>Acceso Movil</li>
                    <li>Faltaria uno</li>
                  </ul>
                </div>
              <div class="flex flex-col gap-4">
                <img src="./img/ejemplo.png" alt="ejemplo">
              </div>
              <a id="btn" class="bg-teal-500 px-4 py-2 text-white text-center hover:bg-blue-600 " href="products.html">
                Ver Servicios
              </a>
        </div>
      </section>
      <section class="landing-section snap-center h-screen bg-white text-black" data-header-color="black">
      <div class="h-screen p-24 grid grid-rows-[1fr,auto,1fr]">
                <h2 class="text-2xl my-2">¿Por qué elegir SkyInventory?</h2>
                <div class="grid grid-cols-2 items-center m-4">
                <ul class="ml-8 list-disc">
                    <li>Optimización de la Reposición de Productos</li>
                    <li>Prevención de la Sobreventa</li>
                    <li>Maximización de la Rentabilidad</li>
                    <li>Gestión Simplificada de Operaciones</li>
                </ul>
                <aside><img src="./img/persona-grafiquito.jpeg" alt="img2"></aside>
                </div>
                <hr>
                <footer class="text-black text-center">
                  <p>Copyright © 2023 Sky Inventory. Todos los derechos reservados.</p>
                </footer>
        </div>
      </section>
    </main>
</body>
</html>