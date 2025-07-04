import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";
import ActionButtons from "./ActionButtons";

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post, showActions = false } : { post: StartupCardType, showActions: boolean }) => {
    
    const { _createdAt, views, author, _id, description, image, category, title } = post;

  return (
    <li className="animate-in fade-in duration-300 startup-card group">
        <div className="flex-between">
            <p className="startup_card_date">
                {formatDate(_createdAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-white" />
                <span className="text-16-medium">
                    {views}
                </span>
            </div>
        </div>
        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${author?._id}`}>
                    <p className="text-16-medium line-clamp-1">
                        {author?.name}
                    </p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <h3 className="text-26-semibold line-clamp-1">
                        {title}
                    </h3>
                </Link>
            </div>
            <Link href={`/user/${author?._id}`}>
                <Image src={author?.image || "https://placehold.co/48x48"} alt={"placeholder"} width={48} height={48} className="rounded-full"/>
            </Link>
        </div>
        <Link href={`/startup/${_id}`}>
            <p className="startup-card_desc">
                {description}
            </p>
            <Image src={image || "https://placehold.co/400x400"} alt="placeholder" className="startup-card_img" width={400} height={400}/>
        </Link>
        <div className="flex-between gap-3 mt-5">
            <Link href={`/?query=${category?.toLowerCase()}`}>
                <p className="startup-card_category">
                    {category}
                </p>
            </Link>
            <Button className="startup-card_btn py-5" asChild>
                <Link href={`/startup/${_id}`}>
                    Details
                </Link>
            </Button>
            {
                showActions && (
                    <ActionButtons id={_id}/>
                )
            }
        </div>
    </li>
  );
}

export const StartupCardSkeleton = () => (
    <>
    {
        [0, 1, 2, 3, 4].map((index: number) => (
            <li key={cn('skeleton', index)}>
                <Skeleton className="startup-card_skeleton"/>
            </li>
        ))
    }
    </>
)

export default StartupCard;