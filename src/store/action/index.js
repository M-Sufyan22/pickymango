import firebase from "../../config/firebase";

const check_current_user = () => {
    return (dispatch) => {

        var user = firebase.auth().currentUser;
        if (user) {

            let dbRef = firebase.database().ref("users");
            dbRef.child(user.uid).get().then((snapshot) => {
                if (snapshot.exists()) {
                    dispatch({ type: "currentUser", payload: snapshot.val() });
                    set_user_cart();
                }
            })
        }

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let dbRef = firebase.database().ref("users");
                dbRef.child(user.uid).get().then((snapshot) => {
                    if (snapshot.exists()) {
                        dispatch({ type: "currentUser", payload: snapshot.val() });
                        set_user_cart();
                    }
                })

            } else {
                dispatch({ type: "currentUser", payload: {} });
            }
        })
    }
}

export { check_current_user };