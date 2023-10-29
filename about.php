<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="description" content="Software de punto de venta y gestión de inventario basado en la nube, especialmente diseñado para minoristas y empresas de e-commerce.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
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
<script src="scripts/about.js" defer></script>
</head>
<body>
    <?php include "header.php";?>
    <section id="about">
        <div class="grid grid-cols-2 gap-8 m-8">
            <article id="teamHistory" class="flex flex-col gap-4">
                <h2 class="text-2xl">Equipo</h2>
                <div id="github-profile" style="display:none" class="bg-slate-800 text-white rounded-lg p-4 flex items-center gap-4">
                    <img id="profile-avatar" src="/img/" alt="Profile Avatar" width="100">
                    <div>
                        <h2 id="profile-username">username</h2>
                        <h2 id="profile-name">name</h2>
                        <p id="profile-bio"></p>
                        <a id="profile-link" href="" target="_blank" class="underline">View on GitHub</a>
                    </div>
                </div>
                <h2 class="text-2xl">Historia</h2>
                <p>SkyInventory fue fundada en 2010 por un grupo de profesionales con amplia experiencia en tecnología, ventas y gestión de inventario. Desde el principio, nuestra misión ha sido clara: simplificar y optimizar la gestión de inventario y puntos de venta para minoristas y empresas de e-commerce, ayudándoles a crecer y prosperar en un mercado cada vez más competitivo.</p>
                <p>A lo largo de los años, hemos trabajado incansablemente para desarrollar y perfeccionar nuestro software, asegurándonos de que siempre esté a la vanguardia de la tecnología y sea altamente confiable y fácil de usar. Hemos crecido constantemente, expandiendo nuestra base de clientes y mejorando continuamente nuestros servicios. Hoy, nos enorgullece decir que hemos ayudado a cientos de empresas a superar sus desafíos y alcanzar sus objetivos.</p>
            </article>
            <article id="mision" class="flex flex-col gap-4">
                <h2 class="text-2xl">Misión</h2>
                <p>Nuestra misión es proporcionar soluciones de gestión de inventario y puntos de venta basadas en la nube, fáciles de usar, confiables y altamente eficaces, que ayuden a nuestros clientes a optimizar sus operaciones, maximizar su rentabilidad y tener éxito en el mercado actual.</p>
                <h2 class="text-2xl">Visión</h2>
                <p>Nuestra visión es ser el proveedor líder de software de gestión de inventario y puntos de venta para minoristas y empresas de e-commerce en todo el mundo. Queremos ser conocidos por la calidad y confiabilidad de nuestros productos, así como por nuestro compromiso con la satisfacción y el éxito de nuestros clientes.</p>
            </article>
        </div>
    </section>
    <hr>
    <footer class="text-black text-center">
        <p>Copyright © 2023 Sky Inventory. Todos los derechos reservados.</p>
    </footer>
</body>
</html>