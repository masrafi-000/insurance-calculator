"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

interface GoogleAdProps {
  client: string;
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

export default function GoogleAd({
  client,
  slot,
  format = "auto",
  responsive = true,
  className,
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
      <div className="flex items-center justify-center p-2 min-h-[250px] bg-muted/5 relative">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
        {/* Placeholder for when ads are blocked or loading */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-sm -z-10 bg-muted/10 pointer-events-none">
          Ad Space
        </div>
      </div>
    </Card>
  );
}
