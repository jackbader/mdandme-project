import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ title: "Posts" }} name="index" />
    </Stack>
  );
}
