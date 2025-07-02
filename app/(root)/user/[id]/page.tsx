import { auth } from "@/auth";
import { StartupCardSkeleton } from "@/components/StartupCard";
import UserStartups from "@/components/UserStartups";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { getAuthorById } from "@/sanity/lib/queries";

export const experimental_ppr = true;

export async function generateMetadata(
    {params} : {params: Promise<{id: string}>},
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = (await params).id;
    const user = await client.fetch(getAuthorById, { id });

    return {
        title: `${user.name} Startups`,
        description: `Explore startups by ${user.name}. Discover innovative ideas and entrepreneurial journeys.`,
        openGraph: {
            title: `${user.name} Startups`,
            description: `Explore startups by ${user.name}. Discover innovative ideas and entrepreneurial journeys.`,
            url: `/user/${id}`,
            type: "profile",
            images: [
                {
                    url: user.image,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        keywords: ["startup", "emprendimiento", user.name, user.username],
    };
}

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