const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // URL de la página donde se encuentran los clientes
  const url = 'https://example.com/clients'; // Reemplaza esto con la URL real

  await page.goto(url);
  await page.waitForSelector('.client-list');

  const html = await page.content();
  const $ = cheerio.load(html);

  // Selector para los clientes que pagaron con Stripe
  const stripeClients = $('.client-item[data-payment-method="stripe"]'); // ************
  // almacenar los datos
  const data = [];

  // Iterar sobre los elementos y extraer la información que necesitas
  stripeClients.each((index, element) => {
    const clientName = $(element).find('.client-name').text();
    const paymentAmount = $(element).find('.payment-amount').text();

    // Agregar los datos 
    data.push(`Cliente: ${clientName}\nMonto de pago: ${paymentAmount}\n`);
  });

  // Guardar los datos en un archivo de texto
  fs.writeFileSync('DatosClientesStripe.txt', data.join('\n'));

  await browser.close();
})();