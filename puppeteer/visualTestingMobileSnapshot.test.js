// Este script crea un snapshot de un mobile device y hace un visual testing
// Necesitamos instalar la libreria jest-image-snapshot
const { toMatchImageSnapshot } = require('jest-image-snapshot')

// Con esto hacemos mas poderoso el metodo expect() que tiene jest por defecto: 
expect.extend({ toMatchImageSnapshot })

const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Mobile device snapshot', () => { 
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

    it ('Snapshot de mobile device', async () => { 

        // Seteando el viewport como un iPad device
        const tablet = puppeteer.devices['iPad Pro 11']
        await page.emulate(tablet)

        await page.waitForSelector('img')
        const screenshot = await page.screenshot() 

        expect(screenshot).toMatchImageSnapshot({ 
            failureThreshold: 0.05, 
            failureThresholdType: 'percent',
        })

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });
    
}, timeDelay)