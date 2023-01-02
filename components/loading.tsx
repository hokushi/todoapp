import ReactLoading from "react-loading";

const Example = () => <ReactLoading type="spin" />;

const Loading = () => {
  return (
    <div className="w-full h-screen bg-black">
      <div className="h-screen w-screen flex justify-center items-center">
        <Example></Example>
      </div>
    </div>
  );
};

export default Loading;
