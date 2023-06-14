const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Test de performance', () => { 
    let browser 
    let page 

    // Hook beforeEach 
    beforeEach( async () => { 
        browser = await puppeteer.launch({ 
            headless: false,
        });

        page = await browser.newPage()
        await page.goto('https://platzi.com', { waituntil: 'networkidel0' })
    }, timeDelay)

    // Hook afterEach 
    afterEach ( async () => { 
        await browser.close()
    }); 

    // Ejecutando los test cases: 

    it ('Medir el performance de la automatizacion', async () => { 

        await page.waitForSelector('img')

        // Midiendo las metricas de performance
        const metrics = await page.metrics()
        console.log('Metrics: ', metrics)

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });

    it ('Medir el performance de la pagina', async () => { 
        
        await page.waitForSelector('img')

        // () => JSON.stringify(window.performance): Esta es la función que se está pasando a page.evaluate(). Esta función convierte el objeto window.performance en una cadena de texto en formato JSON.
        // El objeto window.performance es una API del navegador que proporciona información sobre el rendimiento de la página web, como el tiempo que tardó en cargar la página, el tiempo que tardó en descargar todos los recursos, etc.
        const metrics2 = await page.evaluate(() => JSON.stringify(window.performance))
        console.log('Metrics2: ', metrics2)
      
        new Promise(resolve => setTimeout(resolve, timeDelay))
    });

    it ('Medir el performance del page load', async () => { 
        
        await page.waitForSelector('img')

      
        new Promise(resolve => setTimeout(resolve, timeDelay))
    });
    
}, timeDelay)