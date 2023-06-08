const puppeteer = require('puppeteer');

describe('web scrapping, extrayendo informacion', () => {

    it('Extrae el titulo de la pagina y la URL', async() => { 

        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            devtools: true
        });

        const page = await browser.newPage()

        await page.goto('https://platzi.com', { waitUntil: 'networkidle0'})

        // Extrayendo el titulo de la pagina
        const titulo = await page.title()

        // Extrayendo la URL de la pagina
        const url = await page.url()

        console.log('titulo: ', titulo);
        console.log('url: ', url)


        
        await browser.close()

    }, 90000);

    it('Extraer informacion de un elemento', async() => { 

        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        });

        const page = await browser.newPage()

        await page.goto('https://platzi.com', { waitUntil: 'networkidle0'})
        await page.waitForSelector('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Menu > div > div > ul > li:nth-child(8) > a')

        // Extrayendo la info por CSS selector

        // $eval, correra el metodo (document.querySelector)
        // El callback de $eval, devolvera el texto contenido en el boton. 
        const nombreBoton = await page.$eval('#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Menu > div > div > ul > li:nth-child(8) > a', (button) => button.textContent)
        console.log('Nombre Del Boton: ',nombreBoton)

        // Extrayendo la info por XPath 

        // La función $x() de Puppeteer se utiliza para seleccionar elementos en la página utilizando la sintaxis XPath.
        // Esta línea de código selecciona el primer elemento que coincide con el XPath proporcionado y lo devuelve en un array.
        const [nombreBoton2] = await page.$x('//*[@id="Header-v2"]/nav[1]/div[2]/div/div/ul/li[5]/a')

        // Una vez que tienes el elemento, puedes usar el método getProperty() para obtener una de sus propiedades.
        // En este caso, estás obteniendo la propiedad 'textContent', que contiene el texto del elemento.
        const propiedad = await nombreBoton2.getProperty('textContent')

        // getProperty() devuelve un objeto JSHandle, que es una referencia a un objeto en el navegador.
        // Para obtener el valor real de la propiedad, puedes usar el método jsonValue() en el objeto JSHandle.
        // Esto devuelve una promesa que se resuelve con el valor de la propiedad 'textContent'.
        const texto = await propiedad.jsonValue()

        console.log('Nombre Del Boton 2: ', texto)


        // Segunda forma

        // page.evaluate() te permite ejecutar una función en el contexto del navegador y obtener el resultado. 
        // En este caso, estás utilizando page.evaluate() para obtener el contenido de texto de un elemento.
        const texto2 = await page.evaluate((name) => name.textContent, nombreBoton2)
        console.log('Nombre de Boton 2 segunda forma: ', texto2)


        // Tercera forma 

        const button3  = await page.waitForXPath('//*[@id="Header-v2"]/nav[1]/div[2]/div/div/ul/li[5]/a')
        const texto3 = await page.evaluate((name) => name.textContent, button3)
        console.log('Texto 3: ', texto3)
        
        await browser.close()

    }, 90000);


    // Contando el numero de imagenes en el landing page de Platzi.com

    it('hola', async () => { 
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            devtools: true
        });

        const page = await browser.newPage()

        await page.goto('https://platzi.com', { waitUntil: 'networkidle0'})

        // Contando el numero de imagenes en la landing page de platzi.com
        // $$eval() corre un querySelectorAll, es decir buscara todas las coincidencias. 
        const images = await page.$$eval('img', (imagenes) => imagenes.length)
        console.log('imagenes: ', images)


        await browser.close()
    }, 90000);
})