let termForm = document.getElementById("terminal-form");
let termInput = document.getElementById("terminal-input");
let termBody = document.getElementsByClassName("terminal-wrapper")[0];

document.body.addEventListener('click', () => {
    termInput.focus()
})

let commands = {
    "cls": clearCommand,
    "neofetch": winfetch,
    "winfetch": winfetch,
    "whoami": whoami,
    "about": about,
    "help": help
}

termForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const cmd = termInput.value.split(" ")[0]
    const cmdContainer = document.createElement("div")
    const cmdCommand = document.createElement("span")
    cmdCommand.classList.add("command")
    cmdCommand.innerText = termInput.value
    const cmdElement = document.createElement("h1")
    cmdElement.innerText = "PS C:\\Users\\Remix\\Public> "
    cmdElement.classList.add("user-input")
    cmdElement.appendChild(cmdCommand)
    cmdContainer.appendChild(cmdElement)

    if(cmd == "") return termBody.insertBefore(cmdContainer, termBody.childNodes[2])
    if(!Object.keys(commands).includes(cmd)) error(cmd, cmdContainer)
    else commands[cmd](cmdContainer)
    
    if (cmd != "cls") termBody.insertBefore(cmdContainer, termBody.childNodes[2])

    termInput.value = ""
    termInput.focus()
})

function error(cmd, cmdContainer) {
    const error = cmd + ` : The term '${cmd}' is not a recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.\nAt line:1 char:1\n+ ${termInput.value}\n + ${createUnderscore(cmd)}`
    const errorElement = document.createElement("span")
    errorElement.classList.add("error")
    errorElement.innerText = error
    cmdContainer.classList.add("wanna-be-removed-in-cls")
    cmdContainer.appendChild(errorElement)
}

function createUnderscore(input) {
    let str = ""
    for (let i = 0; i < input.split("").length; i++) {
        str += "~"
    }

    return str;
}

function clearCommand(_) {
    while (termBody.lastElementChild && termBody.lastElementChild.nodeName == "DIV") termBody.lastElementChild.remove()
}

function winfetch(cmdContainer) {
    let wf = " " +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">remix</span>@<span class=\"command\">DESKTOP-R3M1XPC</span><br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;---------------------<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">OS</span>: Windows 11 Pro [64-bit]<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Host</span>: To Be Filled By O.E.M. B450 Steel Legend<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Kernel</span>: 10.0.22631.0<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Motherboard</span>: ASRock B450 Steel Legend<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Uptime</span>: 8 hours 2 minutes<br>" +
        " <span class=\"logo-invisible\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Packages</span>: 43 (choco)<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Shell</span>: PowerShell v5.1.22621.2506<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Resolution</span>: 1920x1080<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Terminal</span>: Windows Terminal<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">CPU</span>: AMD Ryzen 7 5700X 8-Core Processor @ 3.394GHz<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">GPU</span>: NVIDIA GeForce GTX 970<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Memory</span>: 10,2 GiB / 15,93 GiB (64%)<br>" +
        " <span class=\"logo\">&nbsp;lllllllllllllll&nbsp;&nbsp;lllllllllllllll</span>&nbsp;&nbsp;<span class=\"command\">Disk (C:)</span>: 472 GiB / 476 GiB (99%)<br>"

    let wfElement = document.createElement("h1")
    wfElement.classList.add("default-text")
    wfElement.innerHTML = wf
    cmdContainer.appendChild(wfElement)
}

function whoami(cmdContainer) {
    let w = document.createElement("h1")
    w.classList.add("default-text")
    w.innerText = "desktop-r3m1xpc\\remix"
    cmdContainer.appendChild(w)
}

function about(cmdContainer) {
    let element = document.createElement("h1")
    element.classList.add("default-text")
    element.innerText = "Hi! My name is Filip. For 4 years now, I've been passionate about programming, and currently, I specialize in creating websites both on the frontend and backend. My journey with coding started at a young age, and since then, I've been constantly developing my skills. I'm fascinated by creating functional and aesthetic websites, and I treat every project as a challenge to learn new technologies. I hope that in the future, I'll be able to share my skills with a wider audience and contribute something valuable to the world of technology."
    cmdContainer.appendChild(element)
}

function help(cmdContainer) {
    let element = document.createElement("h1")
    element.classList.add("default-text")
    element.innerHTML = "about&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- About Remix<br>" +
                        "cls&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear Console<br>" +
                        "whoami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Info about user<br>" +
                        "winfetch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Windows version of neofetch<br>"
    cmdContainer.appendChild(element)
}