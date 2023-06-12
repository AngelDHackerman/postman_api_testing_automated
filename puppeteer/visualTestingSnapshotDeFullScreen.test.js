const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

// Necesitamos instalar la libreria jest-image-snapshot
const { toMatchImageSnapshot } = require('jest-image-snapshot')

// Con esto hacemos mas poderoso el metodo expect() que tiene jest por defecto: 
expect.extend({ toMatchImageSnapshot })

describe('Visual Testing', () => { 
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

    it ('Snapshot de toda la pantalla', async () => { 

        await page.waitForSelector('img')
        const screenshot = await page.screenshot()  // Creamos un screenshot de la pantalla

        // expect es un assertion. Y con este assetion se quiere comprobar que la captura de pantalla
        // hace match con el snapshot (el snapshot se crea la primera vez que se corre el test)
        expect(screenshot).toMatchImageSnapshot({
            failureThreshold: 0.05,  // Margen de error que el match puede tener
            failureThresholdType: 'percent', // el tipo de margen de error, en este caso porcentaje, (5% margen de error)
        })


        new Promise(resolve => setTimeout(resolve, timeDelay))
    });

    it ('Snapshot de solo 1 elemento', async () => { 
        
        const image = await page.waitForSelector('img')
        const screenshot = await image.screenshot() 

        expect(screenshot).toMatchImageSnapshot({ 
            failureThreshold: 0.05,  // Margen de error que el match puede tener
            failureThresholdType: 'percent', // el tipo de margen de error, en este caso porcentaje, (5% margen de error)
        })
    })
    
}, timeDelay)