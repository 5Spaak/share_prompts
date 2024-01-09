import Feed from "@components/Feed";


const Home = () => {
  return (
  
    <section className="w-full flex-center flex-col">
        <h1 className="head_text test-center" >
            Discover & Share
        </h1>
        <br className="max-md:hidden"/>
        <h2 className="head_text test-center">
        
            <span className="text-center orange_gradient ">AI-Powered Prompts</span>

        </h2> 
        <p className="desc text-center">
            Promptopia is an open-source AI prompting tool for modern world discover, create and share creative prompts
        </p>
        <Feed/>
    </section>
   
    
  );
}

export default Home;
