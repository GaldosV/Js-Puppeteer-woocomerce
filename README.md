# Web Scraper de WooCommerce

Este es un proyecto de web scraping desarrollado en Node.js que permite extraer información específica de un sitio web WooCommerce. En particular, esta aplicación está diseñada para extraer datos de clientes que han realizado pagos a través de Stripe en una tienda WooCommerce.

## Funcionalidades

- Realiza una solicitud a una URL de un sitio WooCommerce.
- Utiliza Puppeteer para cargar la página web y extraer datos dinámicos.
- Utiliza Cheerio para analizar y extraer información de la página.
- Filtra y almacena los datos de los clientes que han pagado con Stripe.
- Guarda los datos en un archivo de texto en el formato Cliente: [Nombre del cliente], Monto de pago: [Monto del pago].

## Requisitos

- Node.js instalado en tu máquina.

