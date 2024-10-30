import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
});

fastify.get('/', async () => {
  return 'Hey, listen! 🧚';
})

const start = async () => {
  try {
    await fastify.listen({ port: 8080 });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();