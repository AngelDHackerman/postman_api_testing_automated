
// Este script demuestra los tipos de espera que existen
// platzi.com
// facebook.com
// demoqa.com/modal-dialogs

const puppeteer = require('puppeteer');

describe('tipos de espera', () => {

  it('Mostrar todos los diferentes tipos de espera', async() => { 

    // Abrimos el navegador 
    const browser = await puppeteer.launch({
      headless: false, // Esto hace que logremos ver como se ejecuta en el navegador. 
      defaultViewport: null,
    });

    // Creamos un new page de la constante browser
    const page = await browser.newPage()

    // Vamos a platzi, y con networkidle0, se espera hasta que la pagina cargue por completo
    await page.goto('http://platzi.com', { waitUntil: 'networkidle0' })

    // Espera explicita
    await new Promise(resolve => setTimeout(resolve, 2500));


    // Espera por un selector css
    const page2 = await browser.newPage()
    await page2.goto('https://facebook.com/')
    await page2.waitForSelector('#content > div > div > div > div._8esl > div > img')

    // Espera por un selector xpath 
    await page2.waitForXPath('//*[@id="reg_pages_msg"]')


    // Testeando varios tipos de wait
    const page3 = await browser.newPage()

    // Esperando hasta que cargue el DOM de la pagina
    await page3.goto('https://demoqa.com/modal-dialogs', { waitUntil: 'domcontentloaded'})

    // visible: true, espera hasta que el objeto seleccionado sea visible en la pagina
    // tambien valida que el objeto NO tenga propiedades como Hidden, etc. 
    // se crea una variable button que luego solo le pasamos un evento "click" 
    const button = await page3.waitForSelector('#showSmallModal', { visible: true }) // { hidden: true }
    await button.click()
    await new Promise(resolve => setTimeout(resolve, 2500));


    await browser.close()

  }, 90000) // Aumenta el límite de tiempo a 10 segundos
})