import firebase from '../../configs/firebaseConfig'

const givePremium = () => {
    const userId = firebase.auth().currentUser.uid;
    // var ref = firebase.database().ref("users/" + userId)
    // var query = ref.orderByChild('subscription').equalTo('premium');

    // query.once('value', function(snapshot) {
    //     console.log(snapshot.exists());
    // })

    if(firebase.database().ref("users/").get(userId) != null) {
        console.log("yes");
    }
    else {
        console.log("nope");
    }
};

export default givePremium;