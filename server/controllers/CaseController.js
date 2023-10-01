import Case from "../models/case";
export const createCase = async (req, res) => {
  try {
    const {
      caseId,
      name,
      status,
      aadhar,
      contact,
      state,
      stateCode,
      district,
      caseNumberRecord,
    } = req.body;
    const newCase = new Case({
        caseId,
        name,
        status,
        aadhar,
        contact,
        state,
        stateCode,
        district,
        caseNumberRecord,
      
    });
    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
