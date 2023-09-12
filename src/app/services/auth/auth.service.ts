import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',

})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  googleAuth() {
    return this.afAuth.signInWithPopup(
      new GoogleAuthProvider
    ).then((result) => {
      console.log(result);
    });
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
      console.log(
        'Successfully logged in!',
        result
      );
    }).catch((error) => {
      console.log(error);
    });
  }
}