import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

const db = getFirestore(app);

export async function getContent(courseId, contentId) {
  const courseQuery = query(
    collection(db, "Courses"),
    where("url", "==", courseId)
  );
  const courseSnapshot = await getDocs(courseQuery);
  const contentQuery = query(
    collection(db, "Courses", courseSnapshot.docs[0].id, "Content"),
    where("url", "==", contentId)
  );
  const contentSnapshot = await getDocs(contentQuery);
  return contentSnapshot.docs[0].data();
}

export async function getPaths() {
  const courses = await getDocs(collection(db, "Courses"));
  const paths = await Promise.all(
    courses.docs.map(async (course) => {
      const content = await getDocs(
        collection(db, "Courses", course.id, "Content")
      );
      return {
        courseId: course.data().url,
        contentId: content.docs.map((doc) => doc.data().url),
      };
    })
  );
  return paths;
}

export async function getCourses(courseId) {
  const courseQuery = query(
    collection(db, "Courses"),
    where("url", "==", courseId)
  );
  const courseSnapshot = await getDocs(courseQuery);
  const contentQuery = query(
    collection(db, "Courses", courseSnapshot.docs[0].id, "Content")
  );
  const contentSnapshot = await getDocs(contentQuery);
  return contentSnapshot.docs.map((doc) => doc.data());
}
