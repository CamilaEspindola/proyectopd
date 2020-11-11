const navMenu = document.getElementById('nav-menu'),
    toggleMenu=document.getElementById('nav-toggle'),
    closeMenu=document.getElementById('nav-close')

// mostrar
    toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
    })

// cerrar
    
    closeMenu.addEventListener('click',()=>{
        navMenu.classList.remove('show')
    })

    // remover
    const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
        navMenu.classList.remove('show')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    // scroll
    const sections = document.querySelectorAll('section[id]')

    window.addEventListener('scroll', scrollActivate)

    function scrollActivate(){
        const scrollY = window.pageYOffsets

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeigt
            const sectionTop = current.offsetTop - 50
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
                document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
            }else{
                document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
            }
        })
    }