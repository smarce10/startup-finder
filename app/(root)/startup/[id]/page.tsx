import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { getPlaylistBySlug, getPostById } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import View from "@/components/View";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { Calendar } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
const md = markdownit();

export const experimental_ppr = true;

export async function generateMetadata(
    {params} : {params: Promise<{id: string}>},
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = (await params).id;

    console.log("Generating metadata for post with ID:", id);
    const post = await client.fetch(getPostById, { id });

    if (!post) return notFound();

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `/startup/${id}`,
            type: "article",
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        keywords: ["startup", "emprendimiento", post.category]
    };
}

const Page = async ({params} : {params: Promise<{id: string}>}) => {
    const id = (await params).id;

    const [post, {select: editorPosts}] = await Promise.all([
        client.fetch(getPostById, { id }),
        client.fetch(getPlaylistBySlug, {slug: "editor-picks"})
    ])

    if(!post) return notFound();

    const parsedContent = md.render(post?.pitch || "");

    return(
        <>  
            <section className="jumbo-form !min-h-[230px]">
                <p className="tag">
                    <Calendar className="size-4"/>
                    {formatDate(post?._createdAt)}
                </p>
                <h1 className="heading">
                    {post.title}
                </h1>
                <p className="sub-heading !max-w-5xl">{post.description}</p>
            </section>
            <section className="section_container">
                <Image src={post.image} alt="thumbnail" className="section_container-image" width={600} height={400}/>
                <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    <div className="flex-between gap-5">
                        <Link href={`/user/${post.author._id}`} className="flex gap-2 items-center mb-3">
                            <Image src={post.author.image} alt="avatar" className="rounded-full drop-shadow-lg" width={64} height={64}/>
                            <div>
                                <p className="text-white text-20-medium">{post.author.name}</p>
                                <p className="text-16-medium !text-black-300">@{post.author.username}</p>
                            </div>
                        </Link>
                        <p className="category-tag">
                            {post.category}
                        </p>
                    </div>
                    <h3 className="text-white text-30-extrabold">Pitch Details</h3>
                    {
                        parsedContent ? (
                            <article
                                className="markdown-article"
                                dangerouslySetInnerHTML={{ __html: parsedContent }}
                            />
                        ) : (
                            <p className="no-result">No details provided</p>
                        )
                    }
                </div>
                <hr className="divider"/>

                {
                    editorPosts?.length > 0 && (
                        <div className="max-w-4xl mx-auto">
                            <p className="text-white text-30-extrabold">
                                Editor Picks
                            </p>
                            <ul className="mt-7 card_grid-sm">
                                {
                                    editorPosts.map((post: StartupCardType, i: number) => (
                                        <StartupCard key={i} post={post}/>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

                <Suspense fallback={<Skeleton className="view_skeleton"/>}>
                    <View id={id}/>
                </Suspense>
            </section>
        </>
    )
}

export default Page;