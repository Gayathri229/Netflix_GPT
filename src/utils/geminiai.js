
const { GoogleGenerativeAI } = require("@google/generative-ai");
export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_BARD_KEY);
