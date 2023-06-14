// npm i @axe-core/puppeteer

const puppeteer = require('puppeteer');
const {AxePuppeteer} = require('@axe-core/puppeteer')
const timeDelay = 17_000_000

describe('Accesibilidad con Axe', () => { 
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

    it ('Snapshot de accesibilidad usando Axe', async () => { 

        await page.waitForSelector('img')

        // Creando bypas para el Conte Security Policy CPS
        // La CSP es una medida de seguridad que puede prevenir ciertos tipos de ataques, 
        // como los ataques de inyección de código. Sin embargo, en algunos casos, puede interferir con las pruebas automatizadas, por lo que Puppeteer proporciona la opción de eludirla.
        await page.setBypassCSP(true)

        // La función analyze() realiza un análisis de accesibilidad en la página actual y devuelve los resultados. 
        // Estos resultados incluirán información sobre cualquier problema de accesibilidad que se haya encontrado
        const result = await new AxePuppeteer(page).analyze()
        // console.log(result)
        console.log(result.violations[0].nodes[0])

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });
    
}, timeDelay)