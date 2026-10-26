import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Photo = { url: string; alt: string };

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (event.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + photos.length) % photos.length,
        );
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, photos.length]);

  const active = openIndex === null ? null : photos[openIndex];

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo.url}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View larger photo: ${photo.alt}`}
            className="group block overflow-hidden rounded-sm border border-border transition-colors hover:border-accent"
          >
            <img loading="lazy" decoding="async"
              src={photo.url}
              alt={photo.alt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project photo"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-deep/95 p-4 sm:p-10"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-sm border border-primary-foreground/30 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <X className="size-5" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((i) =>
                    i === null ? i : (i - 1 + photos.length) % photos.length,
                  );
                }}
                className="absolute left-4 flex size-10 items-center justify-center rounded-sm border border-primary-foreground/30 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenIndex((i) =>
                    i === null ? i : (i + 1) % photos.length,
                  );
                }}
                className="absolute right-4 bottom-1/2 flex size-10 translate-y-1/2 items-center justify-center rounded-sm border border-primary-foreground/30 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}

          <img
            src={active.url}
            alt={active.alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-sm object-contain"
          />
        </div>
      )}
    </>
  );
}
