import express from 'express'
;
const router = express.Router();
router.post("/", register);
router.post("/login", login);
export default router;