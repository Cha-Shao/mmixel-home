import { Video } from "@/types/videos";
import { Schema, model, models, Document } from "mongoose";

const videoSchema = new Schema({
  title: String,
  desc: String,
  cover: String,
  link: String,
})

const videosModel = models.Video || model<Video & Document>('Video', videoSchema)

export default videosModel
