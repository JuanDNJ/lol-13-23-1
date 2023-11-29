# Lol App 13.23.1

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Configuarcion 
Para poder utilizar y que funcione la App, es necesario el archivo Entorno o Ambiente (.env),
hay que crearlo en la raíz del proyecto. Generar dentro las constantes con los token que recivirás de la API de [RiotGamesDeveloper](https://developer.riotgames.com/) cuando crees una cuenta. 
- VITE_DEVELOPMENT_API_KEY = "token"
- VITE_PRODUCTION_API_KEY = "token"

### Información
- El token de desarrollo no tendrás que reservarlo, pero si actualizarlo cuando expire.
- El token de producción hay que reservarlo, lee bien la documentación para realizar la reserva.
- Es muy importante leerse la documentación para comprender el archivo de configuración.



### Enlaces de interes
- [ESLint](https://eslint.org)
- [README](https://www.makeareadme.com)
- [RiotGamesDeveloper](https://developer.riotgames.com/)