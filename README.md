# AlexaSkill

## Instrucciones

1. Para instalar:

```
pnpm install
```

2. Crear archivo **.env** e ingresar **OPENCAGE_API_KEY**

3. Para inciar el servidor de desarrollo:

```
pnpm start
```

4. Desde la consola de Alexa, _puntos de carga_ gatilla el intent de launch e inicia el skill. Luego para solicitar que encuentre puntos de carga bip, es posible utilizar cualquiera de las siguientes opciones:

- Alexa lugares de carga
- Alexa lugares de carga bip
- Alexa lugares de carga de tarjeta bip
- Alexa Encuentra lugares de carga de tarjeta bip

5. Alexa luego solicita la calle y luego el número:

- Cerca de qué calle?
- En qué numeración?
  Una vez dicha la calle y la numeración, Alexa confirma la información:

```
Quieres buscar puntos de carga bip cercanos a {street} {number} ?
```

## Referencias

- (https://www.youtube.com/watch?v=R7SZoudPv34&ab_channel=EngineerCode)
- (https://github.com/lomeliaiengineer/AlexaSkillNodeExpress)
