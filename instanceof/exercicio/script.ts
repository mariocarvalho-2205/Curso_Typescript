const link = document.getElementById("origamid")


// para selecionar o htmlAncor e substituir o href, é preciso validar com o instanceof
if (link instanceof HTMLAnchorElement) {
    // link.href = "https://" + "www.origamid.com"
    // link.href = `${"https://"}${"www.origamid.com"}`
    link.href = link.href.replace("http://", "https://")
}

console.log(link)