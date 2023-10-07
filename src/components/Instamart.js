import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  let [toggleHide, setToggleHide] = useState(false);
  return (
    <>
      <h1 className="font-bold text-lg">{title}</h1>
      {!toggleHide && isVisible ? (
        <button
          className=" w-20 rounded-lg px-2 border-2 border-gray-500 bg-green-200"
          onClick={() => {
            setToggleHide(true);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="w-20 rounded-lg px-2 border-2 border-gray-500"
          onClick={() => {
            setIsVisible();
            setToggleHide(false);
          }}
        >
          Show
        </button>
      )}
      {!toggleHide && isVisible && <p>{description}</p>}
    </>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <>
      <div className="p-4 m-4 flex flex-col justify-center align-middle">
        <Section
          className="inline-block"
          title={"About Instamart"}
          key={"11"}
          description={
            "Instamart is Swiggy's cloud grocery initiative. It promises to deliver your orders within 45 minutes. It is functional from 7 am to 12 am."
          }
          isVisible={visibleSection === "about"}
          setIsVisible={() => setVisibleSection("about")}
        />

        <Section
          className="inline-block"
          title={"Team Instamart"}
          key={"22"}
          description={"This is Team Instamart - 👩‍🌾👨‍🌾👩‍🍳👨‍🍳👩‍🏭👨‍🏭👨‍🔬"}
          isVisible={visibleSection === "team"}
          setIsVisible={() => setVisibleSection("team")}
        />

        <Section
          className="inline-block"
          title={"Careers Instamart"}
          key={"33"}
          description={
            "Careers At Instamart ✨ - Stay Tuned! Openings will be posted here. "
          }
          isVisible={visibleSection === "career"}
          setIsVisible={() => setVisibleSection("career")}
        />
      </div>
    </>
  );
};
export default Instamart;
