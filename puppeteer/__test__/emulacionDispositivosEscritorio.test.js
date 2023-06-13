const puppeteer = require('puppeteer');

describe('Emulando varios dispotivos', () => { 

    // Usando un hook beforeEach()

    beforeEach( async () => { 
        browser = await puppeteer.launch({ 
            headless: false,
        });

    page = await browser.newPage(); 
    await page.goto('https://platzi.com', { waituntil: 'networkidle0'})
    }, 1600000);

    // Hook afterEach() 

    afterEach( async () => { 
        await browser.close() 
    })

    // Ejecutando los test cases

    it ('Emulando Dispositivos', async () => { 
        
        // Dando las medidas del viewPort 

        await page.setViewport ({ 
            width: 1280, 
            height: 800, 
        })
        

        new Promise(resolve => setTimeout(resolve, 50000));
    });

    // Emulando una tablet, usando una libreria de puppeteer 

    it ('Emulando una tablet', async () => { 

        const tablet = puppeteer.devices['iPad Pro 11']
        await page.emulate(tablet)


        new Promise(resolve => setTimeout(resolve,50000))
    });

    // Emulando una tablet en landscape, con la libreria de puppeteer 

    it ('Emulando una tablet, en modo landscapte', async () => { 

        const tablet = puppeteer.devices['iPad Pro 11 landscape']
        await page.emulate(tablet)

        new Promise(resolve => setTimeout(resolve, 70000))
    })

    // Emulando un iPhone 

    it ('Emulando un iPhone', async () => { 
        const iPhone = puppeteer.devices['iPhone 11 Pro Max']
        await page.emulate(iPhone)

        new Promise(resolve => setTimeout(resolve, 70000))
    })
}, 15000);