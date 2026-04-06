import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { Header } from "@/domain/header/header";
import { Footer } from "@/domain/footer/footer";
import { SITE_NAME } from "@/constants/site";
import { DEFAULT_META } from "@/constants/seo";

export default component$(() => {
  const loc = useLocation();
  const is404 = "catchall" in loc.params;

  return (
    <>
      {!is404 && <Header />}
      <main>
        <Slot />
      </main>
      {!is404 && <Footer />}
    </>
  );
});

export const head: DocumentHead = {
  title: DEFAULT_META.title,
  meta: [
    { name: "description", content: DEFAULT_META.description },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
  ],
};
