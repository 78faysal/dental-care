import Swal from "sweetalert2";
import { imageUpload } from "../../../Hooks/imageUpload";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";

const AddDoctor = () => {
    const handleFormSubmit = async e => {
        e.preventDefault();

        const form = e.target;
        const photoFile = form.photo.files[0];
        const photoData = await imageUpload(photoFile);
        const photo = photoData.display_url; 
        const name = form.name.value;
        const location = form.location.value;
        const about = form.about.value;
        const specialty = form.specialty.value;

        const doctorsData = {name, location, image:photo, aboutMe: about, services: [specialty]};
        
        
        axiosSecure.post('/doctors', doctorsData)
        .then(res => {
          if(res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "New doctor added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
          }
        })
    }
  return (
    <div>
      <div className=" card shrink-0 w-full max-w-lg mx-auto border border-4 border-double bg-base-100">
        <form className="card-body" onSubmit={handleFormSubmit}>
          <h2 className="text-2xl font-bold text-center">Add Doctor</h2>
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                name="photo"
                type="file"
                placeholder="Photo"
                className="input input-bordered p-2 w-full"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Location"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select className="input input-bordered w-full" required name="specialty" id="">
                <option aria-readonly defaultChecked value="">Select Specialty</option>
                <option value="Oral Surgery">Oral Surgery</option>
                <option value="Pediatric Dental">Pediatric Dental</option>
                <option value="Cavity Protection">Cavity Protection</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Cosmetic Dentisty">Cosmetic Dentisty</option>
                <option value="Teeth Orthodontics">Teeth Orthodontics</option>
              </select>
            </div>
          </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">About</span>
              </label>
              <textarea
                name="about"
                type="text"
                placeholder="About Doctor"
                className="input input-bordered h-24 pt-2"
                required
              />
            </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-green-400 text-black"
              type="submit"
              value="Add Doctor"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
