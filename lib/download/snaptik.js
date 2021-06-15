const cheerio = require("cheerio");
const fetch = require("node-fetch");
const FormData = require("form-data");

/**
 * SnapTik Scraper
 * @function
 * @param {String} url - Your tiktok url, example https://vt.tiktok.com/khpq9t.
 * @param {Object} options - Options (optional), not recommended. example {"user_agent": "GoogleBot"}.
 */

async function snaptik(url, options = {}) {
  !options.user_agent
    ? (options.user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36")
    : options.user_agent;
  const form = new FormData();
  form.append("url", encodeURI(url));

  const scrape = await fetch("https://snaptik.app/action-2021.php", {
    method: "POST",
    headers: {
      Accept: "/",
      "Accept-Language":
        "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7,da;q=0.6,mt;q=0.5",
      "User-Agent": options.user_agent,
      origin: "https://snaptik.app",
      referer: "https://snaptik.app/",
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });

  let html = await scrape.text();
  let $ = cheerio.load(html);
  let tampungUrl = [];
  let d1 = $("div[class=abuttons]").find("a").attr("href");
  let d2 = $("div[class=abuttons]")
    .find("a[title='Download Server 02']")
    .attr("href");
  let d3 = $("div[class=abuttons]")
    .find("a[title='Download Server 03']")
    .attr("href");
  let d4 = $("div[class=abuttons]")
    .find("a[title='Download Server 04']")
    .attr("href");

  let tampungObject = new Object();
  tampungObject.download_server_1 = d1;
  tampungObject.download_server_2 = d2;
  tampungObject.download_server_3 = d3;
  tampungObject.download_server_4_source = d4;
  return tampungObject;
}

module.exports = snaptik;
