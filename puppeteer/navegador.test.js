
// Abre el navegador 5 segundos y luego lo cierra

const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {

    it('Debe de abrir y cerrar el navegador', async() => { 

        // Abrimos el navegador 
        const browser = await puppeteer.launch({
            headless: false // Esto hace que logremos ver como se ejecuta en el navegador. 
        });

        // Creamos un new page de la constante browser
        const page = await browser.newPage()

        // Vamos a google y esperamos 5 segundos para ver la ejecucion.
        await page.goto('https://google.com')
        await new Promise(resolve => setTimeout(resolve, 5000));
        await browser.close()

    }, 10000) // Aumenta el límite de tiempo a 10 segundos
})