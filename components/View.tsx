import Ping from "./Ping";
import { getPostViews } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";


const View = async({id} : {id: string}) => {
    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(getPostViews, { id })

    after(async () => {
        writeClient
            .patch(id)
            .set({ views: totalViews + 1 })
            .commit()
    })

    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping/>
            </div>

            <p className="view-text">
                <span className="text-white text-16-extrabold">
                    {totalViews} views
                </span>
            </p>
        </div>
    )
}

export default View;