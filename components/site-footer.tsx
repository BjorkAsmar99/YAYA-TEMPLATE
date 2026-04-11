import { siteData } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-stone-400 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>{siteData.name} · Handmade evenings in Paris.</p>
        <p>Photo placeholders are ready for real restaurant assets.</p>
      </div>
    </footer>
  );
}
