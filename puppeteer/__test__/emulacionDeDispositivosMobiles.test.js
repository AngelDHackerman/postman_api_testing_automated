const puppeteer = require('puppeteer');

describe('Emulando varios dispotivos', () => { 

    // Usando un hook beforeEach()

    beforeEach( async () => { 
        browser = await puppeteer.launch({ 
            headless: false,
        });

    page = await browser.newPage(); 
    await page.goto('https://platzi.com', { waituntil: 'networkidle0'})
    }, 16000);

    // Hook afterEach() 

    afterEach( async () => { 
        await browser.close() 
    })

    // Ejecutando los test cases

    it ('Emulando Dispositivos', async () => { 
        
        // Dandole los parametros para que emule un dispositivo movil, con pantalla touch 

        await page.emulate({ 
            name: 'Mi dispositivo',
            viewport: { 
                width: 375, 
                height: 667,
                deviceScaleFactor: 2,
                isMobile: true,
                hasTouch: true,
                isLandscape: false, // Esto dice si esta o no en forma horizontal. 
            },

            // userAgent, simula el tipo de navegador web 
            userAgent: 'Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-J600G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.1 Chrome/71.0.3578.99 Mobile Safari/537.36'
        })

        new Promise(resolve => setTimeout(resolve, 3000));
    })
}, 15000);