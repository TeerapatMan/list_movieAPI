const ck_id = ( state = [], action ) => {
    switch (action.type){
        case "ID":
        return action.responseid || null
        default:
        return state
    }
}

export default ck_id;