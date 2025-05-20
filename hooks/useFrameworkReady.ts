import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export function useFrameworkReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
    SplashScreen.hideAsync();
  }, []);

  return { isReady };
}
