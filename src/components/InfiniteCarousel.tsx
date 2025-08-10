import React, { useEffect, useRef, useState } from "react";

type Item = {
  id: string;
  title?: string;
  image: string;
  description?: string;
  category?: string;
  url?: string;
};

type Props = {
  items: Item[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  maxItemWidth?: number;
  showControls?: boolean;
};

const TRANSITION_MS = 420; // transition duration when animating

const InfiniteCarousel: React.FC<Props> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 3200,
  maxItemWidth = 480,
  showControls = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [itemWidth, setItemWidth] = useState<number>(320);
  const [translate, setTranslate] = useState<number>(0); // px (negative to move left)
  const translateRef = useRef<number>(translate);
  const [animating, setAnimating] = useState<boolean>(false);
  const animatingRef = useRef(animating);

  // Drag states
  const [dragging, setDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);

  const autoplayRef = useRef<number | null>(null);
  const pointerStart = useRef({ x: 0, translateAtStart: 0 });

  // Keep refs synced
  useEffect(() => {
    translateRef.current = translate;
  }, [translate]);
  useEffect(() => {
    animatingRef.current = animating;
  }, [animating]);

  // Tripled items for infinite illusion
  const tripled = [...items, ...items, ...items];

  // Compute item width based on container size
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const recompute = () => {
      const cw = el.clientWidth || window.innerWidth;
      const computed = Math.min(maxItemWidth, Math.max(220, Math.round(cw * 0.7)));
      setItemWidth(computed);

      const totalSetWidth = items.length * computed;
      setAnimating(false);
      setTranslate(-totalSetWidth);

      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translate3d(${-totalSetWidth}px,0,0)`;
      }
    };

    recompute();

    const ro = new ResizeObserver(recompute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [maxItemWidth, items.length]);

  // Sync translate with track on itemWidth changes
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.transform = `translate3d(${translate}px,0,0)`;
    requestAnimationFrame(() => {
      if (animatingRef.current) {
        el.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(.2,.9,.2,1)`;
      } else {
        el.style.transition = "none";
      }
    });
  }, [itemWidth]);

  // Helper: logical index inside one set
  const getLogicalIndex = () => {
    const N = items.length;
    if (N === 0) return 0;
    const totalSetWidth = N * itemWidth;
    const posInSet = ((-translateRef.current % totalSetWidth) + totalSetWidth) % totalSetWidth;
    const idx = Math.round(posInSet / itemWidth) % N;
    return idx;
  };

  // Boundary correction for infinite looping
  const correctBounds = () => {
    const N = items.length;
    if (N === 0) return;
    const totalSetWidth = N * itemWidth;
    let cur = translateRef.current;

    if (cur >= 0) {
      cur = cur - totalSetWidth;
      setAnimating(false);
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translate3d(${cur}px,0,0)`;
      }
      setTranslate(cur);
      return;
    }

    if (cur <= -2 * totalSetWidth) {
      cur = cur + totalSetWidth;
      setAnimating(false);
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
        trackRef.current.style.transform = `translate3d(${cur}px,0,0)`;
      }
      setTranslate(cur);
      return;
    }
  };

  // On transition end
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    const onEnd = () => {
      setAnimating(false);
      correctBounds();
    };
    t.addEventListener("transitionend", onEnd);
    return () => t.removeEventListener("transitionend", onEnd);
  }, [itemWidth, items.length]);

  // Drag handlers with improved click/drag detection
  useEffect(() => {
    const el = trackRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    let pointerId: number | null = null;
    const dragThreshold = 10; // px threshold for considering it a drag

    const onDown = (e: PointerEvent) => {
      pointerId = e.pointerId;
      container.setPointerCapture(pointerId);
      setDragging(true);
      setDragDistance(0);
      setAnimating(false);
      if (el) el.style.transition = "none";

      pointerStart.current.x = e.clientX;
      pointerStart.current.translateAtStart = translateRef.current;

      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    const onMove = (e: PointerEvent) => {
      if (!pointerId || !dragging) return;
      const dx = e.clientX - pointerStart.current.x;
      setDragDistance(Math.abs(dx));

      const newTranslate = pointerStart.current.translateAtStart + dx;
      setTranslate(newTranslate);
      if (el) {
        el.style.transform = `translate3d(${newTranslate}px,0,0)`;
      }
    };

    const onUp = (e: PointerEvent) => {
      if (!pointerId) return;
      try {
        container.releasePointerCapture(pointerId);
      } catch {}
      pointerId = null;
      setDragging(false);

      // Snap to nearest item
      const nearest = Math.round(-translateRef.current / itemWidth);
      const target = -nearest * itemWidth;
      setAnimating(true);
      if (el) {
        el.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(.2,.9,.2,1)`;
        el.style.transform = `translate3d(${target}px,0,0)`;
      }
      setTranslate(target);

      // Reset drag distance
      setDragDistance(0);

      // Resume autoplay
      if (autoPlay && !autoplayRef.current) {
        autoplayRef.current = window.setInterval(() => {
          scrollNext();
        }, autoPlayInterval);
      }
    };

    container.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      try {
        container.removeEventListener("pointerdown", onDown);
      } catch {}
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, itemWidth, autoPlay, autoPlayInterval]);

  // Autoplay effect
  useEffect(() => {
    if (!autoPlay) return;
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      scrollNext();
    }, autoPlayInterval);
    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, itemWidth]);

  const scrollNext = () => {
    const target = translateRef.current - itemWidth;
    setAnimating(true);
    if (trackRef.current)
      trackRef.current.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(.2,.9,.2,1)`;
    setTranslate(target);
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${target}px,0,0)`;
  };

  const scrollPrev = () => {
    const target = translateRef.current + itemWidth;
    setAnimating(true);
    if (trackRef.current)
      trackRef.current.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(.2,.9,.2,1)`;
    setTranslate(target);
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${target}px,0,0)`;
  };

  const goToIndex = (idx: number) => {
    const N = items.length;
    if (N === 0) return;
    const totalSetWidth = N * itemWidth;
    const cloneIndex = Math.floor((-translateRef.current + totalSetWidth / 2) / totalSetWidth) || 1;

    setAnimating(true);
    if (trackRef.current)
      trackRef.current.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(.2,.9,.2,1)`;
    const targetTranslate = -idx * itemWidth - (cloneIndex - 1) * totalSetWidth;
    setTranslate(targetTranslate);
    if (trackRef.current)
      trackRef.current.style.transform = `translate3d(${targetTranslate}px,0,0)`;
  };

  const logicalIndex = getLogicalIndex();

  return (
    <div className="w-full">
      <div
        className="relative w-full overflow-visible"
        style={{ maxWidth: "1200px", margin: "auto" }}
      >
        {showControls && (
          <>
            <button
              aria-label="Previous"
              onClick={() => scrollPrev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 border border-border shadow"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollNext()}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 border border-border shadow"
            >
              ›
            </button>
          </>
        )}

        <div ref={containerRef} className="overflow-hidden" style={{ touchAction: "pan-y" }}>
          <div
            ref={trackRef}
            className="flex items-start gap-6"
            style={{
              width: tripled.length * itemWidth,
              transform: `translate3d(${translate}px,0,0)`,
              transition: animating ? `transform ${TRANSITION_MS}ms cubic-bezier(.2,.9,.2,1)` : "none",
              willChange: "transform",
            }}
          >
            {tripled.map((it, idx) => (
              <a
                key={`${it.id}-${idx}`}
                href={it.url || "#"}
                className="flex-shrink-0 bg-card rounded-xl overflow-hidden shadow-lg block cursor-pointer select-none"
                style={{ width: itemWidth, minWidth: itemWidth }}
                onClick={(e) => {
                  if (dragDistance > 10) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                  }
                  if (e.button === 0 && it.url && it.url !== "#") {
                    // Force navigation to avoid SPA router interception
                    window.location.href = it.url;
                    e.preventDefault();
                  }
                }}
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={it.image}
                    alt={it.title || `item-${idx}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg truncate">{it.title}</h3>
                  {it.category && (
                    <div className="text-xs inline-block px-2 py-1 mt-2 rounded-full bg-primary/20 text-primary">
                      {it.category}
                    </div>
                  )}
                  {it.description && (
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{it.description}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to ${idx + 1}`}
            onClick={() => goToIndex(idx)}
            className={`w-3 h-3 rounded-full transition-transform ${
              idx === logicalIndex ? "bg-primary scale-110" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
