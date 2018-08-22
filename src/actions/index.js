//Actions are Object 
// {
//     type: THE_ACTION_TYPE,
//     payload: payload
// }

//Action Creators are functions that return an Action
function actionCreator(payload) {
    return {
        type: ACTION_TYPE,
        payload: payload
    }
}