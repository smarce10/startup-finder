import { client } from "@/sanity/lib/client";
import { getAllPostsFromUser } from "@/sanity/lib/queries";
import StartupCard, { StartupCardType } from "./StartupCard";
import { auth } from "@/auth";


const UserStartups = async( { id } : { id: string }) => {
    const session = await auth();
    const startups = await client.fetch(getAllPostsFromUser, { id })
    const checkAuthor = (startups: StartupCardType[]) => {
        return startups.some(startup => startup.author?._id === session?.id);
    }

    return (
        <>
        {
            startups.length > 0 ? (
                checkAuthor(startups) ? (
                    startups.map((startup: StartupCardType) => (
                       <StartupCard key={startup._id} post={startup} showActions={true}/>
                    ))  
                ) : (
                    startups.map((startup: StartupCardType) => (
                        <StartupCard key={startup._id} post={startup} showActions={false}/>
                    ))
                )
            ) : (
                <p className="no-result">No posts yet</p>
            )
        }
        </>
    )
}

export default UserStartups;