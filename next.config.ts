import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			new URL(
				"https://specials-images.forbesimg.com/imageserve/5d8a751e22254b0008e15d32/416x416.jpg"
			),
		],
	},
};

export default nextConfig;
