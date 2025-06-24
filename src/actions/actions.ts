"use server";

export async function generateImage(formData: FormData) {
  const keyword = formData.get("keyword");
  try {
    await fetch(`${process.env.BASE_URL}/api/generate-image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyword }),
    });
  } catch (error) {
    console.error(error);
  }
}
