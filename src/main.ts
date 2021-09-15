import { exit } from "process";

import { ArgumentsReader } from "./core/arguments-reader";
import { DataParser } from "./core/data-parser";
import { Location } from "./core/location";

const execute = async () => {
  try {
    const argsReader = new ArgumentsReader();
    const { longitude, latitude, url } = argsReader.process();

    const parser = new DataParser(url);

    const results = await parser.process(new Location(latitude, longitude));

    results.forEach((result) => {
      console.log(`${result.shop.name},${result.distance}`);
    });
  } catch (e) {
    console.error(`[ERROR]: ${e.message}`);
    exit(-1);
  }
};

execute();
