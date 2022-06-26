const { Router } = require('express');
const { getTypeApi } = require("../midleware/TypeControl")



const router = Router()

router.get('/types', async (req, res) => {
    const resultType = await getTypeApi()
    res.json(resultType)
})

module.exports = router;







