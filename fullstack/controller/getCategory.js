import { categoryData } from '../init/data.js'

export const getCategory = (req, res) => {
    res.render('category', { data: categoryData })
}