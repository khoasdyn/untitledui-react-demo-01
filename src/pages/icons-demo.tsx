import { Link } from "react-router";

// Line icons - clean, minimal outlines
import {
    Home01 as Home01Line,
    Settings01 as Settings01Line,
    User01 as User01Line,
    Mail01 as Mail01Line,
    Heart as HeartLine,
} from "@untitledui-pro/icons/line";

// Solid icons - filled shapes, great for emphasis
import {
    Home01 as Home01Solid,
    Settings01 as Settings01Solid,
    User01 as User01Solid,
    Mail01 as Mail01Solid,
    Heart as HeartSolid,
} from "@untitledui-pro/icons/solid";

// Duocolor icons - two-color design with primary and secondary colors
import {
    Home01 as Home01Duocolor,
    Settings01 as Settings01Duocolor,
    User01 as User01Duocolor,
    Mail01 as Mail01Duocolor,
    Heart as HeartDuocolor,
} from "@untitledui-pro/icons/duocolor";

// Duotone icons - layered design with opacity-based styling
import {
    Home01 as Home01Duotone,
    Settings01 as Settings01Duotone,
    User01 as User01Duotone,
    Mail01 as Mail01Duotone,
    Heart as HeartDuotone,
} from "@untitledui-pro/icons/duotone";

// This array defines the 5 icons we're showcasing, with all 4 style variants for each
const iconShowcase = [
    {
        name: "Home01",
        description: "A house icon, commonly used for home/dashboard navigation",
        line: Home01Line,
        solid: Home01Solid,
        duocolor: Home01Duocolor,
        duotone: Home01Duotone,
    },
    {
        name: "Settings01",
        description: "A gear icon, used for settings and configuration",
        line: Settings01Line,
        solid: Settings01Solid,
        duocolor: Settings01Duocolor,
        duotone: Settings01Duotone,
    },
    {
        name: "User01",
        description: "A person icon, used for user profiles and accounts",
        line: User01Line,
        solid: User01Solid,
        duocolor: User01Duocolor,
        duotone: User01Duotone,
    },
    {
        name: "Mail01",
        description: "An envelope icon, used for email and messaging",
        line: Mail01Line,
        solid: Mail01Solid,
        duocolor: Mail01Duocolor,
        duotone: Mail01Duotone,
    },
    {
        name: "Heart",
        description: "A heart icon, used for favorites and likes",
        line: HeartLine,
        solid: HeartSolid,
        duocolor: HeartDuocolor,
        duotone: HeartDuotone,
    },
];

// The 4 icon styles available in the PRO package
const styles = [
    {
        key: "line" as const,
        name: "Line",
        description: "Clean, minimal outlines. Great for subtle UI elements.",
    },
    {
        key: "solid" as const,
        name: "Solid",
        description: "Filled shapes. Perfect for active states and emphasis.",
    },
    {
        key: "duocolor" as const,
        name: "Duocolor",
        description: "Two distinct colors. Adds visual interest and depth.",
    },
    {
        key: "duotone" as const,
        name: "Duotone",
        description: "Layered opacity. Creates a sophisticated, modern look.",
    },
];

export const IconsDemo = () => {
    return (
        <div className="min-h-dvh bg-primary">
            {/* Header with navigation back to home */}
            <header className="sticky top-0 z-10 border-b border-secondary bg-primary/80 backdrop-blur-sm">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
                    <h1 className="text-xl font-semibold text-primary">Untitled UI Icons PRO Demo</h1>
                    <Link
                        to="/"
                        className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </header>

            {/* Introduction section */}
            <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold text-brand-600">PRO Icons</p>
                    <h2 className="mt-2 text-display-sm font-semibold text-primary md:text-display-md">
                        4,600+ icons across 4 styles
                    </h2>
                    <p className="mt-4 text-lg text-tertiary">
                        The PRO version of Untitled UI Icons includes multiple style variants—line, solid, 
                        duocolor, and duotone. Each icon is carefully crafted for pixel-perfect rendering 
                        at any size.
                    </p>
                </div>
            </section>

            {/* Icons showcase grid */}
            <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
                {/* Style descriptions */}
                <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {styles.map((style) => (
                        <div key={style.key} className="rounded-xl border border-secondary bg-secondary p-4">
                            <h3 className="font-semibold text-primary">{style.name}</h3>
                            <p className="mt-1 text-sm text-tertiary">{style.description}</p>
                        </div>
                    ))}
                </div>

                {/* Icons table */}
                <div className="overflow-hidden rounded-xl border border-secondary">
                    {/* Table header */}
                    <div className="grid grid-cols-5 border-b border-secondary bg-secondary">
                        <div className="px-6 py-4">
                            <span className="text-sm font-semibold text-primary">Icon Name</span>
                        </div>
                        {styles.map((style) => (
                            <div key={style.key} className="px-6 py-4 text-center">
                                <span className="text-sm font-semibold text-primary">{style.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Table rows - one for each icon */}
                    {iconShowcase.map((icon, index) => (
                        <div
                            key={icon.name}
                            className={`grid grid-cols-5 ${index !== iconShowcase.length - 1 ? "border-b border-secondary" : ""}`}
                        >
                            {/* Icon name and description */}
                            <div className="flex flex-col justify-center px-6 py-6">
                                <span className="font-medium text-primary">{icon.name}</span>
                                <span className="mt-1 text-sm text-tertiary">{icon.description}</span>
                            </div>

                            {/* Line style */}
                            <div className="flex items-center justify-center px-6 py-6">
                                <div className="flex size-12 items-center justify-center rounded-lg bg-secondary transition-colors hover:bg-tertiary">
                                    <icon.line className="size-6 text-primary" />
                                </div>
                            </div>

                            {/* Solid style */}
                            <div className="flex items-center justify-center px-6 py-6">
                                <div className="flex size-12 items-center justify-center rounded-lg bg-secondary transition-colors hover:bg-tertiary">
                                    <icon.solid className="size-6 text-primary" />
                                </div>
                            </div>

                            {/* Duocolor style */}
                            <div className="flex items-center justify-center px-6 py-6">
                                <div className="flex size-12 items-center justify-center rounded-lg bg-secondary transition-colors hover:bg-tertiary">
                                    <icon.duocolor className="size-6 text-brand-600" />
                                </div>
                            </div>

                            {/* Duotone style */}
                            <div className="flex items-center justify-center px-6 py-6">
                                <div className="flex size-12 items-center justify-center rounded-lg bg-secondary transition-colors hover:bg-tertiary">
                                    <icon.duotone className="size-6 text-brand-600" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Size comparison section */}
                <div className="mt-12">
                    <h3 className="text-lg font-semibold text-primary">Size Comparison</h3>
                    <p className="mt-2 text-tertiary">
                        Icons scale smoothly from small UI elements to large hero sections.
                    </p>
                    <div className="mt-6 flex flex-wrap items-end gap-8 rounded-xl border border-secondary bg-secondary p-8">
                        <div className="flex flex-col items-center gap-2">
                            <Home01Line className="size-4 text-primary" />
                            <span className="text-xs text-tertiary">16px</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Home01Line className="size-5 text-primary" />
                            <span className="text-xs text-tertiary">20px</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Home01Line className="size-6 text-primary" />
                            <span className="text-xs text-tertiary">24px</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Home01Line className="size-8 text-primary" />
                            <span className="text-xs text-tertiary">32px</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Home01Line className="size-10 text-primary" />
                            <span className="text-xs text-tertiary">40px</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Home01Line className="size-12 text-primary" />
                            <span className="text-xs text-tertiary">48px</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Home01Line className="size-16 text-primary" />
                            <span className="text-xs text-tertiary">64px</span>
                        </div>
                    </div>
                </div>

                {/* Color customization section */}
                <div className="mt-12">
                    <h3 className="text-lg font-semibold text-primary">Color Customization</h3>
                    <p className="mt-2 text-tertiary">
                        Apply any color using Tailwind CSS text color utilities.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 rounded-xl border border-secondary bg-secondary p-8">
                        <div className="flex size-12 items-center justify-center rounded-lg bg-primary">
                            <HeartSolid className="size-6 text-red-500" />
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-lg bg-primary">
                            <HeartSolid className="size-6 text-pink-500" />
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-lg bg-primary">
                            <HeartSolid className="size-6 text-purple-500" />
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-lg bg-primary">
                            <HeartSolid className="size-6 text-blue-500" />
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-lg bg-primary">
                            <HeartSolid className="size-6 text-cyan-500" />
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-lg bg-primary">
                            <HeartSolid className="size-6 text-green-500" />
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-lg bg-primary">
                            <HeartSolid className="size-6 text-yellow-500" />
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-lg bg-primary">
                            <HeartSolid className="size-6 text-orange-500" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
