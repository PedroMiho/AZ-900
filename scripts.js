// Exibe ou oculta o botão de "Voltar ao Topo" baseado na rolagem da página
document.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Adiciona um evento ao botão de "Voltar ao Topo" para rolar a página para o topo
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Adiciona um alerta ao clicar no link de contato
document.getElementById('contact-link').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de navegação
    alert('Em breve, teremos mais informações de contato disponíveis!');
});

// Exibe a descrição e a lista detalhada do curso quando um item da lista é clicado
const courseItems = document.querySelectorAll('#course-list .list-group-item');
const courseDescription = document.getElementById('course-description');
const body = document.body;
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

courseItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remove a descrição atual, se houver
        courseDescription.innerHTML = '';
        courseDescription.style.display = 'none';

        // Adiciona a descrição do curso clicado
        const description = this.getAttribute('data-description');
        courseDescription.innerHTML = `<strong>Descrição:</strong> ${description}`;

        // Cria a lista detalhada de tópicos do curso
        const topics = {
            "Curso de Técnico em Mecânica": ["Fundamentos de Mecânica", "Manutenção de Máquinas", "Segurança no Trabalho"],
            "Curso de Técnico em Eletroeletrônica": ["Circuitos Elétricos", "Eletrônica Digital", "Manutenção de Equipamentos"],
            "Curso de Técnico em Automação Industrial": ["Automação de Processos", "Programação de CLPs", "Controle de Sistemas"],
            "Curso de Técnico em Segurança do Trabalho": ["Normas de Segurança", "Prevenção de Acidentes", "Saúde Ocupacional"]
        };

        const courseName = this.textContent;
        if (topics[courseName]) {
            const topicList = document.createElement('ul');
            topicList.classList.add('list-group', 'mt-2');
            
            topics[courseName].forEach(topic => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.textContent = topic;
                topicList.appendChild(listItem);
            });

            courseDescription.appendChild(topicList);
            courseDescription.style.display = 'block';
        }

        // Expande o menu se estiver colapsado
        if (navbarCollapse.classList.contains('show')) {
            // Se o menu já estiver expandido, não faz nada
            return;
        } else {
            // Expande o menu
            navbarToggler.click();
        }
    });
});
