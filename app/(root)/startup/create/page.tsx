import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation"
import ParticlesCreateStartup from "@/components/particles/ParticlesCreateStartup";

const Page = async() => {
    const session = await auth();

    if(!session) redirect("/");

    return (
        <>
            <section className="jumbo-form !min-h-[260px] relative flex flex-col items-center justify-center overflow-visible">
                <ParticlesCreateStartup />
                <h1 className="heading z-10 text-center">
                    Submit Your Startup
                </h1>
                <p className="startup-form_subheading">
                    🚀 Share your idea with the world! Fill out the form below and inspire the startup community.
                </p>
            </section>
            <StartupForm />
        </>
    )
}

export default Page;