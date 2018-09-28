let initialState = {};

function dataInfo( state = initialState, action ){
    switch( action.type ) {
        case "UPDATE_DATA":
            return Object.assign( action.payload );

        default: return state;
    }
}

export default dataInfo;