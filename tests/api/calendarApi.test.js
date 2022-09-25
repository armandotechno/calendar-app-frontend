import calendarApi from "../../src/api/calendarApi"

describe('Pruebas en CalendarApi', () => {  

    test('Debe de tener la configuración por defecto', () => {  

        // console.log(calendarApi);
        // console.log(process.env);
        expect( calendarApi.defaults.baseURL ).toBe( process.env.VITE_API_URL )

    })

    test('Debe de tener el x-token en el header de todas las peticiones', async() => {  

        const token = 'ABC-123-XYZ';
        localStorage.setItem('token', token);
        const resp = await calendarApi('/auth');

        expect( resp.config.headers['x-token'] ).toBe( token );

    })

})