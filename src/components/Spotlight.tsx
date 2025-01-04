import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import {SparklesCore} from "@/components/ui/sparkles";
// import {SparklesPreview} from "@/components/Header";

export function SpotlightPreview() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <SparklesCore/>

        </div>
    );
}
