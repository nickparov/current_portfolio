import AOS from "aos";
import "aos/dist/aos.css";

import "../style.css";

import Resume from "../CV.pdf";
import main from "../main.jpg";
import arrowPng from "../arrow.png";
import {
    ___singeProjectHandle,
    ___singleProjectDescription,
    __singleProjHTMl,
    __popWork,
    renderProjects,
    addProjEventListeners,
} from "./projectsUI";

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

// assets setup
document.getElementById("resumeDownloadBtn").href = Resume;
document.getElementById("mainImage").src = main;
document.getElementById("arrowPng").src = arrowPng;

// animations
AOS.init({ delay: 100 });

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
};

let selectedCategory = CATEGORIES.SOFTWARE;

let projects = [
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "'HEAT' ltd.",
        icon: "window-sidebar",
        desc: "Air Ticket Selling Company landing page.",
        link: "http://seaman-air-tickets.aviapromo.com.ua/",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: true,
        id: null,
        title: "'HEAT' ltd.",
        icon: "window-sidebar",
        desc: "Air Ticket Selling Company Website.",
        status: "",
        link: "http://www.aviapromo.com.ua/",
        private: false,
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "PNR Converter",
        icon: "window-sidebar",
        desc: "Web App Converter (PNR to Human Readable Text).",
        link: "https://nickparov.github.io/PRN_heat/",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Hotel",
        icon: "window-sidebar",
        desc: "Web App for Hotel with custom CMS",
        link: "https://github.com/nickparov/Hotel-Website-PHP",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "PHD Evaluation",
        icon: "window-sidebar",
        desc: "Web App for PHD Evaluation Processes for University staff.",
        link: "https://phd-eval.engr.uic.edu/dgs?page=ControlPanel",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "'Pathways'",
        icon: "phone",
        desc: "Mobile app built using ReactNative. LinkedIn like app.",
        link: "https://github.com/nickparov/pathways-project-mobile",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Knights Game",
        icon: "window-sidebar",
        desc: "Web Online Card Based Game",
        link: "https://knight-app-backend-3.herokuapp.com/",
        private: false,
        status: "on pause",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Town Data Visualization",
        icon: "window-sidebar",
        desc: "Rich Graph Respresentation and Parsing script of Public Chicago Dataset",
        link: "https://nickparov.github.io/cs424-doc-website/project2.html",
        private: true,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "DB Export",
        icon: "code-slash",
        desc: "Laravel DB Excel export module",
        link: null,
        private: true,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Custom JS Framework",
        icon: "code-slash",
        desc: "Built for Admin Panel Side of PHDEval Web App",
        link: null,
        private: true,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Matrices Visualization",
        icon: "window-sidebar",
        desc: "Visualizing tool for matrix transformation.",
        link: "https://volodymyrvakhniuk.github.io/Linear-Transformation/",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Building Game",
        icon: "window-sidebar",
        desc: "Web Based Building Park Game.",
        link: null,
        private: false,
        status: "on pause",
    },
];

projects = projects.map((el, index) => {
    return { ...el, id: index };
});

const onLoad = {
    populateWorks: () => {
        // render all projects elements
        renderProjects(projects, selectedCategory);
    },
    projCategoryHandlers: () => {
        function txtToCatID(category) {
            if (category.includes("ALL")) return "ALL";
            // which cat?
            let categoryID = category.toUpperCase().substr(1, category.length);
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
    ignore_commonHandlers: () => {
        // Arrow Handler
        const doContentBoxElem = document.getElementById(
            "content-categories-box"
        );
        document
            .getElementById("ArrowContainer")
            .addEventListener("click", (e) => {
                e.preventDefault();

                window.scrollTo({
                    top: doContentBoxElem.offsetTop - 50,
                    behavior: "smooth",
                });
            });
    },
};

// ONLOAD Handler
document.addEventListener("DOMContentLoaded", function () {
    debug("Setup start...");
    Object.keys(onLoad).forEach((_key) => {
        if (_key.includes("ignore")) return;
        // exec func
        onLoad[_key]();
    });
    debug("Setup Done...");
});

