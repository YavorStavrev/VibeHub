<<<<<<< HEAD
=======
// // import { ServerSidebar } from "@/components/server/server-sidebar";
// // import { currentProfile } from "@/lib/current-profile";
// // import { db } from "@/lib/db";
// // import { RedirectToSignIn } from "@clerk/nextjs";
// // import { redirect } from "next/navigation";

// // const ServerIdLayout = async ({
// //     children,
// //     params,
// // }: {
// //     children: React.ReactNode;
// //     params: { serverId: string };
// // }) => {
// //     const profile = await currentProfile();

// //     if (!profile) {
// //         return <RedirectToSignIn />;
// //     }

// //     const server = await db.server.findFirst({
// //         where: {
// //             id: params.serverId,
// //             members: {
// //                 some: {
// //                     profileId: profile.id
// //                 }
// //             }
// //         }
// //     });

// //     if (!server) {
// //         return redirect("/");
// //     }

// //     return (
// //         <div className="h-full">
// //             <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
// //                 <ServerSidebar serverId={params.serverId} />
// //             </div>
// //             <main className="h-full md:pl-60">
// //                 {children}
// //             </main>
// //         </div>
// //     );
// // }

// // export default ServerIdLayout;

>>>>>>> main
// import { ServerSidebar } from "@/components/server/server-sidebar";
// import { currentProfile } from "@/lib/current-profile";
// import { db } from "@/lib/db";
// import { RedirectToSignIn } from "@clerk/nextjs";
// import { redirect } from "next/navigation";
<<<<<<< HEAD

// const ServerIdLayout = async ({
//     children,
//     params,
// }: {
//     children: React.ReactNode;
//     params: { serverId: string };
// }) => {
=======
// import { ServerWithMembersWithProfiles } from "@/types";

// const ServerIdLayout = async ({
//     children,
//     params: paramsPromise,
// }: {
//     children: React.ReactNode;
//     params: Promise<{ serverId: string }>;
// }) => {
//     // Unwrap the params promise
//     const params = await paramsPromise;

>>>>>>> main
//     const profile = await currentProfile();

//     if (!profile) {
//         return <RedirectToSignIn />;
//     }

<<<<<<< HEAD
//     const server = await db.server.findFirst({
//         where: {
//             id: params.serverId,
//             members: {
//                 some: {
//                     profileId: profile.id
//                 }
//             }
//         }
=======
//     // Fetch the server with its channels and members
//     const server: ServerWithMembersWithProfiles | null = await db.server.findFirst({
//         where: {
//             id: params.serverId,
//             members: {
//                 some: { profileId: profile.id },
//             },
//         },
//         include: {
//             channels: { orderBy: { createdAt: "asc" } },
//             members: { include: { profile: true }, orderBy: { role: "asc" } },
//         },
>>>>>>> main
//     });

//     if (!server) {
//         return redirect("/");
//     }

//     return (
//         <div className="h-full">
//             <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
<<<<<<< HEAD
//                 <ServerSidebar serverId={params.serverId} />
=======
//                 {/* Key ensures remount when serverId changes */}
//                 <ServerSidebar key={params.serverId} server={server} profileId={profile.id} />
>>>>>>> main
//             </div>
//             <main className="h-full md:pl-60">
//                 {children}
//             </main>
//         </div>
//     );
<<<<<<< HEAD
// }
=======
// };
>>>>>>> main

// export default ServerIdLayout;

import { ServerSidebar } from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
<<<<<<< HEAD
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ServerWithMembersWithProfiles } from "@/types";

const ServerIdLayout = async ({
    children,
    params: paramsPromise,
}: {
    children: React.ReactNode;
    params: Promise<{ serverId: string }>;
}) => {
    // Unwrap the params promise
    const params = await paramsPromise;

    const profile = await currentProfile();

    if (!profile) {
        return <RedirectToSignIn />;
    }

    // Fetch the server with its channels and members
    const server: ServerWithMembersWithProfiles | null = await db.server.findFirst({
        where: {
            id: params.serverId,
            members: {
                some: { profileId: profile.id },
            },
        },
        include: {
            channels: { orderBy: { createdAt: "asc" } },
            members: { include: { profile: true }, orderBy: { role: "asc" } },
        },
    });

    if (!server) {
        return redirect("/");
    }
=======
import { RedirectToSignIn, RedirectToSignUp } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { serverId: string };
}) => {

    const profile = await currentProfile();
    if (!profile) return RedirectToSignIn;// or <RedirectToSignIn/>
    const { serverId } = await params;
    const server = await db.server.findFirst({//removed findUnique; id is already unique
        where: {
            id: serverId,
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (!server) return redirect("/");
>>>>>>> main

    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
<<<<<<< HEAD
                {/* Key ensures remount when serverId changes */}
                <ServerSidebar key={params.serverId} server={server} profileId={profile.id} />
=======
                <ServerSidebar serverId={serverId} />
>>>>>>> main
            </div>
            <main className="h-full md:pl-60">
                {children}
            </main>
        </div>
    );
<<<<<<< HEAD
};

export default ServerIdLayout;
=======
}

export default ServerIdLayout;
>>>>>>> main
