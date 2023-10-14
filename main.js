document.title = "project-js-7";
let input = document.getElementById("input");
let button = document.getElementById("button");
let parent = document.getElementById("shape");
input.style.cssText = `
padding: 0.8em;
border-radius: 3px;
`;
button.style.cssText = `
background-color: #590C69;
color: white;
padding: 0.8em 1.5em;
border-radius: 3px;
border: none;
cursor: pointer;
`;
parent.style.cssText = `
background-color: white;
padding: 2em;
border-radius: 30px;
min-height: 20em;
min-width: fit-content;
max-width: 20em;
text-align: center;
`;
button.onclick = function (params) {
        let text  = document.createElement("div")
        text.innerHTML = `<span>${input.value}</span>`;
        text.style.cssText = ` 
        margin: 10px;
        border-top: 1px solid #eee;
        padding: 10px;
        `;
        parent.appendChild(text)
}