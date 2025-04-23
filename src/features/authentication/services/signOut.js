export function signOut() {
  return auth()
    .signOut()
    .then(() => console.log("User signed out!"));
}
