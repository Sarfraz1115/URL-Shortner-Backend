const { nanoid } = require('nanoid');
const URL = require("../models/usermodel");
async function Urlshortner(req, res) {
    const body = req.body;

    if (!body || !body.url) { // Check if body exists AND has url
        return res.status(400).json({ message: "URL is required" });
    }

    const ShortID = nanoid(8);
    await URL.create({
        ShortId: ShortID,
        OriginalUrl: body.url,
        visitHistory: [],
    })
    return res.render("home", { id: ShortID });

}

async function RedirectURL(req, res) {
    // console.log("redirecturl");
    const shortid = req.params.ShortID;
    // console.log("shortid ", ShortID);

    const entry = await URL.findOneAndUpdate(
        { ShortId: shortid },
        {
            $push: {
                visitHistory: { timestamps: Date.now() }
            }
        });
    if (!entry) {
        return res.status(404).json({ message: "Short URL not found" });
    }
    res.redirect(entry.OriginalUrl);
}

async function handleanalytics(req, res) {
    const shortid = req.params.ShortID;
    const findshortid = await URL.findOne({ShortId: shortid});
    if(!findshortid){
        return res.status(404).json({message: "short url not found"})
    }
    return res.json({totalCLicks: findshortid.visitHistory.length, analytics: findshortid.visitHistory})
}


module.exports = { Urlshortner, RedirectURL, handleanalytics };