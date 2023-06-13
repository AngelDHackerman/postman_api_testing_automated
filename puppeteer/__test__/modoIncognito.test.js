const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Emulando el modo incognito', () => { 
    let browser
    let page

    // Hook beforeEach 

    beforeEach ( async () => { 
        browser = await puppeteer.launch({ 
            headless: false,
        })

        // Declarando el modo incognito en las ventanas
        const context = await browser.createIncognitoBrowserContext()

        // Usando el modo incognito
        page = await context.newPage()

        await page.goto('https://platzi.com', { waituntil: 'networkidle0' })
    }, timeDelay);

    // Hook afterEach

    afterEach( async () => { 
        await browser.close()
    });

    // Ejecutando los test cases

    // Emulando una tablet, usando una libreria de puppeteer 

    it ('Emulando una tablet', async () => { 

        const tablet = puppeteer.devices['iPad Pro 11']
        await page.emulate(tablet)


        new Promise(resolve => setTimeout(resolve,timeDelay))
    });

    // Emulando una tablet en landscape, con la libreria de puppeteer 

    it ('Emulando una tablet, en modo landscapte', async () => { 

        const tablet = puppeteer.devices['iPad Pro 11 landscape']
        await page.emulate(tablet)

        new Promise(resolve => setTimeout(resolve, timeDelay))
    })

    // Emulando un iPhone 

    it ('Emulando un iPhone', async () => { 
        const iPhone = puppeteer.devices['iPhone 11 Pro Max']
        await page.emulate(iPhone)

        new Promise(resolve => setTimeout(resolve, timeDelay))
    })

}, timeDelay)