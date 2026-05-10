# Anbudan Miththiran Mobile App - Documentation

## Overview

The Anbudan Miththiran mobile app is a native iOS and Android application that provides seamless access to Tamil literature content from your website (https://www.anbumiththiran.in). The app integrates your website content using WebView technology, allowing users to browse articles, poems, stories, videos, podcasts, and books directly from their mobile devices.

## App Features

### Current Features

- **WebView Integration**: The app displays your website content in a native mobile interface
- **Website Access**: Users can tap "Visit Website" to access the full website
- **Cross-Platform Support**: Works on both iOS and Android devices
- **Custom Branding**: Features your custom app logo and color scheme
- **Dark Mode Support**: Automatically adapts to device theme preferences

### Technical Stack

- **Framework**: React Native with Expo SDK 54
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Web Integration**: react-native-webview
- **State Management**: React Context + AsyncStorage
- **Navigation**: Expo Router

## Installation & Setup

### Prerequisites

- Node.js 18+ and pnpm package manager
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development on macOS)

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run on specific platform
pnpm ios      # iOS simulator
pnpm android  # Android emulator
```

### Project Structure

```
anbudan-miththiran-app/
├── app/                    # Expo Router pages and layouts
│   └── (tabs)/
│       ├── _layout.tsx     # Tab navigation configuration
│       └── index.tsx       # Home screen with WebView
├── components/             # Reusable React components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and helpers
├── assets/                 # App icons and images
├── app.config.ts          # Expo configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## Building the APK

### Automatic Build (Recommended)

1. Click the **Publish** button in the Management UI (top-right corner)
2. Wait for the build process to complete (typically 5-10 minutes)
3. Download the APK file from the Management UI
4. Transfer the APK to your Android device and install

### Manual Build (Advanced)

```bash
# Build APK locally
eas build --platform android --local

# Build for both platforms
eas build --platform all --local
```

## Installing the APK

### On Android Device

1. Enable "Unknown Sources" in device settings
2. Transfer the APK file to your device
3. Open the file manager and tap the APK file
4. Follow the installation prompts
5. Launch the app from your home screen

### Via USB

```bash
# Install directly to connected device
adb install path/to/app.apk
```

## Configuration

### App Branding

Edit `app.config.ts` to customize:

```typescript
const env = {
  appName: "Anbudan Miththiran",      // Display name
  appSlug: "anbudan-miththiran-app",  // Unique identifier
  logoUrl: "https://...",              // S3 URL of logo
  scheme: "manus...",                  // Deep link scheme
};
```

### Theme Colors

Customize colors in `theme.config.js`:

```javascript
const themeColors = {
  primary: { light: '#0a7ea4', dark: '#0a7ea4' },
  background: { light: '#ffffff', dark: '#151718' },
  // ... other colors
};
```

### Website URL

To change the website being displayed, edit `app/(tabs)/index.tsx`:

```typescript
<WebView
  source={{ uri: "https://www.anbumiththiran.in" }}
  // ... other props
/>
```

## Customization Guide

### Adding New Screens

1. Create a new file in `app/(tabs)/` directory
2. Import and use `ScreenContainer` component
3. Add tab configuration in `app/(tabs)/_layout.tsx`

### Styling Components

Use Tailwind CSS classes directly:

```tsx
<View className="flex-1 items-center justify-center p-4">
  <Text className="text-2xl font-bold text-foreground">
    Hello World
  </Text>
</View>
```

### Adding Navigation

The app uses Expo Router for navigation. Add new routes by creating files in the `app/` directory following the file-based routing convention.

## Troubleshooting

### WebView Not Loading

- Ensure internet connection is active
- Check if the website URL is accessible
- Verify firewall/proxy settings aren't blocking the request

### Build Failures

- Clear node_modules: `rm -rf node_modules && pnpm install`
- Clear Expo cache: `pnpm dev --clear`
- Check TypeScript errors: `pnpm check`

### Performance Issues

- Reduce image sizes in assets
- Minimize JavaScript bundle size
- Use FlatList for long lists instead of ScrollView

## Testing

### Run Tests

```bash
pnpm test
```

### Manual Testing Checklist

- [ ] App launches without errors
- [ ] Website loads in WebView
- [ ] "Visit Website" button works
- [ ] Navigation functions properly
- [ ] Dark mode toggle works
- [ ] App responds to orientation changes

## Distribution

### App Store Submission (iOS)

1. Build for iOS: `eas build --platform ios`
2. Create Apple Developer account
3. Submit to App Store via Xcode or Transporter

### Google Play Store (Android)

1. Build signed APK: `eas build --platform android --release`
2. Create Google Play Developer account
3. Upload APK and complete store listing
4. Submit for review

## Support & Maintenance

### Regular Updates

- Update dependencies: `pnpm update`
- Check for security vulnerabilities: `pnpm audit`
- Test on latest device OS versions

### Monitoring

- Monitor app crashes via Expo dashboard
- Track user engagement metrics
- Collect user feedback for improvements

## Future Enhancements

Consider adding these features in future versions:

1. **Offline Support**: Cache content for offline browsing
2. **Search Functionality**: Add native search across content
3. **Bookmarks**: Allow users to save favorite articles
4. **Push Notifications**: Notify users of new content
5. **Dark Mode Toggle**: Manual dark/light mode switch
6. **Multiple Languages**: Support for Tamil and English interfaces
7. **Social Sharing**: Share content on social media
8. **User Accounts**: Optional user authentication

## License

This app is built for Anbudan Miththiran. All content rights belong to the website owner.

## Contact & Support

For issues or feature requests, contact the development team or visit the Manus documentation at https://docs.manus.im.

---

**Last Updated**: May 10, 2026  
**App Version**: 1.0.0  
**Expo SDK**: 54  
**React Native**: 0.81.5
