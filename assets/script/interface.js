document.addEventListener("DOMContentLoaded", () => {
    let box = document.querySelectorAll(".box");

    box.forEach(
        (box) => {
            box.addEventListener("click", handleClick);
        });
})
function handleClick(event) {
    let box = event.target;
    let id = box.id;
    toMove(id);

}
function restart() {
    location.reload();
}
