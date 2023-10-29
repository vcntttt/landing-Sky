<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="description" content="Software de punto de venta y gestión de inventario basado en la nube, especialmente diseñado para minoristas y empresas de e-commerce.">
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
    <script src="scripts/contact.js" defer></script>
    <title>Sky Inventory</title>
</head>
<body>
    <?php include "header.php";?>
        <section id="contact" class="bg-slate-800 m-8 text-white p-6 rounded-md">
            <h2>Contacto</h2>
            <form id="contact-form" class="flex flex-col gap-4">
                <label for="name">Nombre</label>
                <input id="name" type="text" placeholder="Nombre">
                <label for="email">Email</label>
                <input id="email" type="email" placeholder="Email">
                <label for="message">Mensaje</label>
                <textarea id="message" name="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <button type="submit" class="bg-teal-500 text-white py-1 rounded-lg w-full hover:bg-blue-600">Enviar</button>
            </form>
        </section>
    <hr>
    <footer class="text-black text-center">
        <p>Copyright © 2023 Sky Inventory. Todos los derechos reservados.</p>
    </footer>
</body>
</html>