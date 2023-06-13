
// En el modo headless no se ve cuando el navegador se abre, 
// hace las pruebas corran mas rapido

// Modificando el tamano de la ventana con la opcion de args: []

const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {

    it('Debe de abrir y cerrar el navegador', async() => { 

        const browser = await puppeteer.launch({
            // headless: true, // NO habre el navegador
            headless: false,
            slowMo: 200, // agrega X segudnos entre cada paso
            devtools: true,  // Muestra las devTools al ejecutar el navegador
            defaultViewport: null, // establece esto a null para permitir que --window-size establezca el tamaño de la ventana
            args: ['--window-size=1920,1080'] // establece el tamaño de la ventana del navegador
        });

        const page = await browser.newPage()

        await page.goto('https://google.com')
        await new Promise(resolve => setTimeout(resolve, 5000));
        await browser.close()

    }, 30000) // Aumenta el límite de tiempo a 10 segundos
})