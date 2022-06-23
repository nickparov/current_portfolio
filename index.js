
const ModalTools = (function() {
  function populate(title, desc, private, link = null) {
    // change title
    document.querySelector('#modal-single-project .modal__title').textContent = title;
    // change desc
    document.querySelector('#modal-single-project .alert').textContent = desc;
    // change link
    const linkNode = document.querySelector('#modal-single-project .link__box .link');
    if(link) {
      linkNode.innerHTML = `<span>Visit link</span> <i style="font-size: 1.2em;" class="bi bi-link-45deg"></i>`;
      linkNode.href = link;
    } else {
      linkNode.innerHTML = `<span>${private ? "Private" : "No Link"}</span>`
      linkNode.href = `#`;
    }
  }

  return {
    populate
  }
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

let selectedCategory = null;

const projects = [
  {
    type: "Website",
    category: CATEGORIES.WEB_APPS,
    title: "Aviapromo",
    icon: "window-sidebar",
    desc: "Air ticket selling website",
    status: "deployed",
    link: "http://www.aviapromo.com.ua/",
    private: false,
  },
  {
    type: "Website",
    category: CATEGORIES.WEB_APPS,
    title: "Shato",
    icon: "window-sidebar",
    desc: "Hotel Website built on CodeIgniter",
    link: null,
    private: false,
    status: "deployed",
  },
  {
    type: "Website",
    category: CATEGORIES.DESKTOP_APPS,
    title: "Timesheet Manager",
    icon: "tv",
    desc: "Simple Timesheet manager built for automating process of submitting.",
    link: null,
    private: false,
    status: "in process",
  },
  {
    type: "Website",
    category: CATEGORIES.WEB_APPS,
    title: "Uni App Admin Panel",
    icon: "window-sidebar",
    desc: "Admin panel built for University App.",
    link: null,
    private: false,
    status: "deployed",
  },
  {
    type: "Website",
    category: CATEGORIES.WEB_APPS,
    title: "Trade/Loot Game.",
    icon: "window-sidebar",
    desc: "Web Online Game built on NodeJS/SQLite, no frameworks used except (Express.js).",
    link: null,
    private: false,
    status: "deployed",
  },
  {
    type: "Website",
    category: CATEGORIES.WEB_APPS,
    title: "ChatBot Service",
    icon: "window-sidebar",
    desc: "ChatBot service that provides users to directly interact with their customers.",
    link: null,
    private: false,
    status: "in process",
  },
  {
    type: "Website",
    category: CATEGORIES.CODE,
    title: "DB Export Module",
    icon: "code-slash",
    desc: "Laravel DB Excel export module",
    link: null,
    private: false,
    status: "deployed",
  },
  {
    type: "Website",
    category: CATEGORIES.CODE,
    title: "JS Admin Framework",
    icon: "code-slash",
    desc: "Built for Admin Panel Side of Web Application",
    link: null,
    private: false,
    status: "deployed",
  },
  {
    type: "Website",
    category: CATEGORIES.CODE,
    title: "Redirect Module",
    icon: "code-slash",
    desc: "Javascript redirect module.",
    link: null,
    private: true,
    status: "deployed",
  },
];

let projectsToDisplay = [];

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
      if(status.includes("deployed")) {
        badgeClasses.push('badge', 'bg-success');
      } else {
        badgeClasses.push('badge', 'bg-warning');
      }

      return `<div class="project-box-parent col-lg-6 col-md-12 col-sm-12">
                        <div class="single-project-box" data-title="${title}">
                            <i class="background-white-icon bi bi-${icon}"></i>
                            <div class="project-description">
                                <p>${title}</p>
                                <span class="description-small">${desc}</span><br>
                                <span class="description-small ${badgeClasses.join(" ")}">${status}</span>

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
      console.log(categoryID)
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
      el.addEventListener("click", (e) => {
        const projTitle = e.target.getAttribute("data-title");
        const proj = projects.filter(({title}) => title == projTitle)[0];
        console.log(proj)
        // populate modal
        ModalTools.populate(proj.title, proj.desc, proj.private, proj.link);
        // show Modal
        // place here the func to open Modal
      });
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
