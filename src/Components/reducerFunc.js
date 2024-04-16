export default function reducerFunc(state, action) {
    switch(action.type) {
        case 'PLUS_NOTE': {
            return {
                ...state,
                firstScreen: false, 
                search: false
            }
        }
        case 'BACK': {
            return {
                ...state,
                firstScreen: true,
                title: '',
                note: '',
                string: '',
                tempId: 0
            }
        }
        case 'TITLE_CHANGE': {
            return {
                ...state,
                title: action.payload,
            }
        }
        case 'NOTE_CHANGE': {
            return {
                ...state,
                note: action.payload
            }
        }
        case 'SAVE_ITEM': {
            if (state.edit) {
                if (!state.title) {
                    return {
                        ...state,
                        firstScreen: true,
                        title: '',
                        note: '',
                        edit: false,
                        list: state.list.map(item => {
                            if (item.key === state.tempId) {
                                return {key: item.key, title: 'No title', note: state.note};
                            }
                            return item;
                        }),
                        tempId: 0
                    }
                }
                else {
                    return {
                        ...state,
                        firstScreen: true,
                        title: '',
                        note: '',
                        edit: false,
                        list: state.list.map(item => {
                            if (item.key === state.tempId) {
                                return {key: item.key, title: state.title, note: state.note};
                            }
                            return item;
                        }),
                        tempId: 0
                    }
                }
            }
            else if (!state.title && !state.note) {
                return {
                    ...state,
                    list: [...state.list, {key: state.idNum++, title: 'Empty', note: 'Empty'}],
                    idNum: state.idNum++,
                    firstScreen: true
                }
            }
            else if (!state.title && state.note) {
                return {
                    ...state,
                    list: [...state.list, {key: state.idNum++, title: 'No title', note: state.note}],
                    idNum: state.idNum++,
                    firstScreen: true,
                    note: '',
                    title: ''
                }
            }
            else if (state.title && !state.note) {
                return {
                    ...state,
                    list: [...state.list, {key: state.idNum++, title: state.title, note: 'Empty'}],
                    idNum: state.idNum++,
                    firstScreen: true,
                    note: '',
                    title: '',
                }
            }
            /*else if (state.edit) {
                return {
                    ...state,
                    firstScreen: true,
                    title: '',
                    note: '',
                    edit: false,
                    list: state.list.map(item => {
                        if (item.key === state.tempId) {
                            return {key: item.key, title: state.title, note: state.note};
                        }
                        return item;
                    }),
                    tempId: 0
                }
            }*/
            else {
                return {
                    ...state,
                    list: [...state.list, {key: state.idNum++, title: state.title, note: state.note}],
                    idNum: state.idNum++,
                    firstScreen: true,
                    note: '',
                    title: '',
                }
            }
        }
        case 'EDIT': {
            return {
                ...state,
                firstScreen: false,
                title: action.title,
                note: action.note,
                edit: true,
                tempId: action.id
            }
        }
        case 'DELETE': {
            return {
                ...state,
                firstScreen: true,
                edit: false,
                tempId: 0,
                list: state.list.filter(item => item.key !== state.tempId),
                note: '',
                title: '',
            }
        }
        case 'SEARCH': {
            return {
                ...state,
                search: true,
            }
        }
        case 'INPUT_SEARCH': {
            return {
                ...state,
                searchField: action.payload,
                }
        }
        case 'SEARCH_DONE': {
            return {
                ...state,
                search: false,
                searchField: '',
            }
        }
    }
}