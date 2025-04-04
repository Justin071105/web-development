const setup = () => {
    let verjaardag = new Date("2005-11-7")
    let vandaag = new Date()
    let aantaldagen = (vandaag-verjaardag )/ (1000 * 60 * 60 * 24)
    console.log(Math.round(aantaldagen))
}
window.addEventListener("load", setup);