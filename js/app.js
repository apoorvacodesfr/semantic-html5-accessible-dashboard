(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      navigation.classList.toggle("is-open", !isExpanded);
    });
  }

  document.querySelectorAll("[data-open-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(button.dataset.openDialog);
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  });

  const taskForm = document.querySelector("#task-form");
  if (taskForm) {
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!taskForm.reportValidity()) return;
      const taskName = document.querySelector("#task-name").value.trim();
      const priority = document.querySelector("#task-priority").value;
      const message = document.querySelector("#task-message");
      message.textContent = `“${taskName}” was added with ${priority} priority (demo only).`;
      taskForm.reset();
      document.querySelector("#task-name").focus();
    });
  }

  const reportsSearch = document.querySelector("#report-search");
  if (reportsSearch) {
    reportsSearch.addEventListener("input", () => {
      const query = reportsSearch.value.trim().toLowerCase();
      const rows = document.querySelectorAll("#reports-table tbody tr");
      let visibleCount = 0;
      rows.forEach((row) => {
        const matches = row.textContent.toLowerCase().includes(query);
        row.hidden = !matches;
        if (matches) visibleCount += 1;
      });
      const status = document.querySelector("#search-status");
      status.textContent = visibleCount === 0 ? "No reports match your search." : `${visibleCount} report${visibleCount === 1 ? "" : "s"} shown.`;
    });
  }

  const settingsForm = document.querySelector("#settings-form");
  if (settingsForm) {
    settingsForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!settingsForm.reportValidity()) return;
      document.querySelector("#settings-message").textContent = "Your changes have been validated (demo only; nothing is sent to a server).";
    });
  }
})();
