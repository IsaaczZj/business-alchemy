import { Facebook, Linkedin, Slack } from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider = "linkedin" | "facebook" | "slack" | 'clipboard';

const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "LinkedIn",
    icon: <Linkedin className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: "Facebook",
    icon: <Facebook className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php/?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: "Slack",
    icon: <Slack className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || "")}`,
  },
};
export { SOCIAL_PROVIDERS };
