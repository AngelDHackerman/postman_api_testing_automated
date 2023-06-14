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
        console.log(metrics)

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });

    it ('Medir el performance de la pagina', async () => { 
        
        await page.waitForSelector('img')

      
        new Promise(resolve => setTimeout(resolve, timeDelay))
    });
    
}, timeDelay)