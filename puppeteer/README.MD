# Puppeteer

## Instalacion de puppeteer

Comandos a seguir al iniciar puppeteer: 

- `npm init`
- `npm i puppeteer jest`
- `npm i -D prettier` (dependencia de desarrollo)
- `touch .gitignore` (crear el git ignore)
- `touch .pretierrc` (da el formato por defecto que le agreguemos, es opcional)

## Ejecucion de los test en Puppeteer

- Abrir el archivo de package.json
- Modificar el indice de scripts asi:

```jsx
"scripts": {
	"test": "jest --forceExit"
},
```

- Desde la terminal ejecutar el comando: `npm run test`

### Configurando la dependencia de desarrollo

- `npm i -D prettier`
- `touch .prettierrc`

y se le agrega este codigo:

```jsx
{ 
    "printWidth": 100,
    "singleQuote": true,
    "useTabs": 2, 
    "tabWidth": 2, 
    "semi": false,
    "trailingComma": "es5",
    "bracketSameLine": true
}
```

## Hacinedo Visual Testing con Snapshots

- `npm i jest-image-snapshot`

Esta libreria nos ayuda a hacer visual testing con snapshots 

## Creando snapshots de accesibilidad

- `npm i @axe-core/puppeteer`

Esta libreria se instala para cuando se quieren crear entornos de accesibilidad en puppeteer. 

# Creando Nuestro Propio Framework

- Debemos crearlo en una carpeta **Nueva** y que este **vacia.**
- `npm init -y`
- `npm i puppeteer jest jest-puppeteer`
- `node node_modules/.bin/jest  --init` y seleccionar lo siguiente :
1. Would you like to use Jest when running "test" script in "package.json"? ******Yes******
2. Would you like to use Typescript for the configuration file? ****No****
3. Choose the test environment that will be used for testing > ********Node********
4. Do you want Jest to add coverage reports? ****No****
5. Which provider should be used to instrument code for coverage? ************babel************ 

### En el archivo de configuracion ****************************jest.config.js**************************** se deben cambiar estos parametros:

1. **jest.config.js** se debe agregar `bail: 5,` (stop running after 5 failures)
2. **jest.config.js** se debe cambair `preset: "jest-puppeteer",` 

### Configurando la libreria que instalamos

- `touch jest-puppeteer.config.js`
- Luego en ese archivo agregar este codigo:

```jsx
module.exports = {
	launch: {
		headless: false,
		slowMo: 100,
		},
	browserContect: 'default',
	}
```

### Configurando la dependencia de desarrollo

- `npm i -D prettier`
- `touch .prettierrc`

y se le agrega este codigo:

```jsx
{ 
    "printWidth": 100,
    "singleQuote": true,
    "useTabs": 2, 
    "tabWidth": 2, 
    "semi": false,
    "trailingComma": "es5",
    "bracketSameLine": true
}
```

### Configurando el transpilador de Babel

- `npm i @babel/core @babel/preset-env babel-jest`
- `touch babel.config.js` Archivo de configuracion de babel
- En el archivo de bable.config.js agregamos este codigo:

```jsx
module.exports = { 
    presets: [
        [
            "@babel/preset-env",
            { 
                targets: { 
                    node: "current",
                },
            },
        ],
    ],
};
```

**********************************************Por ultimo se crea la carpeta de los test********************************************** `touch __t**est__**`