import React, { useState } from "react";
import { Button } from "./button";
import { Label } from "./label";
import { ReactColorPicker } from "@/components/ui/ColorPicker/colorPicker.tsx"

const ColorPicker = React.forwardRef<HTMLButtonElement> (
    () => {
        const [showSketch, setShowSketch] = useState<boolean>(false);

        return (
        <Button onClick={() => {setShowSketch(true)}} className="flex items-center" variant="outline">
            <Label htmlFor="colorPicker" className="-mb-1 font-bold absolute">Color Picker</Label>
         
        </Button>
    );
    }
)
ColorPicker.displayName = "ColorPicker"

export { ColorPicker }