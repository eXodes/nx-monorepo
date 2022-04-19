import { Module } from "@nestjs/common";
import { AppNameController } from "./app-name.controller";
import { AppNameService } from "./app-name.service";

@Module({
  controllers: [AppNameController],
  providers: [AppNameService],
})
export class AppNameModule {}
