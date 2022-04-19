import { Test, TestingModule } from "@nestjs/testing";
import { AppNameController } from "./app-name.controller";
import { AppNameService } from "./app-name.service";

describe("AppNameController", () => {
  let controller: AppNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppNameController],
      providers: [AppNameService],
    }).compile();

    controller = module.get<AppNameController>(AppNameController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return app name", () => {
    expect(controller.get()).toEqual({
      app_name: "NX-powered Applications",
    });
  });
});
