import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResultServiceBase } from "./base/result.service.base";

@Injectable()
export class ResultService extends ResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
