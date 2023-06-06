import { Backend } "../Backend";

let backend = await Backend();

assert (await backend.get()) == 0;
