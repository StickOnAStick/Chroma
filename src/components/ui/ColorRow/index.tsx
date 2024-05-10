import { Input } from "../input";
import { Label } from "@radix-ui/react-label";
import { Button } from "../button";
import { X, AArrowUp, AArrowDown } from "lucide-react";

export default function ColorRow() {
    return (
        <div className="flex mx-1 sm:mx-12 gap-2 sm:gap-4 items-end ">
            <div className="text-xs">
                <Label htmlFor="color" className="text-xs">Color</Label>
                <Input id="color" type="text" placeholder="#FFFFFF" className="w-20"/>
            </div>
            <Input type="text" placeholder="RGBA" className="text-xs"/>
            <Input type="color" />
            <Button variant="secondary">
                <AArrowUp/>
            </Button>
            <Button variant="default">
                <AArrowDown/>
            </Button>

            <Button variant="destructive" className="px-1">
                <X size={28} className=""/>
            </Button>
        </div>
    );
}