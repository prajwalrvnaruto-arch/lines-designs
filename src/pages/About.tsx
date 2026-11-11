import * as React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  HeartHandshake,
  Gem,
  Clock3,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Eye,
  Layers,
  Compass,
  Coffee,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";
import { Lightbox } from "@/components/shared/Lightbox";
import { Link } from "react-router-dom";

const VALUES = [
  {
    icon: Sparkles,
    title: "Design Excellence",
    description:
      "Every project is artwork before it's architecture — composed with proportion, light and a quiet confidence that never shouts.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Approach",
    description:
      "No templates, no catalogues. Each home is designed around the people who live in it, right down to how you host Sunday lunch.",
  },
  {
    icon: Gem,
    title: "Honest Materials",
    description:
      "Oak, travertine, linen, brass — materials we love to touch. Sourced responsibly and detailed so they age beautifully.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "A realistic schedule you can plan your life around, with daily updates and single-point accountability from kickoff to keys.",
  },
];

const STATS = [
  { value: "120+", label: "Projects delivered" },
  { value: "9+", label: "Years in practice" },
  { value: "6", label: "Design disciplines" },
  { value: "100%", label: "Turnkey in-house" },
];

const STUDIO_PHOTOS = [
  {
    src: "/assets/about/office/office-04.webp",
    title: "Reception & Consultation Lounge",
    subtitle: "Warm olive lime-wash wall, cane credenza, and custom French doors",
    badge: "Client Lounge",
  },
  {
    src: "/assets/about/office/office-01.webp",
    title: "Executive Design Suite",
    subtitle: "Fluted glass partitions, acoustic timber and executive discussion desk",
    badge: "Principal Studio",
  },
  {
    src: "/assets/about/office/office-03.webp",
    title: "Gallery Entryway & Hall",
    subtitle: "Seamless terrazzo circulation connecting client lounge to drafting bays",
    badge: "Entry Foyer",
  },
  {
    src: "/assets/about/office/office-05.webp",
    title: "Material Discussion Table",
    subtitle: "Round table dedicated to collaborative finishes and joinery curation",
    badge: "Material Review",
  },
  {
    src: "/assets/about/office/office-02.webp",
    title: "Architectural Drafting Bay",
    subtitle: "Individual workstations for CAD blueprints, 3D modelling and structural review",
    badge: "CAD & 3D Bay",
  },
  {
    src: "/assets/about/office/office-07.webp",
    title: "Studio Work Floor",
    subtitle: "Rich walnut panelling with integrated soft lighting and acoustic balance",
    badge: "Creative Floor",
  },
  {
    src: "/assets/about/office/office-06.webp",
    title: "Private Consultation Lounge",
    subtitle: "Quiet breakout space for budget planning and drawing sign-offs",
    badge: "Meeting Room",
  },
  {
    src: "/assets/about/office/office-08.webp",
    title: "Project Review Zone",
    subtitle: "Glass-enclosed discussion corner for site teams and clients",
    badge: "Review Pod",
  },
  {
    src: "/assets/about/office/office-09.webp",
    title: "Design Studio Desk",
    subtitle: "Samples inspection and finish specification station",
    badge: "Finish Station",
  },
  {
    src: "/assets/about/office/office-10.webp",
    title: "Atmospheric Lighting & Fixtures",
    subtitle: "In-house tested warm lighting fixtures and artisanal pendants",
    badge: "Lighting Lab",
  },
  {
    src: "/assets/about/office/office-11.webp",
    title: "Studio Pavilion Entrance",
    subtitle: "Landscaped outdoor entryway welcoming clients to the studio",
    badge: "Courtyard Entry",
  },
];

export function About() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  // Gallery array for Lightbox
  const galleryImages = React.useMemo(() => STUDIO_PHOTOS.map((p) => p.src), []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const openFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <>
      <PageHero
        eyebrow="The Studio · Bengaluru"
        title={
          <>
            Designing homes that feel
            <br />
            <em className="text-oak not-italic">inevitably</em> yours.
          </>
        }
        description="Lines & Designs is a Bengaluru studio that believes great design is measured in how a space feels — not how it photographs."
        image="/assets/about/office-tour-poster.webp"
        video="/assets/about/office-tour.mp4"
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/assets/about/office/office-01.webp"
                alt="Lines & Designs — Executive Design Studio"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-charcoal/80 px-4 py-2 backdrop-blur-md">
                <p className="font-sans text-xs font-medium text-ivory">
                  Lines & Designs Studio · Bengaluru
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="flex flex-col justify-center lg:pb-8">
            <SectionHeading
              eyebrow="Our Story"
              title="Built in Bengaluru, for the way Bengaluru lives"
            />
            <AnimatedSection delay={0.1}>
              <div className="mt-7 space-y-5 font-sans text-base leading-relaxed text-muted">
                <p>
                  Lines & Designs began in 2017 with a simple conviction: that the spaces
                  we live in should feel like a warm, quiet extension of the people who live in them.
                </p>
                <p>
                  Today, our team of architects, interior designers and execution specialists has
                  delivered over a hundred homes and bespoke workspaces across Karnataka — each one
                  designed from a first conversation, never a template. We keep our studio intentionally
                  boutique: it allows us to know every family personally, from the first sketch to the
                  final hour of handover.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
                  >
                    <p className="font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-1.5 font-sans text-xs uppercase tracking-[0.12em] text-muted">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Office Video Tour Showcase ──────────────────────────────────── */}
      <section className="bg-charcoal py-20 text-ivory sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimatedSection>
            <div className="flex flex-col gap-4 text-center sm:text-left sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak">
                  Virtual Studio Tour
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium text-ivory sm:text-4xl md:text-5xl">
                  Step inside Lines &amp; Designs
                </h2>
                <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-ivory/70 sm:text-base">
                  Take a walkthrough of our physical studio — from the warm olive consultation lounge
                  and material testing tables to our drafting bays and private meeting suites.
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 sm:justify-end">
                <button
                  onClick={togglePlay}
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-ivory/10 px-5 py-2.5 font-sans text-xs font-medium text-ivory backdrop-blur-sm transition-colors hover:bg-ivory/20"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5 fill-ivory" /> Pause Tour
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 fill-ivory" /> Play Tour
                    </>
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory backdrop-blur-sm transition-colors hover:bg-ivory/20"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={openFullscreen}
                  aria-label="Fullscreen studio video tour"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 bg-ivory/10 text-ivory backdrop-blur-sm transition-colors hover:bg-ivory/20"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Video Player Card */}
          <AnimatedSection delay={0.15} className="mt-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-charcoal/90 shadow-2xl ring-1 ring-ivory/10">
              <video
                ref={videoRef}
                src="/assets/about/office-tour.mp4"
                poster="/assets/about/office-tour-poster.webp"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              {/* Bottom Gradient overlay with badge */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs text-ivory/80">
                  <span className="flex items-center gap-2 font-sans tracking-wide">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Lines &amp; Designs Studio Walkthrough · High Definition
                  </span>
                  <span className="hidden font-sans uppercase tracking-widest text-ivory/60 sm:inline-block">
                    Bengaluru
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Three Feature Highlight Pills */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-ivory/10 bg-ivory/5 p-6 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-oak/20 text-oak">
                  <Coffee className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-ivory">
                  Consultation Lounge
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ivory/70">
                  Warm lime-wash walls, cane millwork, and private seating designed for relaxed first-vision conversations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="rounded-2xl border border-ivory/10 bg-ivory/5 p-6 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-oak/20 text-oak">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-ivory">
                  Material Testing Bar
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ivory/70">
                  Touch and compare physical slabs of travertine, natural oak, brushed brass and artisan handloom fabrics.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="rounded-2xl border border-ivory/10 bg-ivory/5 p-6 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-oak/20 text-oak">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-ivory">
                  CAD &amp; 3D Drafting Suite
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ivory/70">
                  High-spec design floor where architects and 3D visualizers model your home before a single brick is laid.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Studio Photo Gallery ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <AnimatedSection>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak-dark">
                  Workspace Gallery
                </p>
                <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                  Every corner thoughtfully detailed
                </h2>
                <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                  Explore our Bengaluru studio — crafted with the same attention to texture, light,
                  and joinery that we bring into every client residence.
                </p>
              </div>
              <p className="font-sans text-sm text-muted">
                {STUDIO_PHOTOS.length} photos · tap to enlarge
              </p>
            </div>
          </AnimatedSection>

          {/* Masonry Columns */}
          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {STUDIO_PHOTOS.map((photo, i) => (
              <AnimatedSection key={photo.src} delay={Math.min(i * 0.05, 0.35)}>
                <div className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-ivory shadow-[0_2px_12px_rgba(0,0,0,0.04)] ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="relative block w-full overflow-hidden text-left"
                    aria-label={`Enlarge photo of ${photo.title}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-2 rounded-full bg-ivory/95 px-4 py-2 font-sans text-xs font-medium text-charcoal shadow-lg">
                        <Eye className="h-3.5 w-3.5 text-oak-dark" />
                        View In Lightbox
                      </span>
                    </div>

                    {/* Zone Badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 font-sans text-[0.65rem] font-medium uppercase tracking-wider text-ivory backdrop-blur-sm">
                      {photo.badge}
                    </span>
                  </button>

                  <div className="p-5">
                    <h3 className="font-serif text-lg font-medium text-charcoal group-hover:text-oak-dark transition-colors">
                      {photo.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The principles behind every project"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={0.08 * i} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-charcoal/8 bg-ivory p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-charcoal/5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-oak/15 text-oak-dark">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="mt-5 font-serif text-xl font-medium text-charcoal">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-sm leading-relaxed text-muted">
                      {v.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Material library */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="The Material Library"
              title="We hunt for materials you'll want to touch"
            />
            <AnimatedSection delay={0.1}>
              <div className="mt-7 space-y-5 font-sans text-base leading-relaxed text-muted">
                <p>
                  Inside our studio is a working library of oak, travertine, handloom
                  textiles and metal finishes — hundreds of samples we test, pair and
                  light before anything is specified on paper.
                </p>
                <p>
                  It's the slow part of the process that makes the finished home feel
                  expensive in all the quiet ways: the weight of a door, the grain under a
                  lamp, the way a stone cools a Bengaluru evening.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  "Material & finish curation sessions",
                  "Real on-site light testing",
                  "Ethically sourced, low-VOC options",
                  "Full joinery in our own workshop",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-sans text-sm text-charcoal"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-oak/15">
                      <Check className="h-3.5 w-3.5 text-oak-dark" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/assets/about/office/office-05.webp"
                alt="Lines & Designs material table and samples showroom"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-charcoal px-6 py-5 text-ivory shadow-xl sm:block">
                <p className="font-serif text-2xl font-medium">200+</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.12em] text-ivory/70">
                  Material samples in studio
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-charcoal/8 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-medium text-charcoal sm:text-4xl">
              Let's design something you'll live in happily — for years.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-base text-muted">
              The first conversation is free. Come see the studio, walk through our
              samples, and tell us what home means to you.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <QuoteModal
                trigger={<Button variant="accent" size="lg">Get a Quote</Button>}
              />
              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-charcoal/15 px-9 font-sans text-base font-medium text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
              >
                Visit the Studio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox for Studio Photo Gallery */}
      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((idx) =>
            idx === null ? null : (idx - 1 + galleryImages.length) % galleryImages.length
          )
        }
        onNext={() =>
          setLightboxIndex((idx) =>
            idx === null ? null : (idx + 1) % galleryImages.length
          )
        }
        title="Lines & Designs Studio"
      />
    </>
  );
}
