import Link from "@/components/Link";
import Image from "@/components/Image";

import PoweredByVercel from "assets/powered-by-vercel.svg";

import { SiteMetadata } from "@/data";

export default function Footer() {
  return (
    <>
      <footer className="px-4 lg:px-6 py-4">
        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-base text-gray-500 dark:text-gray-400">
            Made with ❤️ by{" "}
            <Link
              href={SiteMetadata.github_url}
              className="font-bold text-gray-800 dark:text-gray-200"
              externalIcon={false}
            >
              Codinasion
            </Link>
          </p>

          <Link
            href="https://vercel.com/?utm_source=codinasion&utm_campaign=oss"
            externalIcon={false}
            className="flex items-center justify-center mt-5"
          >
            <Image src={PoweredByVercel} alt="Powered by Vercel" width={170} />
          </Link>
        </div>
      </footer>
    </>
  );
}
