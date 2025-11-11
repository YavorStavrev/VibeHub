// import { auth } from "@clerk/nextjs/server";

// import { db } from "./db";

// export const currentProfile = async () => {
//     const userId  = auth();

//     if(!userId) {
//         return null;
//     }

//     const profile = await db.profile.findUnique({
//         where: {
//             userId
//         }
//     });

//     return profile;
// }

import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export const currentProfile = async () => {
  // Await auth() because it returns a Promise
  const authData = await auth(); // <- key fix

  if (!authData || !authData.userId) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: { userId: authData.userId },
  });

  return profile;
};



