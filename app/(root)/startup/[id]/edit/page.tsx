import { auth } from "@/auth";
import ParticlesEditStartup from "@/components/particles/ParticlesEditStartup";
import StartupForm from "@/components/StartupForm";
import { client } from "@/sanity/lib/client";
import { getPostById } from "@/sanity/lib/queries";
import { redirect } from "next/navigation";


const Page = async({ params } : { params: { id : string }}) => {
    const { id } = params;
    const session = await auth();

    const startup = await client.fetch(getPostById, { id });
    if(session?.id !== startup?.author?._id) {
        return redirect("/");
    }

    return (
        <>
            <section className="jumbo-form !min-h-[230px]">
                <ParticlesEditStartup />
                <h1 className="heading">
                    Edit Your Startup
                </h1>
            </section>
            <StartupForm startUpToEdit={startup}/>
        </>
    )
}

export default Page;