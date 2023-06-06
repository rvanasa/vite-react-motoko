import { Backend } "../Backend";

let backend = await Backend();

await backend.inc();

assert (await backend.get()) == 1;
