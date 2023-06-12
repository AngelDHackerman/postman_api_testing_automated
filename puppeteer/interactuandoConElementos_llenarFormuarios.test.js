
// abrira la pagina: https://devexpress.github.io/testcafe/example/
// #developer-name

const puppeteer = require('puppeteer');

// usando la libreria "helpers" 
const {click, type, doubleClick} = require('../lib/helpers')

describe('Interactuando con elementos de la pagina', () => {

    it('Interactuando con elementos', async() => { 

        // Abrimos el navegador 
        const browser = await puppeteer.launch({
            headless: false, // Esto hace que logremos ver como se ejecuta en el navegador. 
            defaultViewport: null,
        })

        // abrimos una nueva pagina en el navegador 
        const page = await browser.newPage()

        // Listener para las alertas de la pagina
        // aqui le damos 'accept' al alert
        page.on('dialog', async (dialog) => { 
            await new Promise(resolve => setTimeout(resolve, 3000))
            await dialog.accept();
        })

        // abriendo la pagina de devexpress.com
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Escribiendo en el input del formulario 
        // El input nos pide nuestro nombre
        // Delay, hace que escriba mas lento

        // usando la liberia "helpers"
        await type(page, '#developer-name', 'Angel Hackerman', { delay: 100 })
        await new Promise(resolve => setTimeout(resolve, 2500))

        // Seleccionando los checkbox 
        // Hay que ser cuidadosos de elegir el selector del checkbox y no del label
        await click(page, '#remote-testing', { delay: 100 })
        await click(page, '#reusing-js-code', { delay: 100 })
        await click(page, '#background-parallel-testing', { delay: 100 })
        await click(page, '#continuous-integration-embedding', { delay: 100 })

        await click(page, '#tried-test-cafe', { delay: 100 })

        // Escribiendo en los comments
        await type(page, '#comments', 'Este fue el mejor cafe que he testeado en la web', { delay: 100 })
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Dando click en submit
        await doubleClick(page, '#submit-button')
        await new Promise(resolve => setTimeout(resolve, 3500))

        await browser.close()

    }, 50000) // Aumenta el límite de tiempo a 10 segundos
})