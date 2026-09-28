import {createNavigationContainerRef} from '@react-navigation/native';

/* ============================================================
   NAVIGATION SERVICE
   Lets any screen jump between the big sections of the app
   (Auth <-> Main) and clears the history so the Android back
   button can't return to Login after logging in, or vice versa.
   ============================================================ */

export const navigationRef = createNavigationContainerRef();

// resetTo('Main')  -> after login / OTP / register
// resetTo('Auth')  -> after logout
export const resetTo = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name, params}],
    });
  }
};
