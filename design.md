# Anbudan Miththiran Mobile App - Design Plan

## Overview
A native mobile application that provides seamless access to Tamil literature content (articles, poems, stories, videos, podcasts, and books) from the Anbudan Miththiran website. The app mirrors the website's functionality while offering a native mobile experience optimized for one-handed usage and portrait orientation.

## Screen List

1. **Home Screen** - Main entry point with featured content and quick navigation
2. **Articles Screen** - Browse and search Tamil articles
3. **Poems Screen** - Browse and search Tamil poems
4. **Stories Screen** - Browse and search Tamil stories
5. **Videos Screen** - Browse and play video content
6. **Podcasts Screen** - Browse and play podcast episodes
7. **Books Screen** - Browse and access book content
8. **About Screen** - Information about Anbudan Miththiran
9. **Content Detail Screen** - Full view of individual articles, poems, stories, etc.
10. **Search Results Screen** - Display search results across all content types

## Primary Content and Functionality

### Home Screen
- **Content**: Featured/trending content carousel, quick category links, search bar
- **Functionality**: Navigate to different content categories, perform global search, view featured items

### Category Screens (Articles, Poems, Stories, Videos, Podcasts, Books)
- **Content**: List of items in the category with title, preview/thumbnail, metadata
- **Functionality**: Scroll through list, tap to view details, search within category, filter options

### Content Detail Screen
- **Content**: Full content display (text for articles/poems/stories, video player for videos, audio player for podcasts)
- **Functionality**: Read/view/listen to content, share content, bookmark/favorite, navigate to related content

### Search Results Screen
- **Content**: Filtered results based on search query, category filters
- **Functionality**: Display results, filter by category, sort results

### About Screen
- **Content**: Information about the website and its mission
- **Functionality**: View information, contact details, social links

## Key User Flows

### Flow 1: Browse and Read Content
1. User opens app → Home screen displays
2. User taps on "Articles" category
3. Articles list loads with multiple items
4. User taps on an article
5. Article detail screen opens with full content
6. User can scroll through content, share, or go back

### Flow 2: Search Content
1. User taps search bar on any screen
2. Search input screen appears
3. User types search query in Tamil or English
4. Search results display across categories
5. User taps on a result to view details

### Flow 3: Access Different Content Types
1. Tab bar at bottom provides quick access to all categories
2. User can switch between Articles, Poems, Stories, Videos, Podcasts, Books
3. Each category maintains its own scroll position and state

## Color Scheme

- **Primary Color**: #0a7ea4 (Teal blue - matches website branding)
- **Background**: #ffffff (Light) / #151718 (Dark)
- **Surface**: #f5f5f5 (Light) / #1e2022 (Dark)
- **Foreground**: #11181C (Light) / #ECEDEE (Dark)
- **Accent/Muted**: #687076 (Light) / #9BA1A6 (Dark)
- **Border**: #E5E7EB (Light) / #334155 (Dark)

## Navigation Structure

- **Tab Bar Navigation** (Bottom): Home, Articles, Poems, Stories, Videos, Podcasts, Books, More (About)
- **Search**: Accessible from header on all screens
- **Detail Navigation**: Stack-based navigation for content detail screens

## Technical Implementation Notes

- Use WebView to embed website content where appropriate
- Implement native search functionality with local caching
- Support both Tamil and English search
- Responsive design for portrait orientation (9:16)
- One-handed usage priority (large tap targets, content within thumb reach)
- Dark mode support
