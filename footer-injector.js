async function loadFooter(){
    try{
        const response = await fetch('footer.html')
        const footerHTML = await response.text()
        document.body.insertAdjacentHTML('beforeend', footerHTML)
    }catch (error){
        console.error('Error loading footer:', error)
    }
}

loadFooter()