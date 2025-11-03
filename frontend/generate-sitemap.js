// generate-sitemap.js
const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/hakkimizda", changefreq: "monthly", priority: 0.8 },
  { url: "/hizmetler", changefreq: "monthly", priority: 0.8 },
  { url: "/teklif-al", changefreq: "monthly", priority: 0.8 },
  { url: "/iletisim", changefreq: "monthly", priority: 0.8 },
  { url: "/blog", changefreq: "weekly", priority: 0.7 },
];

const stream = new SitemapStream({ hostname: "https://www.sigortabu.net" });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap oluşturuldu: public/sitemap.xml");
});
