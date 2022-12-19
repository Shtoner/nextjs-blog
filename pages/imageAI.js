
import React,{ useState } from "react";
import Layout, { siteTitle } from '../components/layout'



export default  function  ImageGenerator() {
    const { Configuration, OpenAIApi } = require("openai");
  const [image, setImage] = useState(null);

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
        prompt: 'Generate a cool image',
        size: '512x512',
      });
 await console.log(response)
      // Set the generated image as the state of the component
      await setImage(response.data.data[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
<Layout> 
         <button onClick={generateImage}>Generate Image</button>
      {image && <img src={image} alt="Generated image" />}
      </Layout>
  );
}
