import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";
import { OPENAI_KEY2 } from "./constants";


const openai = new OpenAI({
  apiKey: OPENAI_KEY2,
  dangerouslyAllowBrowser: true,
});

export default openai;
