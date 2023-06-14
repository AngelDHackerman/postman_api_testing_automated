const fs = require('fs')

const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Test de performance', () => { 
    let browser 
    let page 

    // Hook beforeEach 
    beforeEach( async () => { 
        browser = await puppeteer.launch({ 
            // headless: false,
        });

        page = await browser.newPage()
    }, timeDelay)
    
    // Hook afterEach 
    afterEach ( async () => { 
        await browser.close()
    }); 
    
    // Ejecutando los test cases: 
    
    it ('Medir el performance del page load', async () => { 
        
        // tracing, captura la activadad del navegador 
        // tracing.start({ path: 'profile.json' }, inicia el rastreo y el path es donde se guardara la info recolectada
        await page.tracing.start({ path: 'profile.json' })
        await page.goto('https://google.com', { waituntil: 'networkidel0' })
        await page.tracing.stop()
      
        new Promise(resolve => setTimeout(resolve, timeDelay))
    }, timeDelay);

    it ('Medir el performance del page load con screenshots', async () => { 

        // Activando los screenshots para el test de performance
        await page.tracing.start({ path: 'profileScreenshot.json', screenshots: true })
        await page.goto('https://platzi.com')
        await page.tracing.stop()
    }, timeDelay);

    it ('Medir el performance del page load con screenshots y extrayendolos', async () => { 

        // Activando los screenshots para el test de performance
        await page.tracing.start({ path: 'profileScreenshotExtract.json', screenshots: true })
        await page.goto('https://platzi.com')
        await page.tracing.stop()
        const tracing = JSON.parse(fs.readFileSync('./profileScreenshotExtract.json', 'utf8'))

        // filtrar el JSON
        const traceScreenshots = tracing.traceEvents.filter(
            (x) => 
                x.cat === 'disabled-by-default-devtools.screenshot' &&
                x.name === 'Screenshot' && 
                typeof x.args !== 'undefined' && 
                typeof x.args.snapshot !== 'undefined'
        )

        // iterar sobre este arreglo para crear imagenes
        traceScreenshots.forEach(function(snap, index) {
            fs.writeFile(`trace-screenshot-${index}.png`, snap.args.snapshot, 'base64', function(err) { 
                if (err) { 
                    console.log('No se puede crear el archivo', err)
                }
            })
        })
    }, timeDelay);
    
}, timeDelay)