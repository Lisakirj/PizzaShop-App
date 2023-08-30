import { FC } from "react";
import ContentLoader from "react-content-loader";

const SkeletonPizza: FC = () => {
  return (
    <ContentLoader
      className="pizza_block col-sm-5 col-lg-4 col-xl-3 card mb-0 mt-sm-1 mt-3 my-sm-4 border-0"
      speed={2}
      width={285}
      height={465}
      viewBox="0 0 285 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="4" y="266" rx="10" ry="10" width="280" height="27" />
      <circle cx="139" cy="124" r="118" />
      <rect x="3" y="319" rx="10" ry="10" width="280" height="79" />
      <rect x="5" y="425" rx="10" ry="10" width="85" height="33" />
      <rect x="149" y="415" rx="30" ry="30" width="136" height="49" />
    </ContentLoader>
  );
};

export default SkeletonPizza;
