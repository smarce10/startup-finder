"use client";

import { Button } from "./ui/button"
import { Trash2, Pencil } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import { deleteStartup } from "@/lib/action";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const ActionButtons = ({ id } : { id: string }) => {
    const { toast } = useToast();
    const router = useRouter();

    const handleSubmit = async() => {
        try{
            const result = await deleteStartup(id);
            if(result.status == 'SUCCESS'){
                toast({
                    title: "Success",
                    description: `Your startup has been deleted successfully!`,                    
                });
                router.refresh(); 
            }
        }catch(error) {
            console.log("Error deleting startup:", error);
            toast({
                title: "Error",
                description: "There was an error deleting the startup.",
                variant: "destructive"
            });
        }
    }

    const [state, formAction, isPending] = useActionState(handleSubmit, undefined);

    return (
        <div className="flex gap-1">
            
            <Button variant="secondary">
                <Link href={`/startup/${id}/edit`}>
                    <Pencil/>
                </Link>
            </Button>
            <form action={formAction}>
                <Button variant="destructive" className="bg-red-600" type="submit" disabled={isPending}>
                    <Trash2/>
                </Button>
            </form>
            
        </div>
    )
}

export default ActionButtons;