import React from "react";
import { ImgHTMLAttributes } from "react";
import { media as wixMedia } from "@wix/sdk";

type WixImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height" | "alt"> & {
    mediaIdentifier: string | undefined;
    placeholder?: string;
    alt?: string | null | undefined;
} & (
        | {
              scaleToFill?: true;
              width: number;
              height: number;
          }
        | {
              scaleToFill: false;
          }
    );

const WixImage = ({ mediaIdentifier, placeholder = "/assets/image-placeholder.jpg", alt, ...props }: WixImageProps) => {
    const imageUrl = mediaIdentifier
        ? props.scaleToFill || props.scaleToFill === undefined
            ? wixMedia.getScaledToFillImageUrl(mediaIdentifier, props.width, props.height, {})
            : wixMedia.getImageUrl(mediaIdentifier).url
        : placeholder;

    return <img src={imageUrl} alt={alt || ""} {...props} />;
};

export default WixImage;
