
// Para este test usaremos la web: https://chercher.tech/practice/geo-location.html
// Esta nos pedira nuestra geolocalizacion

const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Cambiar Geolocalizacion en el Navegador', () => { 
    let browser 
    let page 

    // Hook beforeEach 
    beforeEach( async () => { 
        browser = await puppeteer.launch({ 
            headless: false,
        });

        page = await browser.newPage()
        // await page.goto('https://platzi.com', { waituntil: 'networkidel0' })
    }, timeDelay)

    // Hook afterEach 
    afterEach ( async () => { 
        await browser.close()
    }); 

    // Ejecutando los test cases: 

    it ('Geolocalizacion', async () => { 

        const context = browser.defaultBrowserContext() 

        // Aqui le pasamos la pagina donde queremos navegar y sobreescribir la geolocalizacion
        await  context.overridePermissions('https://chercher.tech/practice/geo-location.html', [

            // Sobreescribiendo la geolocalizacion: 
            'geolocation',
        ])

        await page.setGeolocation({ latitude: 90, longitude: 20 })

        // Ahora si navegaremos a la pagina con los permisos de geolocalizacion sobreescritos
        await page.goto('https://chercher.tech/practice/geo-location.html')

        // dandole tiempo de espera a la pagina
        await page.waitForTimeout(10000)
        
        new Promise(resolve => setTimeout(resolve, timeDelay))
    }, timeDelay);
    
}, timeDelay)