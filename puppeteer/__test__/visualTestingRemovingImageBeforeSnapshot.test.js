
// Con esto podemos eliminar imagenes que cambian constantemente
// como por ejemplo un banner que no nos aporta nada de informacion relevante

const { toMatchImageSnapshot } = require('jest-image-snapshot')

// Con esto hacemos mas poderoso el metodo expect() que tiene jest por defecto: 
expect.extend({ toMatchImageSnapshot })

const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Remover imagen antes de crear snapshot', () => { 
    let browser 
    let page 

    // Hook beforeEach 
    beforeEach( async () => { 
        browser = await puppeteer.launch({ 
            headless: false,
        });

        page = await browser.newPage()
        await page.goto('https://facebook.com', { waituntil: 'networkidel0' })
    }, timeDelay)

    // Hook afterEach 
    afterEach ( async () => { 
        await browser.close()
    }); 

    // Ejecutando los test cases: 

    it ('Snapshot de mobile device', async () => { 

        await page.waitForSelector('img')

        // Eliminando las imagenes del DOM 
        // querySelectorAll('img') || [], Si no se encuentran imagenes 'img' entonces se devuelve un array vacio
        // .forEach(img => img.remove(), Es un metodo de array. Esto eliminara cada elemento 'img' en el array de de .evaluate()
        await page.evaluate(() => {
            (document.querySelectorAll('img') || []).forEach(img => img.remove())
        })

        const screenshot = await page.screenshot() 

        expect(screenshot).toMatchImageSnapshot({ 
            failureThreshold: 0.05, 
            failureThresholdType: 'percent',
        })

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });
    
}, timeDelay)