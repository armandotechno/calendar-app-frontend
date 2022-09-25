

export const events = [
    {
        id: '1',
        start: new Date('2022-12-09 13:00:00'),
        end: new Date('2022-12-09 15:00:00'),
        title: 'Cumpleaños de Armando',
        notes: 'Hay que comprar la ensalada César',
    },
    {
        id: '2',
        start: new Date('2022-11-27 13:00:00'),
        end: new Date('2022-11-27 15:00:00'),
        title: 'Cumpleaños de Yuli',
        notes: 'Hay que comprar chocolates',
    }
]


export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: { ...events[0] }
}
