import { LinkSocialMedia } from "./styled";

export const LinksSocialMedia = (item) => {
  return (
    <LinkSocialMedia
      href={item.url}
      key={item.id}
      title={item.name}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
    >
      {<item.icon />}
    </LinkSocialMedia>
  );
};
