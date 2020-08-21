const menuItems = {
    home: {text: 'Home', link: 'home.html', icon: 'fa fa-home'},
    callForPapers: {text: 'Call for Papers', link: 'callForPapers.html', icon: 'fas fa-scroll'},
    tfpSeries: {text: 'The TFP Series', link: 'http://www.trendsfp.com/tifp/', icon: 'fas fa-paper-plane'},
    organization: {text: 'Organization', link: 'organization.html', icon: 'fas fa-clipboard-list'},
    proceedings: {text: 'Proceedings', link: 'proceedings.html', icon: 'fas fa-book'},
    registration: {text: 'Registration', link: 'registration.html', icon: 'fas fa-sign-in-alt'}
};

const renderMenu = (pageKey) => {
    const menuItemsHtml = Object.keys(menuItems).map((menuItemKey) => {
        const menuItem = menuItems[menuItemKey];
        return `<li class="py-2 list-group-item bg-transparent col mt-3 text-white page-menu-item ${menuItemKey === pageKey ? "active" : ""}" 
                onclick="window.location.href='${menuItem.link}'">
                <i class="${menuItem.icon}"></i> ${menuItem.text}</li>`
    }).join('');
    const menuInnerHtml = `  
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse-improved collapse" id="navbarContent">
                    <ul class="list-group sticky-top">
                        <li onclick="window.location.href='home.html'" 
                            class="py-2 list-group-item bg-transparent col h3 font-weight-bold mt-3 mb-3 text-white page-menu-item">
                            TFP 2021</li>
                        ${menuItemsHtml}
                    </ul>
                </div>
`;
    const pageMenuHtmlElement = document.getElementById("page-menu");
    pageMenuHtmlElement.innerHTML = menuInnerHtml;
    pageMenuHtmlElement.classList.add("navbar", "navbar-dark", "navbar-expand-lg", "col-lg-2", "flex-lg-column", "bg-info");

};

