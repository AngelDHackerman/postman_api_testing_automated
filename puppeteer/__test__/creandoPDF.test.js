// https://pptr.dev/api/puppeteer.pdfoptions
// documentacion de lo que puede hacer el metodo page.pdf()

const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Generando PDF', () => { 
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

    it ('PDF de pantalla completa', async () => { 

        // Dandole los estilos al PDF
        let pdfCSS = []
        pdfCSS.push('<style>')
        pdfCSS.push('h1 { font-size: 12px; margin-left: 32px;')
        pdfCSS.push('</style>')

        const css = pdfCSS.join('')

        await page.pdf({ 
            path: './google.pdf',
            format: 'A4',
            printBackground: true,
            displayHeaderFooter: true,
            // class= "pageNumber", es una clase interna de puppeteer
            headerTemplate: css + '<h1>' + 'Mira mama mi primer PDF con puppeteer ' + '</h1>',
            footerTemplate: css + '<h1> Page <span class= "pageNumber"></span> of <span class= "totalPages"></span></h1>',
            margin: { 
                top: '100px', 
                bottom: '200px', 
                right: '30px', 
                left: '30px',
            }
        })

        new Promise(resolve => setTimeout(resolve, timeDelay))
    });
    
}, timeDelay)