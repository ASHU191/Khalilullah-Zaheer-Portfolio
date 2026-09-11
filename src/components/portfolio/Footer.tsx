import { profile, socials } from "@/data/portfolio";
import { SocialLinks } from "./primitives";

export function Footer() {
  return (
    <footer className="border-t border-glass-border py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <SocialLinks items={socials} />
      </div>
    </footer>
  );
}
