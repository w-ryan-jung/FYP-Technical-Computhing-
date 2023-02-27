import { Schema, model } from "mongoose";
import { useVirtualId } from "../db/database.js";

const jobPostSchema = new Schema(
  {
    description: {
      title: { type: String, required: true },
      email: { type: String, required: true },
      logo: String,
      company: { type: String, required: true },
      address: {
        country: { type: String, required: true },
        zipCode: { type: String, required: true },
        state: { type: String, required: true },
        city: { type: String, required: true },
      },
      salary: { type: String, required: true },
      jobType: { type: String, required: true },
      posted: { type: Date, required: true },
      about: { type: String, required: true },
      responsibilities: [{ responsibility: String }],
      skills: [{ skill: String }],
      applicants: [],
    },
  },
  { timestamps: true }
);

useVirtualId(jobPostSchema);
const JobPost = model("JobPost", jobPostSchema);
export default JobPost;
