
// Este script medira los frames por segundo de la pagina cuando carga: 

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
    }, timeDelay)

    // Hook afterEach 
    afterEach ( async () => { 
        await browser.close()
    }); 

    // Ejecutando los test cases: 

    it('Debera medir el performance de los frames por segundo', async () => { 
    
        const devtoolsProtocolClient = await page.target().createCDPSession()
        await devtoolsProtocolClient.send('Overlay.setShowFPSCounter', { show: true })
        await page.goto('https://platzi.com')
    
        await page.screenshot({ path: 'framesPorSegundo.jpg', type: 'jpeg' })
    
    
        new Promise(resolve => setTimeout(resolve, timeDelay))
    }, timeDelay);
    
}, timeDelay)




