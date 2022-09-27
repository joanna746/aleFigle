
{
    'use strict';
    const select = {
        templateOf: {
            menuProduct: '#template-menu-product',
        },
        containerOf: {
            menu: '#product-list',
            cart: '#cart',
            pages: '#pages',
        },
    };
    const templates = {
        menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
    };
    class Product {
        constructor(id, data) {
            const thisProduct = this;
            thisProduct.id = id;
            thisProduct.data = data;


            thisProduct.renderInMenu();
            console.log('new Product:', thisProduct);
        }

        renderInMenu() {
            const thisProduct = this;
            const generatedHTML = templates.menuProduct(thisProduct.data);
            // eslint-disable-next-line no-undef
            thisProduct.element = utils.createDOMFromHTML(generatedHTML);
            const menuContainer = document.querySelector(select.containerOf.menu);
            menuContainer.appendChild(thisProduct.element);
        }
    }

    const app = {
        initPages: function () {
            const thisApp = this;

            thisApp.pages = document.querySelector(select.containerOf.pages).children;
            
        },

        initMenu: function () {
            const thisApp = this;

            console.log('thisApp.data', thisApp.data);
            for (let productData in thisApp.data.products) {
                new Product(productData, thisApp.data.products[productData]);
            }
        },
        initData: function () {
            const thisApp = this;

            // eslint-disable-next-line no-undef
            thisApp.data = dataSource;
        },

        init: function () {
            const thisApp = this;


            thisApp.initData();
            thisApp.initMenu();
            thisApp.initPages();
        },
    };

    app.init();

}
