export type generateImageState = {
  imageUrl?: string;
  error?: string;
  status: "idle" | "error" | "success";
  keyword?: string;
};

export type RemoveBackgroundState = {
  originalImage?: string;
  processedImage?: string;
  error?: string;
  status: "idle" | "error" | "success";
};

export type StripeState = {
  status: "idle" | "error" | "success";
  error?: string;
  redirectUrl?: string;
};
