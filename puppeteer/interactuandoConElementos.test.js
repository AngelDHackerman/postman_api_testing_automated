
// Este script ira a guru.com ha hacer clicks derechos, doble clicks, scapes y aceptar alertas

const puppeteer = require('puppeteer');

describe('Interactuando con elementos de la pagina', () => {

  it('Interactuando con elementos', async() => { 

    // Abrimos el navegador 
    const browser = await puppeteer.launch({
      headless: false, // Esto hace que logremos ver como se ejecuta en el navegador. 
      defaultViewport: null,
    })

    // abrimos una nueva pagina en el navegador 
    const page = await browser.newPage()

    // Listener para las alertas de la pagina
    // aqui le damos 'accept' al alert
    page.on('dialog', async (dialog) => { 
      await new Promise(resolve => setTimeout(resolve, 3000))
      await dialog.accept();
    })

    // abriendo la pagina de guru.com
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await new Promise(resolve => setTimeout(resolve, 1000))  // tiempo de espera de 1 seg

    // click derecho
    // hacemos click derecho con un dealy de 0.5 seg
    await page.click('#authentication > span', { button: 'right', delay: 500 })
    await new Promise(resolve => setTimeout(resolve, 1000))
    await page.keyboard.press('Escape');  // Simula la tecla 'esc'

    // Doble click
    // clickCount 2, dice cuantas veces tiene que hacer click. 
    // Esto dispara un alert
    await page.click('#authentication > button', { clickCount: 2, delay: 500 })
    await new Promise(resolve => setTimeout(resolve, 2000))


    await browser.close()

  }, 50000) // Aumenta el límite de tiempo a 10 segundos
})