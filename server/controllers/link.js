import Link from "../models/Link.js";

const postLink = async (req, res) => {
  const { target, title, slug } = req.body;
  const link = new Link({
    target,
    title,
    slug,
  });
  const savedLink = await link.save();
  res.json({
    message: "Link saved",
    data: savedLink,
    message : 'Link created successfully'
  });
};

const getSlugredirect = async (req , res)=>{
 const {slug} = req.params;
 const link = await Link.findOne({slug});
 if (!link) {
  res.json({
    success : false,
    message : 'Link not found'
  })
 }
 link.view = link.view + 1;
 await link.save();
 res.redirect(link.target);
}


export { postLink , getSlugredirect};
