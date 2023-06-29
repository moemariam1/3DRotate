const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
    const text = item.querySelector(".menu-text-container.origin span")
    .innerText.split("");
    item.querySelector(".menu-text-container.origin").innerHTML = "";

    text.forEach((letter, index) => {
        item.querySelector(
            ".menu-text-container.origin").innerHTML += `<span style="--index: ${index}">${letter}</span>`;
    })
    const textClone = item.querySelector(".menu-text-container.origin")
    .cloneNode(true);

    textClone.classList.remove("origin");
    textClone.classList.add("clone");
    item.appendChild(textClone);
});