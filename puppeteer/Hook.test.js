const puppeteer = require('puppeteer');

describe('web scrapping, extrayendo informacion', () => {

    // Creando los hooks: beforeAll, afterAll, beforeEach, afterEach.  

    let browser
    let page

    // Hook beforeEach, ejecuta las funciones en su interior antes de cada test

    beforeEach( async () => { 

        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            devtools: false, 
        });

        page = await browser.newPage();
        await page.goto('https://platzi.com', { waitUntil: 'networkidle0'})
    }, 120000);

    // Hook afterEach, ejecuta las funciones en su interior despues de cada test

    afterEach( async () => { 

        await browser.close()
    }, 120000);

    // Ejecutando los test

    it('Extrae el titulo de la pagina y la URL', async() => { 

        const titulo = await page.title()

        const url = await page.url()

        console.log('titulo: ', titulo);
        console.log('url: ', url)
        
    }, 90000);

    it('Extraer informacion de un elemento', async() => { 

        await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Menu > div > div > ul > li:nth-child(8) > a')

        const nombreBoton = await page.$eval('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Menu > div > div > ul > li:nth-child(8) > a', (button) => button.textContent)
        console.log('Nombre Del Boton: ',nombreBoton)

        const [nombreBoton2] = await page.$x('//*[@id="Header-v2"]/nav[1]/div[3]/div/div/ul/li[5]/a')

        const propiedad = await nombreBoton2.getProperty('textContent')

        const texto = await propiedad.jsonValue()

        console.log('Nombre Del Boton 2: ', texto)


        const texto2 = await page.evaluate((name) => name.textContent, nombreBoton2)
        console.log('Nombre de Boton 2 segunda forma: ', texto2)


        const button3  = await page.waitForXPath('//*[@id="Header-v2"]/nav[1]/div[2]/div/div/ul/li[5]/a')
        const texto3 = await page.evaluate((name) => name.textContent, button3)
        console.log('Texto 3: ', texto3)
        
    }, 90000);


    it('hola', async () => { 

        const images = await page.$$eval('img', (imagenes) => imagenes.length)
        console.log('imagenes: ', images)

    }, 90000);
})