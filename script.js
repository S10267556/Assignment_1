function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
} /*shows the side bar*/

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none' 
} /*hides the sidebar*/

let upto = 15000; /*starts counter at 15000*/
let counts = setInterval(updated, 5000); /*counter is updated every 5 seconds*/

function updated() {
    let count = document.getElementById("tree-counter");
    count.innerHTML = ++upto; /*increments the number*/
    if (upto === 15825) {
        clearInterval(counts);
    } /*once the number reaches 15825, the counter resets to prevent lag*/
}

/*count for volunteers*/
let uptoV = 3582; /*starts counter at 3582*/
let countsV = setInterval(updatedV, 30000); /*counter is updated every 30 seconds*/

function updatedV() {
    let count = document.getElementById("volunteer-num");
    count.innerHTML = ++uptoV; /*increments the number*/
    if (uptoV === 3652) {
        clearInterval(countsV);
    } /*once the number reaches 3652, the counter resets to prevent lag*/
}