function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

export function getSingleBadgeHTML([badgeClasses, status]) {
    return `<span class="description-small ${badgeClasses}">${status}</span>`;
}
export function ___singeProjectHandle(isOpen) {
    return `
        <div class="single-proj-handle desktop-display-none">${
            isOpen ? "-" : "+"
        }</div>
    `;
}
export function ___singleProjectDescription(title, desc, badgeElems, icon) {
    return `
        <span class="description-small">${desc}</span>
        <div>
            ${badgeElems.map((el) => getSingleBadgeHTML(el)).join(" ")}
        </div>`;
}
export function __singleProjHTMl(props) {
    const { title, icon, desc, type, status, id, link, isOpen } = props;
    const badgeElems = [];
    const boxClasses = ["single-project-box"];

    if (status.includes("deployed")) {
        badgeElems.push(["badge bg-success", ""]);
    }

    if (status.includes("in process")) {
        badgeElems.push(["badge bg-warning", "in process"]);
    }

    if (props.private) {
        badgeElems.push(["badge bg-secondary", "private"]);
    }

    if (status.includes("on pause")) {
        badgeElems.push(["badge bg-secondary", "on pause"]);
    }

    if (status.includes("on pause") || props.private === true) {
        boxClasses.push("disabled-project-box");
    }

    if (!link) {
        boxClasses.push("link-empty");
    }

    const isMobileVal = isMobile();

    return `<div class="project-box-parent col-lg-6 col-md-12 col-sm-12">
                <div class="${boxClasses.join(
                    " "
                )}" data-title="${title}" data-id="${id}">
                    <div class="row">
                        <div class="col-xs-12 col-md-3 d-flex justify-content-center align-items-center">
                            <i class="background-white-icon bi bi-${icon}"></i>
                        </div>
                        <div class="project-description col-xs-12 col-md-9 d-flex flex-column justify-content-center">
                            <p class="project-description-item-title">
                                <i class="background-white-icon-mobile bi bi-${icon}"></i>
                                ${title}
                            </p>
                            ${
                                isMobileVal === false
                                    ? ___singleProjectDescription(
                                          title,
                                          desc,
                                          badgeElems,
                                          icon
                                      )
                                    : ""
                            }
                            ${
                                isOpen === true && isMobileVal === true
                                    ? ___singleProjectDescription(
                                          title,
                                          desc,
                                          badgeElems,
                                          icon
                                      )
                                    : ""
                            }
                        </div>
                    </div>
                    ${___singeProjectHandle(isOpen)}
            </div>`;
}
export function __popWork(proj) {
    document
        .getElementById("projects-list")
        .insertAdjacentHTML("beforeend", __singleProjHTMl(proj));
}

export function addProjEventListeners(projects, selectedCategory) {
    document.querySelectorAll(".single-project-box").forEach((el) => {
        // determine if mobile - expand
        // if desktop - visit link
        el.addEventListener("click", (e) =>
            onProjectClickHandler(e, projects, selectedCategory)
        );
    });
}

export function onProjectClickHandler(e, projects, selectedCategory) {
    const projID = parseInt(e.currentTarget.getAttribute("data-id"));
    const proj = projects.find((el) => el.id === projID);
    const { link, private: _private, status } = proj;

    console.log("Clicked!!!!", projects[1]);

    if (isMobile()) {
        projects = projects.map((projData) => {
            if (proj.id === projData.id) {
                projData.isOpen = !projData.isOpen;
            }
            return projData;
        });
        renderProjects(projects, selectedCategory);
    } else {
        const redirect = (l) => window.open(l, "_blank");
        link && !_private && status !== "on pause" && redirect(link);
    }
}

export function renderProjects(projects, selectedCategory) {
    // remove event listeners
    document.querySelectorAll(".single-project-box").forEach((el) => {
        // determine if mobile - expand
        // if desktop - visit link
        el.removeEventListener("click", onProjectClickHandler);
    });

    document
        .querySelectorAll(".project-box-parent")
        .forEach((el) => el.remove());

    const projectsToDisplay = selectedCategory
        ? projects.filter(({ category }) => selectedCategory == category)
        : [...projects];

    if (projectsToDisplay.length > 0) {
        projectsToDisplay.forEach((proj) => __popWork(proj));
    }

    addProjEventListeners(projects, selectedCategory);
}
