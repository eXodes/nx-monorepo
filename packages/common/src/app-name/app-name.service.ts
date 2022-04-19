import { Injectable } from "@nestjs/common";

@Injectable()
export class AppNameService {
  get(): { app_name: string } {
    return {
      app_name: "NX-powered Applications",
    };
  }
}
