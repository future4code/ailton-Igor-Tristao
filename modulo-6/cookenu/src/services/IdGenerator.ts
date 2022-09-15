import { v4 } from "uuid";

export class IdGenerator {
  createId(): string {
    return v4();
  }
}

export default IdGenerator;
