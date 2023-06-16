import { Member } from "@/types/members";
import { Document, Schema, model, models } from "mongoose";

const memberSchema = new Schema({
  avatar: String,
  name: String,
  brief: String,
  content: String,
  link: String,
})

const membersModel = models.Member || model<Member & Document>('Member', memberSchema)

export default membersModel
