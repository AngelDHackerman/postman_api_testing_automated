const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Capturas de Pantalla', () => { 
    let browser 
    let page 

    // Hook beforeEach 
    beforeEach( async () => { 
        browser = await puppeteer.launch({ 
            headless: false,
        });

        page = await browser.newPage()
        await page.goto('https://google.com', { waituntil: 'networkidel0' })
    }, timeDelay)

    // Hook afterEach 
    afterEach ( async () => { 
        await browser.close()
    }); 

    // Ejecutando los test cases: 

    it ('Captura De Pantalla Completa', async () => { 

        // screenshot() es el metodo de puppeteer para capturar la pantalla
        await page.screenshot({ 
            path: './capturaDePantalla.png', // nombre y formato del screenshot
            fullPage: true, // que tome toda la pantalla
        })


        new Promise(resolve => setTimeout(resolve, timeDelay))
    });

    it ('Captura de pantalla seleccionando un area', async () => { 

        await page.screenshot({ 
            path: './capturaDePantallaSeleccionandoUnArea.png',
            clip: { // Dandole coordenadas para la captura con el metodo clip
                x: 0, 
                y: 0, 
                width: 500, // px
                height: 500,
            }
        })

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });

    it ('Captura de pantalla con fondo transparente', async () => { 

        // Haciendo el background de la pagina transparente con el document style: 
        await page.evaluate(() => (document.body.style.background = 'transparent'))

        await page.screenshot({ 
            path: './capturaDePantallaTransparente.png',
            // Cuando omitBackground se establece en true, cualquier color de fondo establecido en la página será ignorado 
            // y el fondo de la captura de pantalla será transparente.
            omitBackground: true, 
        })

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });

    it ('Captura de pantalla a un solo elemento', async () => { 


        new Promise(resolve => setTimeout(resolve, timeDelay))
    })
    
}, timeDelay)