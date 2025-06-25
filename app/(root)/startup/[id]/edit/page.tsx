import StartupForm from "@/components/StartupForm";
import { client } from "@/sanity/lib/client";
import { getPostById } from "@/sanity/lib/queries";

const Page = async({ params } : { params: { id : string }}) => {
    const { id } = params;

    const startup = await client.fetch(getPostById, { id });
    console.log(startup)

    return (
        <>
            <section className="pink_container !min-h-[230px]">
                <h1 className="heading">
                    Edit Your Startup
                </h1>
            </section>
            <StartupForm startUpToEdit={startup}/>
        </>
    )
}

export default Page;