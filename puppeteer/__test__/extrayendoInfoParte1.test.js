const puppeteer = require('puppeteer');

// usando la libreria "helpers" 

const {getCount, getText} = require('../lib/helpers')

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

        // usando parte de nuestra libreria, getText(): 
        const nombreBoton = await getText(page, '#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Menu > div > div > ul > li:nth-child(8) > a')
        console.log('Nombre Del Boton: ', nombreBoton)



        
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
        
        // Usando el metodo getCount de la liberia "helpers"
        const images = await getCount(page,'img')
        console.log('Contando Las Imagenes: ', images)


        await browser.close()
    }, 90000);
})