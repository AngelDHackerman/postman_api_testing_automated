
const puppeteer = require('puppeteer');

describe('tipos de espera', () => {

  it('Mostrar todos los diferentes tipos de espera', async() => { 

    // Abrimos el navegador 
    const browser = await puppeteer.launch({
      headless: false, // Esto hace que logremos ver como se ejecuta en el navegador. 
      defaultViewport: null,
      slowMo: 250
    });

    const page = await browser.newPage()

    await page.goto('https://demoqa.com/modal-dialogs', { waitUntil: 'domcontentloaded' })
    await page.click('#showSmallModal', { delay: 100 })

    // Espera por funcion 
    // waitForFunction() te permite esperar hasta que se cumpla una determinada condición en la página web que estás controlando
    await page.waitForFunction(() => document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal')


    // Cerrar el modal 
    await page.click('#closeSmallModal')

    // Validamos que el objecto ya no esta en el document, (hacemos una negacion con el !document.querySelector)
    await page.waitForFunction(() => !document.querySelector('#example-modal-sizes-title-sm'))


    await browser.close()

  }, 90000) // Aumenta el límite de tiempo a 10 segundos
})