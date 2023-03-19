import React from "react";
import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
import OverlapHover from "@site/src/components/OverlapHover";
import OverlapHoverImage from "@site/src/components/OverlapHoverImage";

const HeaderSocialLogos = () => {
  const logoData = [
    {
      img: "/img/social-logos/github.png",
      href: "https://github.com/givepraise/praise",
    },
    {
      img: "/img/social-logos/discord.png",
      href: "https://discord.gg/U2ydzXBG6C",
    },
    {
      img: "/img/social-logos/twitter.png",
      href: "https://twitter.com/givepraise",
    },
    {
      img: "/img/social-logos/mirror.png",
      href: "https://mirror.xyz/givepraise.eth",
    },
  ];

  return (
    <div>
      <OverlapHover
        size={30}
        spacing={10}
        overlap={0.33}
        direction="left"
        className="mr-4"
      >
        {logoData.map((data, index) => (
          <OverlapHoverImage
            key={index}
            img={data.img}
            href={data.href}
            className="opacity-100 hover:opacity-70"
          />
        ))}
      </OverlapHover>
    </div>
  );
};

export default {
  ...ComponentTypes,
  "custom-HeaderSocialLogos": HeaderSocialLogos,
};
