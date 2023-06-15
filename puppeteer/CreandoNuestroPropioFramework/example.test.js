// Aqui ya no fue necesario crear los beforeAll o los afterAll 

const timeDelay = 17_000_000

describe('Google', () => { 

    it('Abrir el navegador', async () => { 
        await page.goto('https://google.com')
        
        new Promise(resolve => setTimeout(resolve, timeDelay))
    })
})