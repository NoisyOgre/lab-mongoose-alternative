const router = require("express").Router();
const Celebrity = require("../models/celebrity.model");


router.get("/celebrity", async (req, res) => {
    const celebrity = await Celebrity.find();

    console.log(celebrity);
    res.render("celebrity/celebrity-list", {celebrity})
});

router.get("/celebrity/:celebrityId", async (req, res) => {
    const celebrityId = await Celebrity.findById(req.params.celebrityId)
    res.render("celebrity/celebrity-details", celebrityId)
});

router.get("/create-celebrity", async (req, res) => {
    const celebrity = await Celebrity.find()
    res.render("celebrity/celebrity-create", {celebrity})
});
router.post("/create-celebrity", async (req, res) => {


    const { name, occupation, catchPhrase} = req.body;
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrity");
});

router.post("/celebrity/:celebrityId/delete", async (req, res) => {
        await Celebrity.findByIdAndRemove(req.params.celebrityId);
       res.redirect("/celebrity/");
   });

module.exports = router;