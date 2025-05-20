import { Stack } from 'expo-router';
import { useFrameworkReady } from '../hooks/useFrameworkReady';

export default function RootLayout() {
  const { isReady } = useFrameworkReady();

  if (!isReady) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
