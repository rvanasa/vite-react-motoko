import { Backend } "../Backend";

let backend = await Backend();

await backend.add(123);

assert (await backend.get()) == 123;
