<<<<<<< HEAD
import { Channel, Member, Profile, Server } from "@prisma/client"

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[];
    channels: Channel[];
=======
import { Member, Profile, Server } from "./lib/generated/prisma/client"

export type ServerWithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile})[];
>>>>>>> main
};