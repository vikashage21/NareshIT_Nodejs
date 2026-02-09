//menu data

const MENU = [
    {
        name: "category",
        link: "/api/category"
    }, {
        name: "product"
        ,
        link: "/api/product"
    }
]


export const getUsers = (req, res) => {
    res.render('index', { title: "hello this is server side", MENU })
}


