export interface Props {
  h?: number | string;
  w?: number | string;
}

export const Space = ({ h: height, w: width }: Props) => {
  if (typeof width !== "undefined") {
    return <span style={{ display: "inline-block", width, height }} />;
  }
  return <span style={{ display: "block", width, height }} />;
};
