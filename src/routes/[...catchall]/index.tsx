import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { NotFound } from "@/domain/not-found/not-found";
import { SITE_NAME } from "@/constants/site";

export const onRequest: RequestHandler = async ({ status, next }) => {
  status(404);
  await next();
};

export default component$(() => {
  return <NotFound />;
});

export const head: DocumentHead = {
  title: `Page Not Found — ${SITE_NAME}`,
  meta: [
    {
      name: "description",
      content:
        "The page you're looking for doesn't exist or has been moved.",
    },
    { name: "robots", content: "noindex, nofollow" },
  ],
};
