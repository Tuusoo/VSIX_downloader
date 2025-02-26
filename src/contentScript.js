(() => {
    const e = new MutationObserver(() => {
        const t = document
                .querySelector(".resources-async-div")
                ?.querySelector(".ux-section-resources")
                ?.querySelector("ul"),
            n = document.querySelector(".ux-section-other")?.querySelector("#version")
                ?.nextElementSibling?.textContent;
        if (document.body && t && n) {
            const o = window.location.href.split("?itemName=")[1],
                [c, r] = o.split("."),
                s = document.createElement("li"),
                i = document.createElement("a");
            (i.textContent = "下载VSIX"),
                (i.href = `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${c}/vsextensions/${r}/${n}/vspackage`),
                (i.target = "_blank"),
                s.appendChild(i),
                t.appendChild(s),
                e.disconnect();
        }
    });
    e.observe(document.documentElement, { childList: !0, subtree: !0 });
})();
