# Netflix GPT

- Create React App
- Configured Tailwind CSS
- Routing
- Header
- Login
- Sign In/ Sign Up form
- Form validation
- Firebase setup
- Sign In/Sign Up authentication logic (sign in user api)
- Created redux store with user slice
- Implemented sign out
- update profile
- BugFix: Sign up user display name and profile picture update
- BugFix - if user not logged in Redirect /browse to Login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Registered TMDB API & get access token
- Get data from TMDB now playing movies list
- Custom hooks for now playing movies
- Create moviesSlice
- Update store with movies data
- Planning for Main container and secondary container
- Fetch data for Trailer video
- Update store with Trailer data
- Embedded background youtube video and made it autoplay, mute and loop
- CSS classes for Main container
- Built Secondary container
- Built Movie List
- Built Movie Card
- Built different movie lists (Now playing, Popular, Top rated etc)
- Created GPT Search page & GPT Search Bar
- Added Multi language feature for GPT page
- Added Gemini AI integration
- Gemini AI movie results display
- Included Memoization in API calls
- Masked API keys

# Features:

-Login/Sign Up page - Sign In/ Sign Up Form - redirect to browse page

- Browse page (after authentication)
  - Header
  - Main movie
    - Trailer in background
    - Title & Description
    - Movie Suggestions
      - Movies List \* N (Horizontally scrollable)
- Netflix GPT
  - Search Bar
  - Movie Suggestions


# Responsive screens
In tailwind CSS,
default - By default the styles are applied for mobile
sm - applies for tabs (screens which are bigger than mobile phones)
md - applies for desktop (screens which are bigger than medium screens i.e. tabs)