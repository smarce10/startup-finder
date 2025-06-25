"use client";

import { Button } from "./ui/button"
import { Trash2, Pencil } from "lucide-react";
import Link from "next/link";

const ActionButtons = ({ id } : { id: string }) => {
    const onDelete = (id: string) => {
        console.log(`Delete action for startup with ID: ${id}`);
    }

    return (
        <div className="flex gap-1">
            
            <Button variant="secondary">
                <Link href={`/startup/${id}/edit`}>
                    <Pencil/>
                </Link>
            </Button>
            <Button variant="destructive" className="bg-red-600" onClick={() => onDelete?.(id)}>
                <Trash2/>
            </Button>
        </div>
    )
}

export default ActionButtons;