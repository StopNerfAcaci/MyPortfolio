document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab");

            // remove active from all buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // show only selected tab panel
            tabPanels.forEach(panel => {
                panel.classList.toggle("active", panel.id === target);
            });
        });
    });
});