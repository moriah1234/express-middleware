const data = `If you want to become one of us, 
                create a file and write to it all the users data: 
                their ip, user agent(browser and more), 
                the route they are in, 
                and the time they entered the site.`

const blob = new Blob([data], { type: "octet-stream" });

const href = URL.createObjectURL(blob)

const a = Object.assign(document.createElement("a"), {
    href, style: "display:none",
    download: "not-a-virus.txt"
})

document.body.appendChild(a)

a.click();
URL.revokeObjectURL(href)
a.remove();