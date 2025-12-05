const nav = document.getElementById('fixed-nav')
const navBtn = document.querySelector('.nav-btn')
const navBar = document.getElementById('header')

window.addEventListener('scroll', ()=>{
    const scrollHeight = window.scrollY
    console.log(scrollHeight)
    const menuHeight = navBar.getBoundingClientRect().height
    console.log(menuHeight)

    if(scrollHeight>menuHeight){
        nav.classList.add('fixed-display')
    }else{
        nav.classList.remove('fixed-display')
    }
    if(scrollHeight>200){
        navBtn.classList.add('nav-visibility')
    }else{
        navBtn.classList.remove('nav-visibility')
    }
})

const scrollLinks = document.querySelectorAll('.scroll-link')
const bannerLogo = document.getElementById('banner')


scrollLinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()

        const id = e.currentTarget.getAttribute('href').slice(1)
        console.log(id)
        const element = document.getElementById(id)
        console.log(element)

        // Calculate Positions
        const navHeight = navBar.getBoundingClientRect().height
        const bannerHeight = bannerLogo.getBoundingClientRect().height


        let position = element.offsetTop - 120
        console.log(bannerHeight)
        console.log(navHeight)
        
        window.scrollTo({
            left:0,top:position,
        })
    })
})
const menuLinks = document.querySelectorAll('.menu-links')
menuLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        navBar.style.right = '-256px'      
        menuBtn.innerHTML = `<i class="fa fa-bars"></i>`
    })
})

// REVIEW SECTION
const reviews = [
    {
        id:1,
        author:`gaki`,
        img: `images/w-1.jpg`,
        job:`student`,
        text:`Working with Chrysolite Consultancy Firm was honestly the best decision I made for my research. They supported me from choosing the topic all the way to final proposal approval. Everything was clear, timely, and professionally done. Even my supervisor praised the quality of my work. If you want stress-free academic support, this is the team to trust.`
    },
    {
        id:2,
        author: `George`,
        img: `images/m-1.jpg`,
        job:`Data Client`,
        text:`I was really impressed by how Chrysolite handled my data analysis. They took care of everything from doing my data analysis using SPSS to explaining the results in a clear, simple way. For the first time, I actually understood my own data. Their support gave me a lot of confidence during my presentation. Truly reliable and professional.`
    },
    {
        id:3,
        author:`Gideon`,
        img: `images/m-2.jpg`,
        job:`Project Client`,
        text:`Our project required a well-prepared baseline report and proper data analysis. Chrysolite handled everything professionally from developing the tools to analyzing both qualitative and quantitative data. They delivered on time and presented the results clearly. Their support made our entire project process much smoother.`
    },
    {
        id:4,
        author:`Nelly`,
        img:`images/w-2.jpg`,
        job:`Researcher`,
        text:`As someone working on postgraduate research, I needed help with structuring my chapters and refining my literature review. Chrysolite Consultancy Firm delivered exactly what I needed. Their attention to detail, clarity, and originality completely transformed my work. My document finally felt polished and ready for submission.`
    },
    {
        id:5,
        author:`Cynthia`,
        img:`images/w-5.jpg`,
        job:`Research Client`,
        text:`Chrysolite Consultancy Firm made my whole research journey so much easier. They guided me step by step, helped with data analysis, and ensured my work met a high academic standard. I really appreciated their professionalism, confidentiality, and consistent support throughout. It truly felt like I was in good hands`
    }
]

const author = document.getElementById('author')
const img = document.getElementById('person-img')
const job = document.getElementById('job')
const info = document.getElementById('info')

const nextBtn = document.querySelector('.next-btn')
const prevBtn =document.querySelector('.prev-btn')


let currentItem = 0
window.addEventListener('DOMContentLoaded', ()=>{
    showPerson(currentItem)
})

function showPerson (person){
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.author
    job.textContent = item.job
    info.textContent = item.text
}

// NEXT BUTTON
nextBtn.addEventListener('click',()=>{
    currentItem++
    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    showPerson(currentItem)
})

// PREV BUTTON
// NEXT BUTTON
prevBtn.addEventListener('click',()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)

})

