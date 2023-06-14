
const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Accesibilidad', () => { 
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

    it ('Snapshot de accesibilidad', async () => { 

        await page.waitForSelector('img')

        // Creando el snapshot para accesibilidad
        const snapshot = await page.accessibility.snapshot()
        console.log(snapshot)

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });
    
}, timeDelay)