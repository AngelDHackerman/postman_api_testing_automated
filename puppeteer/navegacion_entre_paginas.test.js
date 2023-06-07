
// Navegar hacia adelante, atras, recargar y abrir una nueva pagina: 

const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {

  it('Debe de abrir y cerrar el navegador', async() => { 

    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null
    });

    const page = await browser.newPage()

    await page.goto('https://google.com')
    await new Promise(resolve => setTimeout(resolve, 2000));

    // .waitForSelector('img') espera por un selection que sea de imagen 
    await page.waitForSelector('img')

    // recargamos la pagina 
    await page.reload()

    // navegar a otro sitio
    await page.goto('https://platzi.com/')

    // esperando por un selection en especifico: 
    await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Logo > div > a > div > figure > img')

    // navegar hacia atras
    await page.goBack()
    await page.waitForSelector('img')
    await new Promise(resolve => setTimeout(resolve, 500));

    // navegar hacia adelante 
    await page.goForward()
    await new Promise(resolve => setTimeout(resolve, 500));

    // Abrir una nueva pagina 
    const page2 = await browser.newPage()
    await page2.goto('https://facebook.com/')
    await new Promise(resolve => setTimeout(resolve, 500));

    
    await browser.close()

  }, 50000)
})