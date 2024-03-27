import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className=" rounded-lg hero lg:h-[480px] bg-base-200 mb-[100px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className="lg:h-[300px] h-[200px]" src="https://i.ibb.co/VtP0Fzf/pngwing-1.png" />
    <div className=" lg:text-left text-center">
      <h1 className="lg:text-5xl mb-9 text-3xl lg:w-[700px] font-bold">Books to freshen up your bookshelf</h1>
      <Link to="/listedBook/readBook">
      <button className="btn btn-primary" >View The List</button>

      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;