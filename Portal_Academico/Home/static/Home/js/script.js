// Função para alternar o menu lateral
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");  // Adiciona ou remove a classe 'active' ao menu lateral
}

// Função para alternar a exibição de seções (tarefas, notificações)
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.toggle("hidden");  // Adiciona ou remove a classe 'hidden' para esconder/mostrar a seção
}
