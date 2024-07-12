import { PortalHost, PortalProvider } from '@gorhom/portal';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <PortalProvider>
        <PortalHost name="mainPortalHost" />
        <Stack>
          <Stack.Screen options={{ title: 'Recent Posts' }} name="index" />
        </Stack>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
