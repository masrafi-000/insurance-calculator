"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface GoogleAdProps {
  client?: string;
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  fallbackImg?: string;
  fallbackText?: string;
}

export default function GoogleAd({
  client,
  slot,
  format = "auto",
  responsive = true,
  className,
  fallbackImg,
  fallbackText,
}: GoogleAdProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (adRef.current && adRef.current.children.length === 0) {
        // @ts-expect-error window.adsbygoogle is injected by the AdSense script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("Error loading Google Ad:", error);
    }
  }, []);

  return (
    <Card
      className={`overflow-hidden border border-border/50 bg-background shadow-sm ${className}`}
    >
      <div className="flex justify-between items-start p-2 border-b border-border/20">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest pl-1 font-semibold">
          Advertisement
        </span>
        <Badge
          variant="secondary"
          className="text-[9px] h-4 font-medium bg-muted text-muted-foreground"
        >
          Ad
        </Badge>
      </div>
      <div
        className={`flex flex-col items-center justify-center p-2 min-h-[250px] ${client && slot ? "bg-muted/5 relative" : ""} rounded-b-xl overflow-hidden`}
      >
        {client && slot && (
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block", width: "100%", height: "100%" }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        )}

        {/* Placeholder for when ads are blocked or loading, or slot missing */}
        <div
          className={`${client && slot ? "absolute inset-0 -z-10" : "grow min-h-[300px] w-full relative z-10"} flex flex-col items-center justify-center text-center bg-muted/10 pointer-events-none rounded-b-xl border-t-0`}
        >
          {fallbackImg ? (
            <>
              <Image
                src={fallbackImg}
                alt="Advertisement"
                fill
                className="object-cover opacity-60 mix-blend-overlay"
              />
              <div className="relative z-10 p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-xs max-w-[85%]">
                <p className="font-bold text-sm text-foreground mb-1">
                  {fallbackText || "Custom Advertisement"}
                </p>
                <p className="text-xs text-muted-foreground leading-tight">
                  Click here to discover our exclusive partner offers and save
                  on your insurance today.
                </p>
              </div>
            </>
          ) : (
            <span className="text-muted-foreground/30 text-sm font-medium tracking-widest uppercase">
              Ad Space
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
