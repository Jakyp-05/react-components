import { Facebook } from "./facebook";
import { Google } from "./google";
import { Instagram } from "./instagram";
import { Twitter } from "./twitter";
import { YouTube } from "./you-tube";

type IProps = {
  id: string;
};

export const FooterSvgSelector = ({ id }: IProps) => {
  switch (id) {
    case "facebook":
      return <Facebook />;
    case "twitter":
      return <Twitter />;
    case "google":
      return <Google />;
    case "instagram":
      return <Instagram />;
    case "you-tube":
      return <YouTube />;
    default:
      return <svg></svg>;
  }
};
