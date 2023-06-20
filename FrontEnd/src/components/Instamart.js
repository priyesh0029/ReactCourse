import { useState } from "react";

const Section = ({ title, description,isVisible,setIsVisible }) => {
  
  return (
    <div className="border border-black p-2 m-2 shadow-lg">
      <h1 className="font-bold text-xl">{title}</h1>
      {!isVisible ? (
        <>
         <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(true)}
        >
          show
        </button>
        </>
       
      ) : (
        <button
        className="cursor-pointer underline"
          onClick={() => setIsVisible(false)}
        >
          hide
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("");
  
  return (
    <div>
      <h1 className="font-bold  text-center text-4xl m-10">Instamart</h1>

      <Section
        title={"About Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32."
        }
        isVisible={isVisibleSection === 'about'}
        setIsVisible={()=>{ isVisibleSection === "" ? (setIsVisibleSection("about")) : (setIsVisibleSection(""))}}
      />

      <Section
        title={"Team Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32."
        }
        isVisible={isVisibleSection === "team"}
        setIsVisible={()=>{ isVisibleSection === "" ? (setIsVisibleSection("team")) : (setIsVisibleSection(""))}}
      />

      <Section
        title={"Career"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32."
        }
        isVisible={isVisibleSection === "career"}
        setIsVisible={()=>{ isVisibleSection === "" ? (setIsVisibleSection("career")) : (setIsVisibleSection(""))}}
      />
    </div>
  );
};

export default Instamart;
