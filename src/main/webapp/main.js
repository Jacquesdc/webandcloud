

const store = {
    user : {},
    id_token: "",
};

const update = () => {
    $("#store-value").text(JSON.stringify(store));
}
const signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        store.user = {};
        update();
    });
}
const onSignIn = (googleUser) => {
    store.user = googleUser.getBasicProfile();
    store.id_token = googleUser.getAuthResponse().id_token;
    update();
}

update();
