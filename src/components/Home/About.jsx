import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-base-100 shadow-xl my-8">
      <div className="md:w-1/2 relative" >
        <img className="rounded w-5/6" src={person} alt="Movie" />
        <img className="rounded w-1/2 absolute right-5 bottom-10 p-2  bg-slate-100" src={parts} alt="Movie" />
      </div>
      <div className="space-y-4 md:w-1/2 p-8">
        <h2 className="card-title text-orange-600">About Us</h2>
        <h1 className="text-5xl font-bold w-2/3">
          We are qualified & of experience in this field.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          recusandae numquam aliquid reiciendis sit quidem ratione, tempora
          consectetur maxime amet fugiat aperiam atque doloremque temporibus!
          Nam quisquam totam maxime laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo
          odio veritatis enim illo quos quidem sit officia earum ipsa?
        </p>
        <div>
          <button className="btn btn-secondary">Get More Details</button>
        </div>
      </div>
    </div>
  );
};

export default About;
