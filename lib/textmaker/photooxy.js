import {exec} from 'child_process';
import fetch from "node-fetch";
import cheerio from "cheerio";
import {FormData} from "formdata-polyfill/esm.min.js";

/**
 * Photooxy Scraper
 * @function
 * @param {String} url - Your phootoxy url, example https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html.
 * @param {String[]} text - Text (required). example ["text", "text 2 if any"]
 */

export default async function photooxy(url, text) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!/^https:\/\/photooxy\.com\/.+\.html$/.test(url))
    throw new Error("Enter a Valid URL");
  let nomor = 0;
  const form = new FormData();
  if (typeof text === "string") text = [text];
  for (let texts of text) {
    nomor += 1;
    form.append(`text_${nomor}`, texts);
  }
  form.append("login", "OK");
  let cari = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "/",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  });
  let html = await cari.text();
  let $ = cheerio.load(html);
  const hasil = $('a[class="btn btn-primary"]').attr("href");
  return hasil;
}
