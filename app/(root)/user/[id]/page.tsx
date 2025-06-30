import { auth } from "@/auth";
import { StartupCardSkeleton } from "@/components/StartupCard";
import UserStartups from "@/components/UserStartups";
import { client } from "@/sanity/lib/client";
import { getAuthorById } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const experimental_ppr = true;

const Page = async({ params } : { params: Promise<{id: string}>}) => {

    const id = (await params).id;
    const session = await auth();

    const user = await client.fetch(getAuthorById, { id })
    if(!user) return notFound();

    return(
        <>
            <section className="profile_container">
                <div className="profile_card animate-in slide-in-from-left duration-300">
                    <h2 className="profile_card_name">
                        {user.name}
                        {/* <h3 className="text-24-black uppercase text-center line-clamp-1">
                            {user.name}
                        </h3> */}
                    </h2>
                    <Image
                        src={user.image}
                        alt={user.name}
                        width={220}
                        height={220}
                        className="profile_image"
                    />
                    <p className="profile_card_username">
                        @{user?.username}
                    </p>
                    <p className="profile_card_bio">
                        {user?.bio}
                    </p>
                    
                </div>
                <div className="flex-1 flex flex-col gap-5 lg:-mt-5">
                    <p className="text-white text-30-extrabold">
                        {session?.id === id ? "Your" : "All"} Startups
                    </p>
                    <ul className="card_grid-sm">
                        <Suspense fallback={<StartupCardSkeleton/>}>
                            <UserStartups id={id}/>
                        </Suspense>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Page;