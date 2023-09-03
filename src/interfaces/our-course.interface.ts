import { Course } from '@interface/course.interface';

type VideoCourse = {
  total: number
  complete: number
}

export interface OurCourse extends Course {
  lecture: string
  video: VideoCourse
}
