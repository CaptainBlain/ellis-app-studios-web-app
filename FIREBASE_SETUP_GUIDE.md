# Firebase Setup Guide

## Understanding Firebase Configuration

Firebase requires **TWO different configurations**:

### 1. Client-Side Config (Public - for web app)
This is SAFE to expose publicly. These values go in `.env.local`:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- etc.

### 2. Service Account (Private - for server operations)
This is SECRET and should NEVER be committed to git:
- Located in `config/firebase-service-account.json`
- Used for server-side admin operations
- Already set up! ✅

---

## How to Get Client-Side Config

### Step 1: Go to Firebase Console
1. Open https://console.firebase.google.com/
2. Select your project: `ellis-app-studios-web-app`

### Step 2: Get Web App Config
1. Click on the **gear icon** (⚙️) → **Project settings**
2. Scroll down to **"Your apps"**
3. If you don't have a web app yet:
   - Click **"Add app"** → Select **Web** (</> icon)
   - Register app with nickname: "Ellis App Dev Website"
   - You DON'T need Firebase Hosting for now
4. You'll see a config object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Step 3: Add to .env.local

Copy these values to your `.env.local`:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

---

## Firebase Services to Enable

### 1. Authentication
1. Go to **Authentication** → **Get started**
2. Enable **Email/Password** provider
3. Create your admin user:
   - Email: `blain@ellisappdev.co.uk`
   - Password: (choose a strong password)

### 2. Firestore Database
1. Go to **Firestore Database** → **Create database**
2. Start in **production mode** (we'll add rules)
3. Choose a location close to your users (e.g., `europe-west2` for UK)

### 3. Storage
1. Go to **Storage** → **Get started**
2. Start in **production mode**
3. Same location as Firestore

---

## Security Rules

### Firestore Rules
Go to **Firestore Database** → **Rules** and paste:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function to check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Blog posts - public read, admin write
    match /posts/{postId} {
      allow read: if resource.data.status == 'published' || isAuthenticated();
      allow write: if isAuthenticated();
    }
    
    // Projects - public read, admin write
    match /projects/{projectId} {
      allow read: if true;
      allow write: if isAuthenticated();
    }
    
    // Contacts - admin only
    match /contacts/{contactId} {
      allow read, write: if isAuthenticated();
      allow create: if true; // Allow public to submit
    }
    
    // Settings - public read for some, admin write
    match /settings/{settingId} {
      allow read: if true;
      allow write: if isAuthenticated();
    }
  }
}
```

### Storage Rules
Go to **Storage** → **Rules** and paste:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Blog images
    match /blog-images/{imageId} {
      allow read: if true;
      allow write: if request.auth != null 
                   && request.resource.size < 5 * 1024 * 1024  // 5MB max
                   && request.resource.contentType.matches('image/.*');
    }
    
    // Project images
    match /project-images/{imageId} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.resource.size < 10 * 1024 * 1024  // 10MB max
                   && request.resource.contentType.matches('image/.*');
    }
    
    // Media library
    match /media/{imageId} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.resource.size < 10 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

---

## What's in .env.local (Complete)

Your `.env.local` should have:

```bash
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Firebase CLIENT config (from Firebase Console → Project Settings)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

# Firebase ADMIN config (points to service account file)
FIREBASE_SERVICE_ACCOUNT_PATH=./config/firebase-service-account.json

# NextAuth (generate secret with: openssl rand -base64 32)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-here

# OpenAI (you have this ✅)
OPENAI_API_KEY=sk-...

# Contact email
CONTACT_EMAIL=blain@ellisappdev.co.uk
```

---

## Verify Setup

Once you've added the Firebase client config:

```bash
# Restart your dev server
npm run dev
```

Then try:
1. Go to http://localhost:3000/admin/login
2. Login with your Firebase admin user
3. You should see the admin dashboard!

---

## Troubleshooting

### Error: "Firebase app not initialized"
- Check all `NEXT_PUBLIC_FIREBASE_*` vars are set in `.env.local`
- Restart dev server after changing `.env.local`

### Error: "Invalid API key"
- Double-check the API key from Firebase Console
- Make sure there are no extra spaces

### Can't login
- Verify you created the admin user in Firebase Console → Authentication
- Check email and password are correct
- Make sure Email/Password provider is enabled

---

## Current Status

✅ Service account configured  
✅ .gitignore updated  
⏳ Need to add client-side Firebase config  
⏳ Need to enable Firebase services  
⏳ Need to create admin user  

**Next:** Follow steps above to complete Firebase setup!

