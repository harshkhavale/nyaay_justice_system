import mongoose from "mongoose";
const caseSchema = mongoose.Schema({
  caseId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
    required: true,
  },
  
  contact: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  stateCode: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  caseNumberRecord:{
    type: String,
    required: true,
    unique: true,
}
  
},{
    timestamps:true
});
const Case = mongoose.model("Case",caseSchema);
export default Case;