import Link from "../models/Link.js";
import User from '../models/User.js'
const postLink = async (req, res) => {
  const { target, title, slug , user} = req.body;
  const link = new Link({
    target,
    title,
    slug,
    user
  });
  const savedLink = await link.save();
  res.json({
    success: true,
    data: savedLink,
    message: "Link created successfully",
  });
};

const getSlugredirect = async (req, res) => {
  const { slug } = req.params;
  const link = await Link.findOne({ slug });
  console.log(link);
  if (!link) {
    res.status(404).json({
      success: false,
      message: "Link not found",
    });
  }
  link.view = link.view + 1;
  await link.save();

  res.redirect(link.target);
};

const getLinks = async (req, res) => {
  try {
    const { userId } = req.query;
    const user = await User.findById(userId);
    const links = await Link.find({ user : userId }).sort({ createdAt: -1 });

    res.json({
      message: "All links featched successfully",
      success: true,
      data: links,
    });
  } catch(e) {
    res.json({
      success: false,
      message: e.message
    });
  }
};
export { postLink, getSlugredirect, getLinks };
