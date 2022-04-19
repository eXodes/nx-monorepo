import { Controller, Get } from "@nestjs/common";
import { AppNameService } from "./app-name.service";

@Controller("app-name")
export class AppNameController {
  constructor(private readonly appNameService: AppNameService) {}

  @Get()
  get() {
    return this.appNameService.get();
  }
}
