"use client";

import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useStore } from "@/stores/toggleAnimation";

// Define the type for the icon parameter
type Icon = {
  slug: string;
  // Add any other properties you expect from the icon object
};

// Define the props interface for IconCloud
interface IconCloudProps {
  iconSlugs: string[];
}

// Function to render a custom icon
const renderCustomIcon = (icon: Icon, theme: "light" | "dark") => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const IconCloud: React.FC<IconCloudProps> = ({ iconSlugs }) => {
  const [data, setData] = useState<{
    simpleIcons: Record<string, Icon>;
  } | null>(null);
  const { toggleAnimation } = useStore();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const cloudProps = {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 40,
      },
    },
    options: {
      reverse: true,
      depth: 1,
      wheelZoom: false,
      imageScale: 2,
      activeCursor: "default",
      tooltip: "native" as "native", // Explicitly typing as "native"
      initial: [0.1, -0.1],
      clickToFront: isDesktop && toggleAnimation ? 500 : 125,
      tooltipDelay: 0,
      outlineColour: "#0000",
      maxSpeed: isDesktop && toggleAnimation ? 0.02 : 0,
      minSpeed: isDesktop && toggleAnimation ? 0.02 : 0,
      /* dragControl: true, */
    },
  };

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map(
      (icon) => renderCustomIcon(icon || { slug: "dark" }, "dark"), // Defaulting to "light" if icon is undefined
    );
  }, [data]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
};

export { IconCloud, renderCustomIcon };
