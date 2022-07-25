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
    WEB_APPS: "WEB_APPS",
    CODE: "CODE",
    MOBILE_APPS: "MOBILE_APPS",
    DESKTOP_APPS: "DESKTOP_APPS",
};

let selectedCategory = CATEGORIES.WEB_APPS;

const projects = [
    {
        category: CATEGORIES.WEB_APPS,
        title: "Company HEAT",
        icon: "window-sidebar",
        desc: "Air Ticket Selling Company Web App.",
        status: "deployed",
        link: "http://www.aviapromo.com.ua/",
        private: false,
    },
    {
        category: CATEGORIES.WEB_APPS,
        title: "Timesheet Manager",
        icon: "window-sidebar",
        desc: "Web App for people to manage their timesheets.",
        status: "in process",
        link: null,
        private: false,
    },
    {
        category: CATEGORIES.WEB_APPS,
        title: "Hotel SHATO",
        icon: "window-sidebar",
        desc: "Hotel Website built on CodeIgniter",
        link: null,
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.DESKTOP_APPS,
        title: "Timesheet Manager",
        icon: "tv",
        desc: "Simple Timesheet manager built for automating process of submitting a timesheet.",
        link: null,
        private: false,
        status: "in process",
    },
    {
        category: CATEGORIES.WEB_APPS,
        title: "PHD Evaluation System",
        icon: "window-sidebar",
        desc: "Application for PHD Students Evaluation.",
        link: null,
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.WEB_APPS,
        title: "Knights Game",
        icon: "window-sidebar",
        desc: "Web Online Game built on NodeJS/SQLite, no frameworks used except (Express.js).",
        link: null,
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.WEB_APPS,
        title: "Chicago Stations Visualization",
        icon: "window-sidebar",
        desc: "Parsing Script / Graph Respresentation of Public Dataset",
        link: "https://nickparov.github.io/cs424-doc-website/project2.html",
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.WEB_APPS,
        title: "ChatBot Service",
        icon: "window-sidebar",
        desc: "ChatBot service that provides users to directly interact with their customers.",
        link: null,
        private: false,
        status: "in process",
    },
    {
        category: CATEGORIES.CODE,
        title: "DB Export Module",
        icon: "code-slash",
        desc: "Laravel DB Excel export module",
        link: null,
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.CODE,
        title: "JS Admin Framework",
        icon: "code-slash",
        desc: "Built for Admin Panel Side of Web Application",
        link: null,
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.CODE,
        title: "Redirect Module",
        icon: "code-slash",
        desc: "Javascript redirect module.",
        link: null,
        private: true,
        status: "deployed",
    },
    {
        category: CATEGORIES.WEB_APPS,
        title: "Matrices Visualization",
        icon: "window-sidebar",
        desc: "Visualizing tool for matrix transformation (GROUP)",
        link: null,
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.WEB_APPS,
        title: "Building Based Web Game",
        icon: "window-sidebar",
        desc: "Web Based Building Park Game (GROUP)",
        link: null,
        private: false,
        status: "deployed",
    },
    {
        category: CATEGORIES.WEB_APPS,
        title: "Seaman Air Company",
        icon: "window-sidebar",
        desc: "Air Ticket Selling Company Web App.",
        link: "http://seaman-air-tickets.aviapromo.com.ua/",
        private: false,
        status: "deployed",
    },
];

const onLoad = {
    welcomeContentHeight: () => {
        // setup the welcome content height
        document.getElementById("main-content-box").style.height = `${
            window.innerHeight - 300
        }px`;
    },
    populateWorks: () => {
        function __singleProjHTMl({ title, icon, desc, type, status }) {
            const badgeClasses = [];
            if (status.includes("deployed")) {
                badgeClasses.push("badge", "bg-success");
            } else {
                badgeClasses.push("badge", "bg-warning");
            }

            return `<div class="project-box-parent col-lg-6 col-md-12 col-sm-12">
                        <div class="single-project-box" data-title="${title}">
                            <i class="background-white-icon bi bi-${icon}"></i>
                            <div class="project-description">
                                <p>${title}</p>
                                <span class="description-small">${desc}</span><br>
                                <span class="description-small ${badgeClasses.join(
                                    " "
                                )}">${status}</span>

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

        if (projectsToDisplay.length > 0)
            for (proj of projectsToDisplay) __popWork(proj);
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
        // document.querySelectorAll(".single-project-box").forEach((el) => {
        //     const redirect = () => window.open(proj.link, "_blank");
        //     el.addEventListener("click", (e) => {
        //         const projTitle = e.target.getAttribute("data-title");
        //         const proj = projects.filter(
        //             ({ title }) => title == projTitle
        //         )[0];
        //         proj.link && redirect();
        //         // // populate modal
        //         // ModalTools.populate(
        //         //     proj.title,
        //         //     proj.desc,
        //         //     proj.private,
        //         //     proj.link
        //         // );
        //         // show Modal
        //         // place here the func to open Modal
        //     });
        // });
    },
    commonHandlers: () => {
      // Arrow Handler
      const doContentBoxElem = document.getElementById("content-categories-box");
      document.getElementById("ArrowContainer").addEventListener("click", (e) => {
        e.preventDefault();

        window.scrollTo({top: doContentBoxElem.offsetTop + 150, behavior: 'smooth'})
      })

    }
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
