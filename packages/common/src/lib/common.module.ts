import { Module } from "@nestjs/common";
import { AppNameModule } from "../app-name/app-name.module";

@Module({
  imports: [AppNameModule],
})
export class CommonModule {}
