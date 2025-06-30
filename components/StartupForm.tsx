"use client"

import { Input } from "./ui/input";
import { useState, useActionState, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createPitch, updateStartup } from "@/lib/action";
import { StartupCardType } from "./StartupCard";

const StartupForm = ({ startUpToEdit } : { startUpToEdit ?: StartupCardType }) => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [title, setTitle] = useState(startUpToEdit?.title || "");
    const [description, setDescription] = useState(startUpToEdit?.description || "");
    const [category, setCategory] = useState(startUpToEdit?.category || "");
    const [link, setLink] = useState(startUpToEdit?.image || "");
    const [pitch, setPitch] = useState(startUpToEdit?.pitch || "");
    const { toast } = useToast();
    const router = useRouter();

    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        
        try{
    
            const formValues = {
                title,
                description,
                category,
                link,
                pitch
            }

            await formSchema.parseAsync(formValues);

            const result = startUpToEdit ? 
                await updateStartup(startUpToEdit._id, formData, pitch) 
                :
                await createPitch(prevState, formData, pitch);

            if(result.status == 'SUCCESS'){
                toast({
                    title: "Success",
                    description: `Your startup pitch has been ${startUpToEdit ? "edited" : "submited"} successfully!`,                    
                });

                router.push(`/startup/${result._id}`);
            }

            return result;
        }catch(error){
            if(error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;
                setErrors(fieldErrors as unknown as Record<string, string>);

                toast({
                    title: "Error",
                    description: "Please fix the errors in the form.",
                    variant: "destructive"
                });

                return {
                    ...prevState,
                    error: "Please fix the errors in the form.",
                    status: "ERROR"
                }
            }

            toast({
                title: "Error",
                description: "An unexpected error occurred. Please try again later.",
                variant: "destructive"
            });

            return {
                ...prevState,
                error: "An unexpected error occurred. Please try again later.",
                status: "ERROR"
            }
        }
    }

    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
        error: "",
        status: "INITIAL"
    });

    return (
        <form action={formAction} className="startup-form">
            <div>
                <label htmlFor="title" className="startup-form_label">
                    Title
                </label>
                <Input
                    id="title"
                    name="title"
                    className="startup-form_input"
                    required
                    placeholder="Startup Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <p className="startup-form_error">{errors.title}</p>}
            </div>
            <div>
                <label htmlFor="description" className="startup-form_label">
                    Description
                </label>
                <Textarea
                    id="description"
                    name="description"
                    className="startup-form_textarea"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Startup Description"
                />
                {errors.description && <p className="startup-form_error">{errors.description}</p>}
            </div>
            <div>
                <label htmlFor="category" className="startup-form_label">
                    Category
                </label>
                <Input
                    id="category"
                    name="category"
                    className="startup-form_input"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Startup Category (Tech, Health, etc.)"
                />
                {errors.category && <p className="startup-form_error">{errors.category}</p>}
            </div>
            <div>
                <label htmlFor="link" className="startup-form_label">
                    Image URL
                </label>
                <Input
                    id="link"
                    name="link"
                    className="startup-form_input"
                    required
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Startup Image URL"
                />
                {errors.link && <p className="startup-form_error">{errors.link}</p>}
            </div>
            <div data-color-mode="light">
                <label htmlFor="pitch" className="startup-form_label">
                    Pitch
                </label>
                <MDEditor
                    className="rounded-xl border border-white/20 bg-[#232042] !important"
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    id="pitch"
                    preview="edit"
                    height={300}
                    style={{borderRadius: 20, overflow: "hidden"}}
                    textareaProps={
                        {
                            placeholder: "Briefly describe your startup idea, its mission, and what makes it unique.",
                            autoCapitalize: "off"
                        }
                    }
                    previewOptions={{
                        disallowedElements: ["style"]
                    }}
                />
                {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
            </div>
            <Button type="submit" className="startup-form_btn text-white" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit Your Pitch"}
                <Send className="size-6 ml-2"/>
            </Button>
        </form>
    )
}

export default StartupForm;
