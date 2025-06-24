export type generateImageState = {
  imageUrl?: string;
  error?: string;
  status: "idle" | "error" | "success";
  keyword?: string;
};
