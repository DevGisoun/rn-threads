# Threads 클론 앱

## 참고

https://www.youtube.com/live/uinfkuD76Fw?feature=shared&t=9122
https://www.youtube.com/watch?v=TA7vQYbr7kQ&ab_channel=notJust%E2%80%A4dev

## 프로젝트 생성

```bash
pnpm create expo-app --template blank-typescript <project-name>
```

## 필수 라이브러리 설치

### Expo Router

```bash
pnpm expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

### Nativewind, Lucide Icons

```bash
pnpm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0 lucide-react-native
pnpm install tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11 -D
pnpm tailwindcss init
```

### package.json 의존성 설치

```bash
pnpm install
```
