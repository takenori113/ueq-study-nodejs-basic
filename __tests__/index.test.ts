import { describe, test, expect, vi } from "vitest";

import { totalmem } from "os";
import { readFile, cp } from "fs/promises";

import { getTotalMemoryInMB } from "../script_1";
import { main as main2 } from "../script_2";
import { main as main3 } from "../script_3";
import * as helloWorld from "../hello_world";

describe("Node.jsの基本問題1", () => {
  test("問題1の結果が正しい", () => {
    const totalMemory = totalmem();
    const totalMemoryInMB = Math.floor(totalMemory / (1024 * 1024));
    expect(getTotalMemoryInMB()).toEqual(totalMemoryInMB);
  });
});

describe("Node.jsの基本問題2", () => {
  test("問題2の結果が正しい", async () => {
    const spy = vi
      .spyOn(global.console, "log")
      .mockImplementation((args) => args);
    await main2();
    const answer = await readFile("./seiseki.csv", "utf-8");
    expect(spy).toHaveLastReturnedWith(answer);
  });
  test("csvの内容が変更されても結果が正しい", async () => {
    await cp("./__tests__/seiseki_other.csv", "./seiseki.csv", { force: true });
    const spy = vi
      .spyOn(global.console, "log")
      .mockImplementation((args) => args);
    await main2();
    const answer = await readFile("./seiseki.csv", "utf-8");
    expect(spy).toHaveLastReturnedWith(answer);
    await cp("./__tests__/seiseki.csv", "./seiseki.csv", { force: true });
  });
});

describe("Node.jsの基本問題3", () => {
  test("mainでsayHelloWorldが呼ばれる", () => {
    const mockSayHelloWorld = vi.spyOn(helloWorld, "sayHelloWorld");
    main3();
    expect(mockSayHelloWorld).toHaveBeenCalled();
  });
});
