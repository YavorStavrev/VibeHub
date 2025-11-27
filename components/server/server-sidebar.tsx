<<<<<<< HEAD
// import { currentProfile } from "@/lib/current-profile";
// import { db } from "@/lib/db";
// import { ChannelType } from "@prisma/client";
// import { redirect } from "next/navigation";
// import { ServerHeader } from "./server-header";

// interface ServerSidebarProps {
//     serverId: string;
// }

// export const ServerSidebar = async ({
//     serverId,
// }: ServerSidebarProps) => {
//     const profile = await currentProfile();

//     if (!profile) {
//         return redirect("/");
//     }

//     const server = await db.server.findFirst({
//         where: {
//             id: serverId,
//         },
//         include: {
//             channels: {
//                 orderBy: {
//                     createdAt: "asc",
//                 },
//             },
//             members: {
//                 include: {
//                     profile: true,
//                 },
//                 orderBy: {
//                     role: "asc",
//                 }
//             }
//         }
//     });

//     const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT)
//     const audioChannels = server?.channels.filter((channel) => channel.type === ChannelType.AUDIO)
//     const videoChannels = server?.channels.filter((channel) => channel.type === ChannelType.VIDEO)
//     const members = server?.members.filter((member) => member.profileId !== profile.id)

//     if (!server) {
//         return redirect("/");
//     }

//     const role = server.members.find((member) => member.profileId === profile.id)?.role;
=======
// // import { currentProfile } from "@/lib/current-profile";
// // import { db } from "@/lib/db";
// // import { ChannelType } from "@prisma/client";
// // import { redirect } from "next/navigation";
// // import { ServerHeader } from "./server-header";

// // interface ServerSidebarProps {
// //     serverId: string;
// // }

// // export const ServerSidebar = async ({
// //     serverId,
// // }: ServerSidebarProps) => {
// //     const profile = await currentProfile();

// //     if (!profile) {
// //         return redirect("/");
// //     }

// //     const server = await db.server.findFirst({
// //         where: {
// //             id: serverId,
// //         },
// //         include: {
// //             channels: {
// //                 orderBy: {
// //                     createdAt: "asc",
// //                 },
// //             },
// //             members: {
// //                 include: {
// //                     profile: true,
// //                 },
// //                 orderBy: {
// //                     role: "asc",
// //                 }
// //             }
// //         }
// //     });

// //     const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT)
// //     const audioChannels = server?.channels.filter((channel) => channel.type === ChannelType.AUDIO)
// //     const videoChannels = server?.channels.filter((channel) => channel.type === ChannelType.VIDEO)
// //     const members = server?.members.filter((member) => member.profileId !== profile.id)

// //     if (!server) {
// //         return redirect("/");
// //     }

// //     const role = server.members.find((member) => member.profileId === profile.id)?.role;

// //     return (
// //         <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
// //             <ServerHeader 
// //                 server={server}
// //                 role={role}
// //             />
// //         </div>
// //     )
// // }

// import { ServerWithMembersWithProfiles } from "@/types";
// import { MemberRole, ChannelType } from "@prisma/client";
// import { ServerHeader } from "./server-header";

// interface ServerSidebarProps {
//     server: ServerWithMembersWithProfiles;
//     profileId: string;
// }

// export const ServerSidebar = ({ server, profileId }: ServerSidebarProps) => {
//     // Filter channels by type
//     const textChannels = server?.channels.filter(c => c.type === ChannelType.TEXT);
//     const audioChannels = server?.channels.filter(c => c.type === ChannelType.AUDIO);
//     const videoChannels = server?.channels.filter(c => c.type === ChannelType.VIDEO);

//     // Filter out current user from members list
//     const members = server.members.filter(member => member.profileId !== profileId);

//     // Get current user's role
//     const role = server.members.find(m => m.profileId === profileId)?.role;
>>>>>>> main

//     return (
//         <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
//             <ServerHeader 
//                 server={server}
//                 role={role}
//             />
<<<<<<< HEAD
//         </div>
//     )
// }

import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole, ChannelType } from "@prisma/client";
import { ServerHeader } from "./server-header";

interface ServerSidebarProps {
    server: ServerWithMembersWithProfiles;
    profileId: string;
}

export const ServerSidebar = ({ server, profileId }: ServerSidebarProps) => {
    // Filter channels by type
    const textChannels = server?.channels.filter(c => c.type === ChannelType.TEXT);
    const audioChannels = server?.channels.filter(c => c.type === ChannelType.AUDIO);
    const videoChannels = server?.channels.filter(c => c.type === ChannelType.VIDEO);

    // Filter out current user from members list
    const members = server.members.filter(member => member.profileId !== profileId);

    // Get current user's role
    const role = server.members.find(m => m.profileId === profileId)?.role;

    return (
        <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
            <ServerHeader 
                server={server}
                role={role}
            />
            {/* You can add the channels and members rendering below */}
        </div>
    );
};
=======
//             {/* You can add the channels and members rendering below */}
//         </div>
//     );
// };

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ChannelType } from "@/lib/generated/prisma/enums";
import { redirect } from "next/navigation";
import { ServerHeader } from "./server-header";

interface ServerSidebarProps {
    serverId: string;
}

export const ServerSidebar = async ({
    serverId
}: ServerSidebarProps) => {

    const profile = await currentProfile();

    if (!profile) return redirect("/");

    const server = await db.server.findFirst({//removed findUnique; id is already unique
        where: {
            id: serverId,
        },
        include: {
            channels: {
                orderBy: {
                    createdAt: "asc",
                },
            },
            members: {
                include: {
                    profile: true,
                },
                orderBy: {
                    role: "asc",
                },
            },
        },
    });

    if (!server) return redirect("/");


    const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT);
    const audioChannels = server?.channels.filter((channel) => channel.type === ChannelType.AUDIO);
    const videoChannels = server?.channels.filter((channel) => channel.type === ChannelType.VIDEO);

    const members = server?.members.filter((member) => member.profileId !== profile.id);

    const role = server.members.find((member) => member.profileId === profile.id)?.role;



    return (
        <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
           <ServerHeader server={server} role={role}/> 
        </div>
    );
}
>>>>>>> main
