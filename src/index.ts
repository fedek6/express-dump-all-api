import Fastify from "fastify";
import * as dotenv from "dotenv";
import formbody from "@fastify/formbody";
import multipart from "@fastify/multipart";
import { color } from "console-log-colors";
import { format, createCounter, fileLog, getCurrentDateTime } from "./helpers";
import * as path from "path";
import { cwd } from "process";

dotenv.config();

const LOG_PATH = path.join(cwd(), process.env.LOG_PATH ?? "./logs");

const fastify = Fastify();
fastify.register(formbody);
fastify.register(multipart);

const counter = createCounter();

fastify.all("*", async (request, reply) => {
  reply.type("application/json").code(200);
  const count = counter();
  const { remoteAddress } = request.socket;

  fileLog(
    `---\n[${getCurrentDateTime()}]\nIncoming data ${count} from ${remoteAddress}`,
    LOG_PATH
  );

  console.log(color.bold.bgGreen(`👃 Incoming request: ${count}`));
  console.log(color.red.underline("Headers"));
  console.log(color.green(format(request.headers)));
  console.log(color.red.underline("Body"));
  console.log(color.green(format(request.body)));

  fileLog(`Body:\n${format(request.body)}`, LOG_PATH);

  console.log(color.red.underline("Query params"));
  console.log(color.green(format(request.query)));

  fileLog(`Query:\n${format(request.query)}`, LOG_PATH);

  console.log(color.red.underline("Info"));
  console.log(
    color.green(
      format({
        url: request.url,
        method: request.method,
        ip: request.ip,
      })
    )
  );
  console.log(color.bold.bgGreen(`🏁 End of request: ${count}`));

  return request.body;
});

fastify.listen({ port: +process.env.PORT! }, (err, address) => {
  if (err) throw err;
  console.log(`🙉 Server is listening on ${address}`);
});
