
import React,{ useState } from "react";
import Layout, { siteTitle } from '../components/layout'



export default  function  ImageGenerator() {
    const { Configuration, OpenAIApi } = require("openai");
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('Generate a cool image')


  const promptit =()=> {

setPrompt('')
  }

  const generateImage = async () => {
    try {
      // Set your API key here
      const configuration = new Configuration({
        apiKey: process.env.NEXT_PUBLIC_OPEN_API,
      });
      const openai = new OpenAIApi(configuration);
      // Make the call to the OpenAI API
      const response = await openai.createImage({
        model: 'image-alpha-001',
        prompt: prompt,
        size: '512x512',
      });
//  await console.log(response)
      // Set the generated image as the state of the component
      await setImage(response.data.data[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
<Layout> 
    <div>
           <input placeholder="Generate a cool prompt" onChange={(e) =>{setPrompt(e.target.value)}}></input> 
           <button onClick={generateImage}>Generate Image!</button>
           </div>
      {image && <img src={image} alt="Generated image" />}
      </Layout>
  );
}
