// Navegação fixa ao rolar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scrolling para links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Validação do formulário de contato
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Simulação de envio
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
    this.reset();
});

// Animação ao rolar a página
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            const animationClass = element.classList.item(1);
            element.classList.add(animationClass);
        }
    });
}

// Carregamento da página
window.addEventListener('load', function() {
    // Loader
    const loader = document.querySelector('.loader-container');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1000);
    
    // Verifica a posição inicial
    animateOnScroll();
});

// Ativar animações ao rolar
window.addEventListener('scroll', animateOnScroll);

// Galeria de imagens do cardápio - efeito hover
const menuItems = document.querySelectorAll('.card-hover');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.card-img-top').style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('.card-img-top').style.transform = 'scale(1)';
    });
});

// Botão de volta ao topo
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});
