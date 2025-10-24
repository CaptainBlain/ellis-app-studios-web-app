import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import { getAuth } from "firebase-admin/auth";
import * as path from "path";

let app: App;

// Initialize Firebase Admin
if (!getApps().length) {
  try {
    // Try to use service account file
    const serviceAccountPath = path.join(
      process.cwd(),
      "config",
      "firebase-service-account.json"
    );

    app = initializeApp({
      credential: cert(serviceAccountPath),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });

    console.log("✅ Firebase Admin initialized with service account");
  } catch (error) {
    console.error("❌ Error initializing Firebase Admin:", error);
    console.log("📋 Make sure config/firebase-service-account.json exists");
    
    // Fallback: initialize without credentials (will fail for admin operations)
    // This allows the app to at least start
    app = initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  }
} else {
  app = getApps()[0];
}

// Export services
export const adminDb = getFirestore(app);
export const adminStorage = getStorage(app);
export const adminAuth = getAuth(app);

export default app;

