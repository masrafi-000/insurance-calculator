"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

interface GoogleAdProps {
  client?: string;
  slot?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

export default function GoogleAd({
  client = "ca-pub-2846346770891185",
  slot,
  format = "auto",
  responsive = true,
  className,
}: GoogleAdProps) {
  const t = useTranslations("UI.GoogleAd");
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
          {t("advertisement")}
        </span>
        <Badge
          variant="secondary"
          className="text-[9px] h-4 font-medium bg-muted text-muted-foreground"
        >
          {t("adBadge")}
        </Badge>
      </div>
      <div
        className={`flex flex-col items-center justify-center p-2 min-h-[250px] ${client && slot ? "bg-muted/5 relative" : ""} rounded-b-xl overflow-hidden`}
      >
        {client && slot && (
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block" }}
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
          {client && slot ? (
            <span className="text-muted-foreground/30 text-sm font-medium tracking-widest uppercase">
              Ad Space
            </span>
          ) : (
            <span className="text-muted-foreground/30 text-sm font-medium tracking-widest uppercase">
              No Ad
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
