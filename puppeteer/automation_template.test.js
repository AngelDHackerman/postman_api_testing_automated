const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Helpers de utilidad', () => { 
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

    it ('Helpers', async () => { 


        new Promise(resolve => setTimeout(resolve, timeDelay))
    });
    
}, timeDelay)