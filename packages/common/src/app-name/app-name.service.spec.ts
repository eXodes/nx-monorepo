import { Test, TestingModule } from "@nestjs/testing";
import { AppNameService } from "./app-name.service";

describe("AppNameService", () => {
  let service: AppNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppNameService],
    }).compile();

    service = module.get<AppNameService>(AppNameService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return app name", () => {
    expect(service.get()).toEqual({
      app_name: "NX-powered Applications",
    });
  });
});
