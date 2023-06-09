module.exports = { 

    // Creando el helper de "click"
    click: async function ( page, selector, opts = {}) { 
        try{ 

            // Es buena practica esperar por el selector con el que vamos a interactuar. 
            await page.waitForSelector(selector)
            await page.click(selector)
            
        } catch (err){ 
            throw new Error(`Error al dar click en el selector: ${selector}`)
        }
    },

    // Creando helper de doubleClick
    doubleClick: async function ( page, selector) { 
        try { 
            await page.waitForSelector(selector);
            await page.click(selector, {clickCount: 2})  // dando doble click

        } catch (err) { 
            throw new Error(`Error al dar doble click en el selector: ${selector}`)
        }
    },

    // Opteniendo el texto del elemento 
    getText: async function ( page, selector) { 
        try { 
            await page.waitForSelector(selector)
            return await page.$eval(selector, (elemento) => elemento.textContent)

        } catch (err) { 
            throw new Error(`Error al obtener el texto del selector: ${selector}`)
        }
    },

    // Type: escribir en un input de la web page
    type: async function ( page, selector, text, opts = {} ) { 
        try { 
            await page.waitForSelector(selector)
            await page.type(selector, text, opts)

        } catch (err) { 
            throw new Error (`Error al escribir en el selector: ${selector}`)
        }
    },

    // getCount, contando el numero de ciertos elementos en una pagina 
    
}