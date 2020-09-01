openCloseToggler=0;/* deffinitely not the greatest approach but I had issues converting vh to px-Nikola*/
function changeSize()
{elem=document.getElementsByClassName('navbar')[0];
console.log(screen.width)
if(screen.width>400)
{
    if(openCloseToggler==0)
    {
        elem.style.height='50vh';
        openCloseToggler=1;
    }
    
      else 
      {
          elem.style.height='10vh';
          openCloseToggler=0;
      }
    }
    else
{
    if(openCloseToggler==0)
    {
        elem.style.height='30vh';
        openCloseToggler=1;
    }
    
      else 
      {
          elem.style.height='8vh';
          openCloseToggler=0;
      }
    }
      
}
const menuItems = {
    home: {text: 'Home', link: 'index.html', icon: 'fa fa-home',target:'_self'},
    callForPapers: {text: 'Call for Papers', link: 'callForPapers.html', icon: 'fas fa-scroll',target:'_self'},
    tfpSeries: {text: 'The TFP Series', link: 'http://www.trendsfp.com/tifp/', icon: 'fas fa-paper-plane',target:'_blank'},
    organization: {text: 'Organization', link: 'organization.html', icon: 'fas fa-clipboard-list',target:'_self'},
    // proceedings: {text: 'Proceedings', link: 'proceedings.html', icon: 'fas fa-book'},
    // registration: {text: 'Registration', link: 'registration.html', icon: 'fas fa-sign-in-alt'}
};

const renderMenu = (pageKey) => {
    const menuItemsHtml = Object.keys(menuItems).map((menuItemKey) => {
        const menuItem = menuItems[menuItemKey];
        return `<li class="py-2 list-group-item bg-transparent col mt-3 text-white page-menu-item ${menuItemKey === pageKey ? "active" : ""}" 
                ">
            <a class='text-white text-decoration-none' href='${menuItem.link}' target='${menuItem.target}'>  <i class="${menuItem.icon}" ></i> ${menuItem.text}</a></li>`
    }).join('');
    const menuInnerHtml = `  
                <button class="navbar-toggler" id='toggler' type="button" data-toggle="collapse" data-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse-improved collapse" id="navbarContent">
                    <ul class="list-group sticky-top">
                        <li onclick="window.location.href='index.html'" 
                            class="py-2 list-group-item bg-transparent col h3 font-weight-bold text-white page-menu-item">
                            TFP 2021</li>
                        ${menuItemsHtml}
                    </ul>
                </div>
`;
    const pageMenuHtmlElement = document.getElementById("page-menu");
    pageMenuHtmlElement.innerHTML = menuInnerHtml;
    pageMenuHtmlElement.classList.add("navbar", "navbar-dark", "navbar-expand-lg", "col-lg-2", "flex-lg-column", "bg-info");
    arr=document.getElementById("toggler").addEventListener("click", changeSize);
    elem=document.getElementsByClassName('navbar')[0];
    if(screen.width>400 && screen.width<1000)
    elem.style.height='10vh';
    else if(screen.width<1000)
    elem.style.height='8vh';


  
};
