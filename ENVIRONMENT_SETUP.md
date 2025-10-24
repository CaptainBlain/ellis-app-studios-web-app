# Environment Setup Instructions

Create a `.env.local` file in the root directory with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Firebase Configuration
# Get these from Firebase Console: https://console.firebase.google.com/
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32

# Admin Credentials (for initial setup)
ADMIN_EMAIL=blain@ellisappdev.co.uk
ADMIN_PASSWORD=change-this-strong-password

# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-api-key-here

# Email Service (Optional)
RESEND_API_KEY=your-resend-api-key
CONTACT_EMAIL=blain@ellisappdev.co.uk

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Setup Steps:

### 1. Generate NextAuth Secret
```bash
openssl rand -base64 32
```

### 2. Firebase Setup
1. Go to https://console.firebase.google.com/
2. Create a new project or select existing
3. Enable Email/Password authentication
4. Enable Firestore Database
5. Enable Storage
6. Copy your config values to `.env.local`

### 3. OpenAI Setup
1. Go to https://platform.openai.com/
2. Create an API key
3. Add to `.env.local`

### 4. Create `.env.local` file
```bash
cp ENVIRONMENT_SETUP.md .env.local
# Then edit .env.local with your actual values
```

