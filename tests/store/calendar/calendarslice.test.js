import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates"


describe('Pruebas en calendarSlice', () => {  

    test('Debe de retornar el valor inicial', () => {  

        // expect( calendarSlice.getInitialState() ).toEqual( initialState );
        const state = calendarSlice.getInitialState();
        expect( state ).toEqual( initialState )
    })

    test('onSetActiveEvent debe de activar el evento', () => {  

        const state = calendarSlice.reducer( calendarWithActiveEventState, onSetActiveEvent( events[1] ) );
        expect( state.activeEvent ).toEqual( events[1] );
    })

    test('onAddNewEvent debe agregar el evento', () => {  

        const newEvent = {
            id: '3',
            start: new Date('2022-11-27 13:00:00'),
            end: new Date('2022-11-27 15:00:00'),
            title: 'Cumpleaños de Pelusa',
            notes: 'Hay que comprar Brócoli',
        }
        const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent( newEvent ) );
        expect( state.events ).toEqual([ ...events, newEvent ]);

    })

    test('onUpdateEvent debe actualizar el evento', () => {  

        const updatedEvent = {
            id: '1',
            start: new Date('2022-11-27 13:00:00'),
            end: new Date('2022-11-27 15:00:00'),
            title: 'Cumpleaños de Pelusa actualizada',
            notes: 'Hay que comprar Brócoli Verde',
        }
        const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent( updatedEvent ) );
        expect( state.events ).toContain( updatedEvent );

    })

    test('onDeleteEvent debe eliminar el evento activo', () => {  
        // calendarWithActiveEventState
        const state = calendarSlice.reducer( calendarWithActiveEventState, onDeleteEvent() );
        expect( state.activeEvent ).toBe( null );
        expect( state.events ).not.toContain( events[0] );

    })

    test('onLoadEvents debe de establecer los eventos', () => {  
        // initialState
        const state = calendarSlice.reducer( initialState, onLoadEvents(events) );
        expect( state.isLoadingEvents ).toBeFalsy();
        expect( state.events ).toEqual( events );

        const newState = calendarSlice.reducer( state, onLoadEvents(events) );
        expect( state.events.length ).toBe( events.length )

    })

    test('onLogoutCalendar debe de limpiar el estado', () => {  
        // calendarWithActiveEventState
        const state = calendarSlice.reducer( calendarWithActiveEventState, onLogoutCalendar() );
        expect( state ).toEqual( initialState );
    })

})