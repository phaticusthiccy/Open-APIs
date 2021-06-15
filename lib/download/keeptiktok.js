const fetch = require("node-fetch");
const cheerio = require("cheerio");
const cookie = require("cookie");
const FormData = require("form-data");

/**
 * KeepTiktok Scraper
 * @function
 * @param {String} url - Your tiktok url, example https://vt.tiktok.com/khpq9t.
 * @param {Object} options - Options (optional), not recommended, example {"user_agent": "GoogleBot"}.
 */

async function keeptiktok(url, options) {
  const geturl = await fetch("https://keeptiktok.com/?lang=ID", {
    method: "GET",
    headers: {
      "User-Agent": "GoogleBot",
    },
  });
  const caritoken = await geturl.text();
  let hasilcookie = geturl.headers
    .get("set-cookie")
    .split(",")
    .map((v) => cookie.parse(v))
    .reduce((a, c) => {
      return { ...a, ...c };
    }, {});
  hasilcookie = {
    _cfduid: hasilcookie._cfduid,
    PHPSESSID: hasilcookie.PHPSESSID,
  };
  hasilcookie = Object.entries(hasilcookie)
    .map(([name, value]) => cookie.serialize(name, value))
    .join("; ");
  const $ = cheerio.load(caritoken);
  const token = $('input[name="token"]').attr("value");
  const form = new FormData();
  form.append("url", url);
  form.append("token", token);
  const geturl2 = await fetch("https://keeptiktok.com/?lang=ID", {
    method: "POST",
    headers: {
      Accept: "/",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  const cariurl = await geturl2.text();
  const $$ = cheerio.load(cariurl);
  const hasil = $$("source").attr("src");
  return hasil;
}

module.exports = keeptiktok;
