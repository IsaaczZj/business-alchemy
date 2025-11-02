import { useCallback, useMemo } from "react";
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from "./social-providers";
import { useClipboard } from "./use-clipboard";
import { Link } from "lucide-react";

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) {
  const { handleCopy, isCopied } = useClipboard({ timeout: clipboardTimeout });

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [text, title, url],
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === "clipboard") {
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];
        if (!providerConfig) {
          throw new Error(`Proviver não suportado ${provider}`);
        }
        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600, height=600,location=yes,status=yes",
        );

        return !!shareWindow;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    [shareConfig, handleCopy, url],
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: "clipboard",
        name: isCopied ? "Link copiado!" : "Copiar link",
        icon: <Link className="size-4" />,
        action: () => share("clipboard"),
      },
    ],
    [share, isCopied],
  );

  return { shareButtons };
}

export { useShare };