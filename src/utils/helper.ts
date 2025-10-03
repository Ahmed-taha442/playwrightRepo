import * as fs from "fs";
import * as yaml from "yaml";

export function readYamlFile(filePath: string): any {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = yaml.parse(fileContents);
  return data;
}
