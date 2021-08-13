import firebase from './firebaseConfig'

export const GitHubProvider = new firebase.auth.GithubAuthProvider();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();