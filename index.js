const ModalTools = (function () {
    function populate(title, desc, private, link = null) {
        // change title
        document.querySelector(
            "#modal-single-project .modal__title"
        ).textContent = title;
        // change desc
        document.querySelector("#modal-single-project .alert").textContent =
            desc;
        // change link
        const linkNode = document.querySelector(
            "#modal-single-project .link__box .link"
        );
        if (link) {
            linkNode.innerHTML = `<span>Visit link</span> <i style="font-size: 1.2em;" class="bi bi-link-45deg"></i>`;
            linkNode.href = link;
        } else {
            linkNode.innerHTML = `<span>${
                private ? "Private" : "No Link"
            }</span>`;
            linkNode.href = `#`;
        }
    }

    return {
        populate,
    };
})();

let DEBUG_ON = true;
const debug = (msg, ...args) => {
    DEBUG_ON && console.log(msg);
    DEBUG_ON && args && args.forEach((arg) => console.log(arg));
};

function generateRandNum(min, max) {
    return Math.floor(Math.random() * max) + min;
}

const CATEGORIES = {
    SOFTWARE: "SOFTWARE",
    CODE: "CODE",
    MOBILE_APPS: "MOBILE_APPS",
    // DESKTOP_APPS: "DESKTOP_APPS",
};

let selectedCategory = CATEGORIES.SOFTWARE;

let projects = [
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "Company HEAT",
        icon: "window-sidebar",
        desc: "Air Ticket Selling Company Web App.",
        status: "deployed",
        link: "http://www.aviapromo.com.ua/",
        private: false,
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "Timesheet Manager",
        icon: "window-sidebar",
        desc: "Web App for people to manage their timesheets.",
        status: "in process",
        link: null,
        private: false,
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "Hotel SHATO",
        icon: "window-sidebar",
        desc: "Hotel Website built on CodeIgniter",
        link: "https://github.com/nickparov/Hotel-Website-PHP",
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "PHD Evaluation System",
        icon: "window-sidebar",
        desc: "Application for PHD Students Evaluation.",
        link: "https://phd-eval.engr.uic.edu/dgs?page=ControlPanel",
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "Knights Game",
        icon: "window-sidebar",
        desc: "Web Online Game built on NodeJS/SQLite, no frameworks used except (Express.js).",
        link: "https://knight-app-backend-3.herokuapp.com/",
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "Chicago Stations Visualization",
        icon: "window-sidebar",
        desc: "Parsing Script / Graph Respresentation of Public Dataset",
        link: "https://nickparov.github.io/cs424-doc-website/project2.html",
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "ChatBot Service",
        icon: "window-sidebar",
        desc: "ChatBot service that provides users to directly interact with their customers.",
        link: null,
        private: false,
        status: "in process",
    },
    {
        category: CATEGORIES.CODE,
        id: null,
        title: "DB Export Module",
        icon: "code-slash",
        desc: "Laravel DB Excel export module",
        link: null,
        private: true,
        status: "deployed",
    },
    {
        category: CATEGORIES.CODE,
        id: null,
        title: "JS Admin Framework",
        icon: "code-slash",
        desc: "Built for Admin Panel Side of Web Application",
        link: null,
        private: true,
        status: "deployed",
    },
    {
        category: CATEGORIES.CODE,
        id: null,
        title: "Redirect Module",
        icon: "code-slash",
        desc: "Javascript redirect module.",
        link: null,
        private: true,
        status: "deployed",
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "Matrices Visualization",
        icon: "window-sidebar",
        desc: "Visualizing tool for matrix transformation (GROUP).",
        link: "https://volodymyrvakhniuk.github.io/Linear-Transformation/",
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "Pathways Project.",
        icon: "window-sidebar",
        desc: "Mobile app built using ReactNative. LinkedIn like app.",
        link: "https://github.com/nickparov/pathways-project-mobile",
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "Building Based Web Game",
        icon: "window-sidebar",
        desc: "Web Based Building Park Game (GROUP).",
        link: "https://national-park-builder.herokuapp.com/",
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.SOFTWARE,
        id: null,
        title: "Seaman Air Company",
        icon: "window-sidebar",
        desc: "Air Ticket Selling Company Web App.",
        link: "http://seaman-air-tickets.aviapromo.com.ua/",
        private: false,
        status: "deployed",
    },
];

projects = projects.map((el, index) => {
    return { ...el, id: index };
});

const onLoad = {
    welcomeContentHeight: () => {
        // setup the welcome content height
        document.getElementById("main-content-box").style.height = `${
            window.innerHeight - 300
        }px`;
    },
    populateWorks: () => {
        function __singleProjHTMl({
            title,
            icon,
            desc,
            type,
            status,
            id,
            link,
            private,
        }) {
            const badgeElems = [];
            const boxClasses = ["single-project-box"];

            if (status.includes("deployed")) {
                badgeElems.push(["badge bg-success", "deployed"]);
            }

            if (status.includes("in process")) {
                badgeElems.push(["badge bg-warning", "in process"]);
            }

            if (private) {
                badgeElems.push(["badge bg-secondary", "private"]);
            }

            if (!link) {
                boxClasses.push("link-empty");
            }

            function getSingleBadgeHTML([badgeClasses, status]) {
                return `<span class="description-small ${badgeClasses}">${status}</span>`;
            }

            return `<div class="project-box-parent col-lg-6 col-md-12 col-sm-12">
                        <div class="${boxClasses.join(
                            " "
                        )}" data-title="${title}" data-id="${id}">
                            <i class="background-white-icon bi bi-${icon}"></i>
                            <div class="project-description">
                                <p>${title}</p>
                                <span class="description-small">${desc}</span><br>
                                ${badgeElems.map(el => getSingleBadgeHTML(el)).join(" ")}
                            </div>
                        </div>
                    </div>`;
        }

        // remove els
        document
            .querySelectorAll(".project-box-parent")
            .forEach((el) => el.remove());

        function __popWork(proj) {
            document
                .getElementById("projects-list")
                .insertAdjacentHTML("beforeend", __singleProjHTMl(proj));
        }

        projectsToDisplay = selectedCategory
            ? projects.filter(({ category }) => selectedCategory == category)
            : [...projects];

        if (projectsToDisplay.length > 0) {
            console.log(projectsToDisplay);
            projectsToDisplay.forEach((proj) => __popWork(proj));
        }
    },
    projCategoryHandlers: () => {
        function txtToCatID(category) {
            if (category.includes("ALL")) return "ALL";
            // which cat?
            let categoryID = category.toUpperCase().substr(1, category.length);
            console.log(categoryID);
            categoryID =
                categoryID.split(" ").length > 1
                    ? categoryID.split(" ").join("_")
                    : categoryID;

            return categoryID;
        }

        document.querySelectorAll("span.proj-category").forEach((_node) => {
            _node.addEventListener("click", (e) => {
                e.preventDefault();

                if (!e.target.tagName.includes("SPAN")) return;

                let catID = txtToCatID(e.target.innerText);
                // change selectedCat
                selectedCategory = CATEGORIES[catID];
                // update works
                onLoad.populateWorks();
                onLoad.singleProjModalHandlers();
                // remove the other selected item
                document
                    .querySelector("span.proj-category.selected")
                    .classList.remove("selected");
                // add to curr node
                _node.classList.add("selected");
            });
        });
    },
    footerLinkClickHandler: () => {
        // when clicked
        // go to my github account in new tab
    },
    containerResponsivenessHandler: () => {
        // when < 1200px
        // remove class p-5
        // add class p-1
    },
    singleProjModalHandlers: () => {
        document.querySelectorAll(".single-project-box").forEach((el) => {
            const redirect = (l) => window.open(l, "_blank");

            el.addEventListener("click", (e) => {
                const projID = parseInt(
                    e.currentTarget.getAttribute("data-id")
                );
                const proj = projects.find((el) => el.id === projID);
                const { link } = proj;

                link && redirect(link);
            });
        });
    },
    commonHandlers: () => {
        // Arrow Handler
        const doContentBoxElem = document.getElementById(
            "content-categories-box"
        );
        document
            .getElementById("ArrowContainer")
            .addEventListener("click", (e) => {
                e.preventDefault();

                window.scrollTo({
                    top: doContentBoxElem.offsetTop + 150,
                    behavior: "smooth",
                });
            });
    },
};

// ONLOAD Handler
document.addEventListener("DOMContentLoaded", function () {
    debug("Setup start...");
    Object.keys(onLoad).forEach((_key) => {
        // debug
        debug(_key);
        // exec func
        onLoad[_key]();
    });
    debug("Done.");
});
