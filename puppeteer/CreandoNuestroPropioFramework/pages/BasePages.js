// Uno de los beneficios de jest-puppeteer: no tenemos que estar pasando el page
// como un parametro en nuestra funcion o en nuestro metodo


export default class BasePage { 

  async getTitle() { 
      return await page.title()
  }

  async getUrl () { 
      return await page.url() 
  }

  async getText (selector) { 
      try {
          await page.waitForSelector(selector)
          return await page.$eval(selector, (el) => el.textContent)
      } catch (e) {
          throw new Error (`Error al obtener el texto del selector ${selector}`)
      }
  }

  async getAttribute(selector, attribute) { 
      try { 
          await page.waitForSelector(selector)
          return await page.$eval(selector, (el) => el.getAttribute(attribute))
      } catch(e) { 
          throw new Error(`Error al obtener el atributo del selector ${selector}`)
      }
  }

  async getValue ( selector ) { 
      try {
          await page.waitForSelector(selector)
          return await page.$eval(selector, (el) => el.value)
      } catch (error) {
          throw new Error(`Error al obtener el valor del selector`)
      }
  }

  async getCount ( selector ) { 
      try {
          await page.waitForSelector(selector)
          return await page.$$eval(selector, (el) => el.length)  // $$eval, hace un querySelectorAll()
      } catch (error) {
          throw new Error(`Error al obtener el numero de elementos del selector ${selector}`)
      }
  }

  async click ( selector ) { 
      try { 
          await page.waitForSelector(selector)
          await page.click(selector)
      } catch ( e ) {
          throw new Error(`Error al dar click al selector ${selector}`)
      }
  }

  async type ( selector, text, opt = {} ) { 
      try { 
          await page.waitForSelector(selector)
          await page.type(selector, text, opt)
      } catch (e) { 
          throw new Error (`Error al escribir en el selector ${selector}`)
      }
  }

  async doubleClick( selector ) { 
      try {
          await page.waitForSelector(selector)
          await page.click(selector, {clickCount: 2 })
      } catch (e) {
          throw new Error (`Error al hacer click en el selector ${selector}`)
      }
  }

  async wait (time) { 
      return new Promise (r => setTimeout(r, time))
  }
}