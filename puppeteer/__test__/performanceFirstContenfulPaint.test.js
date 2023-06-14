const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Performance test', () => { 
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
    
    it ('Debera medir el performance del first paint y first contenful paint', async () => { 
        
        const navigationPromise = page .waitForNavigation()
        await page.goto('https://platzi.com', { waituntil: 'networkidel0' })
        await navigationPromise

        let firstPaint = JSON.parse( 
            await page.evaluate(() => JSON.stringify(performance.getEntriesByName('first-paint')))
        )

        let firstContentfulPaint = JSON.parse(
            await page.evaluate(() => JSON.stringify(performance.getEntriesByName('first-contentful-paint')))
        )

        console.group('First Paint log: ')
            console.log('First Paint: ', firstPaint)
        console.timeEnd()

        console.group('First Contentful Paint : ')
            console.log('First Contentful Paint: ', firstContentfulPaint)
        console.timeEnd()

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });
    
}, timeDelay)