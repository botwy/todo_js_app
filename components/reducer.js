const reducer = (state, action) =>
{
    const switcher = {
        INIT_DATA:(state, action) => Object.assign({}, {data: action.payload}),
        ADD_TODO: (state, action) => Object.assign({}, {data: [...state.data, ...[action.payload]]}),
    }

    return ((switcher[action.type]&&switcher[action.type](state, action))||state);
}

export default reducer;