var axios = require("axios")
async function cpu_info(cpu) {
    var data;
    var time = new Date().getTime().toString()
    var payload = await axios.post("https://www.notebookcheck.net/Mobile-Processors-Benchmark-List.2436.0.html?", {
        search: cpu,
        or: "0",
        deskornote: "2",
        minTDP: "",
        maxTDP: "",
        restrict_cores: "",
        restrict_threads: "",
        restrict_architecture: "",
        month: "",
        archive: "1",
        showBars: "1",
        showPercent: "1",
        perfrating: "1",
        cpu_fullname: "1",
        l2cache: "1",
        l3cache: "1",
        tdp: "1",
        mhz: "1",
        turbo_mhz: "1",
        cores: "1",
        threads: "1",
        cinebench_r15_single: "1",
        cinebench_r15_multi: "1",
        cinebench_r20_single: "1",
        cinebench_r20_multi: "1",
        x265: "1",
        blender: "1",
        "7-zip_single": "1",
        "7-zip_multiple": "1",
        geekbench5_1_single: "1",
        geekbench5_1_multi: "1",
        webxprt3: "1",
        barlength: "0",
        debug: "",
        headers: {
            cookie: "_ga=GA1.2.2545865.1644374580; _gid=GA1.2.430461679.1644374580; _lr_env_src_ats=false; __gads=ID=6101c661a9f56b43:T=1644374583:S=ALNI_MbGS1QCU5dXSQG-qTkZ3_5T3ORJIQ; _lr_retry_request=true; nbc_call=3; cto_bundle=aPW6219CdFZPdTdFY3VueVAxODM0VEY3R1lYdzJWSWRWNWFqYWVOSDFWOW9VJTJCY1FrODY4TTdrSkk1dUQzWWFocjc2WFdRV3Z1NG1Db0llUElJTlBrZXFTZTZHWmxrVnhqTUZ3a0NMTkRFa1EyOTJPMU10NDlMa0pGUGpwb3g2aFh0Y2dLZW0lMkJacVdzaXoxckZYaGpyUkRhM05BJTNEJTNE; cto_bidid=gWNhV19jQ2glMkZnY2FyNkpLZU0lMkZLVVVWQTF4WkVZcjB2QUxJa0dPVHAlMkY5bnc4dldyYVowQSUyQm9sUFZYT28lMkZsZWwwTEslMkJycjQlMkZkMWZiVzM2OUdtUDNKYXBRN1l6R2t2bzdyWnQ0bnhqZDY0Z292RmtRcDVzalNicnVqTldLSjZubFpGSUh4; cto_bundle=Fb7R319CdFZPdTdFY3VueVAxODM0VEY3R1lTZXN5RUlFSHN6N1RMOUZ4bFo0NGhaektMbERNT2kyRHk1ejZJdVNZZm0zaTJ3SEFSNkJ0ZEo5RnE0OTN6d2ZONFR5bmRzc2xYaDFxeDNDdXhNd1lBQ3MwRHR3c2x0TUZPdVNSanlDYXhMbWJ4TWliVjRsQ3N2RXVJWXBHendFUWclM0QlM0Q; cto_bundle=Fb7R319CdFZPdTdFY3VueVAxODM0VEY3R1lTZXN5RUlFSHN6N1RMOUZ4bFo0NGhaektMbERNT2kyRHk1ejZJdVNZZm0zaTJ3SEFSNkJ0ZEo5RnE0OTN6d2ZONFR5bmRzc2xYaDFxeDNDdXhNd1lBQ3MwRHR3c2x0TUZPdVNSanlDYXhMbWJ4TWliVjRsQ3N2RXVJWXBHendFUWclM0QlM0Q; _pbjs_userid_consent_data=3524755945110770",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        }
    })
    try {
        data = payload.data.split('</label></td><td class="specs"><a href="')[1].split('"')[0]
    } catch {
        throw new Error ("Cannot Find Any CPU")
    }
    return data;
}
module.exports = cpu_info;