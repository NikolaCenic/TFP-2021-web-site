const menuItems = {
    home: {text: 'Home', link: 'home.html'},
    callForPapers: {text: 'Call for Papers', link: 'callForPapers.html'},
    tfpSeries: {text: 'The TFP Series', link: 'http://www.trendsfp.com/tifp/'},
    organization: {text: 'Organization', link: 'organization.html'},
    proceedings: {text: 'Proceedings', link: 'proceedings.html'},
    registration: {text: 'Registration', link: 'registration.html'}
};

const renderMenu = (pageKey) => {
    const menuItemsHtml = Object.keys(menuItems).map((menuItemKey) => {
        console.log(menuItems[menuItemKey].link);
        return `<li class="py-2 list-group-item bg-transparent col mt-3 text-white page-menu-item ${menuItemKey === pageKey ? "active" : ""}" 
                onclick="window.location.href='${menuItems[menuItemKey].link}'">${menuItems[menuItemKey].text}</li>`
    }).join('');
    const menuInnerHtml = `  
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse " id="navbarContent">
                    <ul class="list-group sticky-top">
                        <li onclick="window.location.href='home.html'" 
                            class=" py-2 list-group-item bg-transparent col h3 font-weight-bold mt-3 mb-3 text-white page-menu-item">
                            TFP 2021</li>
                        ${menuItemsHtml}
                    </ul>
                </div>
`;
    const pageMenuHtmlElement = document.getElementById("page-menu");
    pageMenuHtmlElement.innerHTML = menuInnerHtml;
    pageMenuHtmlElement.classList.add("navbar", "navbar-dark", "navbar-expand-lg", "col-lg-2", "flex-lg-column", "bg-info");

};

