import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  get(): { message: string } {
    return {
      message: "Success",
    };
  }
}
