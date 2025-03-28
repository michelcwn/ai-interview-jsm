import { auth, db } from '@/firebase/admin';

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  const interviews = await db
    .collection('interviews')
    .where('userId', '==', userId)
    .orderBy('createdAt', 'desc')
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;

  const interviewsSnapshot = await db
    .collection('interviews')
    .where('finalized', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(limit)
    .get();

  const interviews: Interview[] = interviewsSnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() } as Interview)) // Typage ici
    .filter((interview) => interview.userId !== userId); // Filtre manuel

  return interviews;
}

export async function getInterviewsById(id: string): Promise<Interview | null> {
  const interviews = await db.collection('interviews').doc(id).get();

  return interviews.data() as Interview | null;
}
