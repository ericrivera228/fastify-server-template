import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
});

fastify.get('/', async () => {
  return 'Hey, listen! 🧚';
})

const start = async () => {
  try {
    await fastify.listen({ port: +process.env.PORT!, host: process.env.HOST });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();