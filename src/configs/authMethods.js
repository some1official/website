import firebase from "firebase/app";
import "firebase/auth";

export const GitHubProvider = new firebase.auth.GithubAuthProvider();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
