
import React,{ useState } from "react";
import Layout, { siteTitle } from '../components/layout'
import utilStyles from "../styles/utils.module.css"


export default  function  ImageGenerator() {
    const { Configuration, OpenAIApi } = require("openai");
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('Generate a cool image')
  const [isLoading, setIsloading] = useState(false)


const setTrue=()=>{
    setIsloading(true)
}
const setFalse=()=>{
    setIsloading(false)
}
 function LoadingSpinner() {
    return (
    //   <div className={utilStyles.spinner}>
        <div className={utilStyles.loadingSpinner}>
      </div>
    //   </div>
    );
  }

  const generateImage = async () => {
    
    
    try {
    setTrue()

      // Set your API key here
      const configuration = new Configuration({
        apiKey: process.env.NEXT_PUBLIC_OPEN_API,
      });
      const openai = new OpenAIApi(configuration);
      // Make the call to the OpenAI API
      const response = await openai.createImage({
        model: 'image-alpha-001',
        prompt: prompt,
        size: '1024x1024',
      });
//  await console.log(response)
      // Set the generated image as the state of the component
      await setImage(response.data.data[0].url);

    } catch (error) {
      console.error(error);
    }
    setFalse()

  };

  return (
<Layout> 
    <div className={utilStyles.body}>
           <input placeholder="Generate a cool image" onChange={(e) =>{setPrompt(e.target.value)}}></input> 
           <button  className={utilStyles.button} onClick={generateImage}>Generate Image!</button>
       {isLoading?<LoadingSpinner/> :image &&<img src={image} alt="Generated image" />}
      
      </div>
      </Layout>
  );
}
