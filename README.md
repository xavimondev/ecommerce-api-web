# Server con Express y Typescript

En el presente proyecto desarrollamos nuestro backend utilizando Node y Typescript.
Nos apoyamos en las migraciones para crear y migrar nuestras tablas a base de datos.

## Descripción

Proyecto fue desarrollado usando:

* Node
* Express
* Typescript
* [AWS SDK](https://www.npmjs.com/package/aws-sdk)
* [Sequelize](https://sequelize.org/master/)
* [Lambda AWS](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lambda/index.html)
* [SES AWS](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html)
* [RDS AWS](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html)


## Instalación y configuración

Después hayas descargado el proyecto, ejecuta

```bash
npm install
```
El comando instalara las dependencias necesarias para el proyecto.

Luego, renombras el archivo **example.env** a **.env** y completas todas las variables de entorno según tu configuración.

Por último, ejecutas:
 
```bash
npm start
```